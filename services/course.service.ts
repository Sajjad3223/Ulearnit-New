import type {ApiResponse} from "~/models/ApiResponse";
import {FetchApi} from "~/utilities/CustomFetchApi";
import type {CreateCourseViewModel} from "~/models/course/createCourseViewModel";
import type {CourseDto, EpisodeDto, SectionForSelectDto} from "~/models/course/courseDto";
import type {CreateSectionViewModel} from "~/models/course/createSectionViewModel";
import type {CreateEpisodeViewModel} from "~/models/course/createEpisodeViewModel";
import type {EditCourseViewModel} from "~/models/course/editCourseViewModel";
import type {EditSectionViewModel} from "~/models/course/editSectionViewModel";
import type {EditEpisodeViewModel} from "~/models/course/editEpisodeViewModel";
import type {
    CourseFilterParams,
    CourseFilterResult, EpisodeFilterParams, EpisodeFilterResult,
    SectionFilterParams,
    SectionFilterResult
} from "~/models/course/courseSearchResultDto";
import type {FavoriteDto} from "~/models/favoriteDto";
import type {SetDiscountViewModel} from "~/models/course/setDiscountViewModel";
import type {CourseStudentsFilterParams, UserCoursesFilterParams, UserFilterResult} from "~/models/user/userFilterParams";

export function GetCourses():Promise<ApiResponse<CourseDto>>{
    //@ts-ignore
    return FetchApi('/Course',{
        method:'GET',
    });
}
export function GetMasterCourses(filterParams:CourseFilterParams):Promise<ApiResponse<CourseFilterResult>>{
    //@ts-ignore
    return FetchApi('/Course/masterCourses',{
        method:'GET',
        params:filterParams
    });
}
export function GetCoursesOfMaster(masterId:number):Promise<ApiResponse<CourseFilterResult>>{
    //@ts-ignore
    return FetchApi(`/Course/teacher/${masterId}`,{
        method:'GET',
    });
}
export function GetCourse(courseId:Number):Promise<ApiResponse<CourseDto>>{
    //@ts-ignore
    return FetchApi(`/Course/${courseId}`,{
        method:'GET',
    });
}
export function GetCourseBySlug(slug:string):Promise<ApiResponse<CourseDto>>{
    //@ts-ignore
    return FetchApi(`/Course/c/${slug}`,{
        method:'GET',
    });
}
export function GetCourseByShortLink(shortLink:string):Promise<ApiResponse<CourseDto>>{
    //@ts-ignore
    return FetchApi(`/Course/shortLink/${shortLink}`,{
        method:'GET',
    });
}
export function GetCourseFilter(filterParams:CourseFilterParams):Promise<ApiResponse<CourseFilterResult>>{
    //@ts-ignore
    return FetchApi(`/Course/search`,{
        method:'GET',
        params:filterParams,
    });
}
export function GetSectionsByFilter(filterParams:SectionFilterParams):Promise<ApiResponse<SectionFilterResult>>{
    //@ts-ignore
    return FetchApi(`/Course/sections/${filterParams.courseId}`,{
        method:'GET',
        params:filterParams,
    });
}
export function GetEpisodesByFilter(filterParams:EpisodeFilterParams):Promise<ApiResponse<EpisodeFilterResult>>{
    //@ts-ignore
    return FetchApi(`/Course/section/episodes/${filterParams.courseId}`,{
        method:'GET',
        params:filterParams,
    });
}

export function CreateCourse(command:CreateCourseViewModel):Promise<ApiResponse<undefined>>{
    //@ts-ignore
    return FetchApi('/Course/Create',{
        method:'POST',
        body:command
    });
}
export function EditCourse(command:EditCourseViewModel):Promise<ApiResponse<undefined>>{
    //@ts-ignore
    return FetchApi('/Course/Edit',{
        method:'PUT',
        body:command
    });
}

export function CreateSection(command:CreateSectionViewModel):Promise<ApiResponse<undefined>>{
    //@ts-ignore
    return FetchApi('/Course/Sections/Create',{
        method:'POST',
        body:command
    });
}
export function EditSection(command:EditSectionViewModel):Promise<ApiResponse<undefined>>{
    //@ts-ignore
    return FetchApi('/Course/Sections/Edit',{
        method:'PUT',
        body:command
    });
}
export function DeleteSection(courseId:number,sectionId:number):Promise<ApiResponse<undefined>>{
    //@ts-ignore
    return FetchApi('/Course/Sections/Delete',{
        method:'DELETE',
        body:{
            courseId,
            sectionId
        }
    });
}

