import { Response, Request } from 'express';
import { SliderModel } from './slider.model';

export class SliderContoller {
    async createNewSliderInfo(req: Request, res: Response) {
        try {
            const dataForNewSlider = req.body

            const newSlider = await SliderModel.create({ ...dataForNewSlider })

            return res.status(200).json({
                data: newSlider
            })
        } catch (error) {
            return res.status(500).json({
                error
            })
        }
    }

    async getAllSiders(req: Request, res: Response) {
        try {

            const sliders = await SliderModel.find({})

            return res.status(200).json({
                data: sliders
            })
        } catch (error) {
            return res.status(500).json({
                error
            })
        }
    }

    async deleteSlider(req: Request, res: Response) {
        try {
            const { id } = req.params
            
            await SliderModel.findByIdAndDelete(id)

            return res.status(200).json({
                message: 'Слайдер успешно удалён'
            })
        } catch (error) {
            return res.status(500).json({
                error
            })
        }
    }
}