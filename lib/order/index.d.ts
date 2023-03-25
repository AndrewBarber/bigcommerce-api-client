import { ApiClient } from "../api-client";
import { OrderStatus } from "../model/common";
import { ordersCount_Full, order_Post, order_Put, order_RespOnly } from "../model/generated/orders.v2.oas2";
import { OrdersQueryParams } from "../model/query/order";
import { OrderCouponApi } from "./order-coupon-api";
import { OrderMessageApi } from "./order-message-api";
import { OrderProductApi } from "./order-product-api";
import { OrderShipmentApi } from "./order-shipment-api";
import { OrderShippingAddressApi } from "./order-shipping-address-api";
import { OrderShippingAddressQuoteApi } from "./order-shipping-address-quote-api";
import { OrderStatusApi } from "./order-status-api";
import { OrderTaxApi } from "./order-tax-api";
export declare class OrderApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    readonly orderCoupons: OrderCouponApi;
    readonly orderMessages: OrderMessageApi;
    readonly orderProducts: OrderProductApi;
    readonly orderShipments: OrderShipmentApi;
    readonly orderShippingAddresses: OrderShippingAddressApi;
    readonly orderShippingAddressQuotes: OrderShippingAddressQuoteApi;
    readonly orderStatus: OrderStatusApi;
    readonly orderTaxes: OrderTaxApi;
    getAllOrders<Params extends OrdersQueryParams, T extends order_RespOnly>(params?: Params, page?: number, limit?: number): Promise<T[]>;
    createOrder<T extends order_Post, R extends order_RespOnly>(order: T): Promise<R>;
    getOrder<T extends order_RespOnly>(orderId: number): Promise<T>;
    updateOrder<T extends order_Put, R extends order_RespOnly>(orderId: number, order: T): Promise<R>;
    archiveOrder(orderId: number): Promise<void>;
    deleteAllOrders(): Promise<void>;
    getOrdersCount<T extends ordersCount_Full>(): Promise<T>;
    updateOrderStatus<T extends order_RespOnly>(orderId: number, status: OrderStatus): Promise<T>;
}