export function GetEpisode(episodeId:number):Promise<ApiResponse<EpisodeDto>>{
    //@ts-ignore
    return FetchApi(`/Course/Episodes/${episodeId}`,{
        method:'GET',
    });
}
export function CreateEpisode(command:CreateEpisodeViewModel):Promise<ApiResponse<undefined>>{
    //@ts-ignore
    return FetchApi('/Course/Episodes/Create',{
        method:'POST',
        body:command
    });
}
export function EditEpisode(command:EditEpisodeViewModel):Promise<ApiResponse<undefined>>{
    //@ts-ignore
    return FetchApi('/Course/Episodes/Edit',{
        method:'PUT',
        body:command
    });
}
export function DeleteEpisode(courseId:number,sectionId:number,episodeId:number):Promise<ApiResponse<undefined>>{
    //@ts-ignore
    return FetchApi('/Course/Episodes/Delete',{
        method:'DELETE',
        body:{
            courseId,
            sectionId,
            episodeId
        }
    });
}

export function PublishEpisode(courseId:Number,episodeId:Number):Promise<ApiResponse<undefined>>{
    //@ts-ignore
    return FetchApi('/Course/Episodes/Publish',{
        method:'PUT',
        body: {
            courseId,
            episodeId
        },
    });
}

export function GetEpisodeVideo(token:string):Promise<ApiResponse<string>>{
    //@ts-ignore
    return FetchApi(`/Course/GetEpisodeVideo?token=${token}`,{
        method:'GET',
    });
}
export function GetEpisodeVideoFile(token:string):Promise<any>{
    //@ts-ignore
    return FetchApi(`/Course/GetEpisodeVideoFile?token=${token}`,{
        method:'GET',
    });
}
export function GetEpisodeAttachmentFile(token:string):Promise<any>{
    //@ts-ignore
    return FetchApi(`/Course/GetEpisodeAttachFile?token=${token}`,{
        method:'GET',
    });
}
export function GetEpisodeAttachment(token:string):Promise<ApiResponse<string>>{
    //@ts-ignore
    return FetchApi(`/Course/GetEpisodeAttachment?token=${token}`,{
        method:'GET',
    });
}

export function GetUserCourses(filterParams:UserCoursesFilterParams):Promise<ApiResponse<CourseFilterResult>>{
    //@ts-ignore
    return FetchApi('/Course/userCourses',{
        method:'GET',
        params:filterParams
    });
}
export function GetUserFavorites():Promise<ApiResponse<FavoriteDto>>{
    //@ts-ignore
    return FetchApi('/Course/Favorites',{
        method:'GET',
    });
}
export function AddFavorite(postId:Number):Promise<ApiResponse<undefined>>{
    //@ts-ignore
    return FetchApi('/Course/Favorites',{
        method:'POST',
        body:postId
    });
}
export function DeleteFavorite(postId:Number):Promise<ApiResponse<undefined>>{
    //@ts-ignore
    return FetchApi(`/Course/Favorites/${postId}`,{
        method:'DELETE',
    });
}
export function SetCourseDiscount(command:SetDiscountViewModel):Promise<ApiResponse<undefined>>{
    //@ts-ignore
    return FetchApi('/Course/discount',{
        method:'POST',
        body:command
    });
}
export function GetStudentsCount(courseId:number):Promise<ApiResponse<number>>{
    //@ts-ignore
    return FetchApi(`/Course/studentsCount/${courseId}`,{
        method:'GET',
    });
}
export function GetTotalSell(courseId:number):Promise<ApiResponse<number>>{
    //@ts-ignore
    return FetchApi(`/Course/totalSell/${courseId}`,{
        method:'GET',
    });
}
export function GetStudents(filterParams:CourseStudentsFilterParams):Promise<ApiResponse<UserFilterResult>>{
    //@ts-ignore
    return FetchApi(`/Course/students`,{
        method:'GET',
        params:filterParams
    });
}

export function GetSectionIdsOfTeacher():Promise<ApiResponse<SectionForSelectDto[]>>{
    //@ts-ignore
    return FetchApi(`/Course/my-sections`,{
        method:'GET'
    });
}