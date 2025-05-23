import { Router } from "express";
import Invoices from "../models/Invoices.model.js";

const router = Router();

router.get("/getAll", Invoices.getAll);

export default router;
