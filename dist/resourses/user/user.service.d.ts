/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose" />
import { UserI } from "./user.interface";
declare type Role = 'admin' | 'user' | 'buyer';
export declare class UserService {
    checkedUser(email: string): Promise<void>;
    assignRole(email: string): Role;
    createUser(email: string, password: string, phone: number): Promise<import("mongoose").Document<unknown, any, UserI> & UserI & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    signJWT(email: string, secret: string): Promise<unknown>;
}
export {};
