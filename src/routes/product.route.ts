import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getProduct,
  likeProduct,
  updateProduct,
} from "../controllers/product.controller";

const router = Router();

router.post("/", createProduct);
router.delete("/", deleteProduct);
router.get("/:id", getProduct);

router.put("/:id", updateProduct);
router.post("/like-product", likeProduct);

export default router;
