import type {BaseFilterParams} from "~/models/baseFilterParams";
import type {BaseFilterResult} from "~/models/baseFilterResult";
import type {ECourseLevel, ECourseStatus} from "~/models/course/courseEnums";
import type {EpisodeDto, SectionDto} from "~/models/course/courseDto";

export interface CourseFilterParams extends BaseFilterParams {
    search?: string | null | undefined;
    categorySlug?: string | null | undefined;
    priceFilter?: EPriceFilter | null | undefined;
    orderFilter?: EOrderFilter | null | undefined;
    requirement?: string | null | undefined;
}

export enum EPriceFilter{
    نقدی,
    رایگان,
    همه
}

export enum EOrderFilter{
    تاریخ,
    قیمت,
    بازدید
}

export interface SectionFilterParams extends BaseFilterParams {
    search: string | null;
    courseId: number;
}

export interface EpisodeFilterParams extends BaseFilterParams {
    search: string | null;
    courseId: number | null;
    sectionId: number | null;
}

export interface CourseCardDto {
    id: number;
    title: string;
    slug: string;
    imageName: string;
    courseLevel: ECourseLevel;
    courseStatus: ECourseStatus;
    episodesCount: number;
    studentsCount: number;
    price: number;
    discount: number;
    totalPrice: number;
    time: string;
    teacherName: string;
}

export interface CourseFilterResult extends BaseFilterResult<CourseCardDto> {

}

export interface SectionFilterResult extends BaseFilterResult<SectionDto> {
    courseTitle: string;
}

export interface EpisodeFilterResult extends BaseFilterResult<EpisodeDto> {
    sectionTitle: string;
}