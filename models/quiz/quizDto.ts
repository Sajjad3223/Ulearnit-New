import type {SectionDto} from "~/models/course/courseDto";
import type {MasterDto} from "~/models/master/MasterDto";
import type {BaseDto} from "~/models/baseDto";

export interface QuizDto extends BaseDto {
    title: string;
    totalScore: number;
    passScore: number;
    questions: QuizQuestionDto[];
    section: SectionDto;
    teacher: MasterDto;
}

export interface QuizForStudentDto extends BaseDto {
    title: string;
    totalScore: number;
    passScore: number;
    questions: QuizQuestionForStudentDto[];
    sectionTitle: string;
    teacherName: string;
}

export interface QuizQuestionForStudentDto extends BaseDto {
    title: string;
    questionType: EQuestionType;
    choices: ChoiceForStudentDto[];
    score: number;
}

export interface ChoiceForStudentDto extends BaseDto {
    title: string;
}

export interface QuizQuestionDto extends BaseDto {
    quizId: number;
    title: string;
    questionType: EQuestionType;
    choices: ChoiceDto[];
    correctAnswer: string;
    score: number;
}

export enum EQuestionType {
    MultipleChoice,
    Descriptive,
    File,
    Code
}

export interface ChoiceDto extends BaseDto {
    quizQuestionId: number;
    title: string;
    isCorrectAnswer: boolean;
}