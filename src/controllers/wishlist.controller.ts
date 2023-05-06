import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import { prisma } from "../utils/prisma";
import { CreateWishListReq } from "../types/wishlist";

const createWishList = async (req: CreateWishListReq, res: Response) => {
  const { businessId, companyId, name, productsIds } = req.body;

  try {
    const WishList = await prisma.wishList.create({
      data: {
        name,
        company: { connect: { id: companyId } },
        business: {
          connect: { id: businessId },
        },
        products: {
          connect: productsIds.map((id) => ({ id: id })),
        },
      },
    });
  } catch (error) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ success: false, msg: "Something went wrong" });
  }
};
