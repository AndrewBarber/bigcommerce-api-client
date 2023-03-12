import { ApiClient } from "../api-client";
import { ordersCountStatus, order_Post, order_Put, order_RespOnly } from "../model/generated/orders.v2.oas2";
import { OrdersQueryParams } from "../model/query/order";
import { OrderCouponApi } from "./order-coupon-api";
export declare class OrderApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    readonly OrderCoupons: OrderCouponApi;
    getAllOrders<Params extends OrdersQueryParams, T extends order_RespOnly>(params?: Params, page?: number, limit?: number): Promise<T[]>;
    createOrder<T extends order_Post, R extends order_RespOnly>(order: T): Promise<R>;
    getOrder<T extends order_RespOnly>(orderId: number): Promise<T>;
    updateOrder<T extends order_Put, R extends order_RespOnly>(orderId: number, order: T): Promise<R>;
    archiveOrder(orderId: number): Promise<void>;
    deleteAllOrders(): Promise<void>;
    getOrdersCount<T extends ordersCountStatus>(): Promise<T[]>;
}
