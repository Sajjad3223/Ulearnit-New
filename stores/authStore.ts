import {defineStore} from "pinia";
import type {LoginResultDto} from "~/models/auth/loginResultDto";
import {RefreshToken} from "~/services/auth.service";

export const useAuthStore = defineStore('Auth Store',()=>{
    const showAuthModal = ref(false);
    const authModalTitle = ref('');
    const authState = ref('login');
    const callBackFunctionAfterLogin:Ref<Function | null> = ref(null);
    const AUTH_COOKIE_NAME = "u-access-token";
    const getAccessToken = () => {
        const cookie = useCookie(AUTH_COOKIE_NAME, {
            expires: new Date(new Date().setDate(new Date().getDate() + 30)),
        });
        return cookie.value;
    };
    const isLoggedIn = computed(() => {
        const cookie = getAccessToken();
        return cookie != null && cookie != "" && cookie != undefined;
    });
    const setToken = async (tokenResult: LoginResultDto) => {
        const cookie = useCookie(AUTH_COOKIE_NAME, {
            expires: new Date(new Date().setDate(new Date().getDate() + 30)),
        });
        cookie.value = JSON.stringify(tokenResult);
        showAuthModal.value = false;
        setTimeout(() => {
            if (
                callBackFunctionAfterLogin.value != null
            ) {
                callBackFunctionAfterLogin.value();
            }
        }, 300);
        setTimeout(async ()=>{
            //await cartStore.transferOrder();
        },3000)
    };
    const refreshToken = async () => {
        const cookie = useCookie(AUTH_COOKIE_NAME, {
            expires: new Date(new Date().setDate(new Date().getDate() + 30)),
        });
        const cookieData:LoginResultDto = JSON.parse(cookie.value!);
        const loginResult = await RefreshToken(cookieData.refreshToken);
        await setToken(loginResult.data);
    };
    const router = useRouter();
    const logOut = async () => {
        const cookie = useCookie(AUTH_COOKIE_NAME);
        cookie.value = null;
        await router.push('/');
        location.reload();
    };

    const setAuthState = (
        step:
            | "login"
            | "register"
            | "forgotPassword"
            | "confirmForgetPassword"
            | "changePasswordForgetPassword"
    ) => {
        authState.value = step;
        switch (step){
            case "register": authModalTitle.value = 'ثبت نام'; break;
            case "login": authModalTitle.value = 'ورود'; break;
            case "forgotPassword": authModalTitle.value = 'فراموشی رمز عبور'; break;
            case "confirmForgetPassword": authModalTitle.value = 'تایید کد ارسال شده'; break;
            case "changePasswordForgetPassword": authModalTitle.value = 'تغییر رمز عبور'; break;
        }
    };

    return{
        showAuthModal,
        authState,
        isLoggedIn,
        getAccessToken,
        setToken,
        callBackFunctionAfterLogin,
        setAuthState,
        refreshToken,
        logOut
    }
})