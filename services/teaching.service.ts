import type {ApiResponse} from "~/models/ApiResponse";
import {FetchApi} from "~/utilities/CustomFetchApi";
import type {TeachingRequestCommand} from "~/models/teaching/teachingRequest";

export function CreateTeachingRequest(command:TeachingRequestCommand):Promise<ApiResponse<undefined>>{
    //@ts-ignore
    return FetchApi('/PrivateTeaching',{
        method:'POST',
        body:command
    });
}