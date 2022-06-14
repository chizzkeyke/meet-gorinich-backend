import { Router } from "express";
import { SliderContoller } from "./slider.contoller";
import { authMiddleware } from "../../middlewares/auth.middleware";

export const sliderRouter = Router()
const contoller = new SliderContoller()

sliderRouter.get('/slider', contoller.getAllSiders)
sliderRouter.use('/slider', authMiddleware)
sliderRouter.post('/slider', contoller.createNewSliderInfo)
sliderRouter.delete('/slider/:id', contoller.deleteSlider)

