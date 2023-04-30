import { Prisma } from "@prisma/client";
import { Request } from "express";

export interface createProductReq extends Request {
  body: Prisma.ProductCreateInput & {
    companyId: string;
    categoryIds: string[];
  };
}

export interface deleteProductReq extends Request {
  body: {
    ids: string[];
  };
}

export interface GetProductReq {
  params: {
    id: string;
  };
}

export interface GetAllProReq extends Request {
  query: {
    type: string | undefined;
    companyId: string | undefined;
    available: string | undefined;
    hot: string | undefined;
    categories: string;
  };
}

export interface updateProductReq extends Request {
  params: {
    id: string;
  };
  body: Prisma.ProductUpdateInput & {
    categoryIds: string[];
  };
}

export interface likeProductReq extends Request {
  body: {
    productId: string;
    businessId: string;
  };
}

export interface getStatReq extends Request {
  params: {
    productId: string;
  };
}
