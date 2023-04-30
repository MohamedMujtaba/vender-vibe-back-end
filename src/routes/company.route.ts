import { Router } from "express";
import {
  createCompany,
  deleteCompany,
  getCompany,
} from "../controllers/company.controller";
import { validate } from "../middlewares/errorHandling";
import { CompanyCreateInputSchema } from "../../prisma/generated/zod";

const router = Router();

router.post("/", validate(CompanyCreateInputSchema), createCompany);
router.get("/");
router.get("/:id", getCompany);
router.delete("/:id", deleteCompany);

export default router;
