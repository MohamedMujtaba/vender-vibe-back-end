import { Prisma } from "@prisma/client";
import { Request } from "express";

export interface CreateWishListReq extends Request {
  body: Prisma.WishListCreateInput & {
    businessId: string;
    companyId: string;
    productsIds: string[];
  };
}
