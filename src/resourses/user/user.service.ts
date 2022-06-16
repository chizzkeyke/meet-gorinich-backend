import { sign } from "jsonwebtoken";
import { modelUser } from "./user.model";
import { UserI } from "./user.interface";

type Role = 'admin' | 'user' | 'buyer'

export class UserService {
    async checkedUser(email: string) {
        await modelUser.findOne({ email }, (err: Error, user: UserI) => {
            if (err) return
            return user
        })
    }

    assignRole (email: string): Role  {
        if (email === 'egor@mail.ru') return 'admin'
        return 'buyer'
    }

    async createUser(email: string, password: string, phone: number) {
        this.checkedUser(email);
        const newUser = await modelUser.create({
            email,
            password,
            phoneNumber: phone
        })

        await newUser.save()
        return newUser
    }

    signJWT(email: string, secret: string) {
        return new Promise((resolve, reject) => {
            sign({
                email,
                iat: Math.floor(Date.now() / 1000),
            }, secret, {
                algorithm: "HS256",
            }, (err, token) => {
                if (err) {
                    reject(err)
                }
                resolve(token as string);
            })
        })
    }
}