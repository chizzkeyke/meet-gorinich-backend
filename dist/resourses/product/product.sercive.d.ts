/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose" />
export declare class ProductService {
    getProduct(name: string): Promise<(import("mongoose").Document<unknown, any, import("./product.interface").ProductI> & import("./product.interface").ProductI & {
        _id: import("mongoose").Types.ObjectId;
    }) | null>;
    createProduct(name: string, description: string, count: number): Promise<import("mongoose").Document<unknown, any, import("./product.interface").ProductI> & import("./product.interface").ProductI & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
