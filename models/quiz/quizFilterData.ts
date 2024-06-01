import type {BaseFilterParams} from "~/models/baseFilterParams";
import type {BaseFilterResult} from "~/models/baseFilterResult";
import type {BaseDto} from "~/models/baseDto";

export interface QuizFilterData extends BaseDto {
    sectionTitle: string;
    title: string;
    totalQuestions: number;
    totalScore: number;
    passScore: number;
    userHasPassed: boolean;
    userScore?: number;
}

export interface QuizFilterParams extends BaseFilterParams {
    search: string;
    sectionId: number;
    courseId: number;
    teacherId: number;
}

export interface QuizFilterResult extends BaseFilterResult<QuizFilterData> {

}