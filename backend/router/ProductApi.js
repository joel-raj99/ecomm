import express, { Router } from 'express';
import { createproduct } from '../controller/productcontroller.js';


const router = Router();

//importing the controller file

router.route('/createproduct').post(createproduct);

export default router;