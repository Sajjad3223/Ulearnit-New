import type {BaseFilterParams} from "~/models/baseFilterParams";
import type {BaseFilterResult} from "~/models/baseFilterResult";
import type {SenderDto} from "~/models/comment/commentDto";

export interface QuestionFilterParams extends BaseFilterParams {
    postId: number | null;
    postType: number | null;
    startDate: Date | null;
    endDate: Date | null;
    isResolved: boolean | null;
    userId: number | null;
    userRequested: number | null;
    search: string | null;
}

export interface QuestionFilterData {
    id: number
    creationDate: Date
    isActive: boolean
    postId: number
    postType: number
    postTitle: string
    title: string
    isResolved: boolean
    lastUpdate: Date
    sender: SenderDto
    answersCount: number
    likesCount: number
    dislikesCount: number
    userReaction: string
}

export interface QuestionFilterResult extends BaseFilterResult<QuestionFilterData> {
}