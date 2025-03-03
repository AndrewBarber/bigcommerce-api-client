"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShippingZoneApi = void 0;
class ShippingZoneApi {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    getAllShippingZones(page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get(`/v2/shipping/zones`, page, limit);
            return response.data;
        });
    }
    createShippingZone(shippingZone) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.post(`/v2/shipping/zones`, shippingZone);
            return response.data;
        });
    }
    getShippingZone(zoneId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get(`/v2/shipping/zones/${zoneId}`);
            return response.data;
        });
    }
    updateShippingZone(zoneId, shippingZone) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.put(`/v2/shipping/zones/${zoneId}`, shippingZone);
            return response.data;
        });
    }
    deleteShippingZone(zoneId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.apiClient.delete(`/v2/shipping/zones/${zoneId}`);
        });
    }
}
exports.ShippingZoneApi = ShippingZoneApi;
