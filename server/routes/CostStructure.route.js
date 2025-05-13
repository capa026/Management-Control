import { Router } from "express";
import CostStructure from "../models/CostStructure.model.js";

const router = Router();

router.post("/createStructure", CostStructure.createStructure);
router.get("/getAll", CostStructure.getAll);
router.put("/updateStructure", CostStructure.updateStructure);
router.delete("/deleteById", CostStructure.deleteById);
export default router;
