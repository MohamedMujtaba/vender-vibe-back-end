import { StatusCodes } from "http-status-codes";
import { Request, Response } from "express";
import { prisma } from "../utils/prisma";
import {
  GetAllProReq,
  GetProductReq,
  createProductReq,
  deleteProductReq,
  getStatReq,
  likeProductReq,
  updateProductReq,
} from "../types/product";

// Create New Product
// TODO: ADD VALIDATION !!!!!!!
export const createProduct = async (req: createProductReq, res: Response) => {
  const { companyId, categoryIds, dec, name, price, freeShipping, image } =
    req.body;
  try {
    const c =
      categoryIds?.map((i) => {
        return {
          id: i,
        };
      }) || [];
    const product = await prisma.product.create({
      data: {
        dec,
        name,
        price,
        freeShipping,
        image,
        company: {
          connect: {
            id: companyId,
          },
        },
        categories: {
          connect: c,
        },
      },
    });
    res
      .status(StatusCodes.OK)
      .json({ success: true, msg: "Product has been created", product });
  } catch (error) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ success: false, msg: "Something went wrong", error });
  }
};

// Delete One Product or Many
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
    res
      .status(StatusCodes.OK)
      .json({ success: true, msg: "Product /s deleted" });
  } catch (error) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ success: false, msg: "Something went wrong", error });
  }
};

// Get One Product
export const getProduct = async (req: GetProductReq, res: Response) => {
  const { id } = req.params;

  try {
    const product = await prisma.product.findUnique({
      where: {
        id,
      },
      include: {
        likes: {},
      },
    });
    res.status(StatusCodes.OK).json({ success: true, product });
  } catch (error) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ success: false, msg: "Something went wrong", error });
  }
};

// Get All Products
export const GetAllProducts = async (req: GetAllProReq, res: Response) => {
  const { available, categories, companyId, hot, type } = req.query;
  let c: any = [];
  let queryObject = {} as any;
  if (type) {
    queryObject.type = type;
  }
  if (available) {
    queryObject.available = available === "true" ? true : false;
  }
  if (companyId) {
    queryObject.companyId = companyId;
  }
  if (hot) {
    queryObject.hot = hot === "true" ? true : false;
  }
  if (categories) {
    // TODO:
    c = categories.split(",");
  }
  try {
    const products = await prisma.product.findMany({
      where: {
        categories: {
          some: c,
        },
      },
    });
    res.status(StatusCodes.OK).json({ success: true, products });
  } catch (error) {}
};

// Update Product
export const updateProduct = async (req: updateProductReq, res: Response) => {
  const { id } = req.params;
  const {
    categoryIds,
    available,
    dec,
    freeShipping,
    hot,
    image,
    name,
    oldPrice,
    price,
  } = req.body;
  try {
    const c =
      categoryIds?.map((i) => {
        return {
          id: i,
        };
      }) || [];
    const updatedProduct = await prisma.product.update({
      where: { id },
      data: {
        available,
        dec,
        freeShipping,
        hot,
        image,
        name,
        oldPrice,
        price,
        categories: {
          connect: c,
        },
      },
    });
    res.status(StatusCodes.OK).json({ success: true, msg: "Product updated" });
  } catch (error) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ success: false, msg: "Something went wrong", error });
  }
};

// Like Or Dislike Product
export const likeProduct = async (req: likeProductReq, res: Response) => {
  const { productId, businessId } = req.body;
  try {
    const isLiked = await prisma.business.findFirst({
      where: {
        id: businessId,
        productsLikedIds: {
          has: productId,
        },
      },
    });
    if (!isLiked) {
      const business = await prisma.business.update({
        where: { id: businessId },
        data: {
          likedProducts: {
            connect: {
              id: productId,
            },
          },
        },
      });
      return res
        .status(StatusCodes.OK)
        .json({ success: true, msg: "Product has been liked" });
    }
    if (isLiked) {
      const business = await prisma.business.update({
        where: { id: businessId },
        data: {
          likedProducts: {
            disconnect: {
              id: productId,
            },
          },
        },
      });
      res
        .status(StatusCodes.OK)
        .json({ success: true, msg: "Product has been disliked" });
    }
  } catch (error) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ success: false, msg: "Something went wrong", error });
  }
};

//  Get Stat of product
const getStat = async (req: getStatReq, res: Response) => {
  const { productId } = req.params;
  try {
    const stat = await prisma.product.findUnique({
      where: { id: productId },
      select: {},
    });
  } catch (error) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ success: false, msg: "Something went wrong", error });
  }
};

//  try {
//     const user = await prisma.business.findUnique({ where: { id: userId } });
//     let isLiked = user?.likedProducts.includes(productId);
//     if (!isLiked) {
//       await prisma.business.update({
//         where: { id: userId },
//         data: {
//           likedProducts: {
//             push: productId,
//           },
//         },
//       });
//       await prisma.product.update({
//         where: { id: productId },
//         data: {
//           likes: {
//             push: userId,
//           },
//         },
//       });
//       res.status(400).json({ success: true, msg: "Liked Product" });
//     } else {
//       const product = await prisma.product.findUnique({
//         where: { id: productId },
//       });
//       let userLikesList = user?.likedProducts;
//       userLikesList?.filter((i) => i !== productId);
//       let productLikesList = product?.likes;
//       productLikesList?.filter((i) => i !== userId);
//       await prisma.business.update({
//         where: { id: userId },
//         data: { likedProducts: userLikesList },
//       });
//       await prisma.product.update({
//         where: { id: productId },
//         data: { likes: productLikesList },
//       });
//     }
