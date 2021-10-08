import express from "express";
import * as unitController from "../controllers/unit";
import * as itemController from "../controllers/item";

const router = express.Router();

router.get("/units", unitController.getAll);
router.get("/units/:id", unitController.getOne);
router.post("/units", unitController.create);
router.put("/units/:id", unitController.update);
router.delete("/units/:id", unitController.remove);

router.get("/items", itemController.getAll);
router.get("/items/:id", itemController.getOne);
router.post("/items", itemController.create);
router.put("/items/:id", itemController.update);
router.delete("/items/:id", itemController.remove);

export default router;
