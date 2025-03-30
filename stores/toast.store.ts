import type {ToastType} from "~/composables/useToast";
import {getRandomId} from "~/utilities/customUtilities";

export interface ToastData{
    id:number;
    message:string;
    type:ToastType;
    duration:number;
    func?:Function | null;
}

export const useToastStore = defineStore("toast",()=> {
    const messages:Ref<ToastData[]> = ref([]);
    const handlers:Ref<{id:number,func:Function | null}[]> = ref([]);

    const addToastMessage = async (data:ToastData)=>{
        data.id = getUniqueId();
        messages.value.push(data);
        if(data.duration > 0)
            setTimeout(()=>{
                messages.value = [...messages.value].filter(m=>m.id != data.id);
            },data.duration);
        handlers.value.push({id:data.id,func:data.func ?? null});
    }

    const callHandler = (id:number)=>{
        const handler = handlers.value.find(h=>h.id == id);
        if(handler)
            handler.func!();
        removeToast(id);
    }

    const removeToast = (id:number)=>{
        messages.value = [...messages.value].filter(m=>m.id != id);
    }

    const getUniqueId = ():number =>{
        let id = 0;
        do {
            id = getRandomId();
        }
        while(messages.value.some(m=>m.id == id));

        return id;
    }

    return {
        messages,
        addToastMessage,
        removeToast,
        callHandler
    }
});