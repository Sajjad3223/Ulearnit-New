import {FetchApi} from "~/utilities/CustomFetchApi";
import type {CommentFilterParams} from "~/models/comment/commentFilterParams";
import type {CommentFilterResult} from "~/models/comment/commentDto";
import type {ApiResponse} from "~/models/ApiResponse";
import type {SendCommentViewModel} from "~/models/comment/sendCommentViewModel";
import type {ReactToCommentViewModel} from "~/models/comment/reactToCommentViewModel";

export function GetComments(FilterParams:CommentFilterParams):Promise<ApiResponse<CommentFilterResult>>{
   //@ts-ignore
    return FetchApi('/Comment',{
        method:'GET',
        params:FilterParams
    });
}
export function GetUserComments(FilterParams:CommentFilterParams):Promise<ApiResponse<CommentFilterResult>>{
   //@ts-ignore
    return FetchApi('/Comment/user',{
        method:'GET',
        params:FilterParams
    });
}
export function SendComment(command:SendCommentViewModel):Promise<ApiResponse<undefined>>{
   //@ts-ignore
    return FetchApi('/Comment',{
        method:'POST',
        body:command
    });
}
export function EditComment(commentId:BigInt,text:string):Promise<ApiResponse<undefined>>{
   //@ts-ignore
    return FetchApi('/Comment',{
        method:'PUT',
        body:{
            commentId,
            text
        }
    });
}
export function DeleteComment(commentId:BigInt):Promise<ApiResponse<undefined>>{
   //@ts-ignore
    return FetchApi(`/Comment/${commentId}`,{
        method:'DELETE',
    });
}

// Reactions //
export function ReactToComment(command:ReactToCommentViewModel):Promise<ApiResponse<undefined>>{
   //@ts-ignore
    return FetchApi('/Comment/react',{
        method:'POST',
        body:command
    });
}
export function DeleteReaction(commentId:BigInt):Promise<ApiResponse<undefined>>{
   //@ts-ignore
    return FetchApi(`/Comment/react/${commentId}`,{
        method:'DELETE',
    });
}