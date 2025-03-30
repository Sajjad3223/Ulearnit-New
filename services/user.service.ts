import {FetchApi} from "~/utilities/CustomFetchApi";
import type {ApiResponse} from "~/models/ApiResponse";
import type {UserDto} from "~/models/user/userDto";
import type {EditUserViewModel} from "~/models/user/editUserViewModel";
import type {ChangePasswordViewModel} from "~/models/user/changePasswordViewModel";
import type {ChargeWalletViewModel} from "~/models/user/ChargeWalletViewModel";
import type {WalletFilterParams, WalletFilterResult} from "~/models/user/walletFilterResult";


export function GetCurrentUser():Promise<ApiResponse<UserDto>>{
   //@ts-ignore
    return FetchApi('/user/current',{method:'GET'});
}

export function EditUser(command:EditUserViewModel):Promise<ApiResponse<undefined>>{
    //@ts-ignore
    return FetchApi('/User/edit',{
        body: command,
        method:'PUT',
    });
}

export function ChangePassword(command:ChangePasswordViewModel):Promise<ApiResponse<undefined>>{
   //@ts-ignore
    return FetchApi('/user/changePassword',{
        body: command,
        method:'PUT',
    });
}

export function SetAvatar(avatar:FormData):Promise<ApiResponse<undefined>>{
   //@ts-ignore
    return FetchApi('/user/setAvatar',{
        body: avatar,
        method:'PUT',
    });
}

export function ChargeWallet(viewModel:ChargeWalletViewModel):Promise<ApiResponse<string>>{
   //@ts-ignore
    return FetchApi('/user/ChargeWallet',{
        body: viewModel,
        method:'POST',
    });
}
export function GetUserWallets(filterParams:WalletFilterParams):Promise<ApiResponse<WalletFilterResult>>{
   //@ts-ignore
    return FetchApi('/user/Wallets',{
        method:'GET',
        params: filterParams,
    });
}
export function GetCash():Promise<ApiResponse<number>>{
   //@ts-ignore
    return FetchApi('/user/Cash',{
        method:'GET',
    });
}