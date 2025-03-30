import type {BaseFilterParams} from "~/models/baseFilterParams";
import type {ECommentStatus, EPostType} from "~/models/comment/commentDto";

export interface CommentFilterParams extends BaseFilterParams {
    search?: string | null | undefined;
    postId: number | null | undefined;
    postType: EPostType | null | undefined;
    commentStatus: ECommentStatus | null | undefined;
    startDate: Date | null | undefined;
    endDate: Date | null | undefined;
    userRequested: number | null | undefined;
}