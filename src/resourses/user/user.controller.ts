import { model } from 'mongoose';
import { modelUser } from './user.model';
import { Request, Response } from 'express';
import { UserService } from './user.service';
import bcrypt from 'bcrypt'

const userService = new UserService()
const salt = bcrypt.genSaltSync(5)

export class UserController {
   async register(req: Request, res: Response) {
      try {
         const { email, password, phone, corporate } = req.body
         const checkEmail = await modelUser.findOne({ email })

         if (!!checkEmail) {
            throw 'Пользователь с таким Email уже есть'
         }

         const role = userService.assignRole(email)
         const hashedPassword = bcrypt.hashSync(password, salt)
         const token = await userService.signJWT(email, 'gorinich')
         const newUser = await modelUser.create({
            email,
            password: hashedPassword,
            phoneNumber: phone,
            token,
            role,
            corporate
         })

         await newUser.save()

         return res.status(201).json({
            token,
            message: 'User was created.'
         })

      } catch (error) {
         res.status(500).json({
            message: error
         })
      }
   }

   async login(req: Request, res: Response) {
      try {
         const { email, password } = req.body
         const user = await modelUser.findOne({ email })

         if (!user) {
            return res.status(400).json({
               message: 'User with this email not a find.'
            })
         }

         const validPassword = bcrypt.compareSync(password, user.password)

         if (!validPassword) {
            return res.status(400).json({
               message: 'Wrong a password.'
            })
         }

         return res.status(200).json({
            token: user.token
         })

      } catch (e) {
         res.status(500).json({
            message: e
         })
      }
   }

   async getUserInfo(req: Request, res: Response) {
      try {
         const token = req.headers.authorization?.split(' ')[1]
         const userData = await modelUser.findOne({ token })

         if (!userData) {
            throw 'User is not found.'
         }

         const {
            email,
            phoneNumber,
            firstName,
            middleName,
            lastName,
            infoAboutCompany,
            corporate,
            role
         } = userData

         return res.status(200).json({
            email,
            phoneNumber,
            firstName,
            middleName,
            lastName,
            infoAboutCompany,
            corporate,
            role
         })

      } catch (error) {
         return res.status(400).json({
            error
         })
      }
   }

   async updateUserInfo(req: Request, res: Response) {
      try {
         const { ...data } = req.body
         const token = req.headers.authorization?.split(' ')[1]

         if (!token) {
            throw 'Token is not found.'
         }

         const updatedDataUser = await modelUser.findOneAndUpdate({ token }, { ...data }, { new: true });

         return res.status(200).json(updatedDataUser)

      } catch (error) {
         return res.status(400).json({
            error
         })
      }
   }
}