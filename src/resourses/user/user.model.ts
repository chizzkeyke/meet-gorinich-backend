import { model, Schema } from 'mongoose'
import { UserI } from './user.interface'

const UserSchema = new Schema<UserI>({
    firstName: { type: String, required: false },
    middleName: { type: String, required: false },
    lastName: { type: String, required: false },
    email: { type: String, required: true, unique: true },
    token: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
    corporate: { type: String, required: true },
    phoneNumber: { type: Number, required: true, unique: true },
    infoAboutCompany: {
        INN: { type: String, required: false },
        KPP: { type: String, required: false },
        nameCompany: { type: String, required: false },
    }
})

export const modelUser = model('User', UserSchema)
