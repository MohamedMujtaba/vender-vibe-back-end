import { Request, Response } from "express";
import { prisma } from "../utils/prisma";
import { Prisma } from "@prisma/client";
import { StatusCodes } from "http-status-codes";
import {
  GetCompanyReq,
  CreateComponyReq,
  DeleteCompanyReq,
} from "../types/company";

// Create New Compony

export const createCompany = async (req: CreateComponyReq, res: Response) => {
  const { name, type, logo } = req.body;
  try {
    const company = await prisma.company.create({
      data: {
        name,
        type,
        logo,
      },
    });
    res
      .status(StatusCodes.OK)
      .json({ success: true, msg: "Company has been created", company });
  } catch (error) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ success: false, msg: "Something went wrong", error });
  }
};

// Delete Compony

export const deleteCompany = async (req: DeleteCompanyReq, res: Response) => {
  const { ids } = req.body;
  try {
    const deletedCompanies = await prisma.company.deleteMany({
      where: {
        id: {
          in: ids,
        },
      },
    });
    res
      .status(StatusCodes.OK)
      .json({ success: true, msg: "Company/companies deleted" });
  } catch (error) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ success: false, msg: "Something went wrong", error });
  }
};

export const getCompany = async (req: GetCompanyReq, res: Response) => {
  const { id } = req.params;
  try {
    const company = await prisma.company.findUnique({
      where: {
        id,
      },
      include: {
        _count: true,
        products: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
    res.status(StatusCodes.OK).json({ success: true, company: company });
  } catch (error) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ success: false, msg: "Something went wrong", error });
  }
};
