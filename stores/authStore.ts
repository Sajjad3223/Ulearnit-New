import {defineStore} from "pinia";

export const useAuthStore = defineStore('Auth Store',()=>{
    const showAuthModal = ref(false);
    const authState = ref('login');

    const setAuthState = (state:'login' | 'register' | 'forgetPassword')=>{
        authState.value = state;
    }

    return{
        showAuthModal,
        authState,
        setAuthState
    }
})