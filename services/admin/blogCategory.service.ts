import {ApiResponse} from "~/models/ApiResponse";
import {FetchApi} from "~/utilities/CustomFetchApi";
import {CreateCategoryViewModel} from "~/models/category/createCategoryViewModel";
import {AddCategoryChildViewModel} from "~/models/category/addCategoryChildViewModel";
import type {CategoryDto} from "~/models/category/categoryDTO";
import {EditCategoryCommand} from "~/models/category/editCategoryCommand";

export function CreateBlogCategory(command:CreateCategoryViewModel):Promise<ApiResponse<undefined>>{
    //@ts-ignore
    return FetchApi('/BlogCategory/Create',{
        method:'POST',
        body:command
    });
}
export function AddBlogCategoryChild(command:AddCategoryChildViewModel):Promise<ApiResponse<undefined>>{
    //@ts-ignore
    return FetchApi('/BlogCategory/AddChild',{
        method:'POST',
        body:command
    });
}
export function EditBlogCategory(command:EditCategoryCommand):Promise<ApiResponse<undefined>>{
    //@ts-ignore
    return FetchApi(`/BlogCategory/Edit`,{
        method:'PUT',
        body:command
    });
}
export function DeleteBlogCategory(id:number):Promise<ApiResponse<undefined>>{
    //@ts-ignore
    return FetchApi(`/BlogCategory/Delete/${id}`,{
        method:'DELETE',
    });
}

export function GetBlogCategories():Promise<ApiResponse<CategoryDto>>{
    //@ts-ignore
    return FetchApi('/BlogCategory',{
        method:'GET',
    });
}
export function GetBlogCategory(id:Number):Promise<ApiResponse<CategoryDto>>{
    //@ts-ignore
    return FetchApi(`/BlogCategory/${id}`,{
        method:'GET',
    });
}