import type {BaseFilterResult} from "~/models/baseFilterResult";

export interface CommentFilterData {
    id: number;
    creationDate: Date;
    isActive: boolean;
    parentId: number;
    postId: number;
    postType: EPostType;
    postTitle:string;
    postSlug:string;
    text: string;
    sender: SenderDto;
    commentStatus: ECommentStatus;
    likesCount: number;
    dislikesCount: number;
    userReaction: string;
    answers: CommentFilterData[];
}

export interface SenderDto {
    userId: number;
    fullName: string;
    email: string;
    phoneNumber: string;
    avatar: string;
}

export enum ECommentStatus {
    در_انتظار_تایید,
    تایید_شده,
    رد_شده
}

export enum EPostType {
    Course,
    Blog,
    Shop,
    Roadmap,
}

export interface CommentFilterResult extends BaseFilterResult<CommentFilterData> {
}