import type {EOrderStatus} from "~/models/cart/orderDto";

export interface ChangeOrderStatusViewModel {
    orderId: number;
    orderStatus: EOrderStatus;
}