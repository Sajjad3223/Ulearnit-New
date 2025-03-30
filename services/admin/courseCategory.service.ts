import type {ApiResponse} from "~/models/ApiResponse";
import {FetchApi} from "~/utilities/CustomFetchApi";
import type {CreateCategoryViewModel} from "~/models/category/createCategoryViewModel";
import type {AddCategoryChildViewModel} from "~/models/category/addCategoryChildViewModel";
import type {CategoryDto} from "~/models/category/categoryDTO";
import type {EditCategoryCommand} from "~/models/category/editCategoryCommand";

export function CreateCourseCategory(command:CreateCategoryViewModel):Promise<ApiResponse<undefined>>{
   //@ts-ignore
    return FetchApi('/admin/CourseCategory/Create',{
        method:'POST',
        body:command
    });
}
export function AddCourseCategoryChild(command:AddCategoryChildViewModel):Promise<ApiResponse<undefined>>{
   //@ts-ignore
    return FetchApi('/admin/CourseCategory/AddChild',{
        method:'POST',
        body:command
    });
}
export function EditCourseCategory(command:EditCategoryCommand):Promise<ApiResponse<undefined>>{
   //@ts-ignore
    return FetchApi('/admin/CourseCategory/Edit',{
        method:'PUT',
        body:command
    });
}

export function GetCourseCategories():Promise<ApiResponse<CategoryDto[]>>{
   //@ts-ignore
    return FetchApi('/admin/CourseCategory',{
        method:'GET',
    });
}
export function GetCourseCategory(id:Number):Promise<ApiResponse<CategoryDto>>{
   //@ts-ignore
    return FetchApi(`/admin/CourseCategory/${id}`,{
        method:'GET',
    });
}

export function DeleteCourseCategory(id:Number):Promise<ApiResponse<undefined>>{
   //@ts-ignore
    return FetchApi(`/admin/CourseCategory/delete/${id}`,{
        method:'DELETE'
    });
}