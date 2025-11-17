import { Router } from "express";
import {
  recordUsage,
  getUsageSummary,
} from "../controllers/usageController.js";
const router = Router();
router.post("/record", recordUsage);
router.get("/summary/:customer_id", getUsageSummary);
export default router;
