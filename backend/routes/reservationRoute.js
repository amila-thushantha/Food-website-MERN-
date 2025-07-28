import express from "express";
import { sendReservation } from '../controller/reservation.js'
const router = express.Router();

router.post("/post", sendReservation);

export default router;