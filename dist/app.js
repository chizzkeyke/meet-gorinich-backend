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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bootstrap = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const product_router_1 = require("./resourses/product/product.router");
const user_router_1 = require("./resourses/user/user.router");
const app = (0, express_1.default)();
const PORT = 8000;
const mongoDBURL = 'mongodb://localhost:27017/Meat';
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api', product_router_1.routerProduct);
app.use('/api', user_router_1.userRouter);
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            mongoose_1.default.connect(mongoDBURL);
            mongoose_1.default.connection
                .once('open', () => console.log("We are connected"))
                .on('error', (err) => console.warn("error", err));
            yield app.listen(PORT, () => {
                console.log('Server start work on port ' + PORT);
            });
        }
        catch (err) {
            console.warn(err);
        }
    });
}
exports.bootstrap = bootstrap;
