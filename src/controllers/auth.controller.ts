import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { prisma } from "../utils/prisma";
import { comparePassword } from "../utils/comparePassword";
import { workerLoginReq } from "../types/auth";

export const workerLogin = async (req: workerLoginReq, res: Response) => {
  const { phoneNumber, password } = req.body;
  try {
    const worker = await prisma.worker.findUnique({
      where: {
        phoneNumber,
      },
    });
    if (!worker) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ success: false, msg: "Wrong phone number or password" });
    }
    const hashPassword = worker.password;

    const match = await comparePassword({ password, hashPassword });

    if (!match) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ success: false, msg: "Wrong phone number or password" });
    }
  } catch (error) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ success: false, msg: "Business has been created" });
  }
};
