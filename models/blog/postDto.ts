import type {WriterDto} from "~/models/writerDto";
import type {CategoryDto} from "~/models/category/categoryDTO";
import type {SeoData} from "~/models/SeoData";
import type {EPostStatus} from "~/models/post/postFilterData";

export interface PostDto {
    id: number;
    title: string;
    slug: string;
    content: string;
    writer: WriterDto;
    visit: number;
    category: CategoryDto;
    subCategory: CategoryDto;
    imageName: string;
    shortLink: string;
    tags?: string;
    postStatus: EPostStatus;
    creationDate: Date;
    seoData: SeoData;
}