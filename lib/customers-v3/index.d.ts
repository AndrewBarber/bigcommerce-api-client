import { ApiClient } from "../api-client";
import { IdInQueryParams, PaginatedData } from "../model/common";
import { customer_Full, customer_Post, customer_Put } from "../model/generated/customers.v3";
import { CustomersV3QueryParams } from "../model/query/customer";
import { CustomerAddressApi } from "./customer-address-api";
import { CustomerAttributeApi } from "./customer-atribute-api";
import { CustomerAttributeValueApi } from "./customer-atribute-value-api";
export declare class CustomersV3Api {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    readonly customerAddresses: CustomerAddressApi;
    readonly customerAttributeValues: CustomerAttributeValueApi;
    readonly customerAttributes: CustomerAttributeApi;
    getAllCustomers<Params extends CustomersV3QueryParams, T extends customer_Full>(params?: Params, page?: number, limit?: number): Promise<PaginatedData<T>>;
    createCustomers<T extends customer_Post, R extends customer_Full>(customers: T[]): Promise<PaginatedData<R>>;
    updateCustomers<T extends customer_Put, R extends customer_Full>(customers: T[]): Promise<PaginatedData<R>>;
    deleteCustomers<Params extends IdInQueryParams>(params?: Params): Promise<void>;
}
