import { Router } from "express";
import { getItems, getItem } from "../controllers/items/index.js";

const router = Router();

router.get("/", getItems);
router.get("/:id", getItem);

export default router;
