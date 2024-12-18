import type {SeoData} from "~/models/SeoData";
import type {MasterDto} from "~/models/master/MasterDto";
import type {type CategoryDto} from "~/models/category/categoryDTO";
import type {ECourseLevel, ECourseStatus, EEpisodeStatus} from "~/models/course/courseEnums";
import type {QuizFilterData} from "~/models/quiz/quizFilterData";

export interface CourseDto {
    id: number;
    creationDate: Date;
    isActive: boolean;
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

export interface SectionDto {
    id: number;
    courseId: number;
    creationDate: Date;
    isActive: boolean;
    title: string;
    description: string;
    time: string;
    displayOrder: number;
    episodes: EpisodeDto[];
    sectionQuizzes: QuizFilterData[];
}

export interface EpisodeDto {
    id: number;
    courseId: number;
    sectionId: number;
    creationDate: Date;
    isActive: boolean;
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