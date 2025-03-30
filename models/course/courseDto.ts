import type {SeoData} from "~/models/SeoData";
import type {MasterDto} from "~/models/master/MasterDto";
import type {CategoryDto} from "~/models/category/categoryDTO";
import type {ECourseLevel, ECourseStatus, EEpisodeStatus} from "~/models/course/courseEnums";
import type {QuizFilterData} from "~/models/quiz/quizFilterData";
import type {BaseDto} from "~/models/baseDto";

export interface CourseDto extends BaseDto{
    title: string;
    slug: string;
    description: string;
    imageName: string;
    introVideo: string;
    courseLevel: ECourseLevel;
    courseStatus: ECourseStatus;
    seoData: SeoData;
    price: number;
    discount: number;
    totalPrice: number;
    lastUpdate: Date;
    sections: SectionDto[];
    teacher: MasterDto;
    category: CategoryDto;
    subCategory: CategoryDto;
    tags: string[];
    requirements: string[];
    userHasCourse: boolean;
    studentsCount: Number;
    shortLink: string;
}

export interface SectionDto extends BaseDto {
    courseId: number;
    title: string;
    description: string;
    time: string;
    displayOrder: number;
    episodes: EpisodeDto[];
    sectionQuizzes: QuizFilterData[];
}

export interface EpisodeDto extends BaseDto{
    courseId: number;
    sectionId: number;
    title: string;
    englishTitle: string;
    description: string;
    token: string;
    time: string;
    /*videoName: string;
    attachmentName: string;*/
    isFree: boolean;
    hasAttachment: boolean;
    episodeStatus: EEpisodeStatus;
}

export interface SectionForSelectDto {
    id: number;
    title: string;
}