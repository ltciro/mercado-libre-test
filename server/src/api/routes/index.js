import { Router } from "express";
import items from "./items.js";
const router = Router();

router.use("/items", items);

export default router;
