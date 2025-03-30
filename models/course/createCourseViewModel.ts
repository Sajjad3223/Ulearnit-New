import type {SeoData} from "~/models/SeoData";
import type {ECourseLevel} from "~/models/course/courseEnums";

export interface CreateCourseViewModel {
    teacherId: number;
    title: string;
    slug: string;
    description: string;
    categoryId: number;
    subCategoryId?: number | null;
    imageName: string | null;
    introVideo: string | null;
    courseLevel: ECourseLevel;
    seoData: SeoData;
    price: number | null;
    tags: string;
    requirements: string;
}

