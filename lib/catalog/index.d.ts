import { ApiClient } from "../api-client";
import { ImageApi } from "../image";
import { MetafieldApi } from "../metafield";
import { BrandApi } from "./brand-api";
import { CategoryApi } from "./category-api";
import { CategoryBatchApi } from "./category-batch-api";
import { ProductApi } from "./product-api";
import { ProductBuckPricingRuleApi } from "./product-buck-pricing-rule-api";
import { ProductChannelAssignmentApi } from "./product-channel-assignment-api";
import { ProductComplexRuleApi } from "./product-complex-rule-api";
import { ProductCustomFieldApi } from "./product-custom-field-api";
import { ProductModifierApi } from "./product-modifier-api";
import { ProductModifierImageApi } from "./product-modifier-image-api";
import { ProductReviewApi } from "./product-review-api";
import { ProductVariantApi } from "./product-variant-api";
import { ProductVariantMetafieldApi } from "./product-variant-metafield-api";
import { ProductVariantOptionApi } from "./product-variant-option-api";
import { ProductVariantOptionValueApi } from "./product-variant-option-api copy";
import { ProductVideoApi } from "./product-video-api";
import { VariantApi } from "./variant-api";
export declare class CatalogApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    readonly brands: BrandApi;
    readonly brandImages: ImageApi;
    readonly brandMetafields: MetafieldApi;
    readonly category: CategoryApi;
    readonly categoriesBatch: CategoryBatchApi;
    readonly categoryMetafields: MetafieldApi;
    readonly categoryImages: ImageApi;
    readonly products: ProductApi;
    readonly productBuckPricingRules: ProductBuckPricingRuleApi;
    readonly productComplexRules: ProductComplexRuleApi;
    readonly productCustomFields: ProductCustomFieldApi;
    readonly productMetafields: MetafieldApi;
    readonly productModifiers: ProductModifierApi;
    readonly ProductModifierImages: ProductModifierImageApi;
    readonly productReviews: ProductReviewApi;
    readonly productVariants: ProductVariantApi;
    readonly productVariantMetafields: ProductVariantMetafieldApi;
    readonly productVariantOptions: ProductVariantOptionApi;
    readonly productVariantOptionValues: ProductVariantOptionValueApi;
    readonly productVideos: ProductVideoApi;
    readonly productChannelAssignments: ProductChannelAssignmentApi;
    readonly variants: VariantApi;
}
