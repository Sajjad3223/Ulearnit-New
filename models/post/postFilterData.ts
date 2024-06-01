import type {BaseDto} from "~/models/baseDto";
import type {BaseFilterParams} from "~/models/baseFilterParams";
import type {BaseFilterResult} from "~/models/baseFilterResult";

export interface PostFilterData extends BaseDto {
    title: string;
    slug: string;
    imageName: string;
    postStatus: EPostStatus;
    writerName: string;
}

export interface PostFilterParams extends BaseFilterParams {
    search?: string | null;
    categorySlug?: string | null;
    postStatus?: EPostStatus | null;
    writerId?: number | null;
}

export interface PostFilterResult extends BaseFilterResult<PostFilterData> {
}

export enum EPostStatus {
    Pending,
    Published,
    Rejected,
    Drafted
}