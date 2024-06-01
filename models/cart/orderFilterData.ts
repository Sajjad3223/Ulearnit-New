import type {BaseDto} from "~/models/baseDto";
import type {EOrderStatus} from "~/models/cart/orderDto";
import type {BaseFilterParams} from "~/models/baseFilterParams";
import type {BaseFilterResult} from "~/models/baseFilterResult";

export interface OrderFilterData extends BaseDto {
    userId: number;
    userFullName: string | null;
    orderStatus: EOrderStatus;
    lastUpdate: string | null;
    totalPrice: number;
    totalItemCount: number;
}

export interface OrderFilterParams extends BaseFilterParams {
    userId?: number | null;
    startDate?: string | null;
    endDate?: string | null;
    status?: EOrderStatus | null;
}

export interface OrderFilterResult extends BaseFilterResult<OrderFilterData> {
}