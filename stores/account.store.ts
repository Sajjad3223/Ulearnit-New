import type {UserDto} from "~/models/user/userDto";
import {ApiStatusCode} from "~/models/ApiResponse";
import {GetCurrentUser} from "~/services/user.service";
import {GetUserNotifications} from "~/services/notification.service";
import type {NotificationDto} from "~/models/notification/notificationDto";

export const useAccountStore = defineStore('account',()=> {
    const currentUser: Ref<UserDto | null> = ref(null);
    const initLoading = ref(true);
    const unseenNotifs: Ref<NotificationDto[] | null> = ref([]);

    const isAdmin = computed(()=>{
        return currentUser.value?.roles.some(r=>r.roleTitle === 'ادمین');
    })
    const isMaster = computed(()=>{
        return currentUser.value?.roles.some(r=>r.roleTitle === 'مدرس');
    })

    const getUserCookie = ()=>{
        const data = useCookie("u-user-data",{
            watch:'shallow',
            expires: new Date(new Date().setDate(new Date().getDate() + 30)),
        })
        return data.value;
    }
    const setUserCookie = (userData:UserDto)=>{
        const cookie = useCookie("u-user-data",{
            expires: new Date(new Date().setDate(new Date().getDate() + 30)),
        });
        //@ts-ignore
        cookie.value = userData;
    }

    const authStore = useAuthStore();
    const initData = async () => {
        initLoading.value = true;

        if(getUserCookie() == null || getUserCookie() == undefined) {
            const userData = await GetCurrentUser();
            if (userData.isSuccess) {
                currentUser.value = userData.data!;
                setUserCookie(userData.data);

                const notifsResult = await GetUserNotifications({isSeen: false, pageId: 1, take: 20});
                if (notifsResult.isSuccess) {
                    unseenNotifs.value = notifsResult.data?.data ?? [];
                }

                /*if(userData.data?.wallets == null || userData.data.wallets.length <= 0)
                    currentUser.value.wallets = [];*/

            } else if (userData.metaData.appStatusCode == ApiStatusCode.UnAuthorize) {
                authStore.callBackFunctionAfterLogin = initData;
                await authStore.refreshToken()
            }
        }else{
            //@ts-ignore
            currentUser.value = getUserCookie();
        }

        initLoading.value = false;
    };

    return{
        initData,
        currentUser,
        initLoading,
        isAdmin,
        isMaster,
        unseenNotifs,
    }
})