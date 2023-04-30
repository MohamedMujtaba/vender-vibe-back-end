import { Prisma } from "@prisma/client";
import { Request } from "express";

export interface CreateComponyReq extends Request {
  body: Prisma.CompanyCreateInput;
}

export interface DeleteCompanyReq {
  body: {
    ids: string[];
  };
}

export interface GetCompanyReq {
  params: {
    id: string;
  };
}
