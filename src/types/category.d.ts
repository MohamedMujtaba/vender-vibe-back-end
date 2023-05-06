import { Prisma } from "@prisma/client";
import { Request } from "express";

export interface CreateCategoryReq extends Request {
  body: Prisma.CategoryCreateInput & { companyId: string };
}

export interface DeleteCategoryReq extends Request {
  body: {
    ids: string[];
  };
}
