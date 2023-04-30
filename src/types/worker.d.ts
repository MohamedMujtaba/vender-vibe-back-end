import { Prisma } from "@prisma/client";
import { Request } from "express";

export interface CreateWorkerReq extends Request {
  body: Prisma.WorkerCreateInput & {
    companyId: string;
  };
}

export interface DeleteWorkerReq extends Request {
  body: {
    ids: string[];
  };
}
