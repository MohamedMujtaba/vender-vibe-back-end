import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import { prisma } from "../utils/prisma";
import { StatusCodes } from "http-status-codes";
import {
  CreateBusinessReq,
  DeleteBusinessReq,
  UpdateBusinessReq,
} from "../types/business";
import bcrypt, { genSalt, hash } from "bcrypt";
import { generateHashPassword } from "../utils/generateHashPassword";

//  Create Business
export const createBusiness = async (req: CreateBusinessReq, res: Response) => {
  const { location, name, neighborhood, password, phoneNumber, state, type } =
    req.body;
  try {
    const nameAlreadyExist = await prisma.business.findFirst({
      where: {
        name,
      },
    });
    if (nameAlreadyExist)
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ success: false, msg: "Business name should be unique" });
    const phoneAlreadyExist = await prisma.business.findFirst({
      where: {
        phoneNumber,
      },
    });
    if (phoneAlreadyExist)
      return res.status(StatusCodes.BAD_REQUEST).json({
        success: false,
        msg: "Business phone number should be unique",
      });
    // TODO: HASH THE PASSWORD !!!!!!!!!!!
    const hashPassword = await generateHashPassword({ password });
    const business = await prisma.business.create({
      data: {
        type,
        name,
        phoneNumber,
        password: hashPassword,
        state,
        location,
        neighborhood,
      },
    });
    res
      .status(StatusCodes.OK)
      .json({ success: true, msg: "Business has been created", business });
  } catch (error) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ success: false, msg: "Something went wrong", error });
  }
};

// Delete One Business or Many
export const deleteBusiness = async (req: DeleteBusinessReq, res: Response) => {
  const { ids } = req.body;
  try {
    const deletedBusiness = await prisma.business.deleteMany({
      where: {
        id: {
          in: ids,
        },
      },
    });
    res
      .status(StatusCodes.OK)
      .json({ success: true, msg: "Business /s deleted" });
  } catch (error) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ success: false, msg: "Something went wrong", error });
  }
};

//  Update Business
export const updateBusiness = async (req: UpdateBusinessReq, res: Response) => {
  const { id } = req.params;
  const { location, neighborhood, name, password, phoneNumber, state } =
    req.body;
  try {
    const business = await prisma.business.update({
      where: { id },
      data: {},
    });
  } catch (error) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ success: false, msg: "Something went wrong", error });
  }
};
