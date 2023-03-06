import { ApiClient } from "../api-client";
import {
    Cart,
    CartsQueryParam,
    CreateCartRequest,
    UpdateCustomerIdRequest,
} from "../model/cart";
import { appendQueryString } from "../util";

export class CartApi {
    constructor(private readonly apiClient: ApiClient) {}

    async createCart<
        Params extends CartsQueryParam,
        T extends CreateCartRequest,
        R extends Cart
    >(createCartRequest: T, params?: Params): Promise<R> {
        const response = await this.apiClient.post(
            appendQueryString(`/v3/carts`, params),
            createCartRequest
        );
        return response.data;
    }

    async getCart<Params extends CartsQueryParam, T extends Cart>(
        cartId: number,
        params?: Params
    ): Promise<T> {
        const response = await this.apiClient.get(
            appendQueryString(`/v3/carts/${cartId}`, params)
        );
        return response.data;
    }

    async updateCustomerId<
        Params extends CartsQueryParam,
        T extends UpdateCustomerIdRequest,
        R extends Cart
    >(cartId: number, updateCustomerIdRequest: T, params?: Params): Promise<R> {
        const response = await this.apiClient.put(
            appendQueryString(`/v3/carts/${cartId}`, params),
            updateCustomerIdRequest
        );
        return response.data;
    }

    async deleteCart(cartId: number): Promise<void> {
        const response = await this.apiClient.delete(`/v3/carts/${cartId}`);
        return response.data;
    }
}
