import type {BaseFilterParams} from "~/models/baseFilterParams";
import type {BaseDto} from "~/models/baseDto";
import type {BaseFilterResult} from "~/models/baseFilterResult";
import type {EPassedState} from "~/models/quiz/quizResultDto";

export interface QuizResultFilterData extends BaseDto {
    quizTitle: string;
    studentFullName: string;
    dateTaken: string;
    score: number;
    passState: EPassedState;
}

export interface QuizResultFilterParams extends BaseFilterParams {
    search: string;
    passedState: EPassedState;
    beforeDate: Date;
    afterDate: Date;
    studentId: number;
    quizId: number;
    teacherId: number;
}

export interface QuizResultFilterResult extends BaseFilterResult<QuizResultFilterData> {

}