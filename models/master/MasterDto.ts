import type {UserDto} from "~/models/user/userDto";
import type {BaseDto} from "~/models/baseDto";
import type {BaseFilterParams} from "~/models/baseFilterParams";
import type {BaseFilterResult} from "~/models/baseFilterResult";

export interface MasterDto extends BaseDto {
    teacherName: string;
    cvFileName: string;
    status: EMasterStatus;
    user: UserDto;
}

export interface MasterFilterParams extends BaseFilterParams {
    search?: string | null;
    teacherStatus?: EMasterStatus | null;
}

export enum EMasterStatus {
    Pending,
    Active,
    Inactive
}

export interface MasterFilterResult extends BaseFilterResult<MasterDto> {

}