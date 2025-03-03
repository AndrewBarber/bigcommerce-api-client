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
exports.SitesApi = void 0;
const util_1 = require("../util");
const site_certificate_api_1 = require("./site-certificate-api");
const site_route_api_1 = require("./site-route-api");
class SitesApi {
    constructor(apiClient) {
        this.apiClient = apiClient;
        this.siteCertificate = new site_certificate_api_1.SiteCertificateApi(this.apiClient);
        this.siteRoutes = new site_route_api_1.SiteRouteApi(this.apiClient);
    }
    createSite(site) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.post("/v3/sites", site);
            return response.data;
        });
    }
    getAllSites(params, page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get((0, util_1.appendQueryString)("/v3/sites", params), page, limit);
            return response.data;
        });
    }
    getSite(siteId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.get(`/v3/sites/${siteId}`);
            return response.data;
        });
    }
    updateSite(siteId, site) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.apiClient.put(`/v3/sites/${siteId}`, site);
            return response.data;
        });
    }
    deleteSite(siteId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.apiClient.delete(`/v3/sites/${siteId}`);
        });
    }
}
exports.SitesApi = SitesApi;
