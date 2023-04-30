import { validate } from "./../middlewares/errorHandling";
import { createBusiness } from "./../controllers/business.controller";
import { Router } from "express";
import { BusinessCreateInputSchema } from "../../prisma/generated/zod";

const router = Router();

router.post("/", validate(BusinessCreateInputSchema), createBusiness);

export default router;
