import { Prisma } from "@prisma/client";
import { Request } from "express";

export interface CreateBusinessReq extends Request {
  body: Prisma.BusinessCreateInput;
}
export interface UpdateBusinessReq extends Request {
  params: {
    id: string;
  };
  body: Prisma.BusinessUpdateInput;
}
export interface DeleteBusinessReq extends Request {
  body: {
    ids: string[];
  };
}
