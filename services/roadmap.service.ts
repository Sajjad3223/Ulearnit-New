import type {ApiResponse} from "~/models/ApiResponse";
import type {RoadmapFilterParams, RoadmapFilterResult, RoadmapPostDto} from "~/models/roadmap/roadmapDto";
import {FetchApi} from "~/utilities/CustomFetchApi";
import type {CreateRoadmapPostCommand} from "~/models/roadmap/createRoadmapPostCommand";
import type {EditRoadmapPostViewModel} from "~/models/roadmap/editPostViewModel";
import type {RegisterRoadmapWriterViewModel} from "~/models/roadmap/registerWriterViewModel";

export function AmIWriter():Promise<ApiResponse<boolean>>{
    //@ts-ignore
    return FetchApi('/Roadmap/AmIWriter',{
        method:'GET',
    });
}
export function GetRoadmapPosts():Promise<ApiResponse<RoadmapPostDto>>{
    //@ts-ignore
    return FetchApi('/Roadmap',{
        method:'GET',
    });
}
export function GetRoadmapPostsByFilter(filterParams:RoadmapFilterParams):Promise<ApiResponse<RoadmapFilterResult>>{
    //@ts-ignore
    return FetchApi('/Roadmap/search',{
        method:'GET',
        params:filterParams
    });
}
export function GetUserRoadmapPosts():Promise<ApiResponse<RoadmapPostDto>>{
    //@ts-ignore
    return FetchApi('/Roadmap/user',{
        method:'GET',
    });
}
export function GetRoadmapPost(postId:Number):Promise<ApiResponse<RoadmapPostDto>>{
    //@ts-ignore
    return FetchApi(`/Roadmap/${postId}`,{
        method:'GET',
    });
}
export function GetRoadmapPostBySlug(postSlug:string):Promise<ApiResponse<RoadmapPostDto>>{
    //@ts-ignore
    return FetchApi(`/Roadmap/b/${postSlug}`,{
        method:'GET',
    });
}

export function CreateRoadmapPost(command:CreateRoadmapPostCommand):Promise<ApiResponse<undefined>>{
    //@ts-ignore
    return FetchApi('/Roadmap',{
        method:'POST',
        body:command
    });
}
export function EditRoadmapPost(command:EditRoadmapPostViewModel):Promise<ApiResponse<undefined>>{
    //@ts-ignore
    return FetchApi('/Roadmap',{
        method:'PUT',
        body:command
    });
}
export function PublishRoadmapPost(id:BigInt):Promise<ApiResponse<undefined>>{
    //@ts-ignore
    return FetchApi('/Roadmap/accept',{
        method:'PUT',
        body: {
            postId : id,
        }
    });
}
export function RejectRoadmapPost(id:BigInt):Promise<ApiResponse<undefined>>{
    //@ts-ignore
    return FetchApi('/Roadmap/reject',{
        method:'PUT',
        body: {
            postId : id,
        }
    });
}

export function RegisterRoadmapWriter(command:RegisterRoadmapWriterViewModel):Promise<ApiResponse<undefined>>{
    //@ts-ignore
    return FetchApi('/Roadmap/Writer/Register',{
        method:'POST',
        body:command
    });
}
export function DeleteRoadmapPost(id:BigInt):Promise<ApiResponse<undefined>>{
    //@ts-ignore
    return FetchApi(`/Roadmap/Delete?postId=${id}`,{
        method:'DELETE',
    });
}