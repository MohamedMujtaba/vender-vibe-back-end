import { Response } from "express";
import { CreateWorkerReq, DeleteWorkerReq } from "../types/worker";
import { StatusCodes } from "http-status-codes";
import { prisma } from "../utils/prisma";
import { genSalt, hash } from "bcrypt";
import { generateHashPassword } from "../utils/generateHashPassword";

export const createWorker = async (req: CreateWorkerReq, res: Response) => {
  const { companyId, name, password, phoneNumber, role } = req.body;
  try {
    const workerAlreadyExist = await prisma.worker.findFirst({
      where: {
        companyId,
        phoneNumber,
      },
    });
    if (workerAlreadyExist) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ success: false, msg: "Worker already exist" });
    }
    const hashPassword = await generateHashPassword({ password });
    const newWorker = await prisma.worker.create({
      data: {
        name,
        phoneNumber,
        password: hashPassword,
        role,
        company: {
          connect: {
            id: companyId,
          },
        },
      },
    });
    res
      .status(StatusCodes.OK)
      .json({ success: false, msg: "Worker has been created" });
  } catch (error) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ success: false, msg: "Something went wrong", error });
  }
};

// Delete Workers
export const deleteWorker = async (req: DeleteWorkerReq, res: Response) => {
  const { ids } = req.body;
  try {
    const deletedWorkers = await prisma.worker.deleteMany({
      where: {
        id: {
          in: ids,
        },
      },
    });
    res
      .status(StatusCodes.OK)
      .json({ success: true, msg: "Worker /s deleted" });
  } catch (error) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ success: false, msg: "Something went wrong", error });
  }
};
