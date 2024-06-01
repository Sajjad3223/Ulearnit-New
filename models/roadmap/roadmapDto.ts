import type {WriterDto} from "~/models/writerDto";
import type {CategoryDto} from "~/models/category/categoryDTO";
import type {SeoData} from "~/models/SeoData";
import type {BaseFilterParams} from "~/models/baseFilterParams";
import type {BaseFilterResult} from "~/models/baseFilterResult";
import type {EPostStatus} from "~/models/post/postFilterData";

export interface RoadmapPostDto {
    id: number;
    title: string;
    slug: string;
    content: string;
    roadmapWriter: WriterDto;
    visit: number;
    category: CategoryDto;
    imageName: string;
    videoName: string;
    tags?: string;
    postStatus: EPostStatus;
    creationDate: Date;
    seoData: SeoData;
}

export interface RoadmapFilterParams extends BaseFilterParams {
    search?: string | null;
    categorySlug?: string | null;
    postStatus?: EPostStatus | null;
    writerId?: number | null;
}

export interface RoadmapFilterResult extends BaseFilterResult<RoadmapPostDto> {
}