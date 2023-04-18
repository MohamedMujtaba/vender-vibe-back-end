import { z } from "zod";
import {
  ProductCreateInputSchema,
  ProductUpdateInputSchema,
} from "./../../prisma/generated/zod/index";
import { Request, Response } from "express";
import { prisma } from "../utils/prisma";

type InputBodyType = z.infer<typeof ProductCreateInputSchema>;
interface createProductReq extends Request {
  body: InputBodyType;
}
// TODO: ADD VALIDATION !!!!!!!
export const createProduct = async (req: createProductReq, res: Response) => {
  const { company, category, dec, name, price, freeShipping, image } = req.body;
  try {
    const product = await prisma.product.create({
      data: { company, category, dec, name, price, freeShipping, image },
    });
    res
      .status(200)
      .json({ success: true, msg: "Product has been created", product });
  } catch (error) {
    res.status(400).json({ success: false, msg: "Something went wrong" });
  }
};

interface deleteProductReq extends Request {
  body: {
    ids: string[];
  };
}
export const deleteProduct = async (req: deleteProductReq, res: Response) => {
  const { ids } = req.body;
  try {
    const deletedProducts = await prisma.product.deleteMany({
      where: {
        id: {
          in: ids,
        },
      },
    });
    res.status(400).json({ success: true, msg: "Product /s deleted" });
  } catch (error) {
    res
      .status(400)
      .json({ success: false, msg: "Something went wrong", error });
  }
};

// TODO:
type inputUpdateType = z.infer<typeof ProductUpdateInputSchema>;
interface updateProductReq extends Request {
  params: {
    id: string;
  };
  body: inputUpdateType;
}
export const updateProduct = async (req: updateProductReq, res: Response) => {
  const { id } = req.params;
  const {
    available,
    category,
    dec,
    freeShipping,
    hot,
    image,
    name,
    oldPrice,
    price,
  } = req.body;
  try {
    const updatedProduct = await prisma.product.update({
      where: { id },
      data: {
        available,
        category,
        dec,
        freeShipping,
        hot,
        image,
        name,
        oldPrice,
        price,
      },
    });
    res.status(400).json({ success: true, msg: "Product /s deleted" });
  } catch (error) {
    res
      .status(400)
      .json({ success: false, msg: "Something went wrong", error });
  }
};
