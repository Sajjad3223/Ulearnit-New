//@ts-nocheck
import {$fetch, FetchError, type FetchOptions} from "ofetch";
import {type ApiResponse, ApiStatusCode} from "~/models/ApiResponse";
import {useAuthStore} from "~/stores/authStore";
import {ApiUrl} from "~/utilities/ApiUrls";
import type {LoginResultDto} from "~/models/auth/loginResultDto";

export async function FetchApi<T>(
    url: string,
    config: FetchOptions = {},
): Promise<ApiResponse<T> | { metaData: { message: any; appStatusCode: any }; data: null; isSuccess: boolean }>
{
    config = {
        baseURL:`${ApiUrl}/api`,
        ...config
    };

    const authStore = useAuthStore();
    if(!config.headers)
    {
        config.headers = {};
    }
    if(authStore && authStore.isLoggedIn)
    {
        const cookie = authStore.getAccessToken();
        config.headers['Authorization'] = `Bearer ${cookie.token}`;
    }

    return $fetch<ApiResponse<T>>(url,config)
        .then(res=>{
            return res;
        })
        .catch((e:FetchError) =>{
            return {
                data:null,
                isSuccess:false,
                metaData:{
                    message: e.response?._data?.MetaData?.Message ?? "مشکلی در عملیات رخ داده است!",
                    appStatusCode: e.response?._data?.MetaData?.ApiStatusCode ?? ApiStatusCode.ServerError,
                },
            }
    });
}