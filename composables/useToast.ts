import {useToastStore} from "~/stores/toast.store";


export enum ToastType {
    info = "info",
    success = "success",
    warning = "warning",
    error = "error",
}
export const useToast = () => {
    const showToast = (
        message: string="عملیات با موفقیت انجام شد",
        type: ToastType = ToastType.success,
        duration: number = 3000,
        toast:boolean = false,
        confirmedFunc?:Function | null
    ) => {
        useToastStore().addToastMessage({
            id:0,
            message,
            type:type,
            duration,
            func:confirmedFunc
        });
        return ;
    };

    return { showToast };
};