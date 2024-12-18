import type {BaseDto} from "~/models/baseDto";
import type {BaseFilterParams} from "~/models/baseFilterParams";
import type {BaseFilterResult} from "~/models/baseFilterResult";

export interface NotificationDto extends BaseDto {
    userId: number;
    icon: EIcon;
    avatar?: string;
    title: string;
    link?: string;
    text: string;
    isSeen: boolean;
}

export interface NotificationFilterParams extends BaseFilterParams {
    isSeen?: boolean | null;
}

export interface NotificationFilterResult extends BaseFilterResult<NotificationDto> {

}

export enum EIcon {
    Course,
    Info,
    Warning,
    Error,
    Question,
    Comment,
}