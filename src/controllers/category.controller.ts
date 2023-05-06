import { StatusCodes } from "http-status-codes";
import { CreateCategoryReq, DeleteCategoryReq } from "../types/category";
import { Response } from "express";
import { prisma } from "../utils/prisma";

export const createCategory = async (req: CreateCategoryReq, res: Response) => {
  const { companyId, name } = req.body;
  try {
    const newCategory = await prisma.category.create({
      data: {
        name,
        company: {
          connect: {
            id: companyId,
          },
        },
      },
    });
    res
      .status(StatusCodes.OK)
      .json({ success: true, msg: "Category has been created" });
  } catch (error) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ success: false, msg: "Something went wrong" });
  }
};

export const deleteCategory = async (req: DeleteCategoryReq, res: Response) => {
  const { ids } = req.body;
  try {
    const deletedCategory = await prisma.category.deleteMany({
      where: {
        id: {
          in: ids,
        },
      },
    });
    res
      .status(StatusCodes.OK)
      .json({ success: true, msg: "Category /s deleted" });
  } catch (error) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ success: false, msg: "Something went wrong" });
  }
};
