import express from 'express'
import {barcodeScanController} from './controllers/barcodeScanController.js'
export const formRouter = express.Router()
formRouter.post('/scan-code', barcodeScanController)