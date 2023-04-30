import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const BusinessScalarFieldEnumSchema = z.enum(['id','name','password','phoneNumber','state','location','neighborhood','type','productsLikedIds','createdAt','updatedAt']);

export const CategoryScalarFieldEnumSchema = z.enum(['id','name','companyId','productsIds','createdAt','updatedAt']);

export const CompanyScalarFieldEnumSchema = z.enum(['id','name','type','active','logo','createdAt','updatedAt']);

export const CouponScalarFieldEnumSchema = z.enum(['id','companyId','code','amount','isValid','active','createdAt','updatedAt']);

export const OrderScalarFieldEnumSchema = z.enum(['id','subtotal','delivery','discount','total','businessId','companyId','couponId','createdAt','updatedAt']);

export const ProductScalarFieldEnumSchema = z.enum(['id','name','dec','image','price','oldPrice','available','hot','freeShipping','views','companyId','categoryIds','businessLikeIds','wishListIds','createdAt','updatedAt']);

export const QueryModeSchema = z.enum(['default','insensitive']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const WishListScalarFieldEnumSchema = z.enum(['id','name','businessId','companyId','productsIds','createdAt','updatedAt']);

export const WorkerScalarFieldEnumSchema = z.enum(['id','name','phoneNumber','password','role','companyId','createdAt','updatedAt']);

export const BusinessTypeSchema = z.enum(['HOSPITAL','PHARMACY','GROCERY']);

export type BusinessTypeType = `${z.infer<typeof BusinessTypeSchema>}`

export const WorkerRoleSchema = z.enum(['ADMIN','SUPERVISOR','DELIVERY']);

export type WorkerRoleType = `${z.infer<typeof WorkerRoleSchema>}`

/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// BUSINESS SCHEMA
/////////////////////////////////////////

export const BusinessSchema = z.object({
  type: BusinessTypeSchema,
  id: z.string(),
  name: z.string(),
  password: z.string(),
  phoneNumber: z.string(),
  state: z.string(),
  location: z.string(),
  neighborhood: z.string(),
  productsLikedIds: z.string().array(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Business = z.infer<typeof BusinessSchema>

/////////////////////////////////////////
// WISH LIST SCHEMA
/////////////////////////////////////////

export const WishListSchema = z.object({
  id: z.string(),
  name: z.string(),
  businessId: z.string(),
  companyId: z.string(),
  productsIds: z.string().array(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type WishList = z.infer<typeof WishListSchema>

/////////////////////////////////////////
// COMPANY SCHEMA
/////////////////////////////////////////

export const CompanySchema = z.object({
  type: BusinessTypeSchema,
  id: z.string(),
  name: z.string(),
  active: z.boolean(),
  logo: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Company = z.infer<typeof CompanySchema>

/////////////////////////////////////////
// PRODUCT SCHEMA
/////////////////////////////////////////

export const ProductSchema = z.object({
  id: z.string(),
  name: z.string(),
  dec: z.string().nullable(),
  image: z.string().nullable(),
  price: z.number().int(),
  oldPrice: z.number().int().nullable(),
  available: z.boolean(),
  hot: z.boolean(),
  freeShipping: z.boolean(),
  views: z.string().array(),
  companyId: z.string(),
  categoryIds: z.string().array(),
  businessLikeIds: z.string().array(),
  wishListIds: z.string().array(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Product = z.infer<typeof ProductSchema>

/////////////////////////////////////////
// WORKER SCHEMA
/////////////////////////////////////////

export const WorkerSchema = z.object({
  role: WorkerRoleSchema,
  id: z.string(),
  name: z.string(),
  phoneNumber: z.string(),
  password: z.string(),
  companyId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Worker = z.infer<typeof WorkerSchema>

/////////////////////////////////////////
// ORDER SCHEMA
/////////////////////////////////////////

export const OrderSchema = z.object({
  id: z.string(),
  subtotal: z.number(),
  delivery: z.number(),
  discount: z.number(),
  total: z.number(),
  businessId: z.string().nullable(),
  companyId: z.string().nullable(),
  couponId: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Order = z.infer<typeof OrderSchema>

/////////////////////////////////////////
// COUPON SCHEMA
/////////////////////////////////////////

export const CouponSchema = z.object({
  id: z.string(),
  companyId: z.string().nullable(),
  code: z.string(),
  amount: z.number(),
  isValid: z.boolean(),
  active: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Coupon = z.infer<typeof CouponSchema>

/////////////////////////////////////////
// CATEGORY SCHEMA
/////////////////////////////////////////

export const CategorySchema = z.object({
  id: z.string(),
  name: z.string(),
  companyId: z.string(),
  productsIds: z.string().array(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Category = z.infer<typeof CategorySchema>

/////////////////////////////////////////
// MONGODB TYPES
/////////////////////////////////////////
// ORDER ITEM
//------------------------------------------------------


/////////////////////////////////////////
// ORDER ITEM SCHEMA
/////////////////////////////////////////

export const OrderItemSchema = z.object({
  id: z.string(),
  name: z.string(),
  size: z.string(),
  color: z.string(),
  price: z.number().int(),
  freeShipping: z.boolean(),
  image: z.string().array(),
})

export type OrderItem = z.infer<typeof OrderItemSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// BUSINESS
//------------------------------------------------------

export const BusinessIncludeSchema: z.ZodType<Prisma.BusinessInclude> = z.object({
}).strict()

export const BusinessArgsSchema: z.ZodType<Prisma.BusinessArgs> = z.object({
  select: z.lazy(() => BusinessSelectSchema).optional(),
  include: z.lazy(() => BusinessIncludeSchema).optional(),
}).strict();

export const BusinessCountOutputTypeArgsSchema: z.ZodType<Prisma.BusinessCountOutputTypeArgs> = z.object({
  select: z.lazy(() => BusinessCountOutputTypeSelectSchema).nullish(),
}).strict();

export const BusinessCountOutputTypeSelectSchema: z.ZodType<Prisma.BusinessCountOutputTypeSelect> = z.object({
  orders: z.boolean().optional(),
  wishLists: z.boolean().optional(),
  likedProducts: z.boolean().optional(),
}).strict();

export const BusinessSelectSchema: z.ZodType<Prisma.BusinessSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  password: z.boolean().optional(),
  phoneNumber: z.boolean().optional(),
  state: z.boolean().optional(),
  location: z.boolean().optional(),
  neighborhood: z.boolean().optional(),
  type: z.boolean().optional(),
  productsLikedIds: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  orders: z.union([z.boolean(),z.lazy(() => OrderArgsSchema)]).optional(),
  wishLists: z.union([z.boolean(),z.lazy(() => WishListArgsSchema)]).optional(),
  likedProducts: z.union([z.boolean(),z.lazy(() => ProductArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => BusinessCountOutputTypeArgsSchema)]).optional(),
}).strict()

// WISH LIST
//------------------------------------------------------

export const WishListIncludeSchema: z.ZodType<Prisma.WishListInclude> = z.object({
}).strict()

export const WishListArgsSchema: z.ZodType<Prisma.WishListArgs> = z.object({
  select: z.lazy(() => WishListSelectSchema).optional(),
  include: z.lazy(() => WishListIncludeSchema).optional(),
}).strict();

export const WishListCountOutputTypeArgsSchema: z.ZodType<Prisma.WishListCountOutputTypeArgs> = z.object({
  select: z.lazy(() => WishListCountOutputTypeSelectSchema).nullish(),
}).strict();

export const WishListCountOutputTypeSelectSchema: z.ZodType<Prisma.WishListCountOutputTypeSelect> = z.object({
  products: z.boolean().optional(),
}).strict();

export const WishListSelectSchema: z.ZodType<Prisma.WishListSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  businessId: z.boolean().optional(),
  companyId: z.boolean().optional(),
  productsIds: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  Business: z.union([z.boolean(),z.lazy(() => BusinessArgsSchema)]).optional(),
  company: z.union([z.boolean(),z.lazy(() => CompanyArgsSchema)]).optional(),
  products: z.union([z.boolean(),z.lazy(() => ProductArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => WishListCountOutputTypeArgsSchema)]).optional(),
}).strict()

// COMPANY
//------------------------------------------------------

export const CompanyIncludeSchema: z.ZodType<Prisma.CompanyInclude> = z.object({
}).strict()

export const CompanyArgsSchema: z.ZodType<Prisma.CompanyArgs> = z.object({
  select: z.lazy(() => CompanySelectSchema).optional(),
  include: z.lazy(() => CompanyIncludeSchema).optional(),
}).strict();

export const CompanyCountOutputTypeArgsSchema: z.ZodType<Prisma.CompanyCountOutputTypeArgs> = z.object({
  select: z.lazy(() => CompanyCountOutputTypeSelectSchema).nullish(),
}).strict();

export const CompanyCountOutputTypeSelectSchema: z.ZodType<Prisma.CompanyCountOutputTypeSelect> = z.object({
  products: z.boolean().optional(),
  orders: z.boolean().optional(),
  workers: z.boolean().optional(),
  coupons: z.boolean().optional(),
  WishList: z.boolean().optional(),
  categories: z.boolean().optional(),
}).strict();

export const CompanySelectSchema: z.ZodType<Prisma.CompanySelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  type: z.boolean().optional(),
  active: z.boolean().optional(),
  logo: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  products: z.union([z.boolean(),z.lazy(() => ProductArgsSchema)]).optional(),
  orders: z.union([z.boolean(),z.lazy(() => OrderArgsSchema)]).optional(),
  workers: z.union([z.boolean(),z.lazy(() => WorkerArgsSchema)]).optional(),
  coupons: z.union([z.boolean(),z.lazy(() => CouponArgsSchema)]).optional(),
  WishList: z.union([z.boolean(),z.lazy(() => WishListArgsSchema)]).optional(),
  categories: z.union([z.boolean(),z.lazy(() => CategoryArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CompanyCountOutputTypeArgsSchema)]).optional(),
}).strict()

// PRODUCT
//------------------------------------------------------

export const ProductIncludeSchema: z.ZodType<Prisma.ProductInclude> = z.object({
}).strict()

export const ProductArgsSchema: z.ZodType<Prisma.ProductArgs> = z.object({
  select: z.lazy(() => ProductSelectSchema).optional(),
  include: z.lazy(() => ProductIncludeSchema).optional(),
}).strict();

export const ProductCountOutputTypeArgsSchema: z.ZodType<Prisma.ProductCountOutputTypeArgs> = z.object({
  select: z.lazy(() => ProductCountOutputTypeSelectSchema).nullish(),
}).strict();

export const ProductCountOutputTypeSelectSchema: z.ZodType<Prisma.ProductCountOutputTypeSelect> = z.object({
  categories: z.boolean().optional(),
  likes: z.boolean().optional(),
  wishLists: z.boolean().optional(),
}).strict();

export const ProductSelectSchema: z.ZodType<Prisma.ProductSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  dec: z.boolean().optional(),
  image: z.boolean().optional(),
  price: z.boolean().optional(),
  oldPrice: z.boolean().optional(),
  available: z.boolean().optional(),
  hot: z.boolean().optional(),
  freeShipping: z.boolean().optional(),
  views: z.boolean().optional(),
  companyId: z.boolean().optional(),
  categoryIds: z.boolean().optional(),
  businessLikeIds: z.boolean().optional(),
  wishListIds: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  company: z.union([z.boolean(),z.lazy(() => CompanyArgsSchema)]).optional(),
  categories: z.union([z.boolean(),z.lazy(() => CategoryArgsSchema)]).optional(),
  likes: z.union([z.boolean(),z.lazy(() => BusinessArgsSchema)]).optional(),
  wishLists: z.union([z.boolean(),z.lazy(() => WishListArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ProductCountOutputTypeArgsSchema)]).optional(),
}).strict()

// WORKER
//------------------------------------------------------

export const WorkerIncludeSchema: z.ZodType<Prisma.WorkerInclude> = z.object({
}).strict()

export const WorkerArgsSchema: z.ZodType<Prisma.WorkerArgs> = z.object({
  select: z.lazy(() => WorkerSelectSchema).optional(),
  include: z.lazy(() => WorkerIncludeSchema).optional(),
}).strict();

export const WorkerSelectSchema: z.ZodType<Prisma.WorkerSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  phoneNumber: z.boolean().optional(),
  password: z.boolean().optional(),
  role: z.boolean().optional(),
  companyId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  company: z.union([z.boolean(),z.lazy(() => CompanyArgsSchema)]).optional(),
}).strict()

// ORDER
//------------------------------------------------------

export const OrderIncludeSchema: z.ZodType<Prisma.OrderInclude> = z.object({
}).strict()

export const OrderArgsSchema: z.ZodType<Prisma.OrderArgs> = z.object({
  select: z.lazy(() => OrderSelectSchema).optional(),
  include: z.lazy(() => OrderIncludeSchema).optional(),
}).strict();

export const OrderSelectSchema: z.ZodType<Prisma.OrderSelect> = z.object({
  id: z.boolean().optional(),
  subtotal: z.boolean().optional(),
  delivery: z.boolean().optional(),
  discount: z.boolean().optional(),
  total: z.boolean().optional(),
  items: z.union([z.boolean(),z.lazy(() => OrderItemArgsSchema)]).optional(),
  businessId: z.boolean().optional(),
  companyId: z.boolean().optional(),
  couponId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  Business: z.union([z.boolean(),z.lazy(() => BusinessArgsSchema)]).optional(),
  Company: z.union([z.boolean(),z.lazy(() => CompanyArgsSchema)]).optional(),
  coupon: z.union([z.boolean(),z.lazy(() => CouponArgsSchema)]).optional(),
}).strict()

// COUPON
//------------------------------------------------------

export const CouponIncludeSchema: z.ZodType<Prisma.CouponInclude> = z.object({
}).strict()

export const CouponArgsSchema: z.ZodType<Prisma.CouponArgs> = z.object({
  select: z.lazy(() => CouponSelectSchema).optional(),
  include: z.lazy(() => CouponIncludeSchema).optional(),
}).strict();

export const CouponCountOutputTypeArgsSchema: z.ZodType<Prisma.CouponCountOutputTypeArgs> = z.object({
  select: z.lazy(() => CouponCountOutputTypeSelectSchema).nullish(),
}).strict();

export const CouponCountOutputTypeSelectSchema: z.ZodType<Prisma.CouponCountOutputTypeSelect> = z.object({
  orders: z.boolean().optional(),
}).strict();

export const CouponSelectSchema: z.ZodType<Prisma.CouponSelect> = z.object({
  id: z.boolean().optional(),
  companyId: z.boolean().optional(),
  code: z.boolean().optional(),
  amount: z.boolean().optional(),
  isValid: z.boolean().optional(),
  active: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  orders: z.union([z.boolean(),z.lazy(() => OrderArgsSchema)]).optional(),
  Company: z.union([z.boolean(),z.lazy(() => CompanyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CouponCountOutputTypeArgsSchema)]).optional(),
}).strict()

// CATEGORY
//------------------------------------------------------

export const CategoryIncludeSchema: z.ZodType<Prisma.CategoryInclude> = z.object({
}).strict()

export const CategoryArgsSchema: z.ZodType<Prisma.CategoryArgs> = z.object({
  select: z.lazy(() => CategorySelectSchema).optional(),
  include: z.lazy(() => CategoryIncludeSchema).optional(),
}).strict();

export const CategoryCountOutputTypeArgsSchema: z.ZodType<Prisma.CategoryCountOutputTypeArgs> = z.object({
  select: z.lazy(() => CategoryCountOutputTypeSelectSchema).nullish(),
}).strict();

export const CategoryCountOutputTypeSelectSchema: z.ZodType<Prisma.CategoryCountOutputTypeSelect> = z.object({
  products: z.boolean().optional(),
}).strict();

export const CategorySelectSchema: z.ZodType<Prisma.CategorySelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  companyId: z.boolean().optional(),
  productsIds: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  company: z.union([z.boolean(),z.lazy(() => CompanyArgsSchema)]).optional(),
  products: z.union([z.boolean(),z.lazy(() => ProductArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CategoryCountOutputTypeArgsSchema)]).optional(),
}).strict()

// ORDER ITEM
//------------------------------------------------------

export const OrderItemArgsSchema: z.ZodType<Prisma.OrderItemArgs> = z.object({
  select: z.lazy(() => OrderItemSelectSchema).optional(),
}).strict();

export const OrderItemSelectSchema: z.ZodType<Prisma.OrderItemSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  size: z.boolean().optional(),
  color: z.boolean().optional(),
  price: z.boolean().optional(),
  freeShipping: z.boolean().optional(),
  image: z.boolean().optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const BusinessWhereInputSchema: z.ZodType<Prisma.BusinessWhereInput> = z.object({
  AND: z.union([ z.lazy(() => BusinessWhereInputSchema),z.lazy(() => BusinessWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BusinessWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BusinessWhereInputSchema),z.lazy(() => BusinessWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  password: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  phoneNumber: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  state: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  location: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  neighborhood: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => EnumBusinessTypeFilterSchema),z.lazy(() => BusinessTypeSchema) ]).optional(),
  productsLikedIds: z.lazy(() => StringNullableListFilterSchema).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  orders: z.lazy(() => OrderListRelationFilterSchema).optional(),
  wishLists: z.lazy(() => WishListListRelationFilterSchema).optional(),
  likedProducts: z.lazy(() => ProductListRelationFilterSchema).optional()
}).strict();

export const BusinessOrderByWithRelationInputSchema: z.ZodType<Prisma.BusinessOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  phoneNumber: z.lazy(() => SortOrderSchema).optional(),
  state: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional(),
  neighborhood: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  productsLikedIds: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  orders: z.lazy(() => OrderOrderByRelationAggregateInputSchema).optional(),
  wishLists: z.lazy(() => WishListOrderByRelationAggregateInputSchema).optional(),
  likedProducts: z.lazy(() => ProductOrderByRelationAggregateInputSchema).optional()
}).strict();

export const BusinessWhereUniqueInputSchema: z.ZodType<Prisma.BusinessWhereUniqueInput> = z.object({
  id: z.string().optional(),
  name: z.string().optional(),
  phoneNumber: z.string().optional()
}).strict();

export const BusinessOrderByWithAggregationInputSchema: z.ZodType<Prisma.BusinessOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  phoneNumber: z.lazy(() => SortOrderSchema).optional(),
  state: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional(),
  neighborhood: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  productsLikedIds: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => BusinessCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => BusinessMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => BusinessMinOrderByAggregateInputSchema).optional()
}).strict();

export const BusinessScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.BusinessScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => BusinessScalarWhereWithAggregatesInputSchema),z.lazy(() => BusinessScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => BusinessScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BusinessScalarWhereWithAggregatesInputSchema),z.lazy(() => BusinessScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  password: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  phoneNumber: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  state: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  location: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  neighborhood: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => EnumBusinessTypeWithAggregatesFilterSchema),z.lazy(() => BusinessTypeSchema) ]).optional(),
  productsLikedIds: z.lazy(() => StringNullableListFilterSchema).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const WishListWhereInputSchema: z.ZodType<Prisma.WishListWhereInput> = z.object({
  AND: z.union([ z.lazy(() => WishListWhereInputSchema),z.lazy(() => WishListWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => WishListWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => WishListWhereInputSchema),z.lazy(() => WishListWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  businessId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  companyId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  productsIds: z.lazy(() => StringNullableListFilterSchema).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  Business: z.union([ z.lazy(() => BusinessRelationFilterSchema),z.lazy(() => BusinessWhereInputSchema) ]).optional(),
  company: z.union([ z.lazy(() => CompanyRelationFilterSchema),z.lazy(() => CompanyWhereInputSchema) ]).optional(),
  products: z.lazy(() => ProductListRelationFilterSchema).optional()
}).strict();

export const WishListOrderByWithRelationInputSchema: z.ZodType<Prisma.WishListOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  businessId: z.lazy(() => SortOrderSchema).optional(),
  companyId: z.lazy(() => SortOrderSchema).optional(),
  productsIds: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  Business: z.lazy(() => BusinessOrderByWithRelationInputSchema).optional(),
  company: z.lazy(() => CompanyOrderByWithRelationInputSchema).optional(),
  products: z.lazy(() => ProductOrderByRelationAggregateInputSchema).optional()
}).strict();

export const WishListWhereUniqueInputSchema: z.ZodType<Prisma.WishListWhereUniqueInput> = z.object({
  id: z.string().optional()
}).strict();

export const WishListOrderByWithAggregationInputSchema: z.ZodType<Prisma.WishListOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  businessId: z.lazy(() => SortOrderSchema).optional(),
  companyId: z.lazy(() => SortOrderSchema).optional(),
  productsIds: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => WishListCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => WishListMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => WishListMinOrderByAggregateInputSchema).optional()
}).strict();

export const WishListScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.WishListScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => WishListScalarWhereWithAggregatesInputSchema),z.lazy(() => WishListScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => WishListScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => WishListScalarWhereWithAggregatesInputSchema),z.lazy(() => WishListScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  businessId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  companyId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  productsIds: z.lazy(() => StringNullableListFilterSchema).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const CompanyWhereInputSchema: z.ZodType<Prisma.CompanyWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CompanyWhereInputSchema),z.lazy(() => CompanyWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CompanyWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CompanyWhereInputSchema),z.lazy(() => CompanyWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => EnumBusinessTypeFilterSchema),z.lazy(() => BusinessTypeSchema) ]).optional(),
  active: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  logo: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  products: z.lazy(() => ProductListRelationFilterSchema).optional(),
  orders: z.lazy(() => OrderListRelationFilterSchema).optional(),
  workers: z.lazy(() => WorkerListRelationFilterSchema).optional(),
  coupons: z.lazy(() => CouponListRelationFilterSchema).optional(),
  WishList: z.lazy(() => WishListListRelationFilterSchema).optional(),
  categories: z.lazy(() => CategoryListRelationFilterSchema).optional()
}).strict();

export const CompanyOrderByWithRelationInputSchema: z.ZodType<Prisma.CompanyOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  active: z.lazy(() => SortOrderSchema).optional(),
  logo: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  products: z.lazy(() => ProductOrderByRelationAggregateInputSchema).optional(),
  orders: z.lazy(() => OrderOrderByRelationAggregateInputSchema).optional(),
  workers: z.lazy(() => WorkerOrderByRelationAggregateInputSchema).optional(),
  coupons: z.lazy(() => CouponOrderByRelationAggregateInputSchema).optional(),
  WishList: z.lazy(() => WishListOrderByRelationAggregateInputSchema).optional(),
  categories: z.lazy(() => CategoryOrderByRelationAggregateInputSchema).optional()
}).strict();

export const CompanyWhereUniqueInputSchema: z.ZodType<Prisma.CompanyWhereUniqueInput> = z.object({
  id: z.string().optional()
}).strict();

export const CompanyOrderByWithAggregationInputSchema: z.ZodType<Prisma.CompanyOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  active: z.lazy(() => SortOrderSchema).optional(),
  logo: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => CompanyCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CompanyMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CompanyMinOrderByAggregateInputSchema).optional()
}).strict();

export const CompanyScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.CompanyScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => CompanyScalarWhereWithAggregatesInputSchema),z.lazy(() => CompanyScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => CompanyScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CompanyScalarWhereWithAggregatesInputSchema),z.lazy(() => CompanyScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => EnumBusinessTypeWithAggregatesFilterSchema),z.lazy(() => BusinessTypeSchema) ]).optional(),
  active: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  logo: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const ProductWhereInputSchema: z.ZodType<Prisma.ProductWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ProductWhereInputSchema),z.lazy(() => ProductWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProductWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProductWhereInputSchema),z.lazy(() => ProductWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  dec: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  image: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  price: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  oldPrice: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  available: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  hot: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  freeShipping: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  views: z.lazy(() => StringNullableListFilterSchema).optional(),
  companyId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  categoryIds: z.lazy(() => StringNullableListFilterSchema).optional(),
  businessLikeIds: z.lazy(() => StringNullableListFilterSchema).optional(),
  wishListIds: z.lazy(() => StringNullableListFilterSchema).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  company: z.union([ z.lazy(() => CompanyRelationFilterSchema),z.lazy(() => CompanyWhereInputSchema) ]).optional(),
  categories: z.lazy(() => CategoryListRelationFilterSchema).optional(),
  likes: z.lazy(() => BusinessListRelationFilterSchema).optional(),
  wishLists: z.lazy(() => WishListListRelationFilterSchema).optional()
}).strict();

export const ProductOrderByWithRelationInputSchema: z.ZodType<Prisma.ProductOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  dec: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  oldPrice: z.lazy(() => SortOrderSchema).optional(),
  available: z.lazy(() => SortOrderSchema).optional(),
  hot: z.lazy(() => SortOrderSchema).optional(),
  freeShipping: z.lazy(() => SortOrderSchema).optional(),
  views: z.lazy(() => SortOrderSchema).optional(),
  companyId: z.lazy(() => SortOrderSchema).optional(),
  categoryIds: z.lazy(() => SortOrderSchema).optional(),
  businessLikeIds: z.lazy(() => SortOrderSchema).optional(),
  wishListIds: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  company: z.lazy(() => CompanyOrderByWithRelationInputSchema).optional(),
  categories: z.lazy(() => CategoryOrderByRelationAggregateInputSchema).optional(),
  likes: z.lazy(() => BusinessOrderByRelationAggregateInputSchema).optional(),
  wishLists: z.lazy(() => WishListOrderByRelationAggregateInputSchema).optional()
}).strict();

export const ProductWhereUniqueInputSchema: z.ZodType<Prisma.ProductWhereUniqueInput> = z.object({
  id: z.string().optional()
}).strict();

export const ProductOrderByWithAggregationInputSchema: z.ZodType<Prisma.ProductOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  dec: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  oldPrice: z.lazy(() => SortOrderSchema).optional(),
  available: z.lazy(() => SortOrderSchema).optional(),
  hot: z.lazy(() => SortOrderSchema).optional(),
  freeShipping: z.lazy(() => SortOrderSchema).optional(),
  views: z.lazy(() => SortOrderSchema).optional(),
  companyId: z.lazy(() => SortOrderSchema).optional(),
  categoryIds: z.lazy(() => SortOrderSchema).optional(),
  businessLikeIds: z.lazy(() => SortOrderSchema).optional(),
  wishListIds: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ProductCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ProductAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ProductMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ProductMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ProductSumOrderByAggregateInputSchema).optional()
}).strict();

export const ProductScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ProductScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ProductScalarWhereWithAggregatesInputSchema),z.lazy(() => ProductScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProductScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProductScalarWhereWithAggregatesInputSchema),z.lazy(() => ProductScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  dec: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  image: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  price: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  oldPrice: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  available: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  hot: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  freeShipping: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  views: z.lazy(() => StringNullableListFilterSchema).optional(),
  companyId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  categoryIds: z.lazy(() => StringNullableListFilterSchema).optional(),
  businessLikeIds: z.lazy(() => StringNullableListFilterSchema).optional(),
  wishListIds: z.lazy(() => StringNullableListFilterSchema).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const WorkerWhereInputSchema: z.ZodType<Prisma.WorkerWhereInput> = z.object({
  AND: z.union([ z.lazy(() => WorkerWhereInputSchema),z.lazy(() => WorkerWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => WorkerWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => WorkerWhereInputSchema),z.lazy(() => WorkerWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  phoneNumber: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  password: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  role: z.union([ z.lazy(() => EnumWorkerRoleFilterSchema),z.lazy(() => WorkerRoleSchema) ]).optional(),
  companyId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  company: z.union([ z.lazy(() => CompanyRelationFilterSchema),z.lazy(() => CompanyWhereInputSchema) ]).optional(),
}).strict();

export const WorkerOrderByWithRelationInputSchema: z.ZodType<Prisma.WorkerOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  phoneNumber: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  companyId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  company: z.lazy(() => CompanyOrderByWithRelationInputSchema).optional()
}).strict();

export const WorkerWhereUniqueInputSchema: z.ZodType<Prisma.WorkerWhereUniqueInput> = z.object({
  id: z.string().optional(),
  phoneNumber: z.string().optional()
}).strict();

export const WorkerOrderByWithAggregationInputSchema: z.ZodType<Prisma.WorkerOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  phoneNumber: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  companyId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => WorkerCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => WorkerMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => WorkerMinOrderByAggregateInputSchema).optional()
}).strict();

export const WorkerScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.WorkerScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => WorkerScalarWhereWithAggregatesInputSchema),z.lazy(() => WorkerScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => WorkerScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => WorkerScalarWhereWithAggregatesInputSchema),z.lazy(() => WorkerScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  phoneNumber: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  password: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  role: z.union([ z.lazy(() => EnumWorkerRoleWithAggregatesFilterSchema),z.lazy(() => WorkerRoleSchema) ]).optional(),
  companyId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const OrderWhereInputSchema: z.ZodType<Prisma.OrderWhereInput> = z.object({
  AND: z.union([ z.lazy(() => OrderWhereInputSchema),z.lazy(() => OrderWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => OrderWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OrderWhereInputSchema),z.lazy(() => OrderWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  subtotal: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  delivery: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  discount: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  total: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  items: z.union([ z.lazy(() => OrderItemCompositeListFilterSchema),z.lazy(() => OrderItemObjectEqualityInputSchema).array(),z.lazy(() => OrderItemObjectEqualityInputSchema) ]).optional(),
  businessId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  companyId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  couponId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  Business: z.union([ z.lazy(() => BusinessRelationFilterSchema),z.lazy(() => BusinessWhereInputSchema) ]).optional().nullable(),
  Company: z.union([ z.lazy(() => CompanyRelationFilterSchema),z.lazy(() => CompanyWhereInputSchema) ]).optional().nullable(),
  coupon: z.union([ z.lazy(() => CouponRelationFilterSchema),z.lazy(() => CouponWhereInputSchema) ]).optional().nullable(),
}).strict();

export const OrderOrderByWithRelationInputSchema: z.ZodType<Prisma.OrderOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  subtotal: z.lazy(() => SortOrderSchema).optional(),
  delivery: z.lazy(() => SortOrderSchema).optional(),
  discount: z.lazy(() => SortOrderSchema).optional(),
  total: z.lazy(() => SortOrderSchema).optional(),
  items: z.lazy(() => OrderItemOrderByCompositeAggregateInputSchema).optional(),
  businessId: z.lazy(() => SortOrderSchema).optional(),
  companyId: z.lazy(() => SortOrderSchema).optional(),
  couponId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  Business: z.lazy(() => BusinessOrderByWithRelationInputSchema).optional(),
  Company: z.lazy(() => CompanyOrderByWithRelationInputSchema).optional(),
  coupon: z.lazy(() => CouponOrderByWithRelationInputSchema).optional()
}).strict();

export const OrderWhereUniqueInputSchema: z.ZodType<Prisma.OrderWhereUniqueInput> = z.object({
  id: z.string().optional()
}).strict();

export const OrderOrderByWithAggregationInputSchema: z.ZodType<Prisma.OrderOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  subtotal: z.lazy(() => SortOrderSchema).optional(),
  delivery: z.lazy(() => SortOrderSchema).optional(),
  discount: z.lazy(() => SortOrderSchema).optional(),
  total: z.lazy(() => SortOrderSchema).optional(),
  businessId: z.lazy(() => SortOrderSchema).optional(),
  companyId: z.lazy(() => SortOrderSchema).optional(),
  couponId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => OrderCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => OrderAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => OrderMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => OrderMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => OrderSumOrderByAggregateInputSchema).optional()
}).strict();

export const OrderScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.OrderScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => OrderScalarWhereWithAggregatesInputSchema),z.lazy(() => OrderScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => OrderScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OrderScalarWhereWithAggregatesInputSchema),z.lazy(() => OrderScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  subtotal: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  delivery: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  discount: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  total: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  businessId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  companyId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  couponId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const CouponWhereInputSchema: z.ZodType<Prisma.CouponWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CouponWhereInputSchema),z.lazy(() => CouponWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CouponWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CouponWhereInputSchema),z.lazy(() => CouponWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  companyId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  code: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  amount: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  isValid: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  active: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  orders: z.lazy(() => OrderListRelationFilterSchema).optional(),
  Company: z.union([ z.lazy(() => CompanyRelationFilterSchema),z.lazy(() => CompanyWhereInputSchema) ]).optional().nullable(),
}).strict();

export const CouponOrderByWithRelationInputSchema: z.ZodType<Prisma.CouponOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  companyId: z.lazy(() => SortOrderSchema).optional(),
  code: z.lazy(() => SortOrderSchema).optional(),
  amount: z.lazy(() => SortOrderSchema).optional(),
  isValid: z.lazy(() => SortOrderSchema).optional(),
  active: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  orders: z.lazy(() => OrderOrderByRelationAggregateInputSchema).optional(),
  Company: z.lazy(() => CompanyOrderByWithRelationInputSchema).optional()
}).strict();

export const CouponWhereUniqueInputSchema: z.ZodType<Prisma.CouponWhereUniqueInput> = z.object({
  id: z.string().optional()
}).strict();

export const CouponOrderByWithAggregationInputSchema: z.ZodType<Prisma.CouponOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  companyId: z.lazy(() => SortOrderSchema).optional(),
  code: z.lazy(() => SortOrderSchema).optional(),
  amount: z.lazy(() => SortOrderSchema).optional(),
  isValid: z.lazy(() => SortOrderSchema).optional(),
  active: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => CouponCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => CouponAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CouponMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CouponMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => CouponSumOrderByAggregateInputSchema).optional()
}).strict();

export const CouponScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.CouponScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => CouponScalarWhereWithAggregatesInputSchema),z.lazy(() => CouponScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => CouponScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CouponScalarWhereWithAggregatesInputSchema),z.lazy(() => CouponScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  companyId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  code: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  amount: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  isValid: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  active: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const CategoryWhereInputSchema: z.ZodType<Prisma.CategoryWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CategoryWhereInputSchema),z.lazy(() => CategoryWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CategoryWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CategoryWhereInputSchema),z.lazy(() => CategoryWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  companyId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  productsIds: z.lazy(() => StringNullableListFilterSchema).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  company: z.union([ z.lazy(() => CompanyRelationFilterSchema),z.lazy(() => CompanyWhereInputSchema) ]).optional(),
  products: z.lazy(() => ProductListRelationFilterSchema).optional()
}).strict();

export const CategoryOrderByWithRelationInputSchema: z.ZodType<Prisma.CategoryOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  companyId: z.lazy(() => SortOrderSchema).optional(),
  productsIds: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  company: z.lazy(() => CompanyOrderByWithRelationInputSchema).optional(),
  products: z.lazy(() => ProductOrderByRelationAggregateInputSchema).optional()
}).strict();

export const CategoryWhereUniqueInputSchema: z.ZodType<Prisma.CategoryWhereUniqueInput> = z.object({
  id: z.string().optional()
}).strict();

export const CategoryOrderByWithAggregationInputSchema: z.ZodType<Prisma.CategoryOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  companyId: z.lazy(() => SortOrderSchema).optional(),
  productsIds: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => CategoryCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CategoryMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CategoryMinOrderByAggregateInputSchema).optional()
}).strict();

export const CategoryScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.CategoryScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => CategoryScalarWhereWithAggregatesInputSchema),z.lazy(() => CategoryScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => CategoryScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CategoryScalarWhereWithAggregatesInputSchema),z.lazy(() => CategoryScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  companyId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  productsIds: z.lazy(() => StringNullableListFilterSchema).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const BusinessCreateInputSchema: z.ZodType<Prisma.BusinessCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  password: z.string(),
  phoneNumber: z.string(),
  state: z.string(),
  location: z.string(),
  neighborhood: z.string(),
  type: z.lazy(() => BusinessTypeSchema),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  orders: z.lazy(() => OrderCreateNestedManyWithoutBusinessInputSchema).optional(),
  wishLists: z.lazy(() => WishListCreateNestedManyWithoutBusinessInputSchema).optional(),
  likedProducts: z.lazy(() => ProductCreateNestedManyWithoutLikesInputSchema).optional()
}).strict();

export const BusinessUncheckedCreateInputSchema: z.ZodType<Prisma.BusinessUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  password: z.string(),
  phoneNumber: z.string(),
  state: z.string(),
  location: z.string(),
  neighborhood: z.string(),
  type: z.lazy(() => BusinessTypeSchema),
  productsLikedIds: z.union([ z.lazy(() => BusinessCreateproductsLikedIdsInputSchema),z.string().array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  orders: z.lazy(() => OrderUncheckedCreateNestedManyWithoutBusinessInputSchema).optional(),
  wishLists: z.lazy(() => WishListUncheckedCreateNestedManyWithoutBusinessInputSchema).optional(),
  likedProducts: z.lazy(() => ProductUncheckedCreateNestedManyWithoutLikesInputSchema).optional()
}).strict();

export const BusinessUpdateInputSchema: z.ZodType<Prisma.BusinessUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phoneNumber: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  state: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  location: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  neighborhood: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => BusinessTypeSchema),z.lazy(() => EnumBusinessTypeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  orders: z.lazy(() => OrderUpdateManyWithoutBusinessNestedInputSchema).optional(),
  wishLists: z.lazy(() => WishListUpdateManyWithoutBusinessNestedInputSchema).optional(),
  likedProducts: z.lazy(() => ProductUpdateManyWithoutLikesNestedInputSchema).optional()
}).strict();

export const BusinessUncheckedUpdateInputSchema: z.ZodType<Prisma.BusinessUncheckedUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phoneNumber: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  state: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  location: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  neighborhood: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => BusinessTypeSchema),z.lazy(() => EnumBusinessTypeFieldUpdateOperationsInputSchema) ]).optional(),
  productsLikedIds: z.union([ z.lazy(() => BusinessUpdateproductsLikedIdsInputSchema),z.string().array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  orders: z.lazy(() => OrderUncheckedUpdateManyWithoutBusinessNestedInputSchema).optional(),
  wishLists: z.lazy(() => WishListUncheckedUpdateManyWithoutBusinessNestedInputSchema).optional(),
  likedProducts: z.lazy(() => ProductUncheckedUpdateManyWithoutLikesNestedInputSchema).optional()
}).strict();

export const BusinessCreateManyInputSchema: z.ZodType<Prisma.BusinessCreateManyInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  password: z.string(),
  phoneNumber: z.string(),
  state: z.string(),
  location: z.string(),
  neighborhood: z.string(),
  type: z.lazy(() => BusinessTypeSchema),
  productsLikedIds: z.union([ z.lazy(() => BusinessCreateproductsLikedIdsInputSchema),z.string().array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const BusinessUpdateManyMutationInputSchema: z.ZodType<Prisma.BusinessUpdateManyMutationInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phoneNumber: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  state: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  location: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  neighborhood: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => BusinessTypeSchema),z.lazy(() => EnumBusinessTypeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const BusinessUncheckedUpdateManyInputSchema: z.ZodType<Prisma.BusinessUncheckedUpdateManyInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phoneNumber: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  state: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  location: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  neighborhood: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => BusinessTypeSchema),z.lazy(() => EnumBusinessTypeFieldUpdateOperationsInputSchema) ]).optional(),
  productsLikedIds: z.union([ z.lazy(() => BusinessUpdateproductsLikedIdsInputSchema),z.string().array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const WishListCreateInputSchema: z.ZodType<Prisma.WishListCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  Business: z.lazy(() => BusinessCreateNestedOneWithoutWishListsInputSchema),
  company: z.lazy(() => CompanyCreateNestedOneWithoutWishListInputSchema),
  products: z.lazy(() => ProductCreateNestedManyWithoutWishListsInputSchema).optional()
}).strict();

export const WishListUncheckedCreateInputSchema: z.ZodType<Prisma.WishListUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  businessId: z.string(),
  companyId: z.string(),
  productsIds: z.union([ z.lazy(() => WishListCreateproductsIdsInputSchema),z.string().array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  products: z.lazy(() => ProductUncheckedCreateNestedManyWithoutWishListsInputSchema).optional()
}).strict();

export const WishListUpdateInputSchema: z.ZodType<Prisma.WishListUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Business: z.lazy(() => BusinessUpdateOneRequiredWithoutWishListsNestedInputSchema).optional(),
  company: z.lazy(() => CompanyUpdateOneRequiredWithoutWishListNestedInputSchema).optional(),
  products: z.lazy(() => ProductUpdateManyWithoutWishListsNestedInputSchema).optional()
}).strict();

export const WishListUncheckedUpdateInputSchema: z.ZodType<Prisma.WishListUncheckedUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  businessId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  companyId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  productsIds: z.union([ z.lazy(() => WishListUpdateproductsIdsInputSchema),z.string().array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  products: z.lazy(() => ProductUncheckedUpdateManyWithoutWishListsNestedInputSchema).optional()
}).strict();

export const WishListCreateManyInputSchema: z.ZodType<Prisma.WishListCreateManyInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  businessId: z.string(),
  companyId: z.string(),
  productsIds: z.union([ z.lazy(() => WishListCreateproductsIdsInputSchema),z.string().array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const WishListUpdateManyMutationInputSchema: z.ZodType<Prisma.WishListUpdateManyMutationInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const WishListUncheckedUpdateManyInputSchema: z.ZodType<Prisma.WishListUncheckedUpdateManyInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  businessId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  companyId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  productsIds: z.union([ z.lazy(() => WishListUpdateproductsIdsInputSchema),z.string().array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CompanyCreateInputSchema: z.ZodType<Prisma.CompanyCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  type: z.lazy(() => BusinessTypeSchema),
  active: z.boolean().optional(),
  logo: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  products: z.lazy(() => ProductCreateNestedManyWithoutCompanyInputSchema).optional(),
  orders: z.lazy(() => OrderCreateNestedManyWithoutCompanyInputSchema).optional(),
  workers: z.lazy(() => WorkerCreateNestedManyWithoutCompanyInputSchema).optional(),
  coupons: z.lazy(() => CouponCreateNestedManyWithoutCompanyInputSchema).optional(),
  WishList: z.lazy(() => WishListCreateNestedManyWithoutCompanyInputSchema).optional(),
  categories: z.lazy(() => CategoryCreateNestedManyWithoutCompanyInputSchema).optional()
}).strict();

export const CompanyUncheckedCreateInputSchema: z.ZodType<Prisma.CompanyUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  type: z.lazy(() => BusinessTypeSchema),
  active: z.boolean().optional(),
  logo: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  products: z.lazy(() => ProductUncheckedCreateNestedManyWithoutCompanyInputSchema).optional(),
  orders: z.lazy(() => OrderUncheckedCreateNestedManyWithoutCompanyInputSchema).optional(),
  workers: z.lazy(() => WorkerUncheckedCreateNestedManyWithoutCompanyInputSchema).optional(),
  coupons: z.lazy(() => CouponUncheckedCreateNestedManyWithoutCompanyInputSchema).optional(),
  WishList: z.lazy(() => WishListUncheckedCreateNestedManyWithoutCompanyInputSchema).optional(),
  categories: z.lazy(() => CategoryUncheckedCreateNestedManyWithoutCompanyInputSchema).optional()
}).strict();

export const CompanyUpdateInputSchema: z.ZodType<Prisma.CompanyUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => BusinessTypeSchema),z.lazy(() => EnumBusinessTypeFieldUpdateOperationsInputSchema) ]).optional(),
  active: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  logo: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  products: z.lazy(() => ProductUpdateManyWithoutCompanyNestedInputSchema).optional(),
  orders: z.lazy(() => OrderUpdateManyWithoutCompanyNestedInputSchema).optional(),
  workers: z.lazy(() => WorkerUpdateManyWithoutCompanyNestedInputSchema).optional(),
  coupons: z.lazy(() => CouponUpdateManyWithoutCompanyNestedInputSchema).optional(),
  WishList: z.lazy(() => WishListUpdateManyWithoutCompanyNestedInputSchema).optional(),
  categories: z.lazy(() => CategoryUpdateManyWithoutCompanyNestedInputSchema).optional()
}).strict();

export const CompanyUncheckedUpdateInputSchema: z.ZodType<Prisma.CompanyUncheckedUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => BusinessTypeSchema),z.lazy(() => EnumBusinessTypeFieldUpdateOperationsInputSchema) ]).optional(),
  active: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  logo: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  products: z.lazy(() => ProductUncheckedUpdateManyWithoutCompanyNestedInputSchema).optional(),
  orders: z.lazy(() => OrderUncheckedUpdateManyWithoutCompanyNestedInputSchema).optional(),
  workers: z.lazy(() => WorkerUncheckedUpdateManyWithoutCompanyNestedInputSchema).optional(),
  coupons: z.lazy(() => CouponUncheckedUpdateManyWithoutCompanyNestedInputSchema).optional(),
  WishList: z.lazy(() => WishListUncheckedUpdateManyWithoutCompanyNestedInputSchema).optional(),
  categories: z.lazy(() => CategoryUncheckedUpdateManyWithoutCompanyNestedInputSchema).optional()
}).strict();

export const CompanyCreateManyInputSchema: z.ZodType<Prisma.CompanyCreateManyInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  type: z.lazy(() => BusinessTypeSchema),
  active: z.boolean().optional(),
  logo: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const CompanyUpdateManyMutationInputSchema: z.ZodType<Prisma.CompanyUpdateManyMutationInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => BusinessTypeSchema),z.lazy(() => EnumBusinessTypeFieldUpdateOperationsInputSchema) ]).optional(),
  active: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  logo: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CompanyUncheckedUpdateManyInputSchema: z.ZodType<Prisma.CompanyUncheckedUpdateManyInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => BusinessTypeSchema),z.lazy(() => EnumBusinessTypeFieldUpdateOperationsInputSchema) ]).optional(),
  active: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  logo: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ProductCreateInputSchema: z.ZodType<Prisma.ProductCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  dec: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
  price: z.number().int(),
  oldPrice: z.number().int().optional().nullable(),
  available: z.boolean().optional(),
  hot: z.boolean().optional(),
  freeShipping: z.boolean().optional(),
  views: z.union([ z.lazy(() => ProductCreateviewsInputSchema),z.string().array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  company: z.lazy(() => CompanyCreateNestedOneWithoutProductsInputSchema),
  categories: z.lazy(() => CategoryCreateNestedManyWithoutProductsInputSchema).optional(),
  likes: z.lazy(() => BusinessCreateNestedManyWithoutLikedProductsInputSchema).optional(),
  wishLists: z.lazy(() => WishListCreateNestedManyWithoutProductsInputSchema).optional()
}).strict();

export const ProductUncheckedCreateInputSchema: z.ZodType<Prisma.ProductUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  dec: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
  price: z.number().int(),
  oldPrice: z.number().int().optional().nullable(),
  available: z.boolean().optional(),
  hot: z.boolean().optional(),
  freeShipping: z.boolean().optional(),
  views: z.union([ z.lazy(() => ProductCreateviewsInputSchema),z.string().array() ]).optional(),
  companyId: z.string(),
  categoryIds: z.union([ z.lazy(() => ProductCreatecategoryIdsInputSchema),z.string().array() ]).optional(),
  businessLikeIds: z.union([ z.lazy(() => ProductCreatebusinessLikeIdsInputSchema),z.string().array() ]).optional(),
  wishListIds: z.union([ z.lazy(() => ProductCreatewishListIdsInputSchema),z.string().array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  categories: z.lazy(() => CategoryUncheckedCreateNestedManyWithoutProductsInputSchema).optional(),
  likes: z.lazy(() => BusinessUncheckedCreateNestedManyWithoutLikedProductsInputSchema).optional(),
  wishLists: z.lazy(() => WishListUncheckedCreateNestedManyWithoutProductsInputSchema).optional()
}).strict();

export const ProductUpdateInputSchema: z.ZodType<Prisma.ProductUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dec: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  price: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  oldPrice: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  available: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  hot: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  freeShipping: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  views: z.union([ z.lazy(() => ProductUpdateviewsInputSchema),z.string().array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  company: z.lazy(() => CompanyUpdateOneRequiredWithoutProductsNestedInputSchema).optional(),
  categories: z.lazy(() => CategoryUpdateManyWithoutProductsNestedInputSchema).optional(),
  likes: z.lazy(() => BusinessUpdateManyWithoutLikedProductsNestedInputSchema).optional(),
  wishLists: z.lazy(() => WishListUpdateManyWithoutProductsNestedInputSchema).optional()
}).strict();

export const ProductUncheckedUpdateInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dec: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  price: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  oldPrice: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  available: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  hot: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  freeShipping: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  views: z.union([ z.lazy(() => ProductUpdateviewsInputSchema),z.string().array() ]).optional(),
  companyId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  categoryIds: z.union([ z.lazy(() => ProductUpdatecategoryIdsInputSchema),z.string().array() ]).optional(),
  businessLikeIds: z.union([ z.lazy(() => ProductUpdatebusinessLikeIdsInputSchema),z.string().array() ]).optional(),
  wishListIds: z.union([ z.lazy(() => ProductUpdatewishListIdsInputSchema),z.string().array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  categories: z.lazy(() => CategoryUncheckedUpdateManyWithoutProductsNestedInputSchema).optional(),
  likes: z.lazy(() => BusinessUncheckedUpdateManyWithoutLikedProductsNestedInputSchema).optional(),
  wishLists: z.lazy(() => WishListUncheckedUpdateManyWithoutProductsNestedInputSchema).optional()
}).strict();

export const ProductCreateManyInputSchema: z.ZodType<Prisma.ProductCreateManyInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  dec: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
  price: z.number().int(),
  oldPrice: z.number().int().optional().nullable(),
  available: z.boolean().optional(),
  hot: z.boolean().optional(),
  freeShipping: z.boolean().optional(),
  views: z.union([ z.lazy(() => ProductCreateviewsInputSchema),z.string().array() ]).optional(),
  companyId: z.string(),
  categoryIds: z.union([ z.lazy(() => ProductCreatecategoryIdsInputSchema),z.string().array() ]).optional(),
  businessLikeIds: z.union([ z.lazy(() => ProductCreatebusinessLikeIdsInputSchema),z.string().array() ]).optional(),
  wishListIds: z.union([ z.lazy(() => ProductCreatewishListIdsInputSchema),z.string().array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const ProductUpdateManyMutationInputSchema: z.ZodType<Prisma.ProductUpdateManyMutationInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dec: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  price: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  oldPrice: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  available: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  hot: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  freeShipping: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  views: z.union([ z.lazy(() => ProductUpdateviewsInputSchema),z.string().array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ProductUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateManyInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dec: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  price: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  oldPrice: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  available: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  hot: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  freeShipping: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  views: z.union([ z.lazy(() => ProductUpdateviewsInputSchema),z.string().array() ]).optional(),
  companyId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  categoryIds: z.union([ z.lazy(() => ProductUpdatecategoryIdsInputSchema),z.string().array() ]).optional(),
  businessLikeIds: z.union([ z.lazy(() => ProductUpdatebusinessLikeIdsInputSchema),z.string().array() ]).optional(),
  wishListIds: z.union([ z.lazy(() => ProductUpdatewishListIdsInputSchema),z.string().array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const WorkerCreateInputSchema: z.ZodType<Prisma.WorkerCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  phoneNumber: z.string(),
  password: z.string(),
  role: z.lazy(() => WorkerRoleSchema),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  company: z.lazy(() => CompanyCreateNestedOneWithoutWorkersInputSchema)
}).strict();

export const WorkerUncheckedCreateInputSchema: z.ZodType<Prisma.WorkerUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  phoneNumber: z.string(),
  password: z.string(),
  role: z.lazy(() => WorkerRoleSchema),
  companyId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const WorkerUpdateInputSchema: z.ZodType<Prisma.WorkerUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phoneNumber: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => WorkerRoleSchema),z.lazy(() => EnumWorkerRoleFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  company: z.lazy(() => CompanyUpdateOneRequiredWithoutWorkersNestedInputSchema).optional()
}).strict();

export const WorkerUncheckedUpdateInputSchema: z.ZodType<Prisma.WorkerUncheckedUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phoneNumber: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => WorkerRoleSchema),z.lazy(() => EnumWorkerRoleFieldUpdateOperationsInputSchema) ]).optional(),
  companyId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const WorkerCreateManyInputSchema: z.ZodType<Prisma.WorkerCreateManyInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  phoneNumber: z.string(),
  password: z.string(),
  role: z.lazy(() => WorkerRoleSchema),
  companyId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const WorkerUpdateManyMutationInputSchema: z.ZodType<Prisma.WorkerUpdateManyMutationInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phoneNumber: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => WorkerRoleSchema),z.lazy(() => EnumWorkerRoleFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const WorkerUncheckedUpdateManyInputSchema: z.ZodType<Prisma.WorkerUncheckedUpdateManyInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phoneNumber: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => WorkerRoleSchema),z.lazy(() => EnumWorkerRoleFieldUpdateOperationsInputSchema) ]).optional(),
  companyId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const OrderCreateInputSchema: z.ZodType<Prisma.OrderCreateInput> = z.object({
  id: z.string().optional(),
  subtotal: z.number(),
  delivery: z.number(),
  discount: z.number(),
  total: z.number(),
  items: z.union([ z.lazy(() => OrderItemListCreateEnvelopeInputSchema),z.lazy(() => OrderItemCreateInputSchema),z.lazy(() => OrderItemCreateInputSchema).array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  Business: z.lazy(() => BusinessCreateNestedOneWithoutOrdersInputSchema).optional(),
  Company: z.lazy(() => CompanyCreateNestedOneWithoutOrdersInputSchema).optional(),
  coupon: z.lazy(() => CouponCreateNestedOneWithoutOrdersInputSchema).optional()
}).strict();

export const OrderUncheckedCreateInputSchema: z.ZodType<Prisma.OrderUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  subtotal: z.number(),
  delivery: z.number(),
  discount: z.number(),
  total: z.number(),
  items: z.union([ z.lazy(() => OrderItemListCreateEnvelopeInputSchema),z.lazy(() => OrderItemCreateInputSchema),z.lazy(() => OrderItemCreateInputSchema).array() ]).optional(),
  businessId: z.string().optional().nullable(),
  companyId: z.string().optional().nullable(),
  couponId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const OrderUpdateInputSchema: z.ZodType<Prisma.OrderUpdateInput> = z.object({
  subtotal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  delivery: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  discount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  total: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  items: z.union([ z.lazy(() => OrderItemListUpdateEnvelopeInputSchema),z.lazy(() => OrderItemCreateInputSchema),z.lazy(() => OrderItemCreateInputSchema).array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Business: z.lazy(() => BusinessUpdateOneWithoutOrdersNestedInputSchema).optional(),
  Company: z.lazy(() => CompanyUpdateOneWithoutOrdersNestedInputSchema).optional(),
  coupon: z.lazy(() => CouponUpdateOneWithoutOrdersNestedInputSchema).optional()
}).strict();

export const OrderUncheckedUpdateInputSchema: z.ZodType<Prisma.OrderUncheckedUpdateInput> = z.object({
  subtotal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  delivery: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  discount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  total: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  items: z.union([ z.lazy(() => OrderItemListUpdateEnvelopeInputSchema),z.lazy(() => OrderItemCreateInputSchema),z.lazy(() => OrderItemCreateInputSchema).array() ]).optional(),
  businessId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  companyId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  couponId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const OrderCreateManyInputSchema: z.ZodType<Prisma.OrderCreateManyInput> = z.object({
  id: z.string().optional(),
  subtotal: z.number(),
  delivery: z.number(),
  discount: z.number(),
  total: z.number(),
  items: z.union([ z.lazy(() => OrderItemListCreateEnvelopeInputSchema),z.lazy(() => OrderItemCreateInputSchema),z.lazy(() => OrderItemCreateInputSchema).array() ]).optional(),
  businessId: z.string().optional().nullable(),
  companyId: z.string().optional().nullable(),
  couponId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const OrderUpdateManyMutationInputSchema: z.ZodType<Prisma.OrderUpdateManyMutationInput> = z.object({
  subtotal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  delivery: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  discount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  total: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  items: z.union([ z.lazy(() => OrderItemListUpdateEnvelopeInputSchema),z.lazy(() => OrderItemCreateInputSchema),z.lazy(() => OrderItemCreateInputSchema).array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const OrderUncheckedUpdateManyInputSchema: z.ZodType<Prisma.OrderUncheckedUpdateManyInput> = z.object({
  subtotal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  delivery: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  discount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  total: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  items: z.union([ z.lazy(() => OrderItemListUpdateEnvelopeInputSchema),z.lazy(() => OrderItemCreateInputSchema),z.lazy(() => OrderItemCreateInputSchema).array() ]).optional(),
  businessId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  companyId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  couponId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CouponCreateInputSchema: z.ZodType<Prisma.CouponCreateInput> = z.object({
  id: z.string().optional(),
  code: z.string(),
  amount: z.number(),
  isValid: z.boolean(),
  active: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  orders: z.lazy(() => OrderCreateNestedManyWithoutCouponInputSchema).optional(),
  Company: z.lazy(() => CompanyCreateNestedOneWithoutCouponsInputSchema).optional()
}).strict();

export const CouponUncheckedCreateInputSchema: z.ZodType<Prisma.CouponUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  companyId: z.string().optional().nullable(),
  code: z.string(),
  amount: z.number(),
  isValid: z.boolean(),
  active: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  orders: z.lazy(() => OrderUncheckedCreateNestedManyWithoutCouponInputSchema).optional()
}).strict();

export const CouponUpdateInputSchema: z.ZodType<Prisma.CouponUpdateInput> = z.object({
  code: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  amount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  isValid: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  active: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  orders: z.lazy(() => OrderUpdateManyWithoutCouponNestedInputSchema).optional(),
  Company: z.lazy(() => CompanyUpdateOneWithoutCouponsNestedInputSchema).optional()
}).strict();

export const CouponUncheckedUpdateInputSchema: z.ZodType<Prisma.CouponUncheckedUpdateInput> = z.object({
  companyId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  code: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  amount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  isValid: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  active: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  orders: z.lazy(() => OrderUncheckedUpdateManyWithoutCouponNestedInputSchema).optional()
}).strict();

export const CouponCreateManyInputSchema: z.ZodType<Prisma.CouponCreateManyInput> = z.object({
  id: z.string().optional(),
  companyId: z.string().optional().nullable(),
  code: z.string(),
  amount: z.number(),
  isValid: z.boolean(),
  active: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const CouponUpdateManyMutationInputSchema: z.ZodType<Prisma.CouponUpdateManyMutationInput> = z.object({
  code: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  amount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  isValid: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  active: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CouponUncheckedUpdateManyInputSchema: z.ZodType<Prisma.CouponUncheckedUpdateManyInput> = z.object({
  companyId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  code: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  amount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  isValid: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  active: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CategoryCreateInputSchema: z.ZodType<Prisma.CategoryCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  company: z.lazy(() => CompanyCreateNestedOneWithoutCategoriesInputSchema),
  products: z.lazy(() => ProductCreateNestedManyWithoutCategoriesInputSchema).optional()
}).strict();

export const CategoryUncheckedCreateInputSchema: z.ZodType<Prisma.CategoryUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  companyId: z.string(),
  productsIds: z.union([ z.lazy(() => CategoryCreateproductsIdsInputSchema),z.string().array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  products: z.lazy(() => ProductUncheckedCreateNestedManyWithoutCategoriesInputSchema).optional()
}).strict();

export const CategoryUpdateInputSchema: z.ZodType<Prisma.CategoryUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  company: z.lazy(() => CompanyUpdateOneRequiredWithoutCategoriesNestedInputSchema).optional(),
  products: z.lazy(() => ProductUpdateManyWithoutCategoriesNestedInputSchema).optional()
}).strict();

export const CategoryUncheckedUpdateInputSchema: z.ZodType<Prisma.CategoryUncheckedUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  companyId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  productsIds: z.union([ z.lazy(() => CategoryUpdateproductsIdsInputSchema),z.string().array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  products: z.lazy(() => ProductUncheckedUpdateManyWithoutCategoriesNestedInputSchema).optional()
}).strict();

export const CategoryCreateManyInputSchema: z.ZodType<Prisma.CategoryCreateManyInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  companyId: z.string(),
  productsIds: z.union([ z.lazy(() => CategoryCreateproductsIdsInputSchema),z.string().array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const CategoryUpdateManyMutationInputSchema: z.ZodType<Prisma.CategoryUpdateManyMutationInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CategoryUncheckedUpdateManyInputSchema: z.ZodType<Prisma.CategoryUncheckedUpdateManyInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  companyId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  productsIds: z.union([ z.lazy(() => CategoryUpdateproductsIdsInputSchema),z.string().array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const EnumBusinessTypeFilterSchema: z.ZodType<Prisma.EnumBusinessTypeFilter> = z.object({
  equals: z.lazy(() => BusinessTypeSchema).optional(),
  in: z.lazy(() => BusinessTypeSchema).array().optional(),
  notIn: z.lazy(() => BusinessTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => BusinessTypeSchema),z.lazy(() => NestedEnumBusinessTypeFilterSchema) ]).optional(),
}).strict();

export const StringNullableListFilterSchema: z.ZodType<Prisma.StringNullableListFilter> = z.object({
  equals: z.string().array().optional().nullable(),
  has: z.string().optional().nullable(),
  hasEvery: z.string().array().optional(),
  hasSome: z.string().array().optional(),
  isEmpty: z.boolean().optional()
}).strict();

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const OrderListRelationFilterSchema: z.ZodType<Prisma.OrderListRelationFilter> = z.object({
  every: z.lazy(() => OrderWhereInputSchema).optional(),
  some: z.lazy(() => OrderWhereInputSchema).optional(),
  none: z.lazy(() => OrderWhereInputSchema).optional()
}).strict();

export const WishListListRelationFilterSchema: z.ZodType<Prisma.WishListListRelationFilter> = z.object({
  every: z.lazy(() => WishListWhereInputSchema).optional(),
  some: z.lazy(() => WishListWhereInputSchema).optional(),
  none: z.lazy(() => WishListWhereInputSchema).optional()
}).strict();

export const ProductListRelationFilterSchema: z.ZodType<Prisma.ProductListRelationFilter> = z.object({
  every: z.lazy(() => ProductWhereInputSchema).optional(),
  some: z.lazy(() => ProductWhereInputSchema).optional(),
  none: z.lazy(() => ProductWhereInputSchema).optional()
}).strict();

export const OrderOrderByRelationAggregateInputSchema: z.ZodType<Prisma.OrderOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const WishListOrderByRelationAggregateInputSchema: z.ZodType<Prisma.WishListOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProductOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ProductOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BusinessCountOrderByAggregateInputSchema: z.ZodType<Prisma.BusinessCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  phoneNumber: z.lazy(() => SortOrderSchema).optional(),
  state: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional(),
  neighborhood: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  productsLikedIds: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BusinessMaxOrderByAggregateInputSchema: z.ZodType<Prisma.BusinessMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  phoneNumber: z.lazy(() => SortOrderSchema).optional(),
  state: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional(),
  neighborhood: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BusinessMinOrderByAggregateInputSchema: z.ZodType<Prisma.BusinessMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  phoneNumber: z.lazy(() => SortOrderSchema).optional(),
  state: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional(),
  neighborhood: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const EnumBusinessTypeWithAggregatesFilterSchema: z.ZodType<Prisma.EnumBusinessTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => BusinessTypeSchema).optional(),
  in: z.lazy(() => BusinessTypeSchema).array().optional(),
  notIn: z.lazy(() => BusinessTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => BusinessTypeSchema),z.lazy(() => NestedEnumBusinessTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumBusinessTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumBusinessTypeFilterSchema).optional()
}).strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const BusinessRelationFilterSchema: z.ZodType<Prisma.BusinessRelationFilter> = z.object({
  is: z.lazy(() => BusinessWhereInputSchema).optional(),
  isNot: z.lazy(() => BusinessWhereInputSchema).optional()
}).strict();

export const CompanyRelationFilterSchema: z.ZodType<Prisma.CompanyRelationFilter> = z.object({
  is: z.lazy(() => CompanyWhereInputSchema).optional(),
  isNot: z.lazy(() => CompanyWhereInputSchema).optional()
}).strict();

export const WishListCountOrderByAggregateInputSchema: z.ZodType<Prisma.WishListCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  businessId: z.lazy(() => SortOrderSchema).optional(),
  companyId: z.lazy(() => SortOrderSchema).optional(),
  productsIds: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const WishListMaxOrderByAggregateInputSchema: z.ZodType<Prisma.WishListMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  businessId: z.lazy(() => SortOrderSchema).optional(),
  companyId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const WishListMinOrderByAggregateInputSchema: z.ZodType<Prisma.WishListMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  businessId: z.lazy(() => SortOrderSchema).optional(),
  companyId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BoolFilterSchema: z.ZodType<Prisma.BoolFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolFilterSchema) ]).optional(),
}).strict();

export const WorkerListRelationFilterSchema: z.ZodType<Prisma.WorkerListRelationFilter> = z.object({
  every: z.lazy(() => WorkerWhereInputSchema).optional(),
  some: z.lazy(() => WorkerWhereInputSchema).optional(),
  none: z.lazy(() => WorkerWhereInputSchema).optional()
}).strict();

export const CouponListRelationFilterSchema: z.ZodType<Prisma.CouponListRelationFilter> = z.object({
  every: z.lazy(() => CouponWhereInputSchema).optional(),
  some: z.lazy(() => CouponWhereInputSchema).optional(),
  none: z.lazy(() => CouponWhereInputSchema).optional()
}).strict();

export const CategoryListRelationFilterSchema: z.ZodType<Prisma.CategoryListRelationFilter> = z.object({
  every: z.lazy(() => CategoryWhereInputSchema).optional(),
  some: z.lazy(() => CategoryWhereInputSchema).optional(),
  none: z.lazy(() => CategoryWhereInputSchema).optional()
}).strict();

export const WorkerOrderByRelationAggregateInputSchema: z.ZodType<Prisma.WorkerOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CouponOrderByRelationAggregateInputSchema: z.ZodType<Prisma.CouponOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CategoryOrderByRelationAggregateInputSchema: z.ZodType<Prisma.CategoryOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CompanyCountOrderByAggregateInputSchema: z.ZodType<Prisma.CompanyCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  active: z.lazy(() => SortOrderSchema).optional(),
  logo: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CompanyMaxOrderByAggregateInputSchema: z.ZodType<Prisma.CompanyMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  active: z.lazy(() => SortOrderSchema).optional(),
  logo: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CompanyMinOrderByAggregateInputSchema: z.ZodType<Prisma.CompanyMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  active: z.lazy(() => SortOrderSchema).optional(),
  logo: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BoolWithAggregatesFilterSchema: z.ZodType<Prisma.BoolWithAggregatesFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterSchema).optional()
}).strict();

export const StringNullableFilterSchema: z.ZodType<Prisma.StringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
  isSet: z.boolean().optional()
}).strict();

export const IntFilterSchema: z.ZodType<Prisma.IntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const IntNullableFilterSchema: z.ZodType<Prisma.IntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
  isSet: z.boolean().optional()
}).strict();

export const BusinessListRelationFilterSchema: z.ZodType<Prisma.BusinessListRelationFilter> = z.object({
  every: z.lazy(() => BusinessWhereInputSchema).optional(),
  some: z.lazy(() => BusinessWhereInputSchema).optional(),
  none: z.lazy(() => BusinessWhereInputSchema).optional()
}).strict();

export const BusinessOrderByRelationAggregateInputSchema: z.ZodType<Prisma.BusinessOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProductCountOrderByAggregateInputSchema: z.ZodType<Prisma.ProductCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  dec: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  oldPrice: z.lazy(() => SortOrderSchema).optional(),
  available: z.lazy(() => SortOrderSchema).optional(),
  hot: z.lazy(() => SortOrderSchema).optional(),
  freeShipping: z.lazy(() => SortOrderSchema).optional(),
  views: z.lazy(() => SortOrderSchema).optional(),
  companyId: z.lazy(() => SortOrderSchema).optional(),
  categoryIds: z.lazy(() => SortOrderSchema).optional(),
  businessLikeIds: z.lazy(() => SortOrderSchema).optional(),
  wishListIds: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProductAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ProductAvgOrderByAggregateInput> = z.object({
  price: z.lazy(() => SortOrderSchema).optional(),
  oldPrice: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProductMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ProductMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  dec: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  oldPrice: z.lazy(() => SortOrderSchema).optional(),
  available: z.lazy(() => SortOrderSchema).optional(),
  hot: z.lazy(() => SortOrderSchema).optional(),
  freeShipping: z.lazy(() => SortOrderSchema).optional(),
  companyId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProductMinOrderByAggregateInputSchema: z.ZodType<Prisma.ProductMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  dec: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  oldPrice: z.lazy(() => SortOrderSchema).optional(),
  available: z.lazy(() => SortOrderSchema).optional(),
  hot: z.lazy(() => SortOrderSchema).optional(),
  freeShipping: z.lazy(() => SortOrderSchema).optional(),
  companyId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProductSumOrderByAggregateInputSchema: z.ZodType<Prisma.ProductSumOrderByAggregateInput> = z.object({
  price: z.lazy(() => SortOrderSchema).optional(),
  oldPrice: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.StringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  isSet: z.boolean().optional()
}).strict();

export const IntWithAggregatesFilterSchema: z.ZodType<Prisma.IntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const IntNullableWithAggregatesFilterSchema: z.ZodType<Prisma.IntNullableWithAggregatesFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  isSet: z.boolean().optional()
}).strict();

export const EnumWorkerRoleFilterSchema: z.ZodType<Prisma.EnumWorkerRoleFilter> = z.object({
  equals: z.lazy(() => WorkerRoleSchema).optional(),
  in: z.lazy(() => WorkerRoleSchema).array().optional(),
  notIn: z.lazy(() => WorkerRoleSchema).array().optional(),
  not: z.union([ z.lazy(() => WorkerRoleSchema),z.lazy(() => NestedEnumWorkerRoleFilterSchema) ]).optional(),
}).strict();

export const WorkerCountOrderByAggregateInputSchema: z.ZodType<Prisma.WorkerCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  phoneNumber: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  companyId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const WorkerMaxOrderByAggregateInputSchema: z.ZodType<Prisma.WorkerMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  phoneNumber: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  companyId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const WorkerMinOrderByAggregateInputSchema: z.ZodType<Prisma.WorkerMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  phoneNumber: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  companyId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EnumWorkerRoleWithAggregatesFilterSchema: z.ZodType<Prisma.EnumWorkerRoleWithAggregatesFilter> = z.object({
  equals: z.lazy(() => WorkerRoleSchema).optional(),
  in: z.lazy(() => WorkerRoleSchema).array().optional(),
  notIn: z.lazy(() => WorkerRoleSchema).array().optional(),
  not: z.union([ z.lazy(() => WorkerRoleSchema),z.lazy(() => NestedEnumWorkerRoleWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumWorkerRoleFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumWorkerRoleFilterSchema).optional()
}).strict();

export const FloatFilterSchema: z.ZodType<Prisma.FloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict();

export const OrderItemCompositeListFilterSchema: z.ZodType<Prisma.OrderItemCompositeListFilter> = z.object({
  equals: z.union([ z.lazy(() => OrderItemObjectEqualityInputSchema),z.lazy(() => OrderItemObjectEqualityInputSchema).array() ]).optional(),
  every: z.lazy(() => OrderItemWhereInputSchema).optional(),
  some: z.lazy(() => OrderItemWhereInputSchema).optional(),
  none: z.lazy(() => OrderItemWhereInputSchema).optional(),
  isEmpty: z.boolean().optional(),
  isSet: z.boolean().optional()
}).strict();

export const OrderItemObjectEqualityInputSchema: z.ZodType<Prisma.OrderItemObjectEqualityInput> = z.object({
  id: z.string(),
  name: z.string(),
  size: z.string(),
  color: z.string(),
  price: z.number(),
  freeShipping: z.boolean(),
  image: z.string().array().optional()
}).strict();

export const CouponRelationFilterSchema: z.ZodType<Prisma.CouponRelationFilter> = z.object({
  is: z.lazy(() => CouponWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => CouponWhereInputSchema).optional().nullable()
}).strict();

export const OrderItemOrderByCompositeAggregateInputSchema: z.ZodType<Prisma.OrderItemOrderByCompositeAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const OrderCountOrderByAggregateInputSchema: z.ZodType<Prisma.OrderCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  subtotal: z.lazy(() => SortOrderSchema).optional(),
  delivery: z.lazy(() => SortOrderSchema).optional(),
  discount: z.lazy(() => SortOrderSchema).optional(),
  total: z.lazy(() => SortOrderSchema).optional(),
  businessId: z.lazy(() => SortOrderSchema).optional(),
  companyId: z.lazy(() => SortOrderSchema).optional(),
  couponId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const OrderAvgOrderByAggregateInputSchema: z.ZodType<Prisma.OrderAvgOrderByAggregateInput> = z.object({
  subtotal: z.lazy(() => SortOrderSchema).optional(),
  delivery: z.lazy(() => SortOrderSchema).optional(),
  discount: z.lazy(() => SortOrderSchema).optional(),
  total: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const OrderMaxOrderByAggregateInputSchema: z.ZodType<Prisma.OrderMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  subtotal: z.lazy(() => SortOrderSchema).optional(),
  delivery: z.lazy(() => SortOrderSchema).optional(),
  discount: z.lazy(() => SortOrderSchema).optional(),
  total: z.lazy(() => SortOrderSchema).optional(),
  businessId: z.lazy(() => SortOrderSchema).optional(),
  companyId: z.lazy(() => SortOrderSchema).optional(),
  couponId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const OrderMinOrderByAggregateInputSchema: z.ZodType<Prisma.OrderMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  subtotal: z.lazy(() => SortOrderSchema).optional(),
  delivery: z.lazy(() => SortOrderSchema).optional(),
  discount: z.lazy(() => SortOrderSchema).optional(),
  total: z.lazy(() => SortOrderSchema).optional(),
  businessId: z.lazy(() => SortOrderSchema).optional(),
  companyId: z.lazy(() => SortOrderSchema).optional(),
  couponId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const OrderSumOrderByAggregateInputSchema: z.ZodType<Prisma.OrderSumOrderByAggregateInput> = z.object({
  subtotal: z.lazy(() => SortOrderSchema).optional(),
  delivery: z.lazy(() => SortOrderSchema).optional(),
  discount: z.lazy(() => SortOrderSchema).optional(),
  total: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const FloatWithAggregatesFilterSchema: z.ZodType<Prisma.FloatWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedFloatFilterSchema).optional(),
  _min: z.lazy(() => NestedFloatFilterSchema).optional(),
  _max: z.lazy(() => NestedFloatFilterSchema).optional()
}).strict();

export const CouponCountOrderByAggregateInputSchema: z.ZodType<Prisma.CouponCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  companyId: z.lazy(() => SortOrderSchema).optional(),
  code: z.lazy(() => SortOrderSchema).optional(),
  amount: z.lazy(() => SortOrderSchema).optional(),
  isValid: z.lazy(() => SortOrderSchema).optional(),
  active: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CouponAvgOrderByAggregateInputSchema: z.ZodType<Prisma.CouponAvgOrderByAggregateInput> = z.object({
  amount: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CouponMaxOrderByAggregateInputSchema: z.ZodType<Prisma.CouponMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  companyId: z.lazy(() => SortOrderSchema).optional(),
  code: z.lazy(() => SortOrderSchema).optional(),
  amount: z.lazy(() => SortOrderSchema).optional(),
  isValid: z.lazy(() => SortOrderSchema).optional(),
  active: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CouponMinOrderByAggregateInputSchema: z.ZodType<Prisma.CouponMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  companyId: z.lazy(() => SortOrderSchema).optional(),
  code: z.lazy(() => SortOrderSchema).optional(),
  amount: z.lazy(() => SortOrderSchema).optional(),
  isValid: z.lazy(() => SortOrderSchema).optional(),
  active: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CouponSumOrderByAggregateInputSchema: z.ZodType<Prisma.CouponSumOrderByAggregateInput> = z.object({
  amount: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CategoryCountOrderByAggregateInputSchema: z.ZodType<Prisma.CategoryCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  companyId: z.lazy(() => SortOrderSchema).optional(),
  productsIds: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CategoryMaxOrderByAggregateInputSchema: z.ZodType<Prisma.CategoryMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  companyId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CategoryMinOrderByAggregateInputSchema: z.ZodType<Prisma.CategoryMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  companyId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const OrderCreateNestedManyWithoutBusinessInputSchema: z.ZodType<Prisma.OrderCreateNestedManyWithoutBusinessInput> = z.object({
  create: z.union([ z.lazy(() => OrderCreateWithoutBusinessInputSchema),z.lazy(() => OrderCreateWithoutBusinessInputSchema).array(),z.lazy(() => OrderUncheckedCreateWithoutBusinessInputSchema),z.lazy(() => OrderUncheckedCreateWithoutBusinessInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrderCreateOrConnectWithoutBusinessInputSchema),z.lazy(() => OrderCreateOrConnectWithoutBusinessInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrderCreateManyBusinessInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const WishListCreateNestedManyWithoutBusinessInputSchema: z.ZodType<Prisma.WishListCreateNestedManyWithoutBusinessInput> = z.object({
  create: z.union([ z.lazy(() => WishListCreateWithoutBusinessInputSchema),z.lazy(() => WishListCreateWithoutBusinessInputSchema).array(),z.lazy(() => WishListUncheckedCreateWithoutBusinessInputSchema),z.lazy(() => WishListUncheckedCreateWithoutBusinessInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => WishListCreateOrConnectWithoutBusinessInputSchema),z.lazy(() => WishListCreateOrConnectWithoutBusinessInputSchema).array() ]).optional(),
  createMany: z.lazy(() => WishListCreateManyBusinessInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => WishListWhereUniqueInputSchema),z.lazy(() => WishListWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ProductCreateNestedManyWithoutLikesInputSchema: z.ZodType<Prisma.ProductCreateNestedManyWithoutLikesInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutLikesInputSchema),z.lazy(() => ProductCreateWithoutLikesInputSchema).array(),z.lazy(() => ProductUncheckedCreateWithoutLikesInputSchema),z.lazy(() => ProductUncheckedCreateWithoutLikesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductCreateOrConnectWithoutLikesInputSchema),z.lazy(() => ProductCreateOrConnectWithoutLikesInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const BusinessCreateproductsLikedIdsInputSchema: z.ZodType<Prisma.BusinessCreateproductsLikedIdsInput> = z.object({
  set: z.string().array()
}).strict();

export const OrderUncheckedCreateNestedManyWithoutBusinessInputSchema: z.ZodType<Prisma.OrderUncheckedCreateNestedManyWithoutBusinessInput> = z.object({
  create: z.union([ z.lazy(() => OrderCreateWithoutBusinessInputSchema),z.lazy(() => OrderCreateWithoutBusinessInputSchema).array(),z.lazy(() => OrderUncheckedCreateWithoutBusinessInputSchema),z.lazy(() => OrderUncheckedCreateWithoutBusinessInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrderCreateOrConnectWithoutBusinessInputSchema),z.lazy(() => OrderCreateOrConnectWithoutBusinessInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrderCreateManyBusinessInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const WishListUncheckedCreateNestedManyWithoutBusinessInputSchema: z.ZodType<Prisma.WishListUncheckedCreateNestedManyWithoutBusinessInput> = z.object({
  create: z.union([ z.lazy(() => WishListCreateWithoutBusinessInputSchema),z.lazy(() => WishListCreateWithoutBusinessInputSchema).array(),z.lazy(() => WishListUncheckedCreateWithoutBusinessInputSchema),z.lazy(() => WishListUncheckedCreateWithoutBusinessInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => WishListCreateOrConnectWithoutBusinessInputSchema),z.lazy(() => WishListCreateOrConnectWithoutBusinessInputSchema).array() ]).optional(),
  createMany: z.lazy(() => WishListCreateManyBusinessInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => WishListWhereUniqueInputSchema),z.lazy(() => WishListWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ProductUncheckedCreateNestedManyWithoutLikesInputSchema: z.ZodType<Prisma.ProductUncheckedCreateNestedManyWithoutLikesInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutLikesInputSchema),z.lazy(() => ProductCreateWithoutLikesInputSchema).array(),z.lazy(() => ProductUncheckedCreateWithoutLikesInputSchema),z.lazy(() => ProductUncheckedCreateWithoutLikesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductCreateOrConnectWithoutLikesInputSchema),z.lazy(() => ProductCreateOrConnectWithoutLikesInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const EnumBusinessTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumBusinessTypeFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => BusinessTypeSchema).optional()
}).strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional()
}).strict();

export const OrderUpdateManyWithoutBusinessNestedInputSchema: z.ZodType<Prisma.OrderUpdateManyWithoutBusinessNestedInput> = z.object({
  create: z.union([ z.lazy(() => OrderCreateWithoutBusinessInputSchema),z.lazy(() => OrderCreateWithoutBusinessInputSchema).array(),z.lazy(() => OrderUncheckedCreateWithoutBusinessInputSchema),z.lazy(() => OrderUncheckedCreateWithoutBusinessInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrderCreateOrConnectWithoutBusinessInputSchema),z.lazy(() => OrderCreateOrConnectWithoutBusinessInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => OrderUpsertWithWhereUniqueWithoutBusinessInputSchema),z.lazy(() => OrderUpsertWithWhereUniqueWithoutBusinessInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrderCreateManyBusinessInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => OrderUpdateWithWhereUniqueWithoutBusinessInputSchema),z.lazy(() => OrderUpdateWithWhereUniqueWithoutBusinessInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => OrderUpdateManyWithWhereWithoutBusinessInputSchema),z.lazy(() => OrderUpdateManyWithWhereWithoutBusinessInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => OrderScalarWhereInputSchema),z.lazy(() => OrderScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const WishListUpdateManyWithoutBusinessNestedInputSchema: z.ZodType<Prisma.WishListUpdateManyWithoutBusinessNestedInput> = z.object({
  create: z.union([ z.lazy(() => WishListCreateWithoutBusinessInputSchema),z.lazy(() => WishListCreateWithoutBusinessInputSchema).array(),z.lazy(() => WishListUncheckedCreateWithoutBusinessInputSchema),z.lazy(() => WishListUncheckedCreateWithoutBusinessInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => WishListCreateOrConnectWithoutBusinessInputSchema),z.lazy(() => WishListCreateOrConnectWithoutBusinessInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => WishListUpsertWithWhereUniqueWithoutBusinessInputSchema),z.lazy(() => WishListUpsertWithWhereUniqueWithoutBusinessInputSchema).array() ]).optional(),
  createMany: z.lazy(() => WishListCreateManyBusinessInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => WishListWhereUniqueInputSchema),z.lazy(() => WishListWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => WishListWhereUniqueInputSchema),z.lazy(() => WishListWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => WishListWhereUniqueInputSchema),z.lazy(() => WishListWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => WishListWhereUniqueInputSchema),z.lazy(() => WishListWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => WishListUpdateWithWhereUniqueWithoutBusinessInputSchema),z.lazy(() => WishListUpdateWithWhereUniqueWithoutBusinessInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => WishListUpdateManyWithWhereWithoutBusinessInputSchema),z.lazy(() => WishListUpdateManyWithWhereWithoutBusinessInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => WishListScalarWhereInputSchema),z.lazy(() => WishListScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ProductUpdateManyWithoutLikesNestedInputSchema: z.ZodType<Prisma.ProductUpdateManyWithoutLikesNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutLikesInputSchema),z.lazy(() => ProductCreateWithoutLikesInputSchema).array(),z.lazy(() => ProductUncheckedCreateWithoutLikesInputSchema),z.lazy(() => ProductUncheckedCreateWithoutLikesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductCreateOrConnectWithoutLikesInputSchema),z.lazy(() => ProductCreateOrConnectWithoutLikesInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ProductUpsertWithWhereUniqueWithoutLikesInputSchema),z.lazy(() => ProductUpsertWithWhereUniqueWithoutLikesInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ProductUpdateWithWhereUniqueWithoutLikesInputSchema),z.lazy(() => ProductUpdateWithWhereUniqueWithoutLikesInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ProductUpdateManyWithWhereWithoutLikesInputSchema),z.lazy(() => ProductUpdateManyWithWhereWithoutLikesInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ProductScalarWhereInputSchema),z.lazy(() => ProductScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const BusinessUpdateproductsLikedIdsInputSchema: z.ZodType<Prisma.BusinessUpdateproductsLikedIdsInput> = z.object({
  set: z.string().array().optional(),
  push: z.union([ z.string(),z.string().array() ]).optional(),
}).strict();

export const OrderUncheckedUpdateManyWithoutBusinessNestedInputSchema: z.ZodType<Prisma.OrderUncheckedUpdateManyWithoutBusinessNestedInput> = z.object({
  create: z.union([ z.lazy(() => OrderCreateWithoutBusinessInputSchema),z.lazy(() => OrderCreateWithoutBusinessInputSchema).array(),z.lazy(() => OrderUncheckedCreateWithoutBusinessInputSchema),z.lazy(() => OrderUncheckedCreateWithoutBusinessInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrderCreateOrConnectWithoutBusinessInputSchema),z.lazy(() => OrderCreateOrConnectWithoutBusinessInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => OrderUpsertWithWhereUniqueWithoutBusinessInputSchema),z.lazy(() => OrderUpsertWithWhereUniqueWithoutBusinessInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrderCreateManyBusinessInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => OrderUpdateWithWhereUniqueWithoutBusinessInputSchema),z.lazy(() => OrderUpdateWithWhereUniqueWithoutBusinessInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => OrderUpdateManyWithWhereWithoutBusinessInputSchema),z.lazy(() => OrderUpdateManyWithWhereWithoutBusinessInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => OrderScalarWhereInputSchema),z.lazy(() => OrderScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const WishListUncheckedUpdateManyWithoutBusinessNestedInputSchema: z.ZodType<Prisma.WishListUncheckedUpdateManyWithoutBusinessNestedInput> = z.object({
  create: z.union([ z.lazy(() => WishListCreateWithoutBusinessInputSchema),z.lazy(() => WishListCreateWithoutBusinessInputSchema).array(),z.lazy(() => WishListUncheckedCreateWithoutBusinessInputSchema),z.lazy(() => WishListUncheckedCreateWithoutBusinessInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => WishListCreateOrConnectWithoutBusinessInputSchema),z.lazy(() => WishListCreateOrConnectWithoutBusinessInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => WishListUpsertWithWhereUniqueWithoutBusinessInputSchema),z.lazy(() => WishListUpsertWithWhereUniqueWithoutBusinessInputSchema).array() ]).optional(),
  createMany: z.lazy(() => WishListCreateManyBusinessInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => WishListWhereUniqueInputSchema),z.lazy(() => WishListWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => WishListWhereUniqueInputSchema),z.lazy(() => WishListWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => WishListWhereUniqueInputSchema),z.lazy(() => WishListWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => WishListWhereUniqueInputSchema),z.lazy(() => WishListWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => WishListUpdateWithWhereUniqueWithoutBusinessInputSchema),z.lazy(() => WishListUpdateWithWhereUniqueWithoutBusinessInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => WishListUpdateManyWithWhereWithoutBusinessInputSchema),z.lazy(() => WishListUpdateManyWithWhereWithoutBusinessInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => WishListScalarWhereInputSchema),z.lazy(() => WishListScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ProductUncheckedUpdateManyWithoutLikesNestedInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateManyWithoutLikesNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutLikesInputSchema),z.lazy(() => ProductCreateWithoutLikesInputSchema).array(),z.lazy(() => ProductUncheckedCreateWithoutLikesInputSchema),z.lazy(() => ProductUncheckedCreateWithoutLikesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductCreateOrConnectWithoutLikesInputSchema),z.lazy(() => ProductCreateOrConnectWithoutLikesInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ProductUpsertWithWhereUniqueWithoutLikesInputSchema),z.lazy(() => ProductUpsertWithWhereUniqueWithoutLikesInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ProductUpdateWithWhereUniqueWithoutLikesInputSchema),z.lazy(() => ProductUpdateWithWhereUniqueWithoutLikesInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ProductUpdateManyWithWhereWithoutLikesInputSchema),z.lazy(() => ProductUpdateManyWithWhereWithoutLikesInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ProductScalarWhereInputSchema),z.lazy(() => ProductScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const BusinessCreateNestedOneWithoutWishListsInputSchema: z.ZodType<Prisma.BusinessCreateNestedOneWithoutWishListsInput> = z.object({
  create: z.union([ z.lazy(() => BusinessCreateWithoutWishListsInputSchema),z.lazy(() => BusinessUncheckedCreateWithoutWishListsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BusinessCreateOrConnectWithoutWishListsInputSchema).optional(),
  connect: z.lazy(() => BusinessWhereUniqueInputSchema).optional()
}).strict();

export const CompanyCreateNestedOneWithoutWishListInputSchema: z.ZodType<Prisma.CompanyCreateNestedOneWithoutWishListInput> = z.object({
  create: z.union([ z.lazy(() => CompanyCreateWithoutWishListInputSchema),z.lazy(() => CompanyUncheckedCreateWithoutWishListInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CompanyCreateOrConnectWithoutWishListInputSchema).optional(),
  connect: z.lazy(() => CompanyWhereUniqueInputSchema).optional()
}).strict();

export const ProductCreateNestedManyWithoutWishListsInputSchema: z.ZodType<Prisma.ProductCreateNestedManyWithoutWishListsInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutWishListsInputSchema),z.lazy(() => ProductCreateWithoutWishListsInputSchema).array(),z.lazy(() => ProductUncheckedCreateWithoutWishListsInputSchema),z.lazy(() => ProductUncheckedCreateWithoutWishListsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductCreateOrConnectWithoutWishListsInputSchema),z.lazy(() => ProductCreateOrConnectWithoutWishListsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const WishListCreateproductsIdsInputSchema: z.ZodType<Prisma.WishListCreateproductsIdsInput> = z.object({
  set: z.string().array()
}).strict();

export const ProductUncheckedCreateNestedManyWithoutWishListsInputSchema: z.ZodType<Prisma.ProductUncheckedCreateNestedManyWithoutWishListsInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutWishListsInputSchema),z.lazy(() => ProductCreateWithoutWishListsInputSchema).array(),z.lazy(() => ProductUncheckedCreateWithoutWishListsInputSchema),z.lazy(() => ProductUncheckedCreateWithoutWishListsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductCreateOrConnectWithoutWishListsInputSchema),z.lazy(() => ProductCreateOrConnectWithoutWishListsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const BusinessUpdateOneRequiredWithoutWishListsNestedInputSchema: z.ZodType<Prisma.BusinessUpdateOneRequiredWithoutWishListsNestedInput> = z.object({
  create: z.union([ z.lazy(() => BusinessCreateWithoutWishListsInputSchema),z.lazy(() => BusinessUncheckedCreateWithoutWishListsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BusinessCreateOrConnectWithoutWishListsInputSchema).optional(),
  upsert: z.lazy(() => BusinessUpsertWithoutWishListsInputSchema).optional(),
  connect: z.lazy(() => BusinessWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => BusinessUpdateWithoutWishListsInputSchema),z.lazy(() => BusinessUncheckedUpdateWithoutWishListsInputSchema) ]).optional(),
}).strict();

export const CompanyUpdateOneRequiredWithoutWishListNestedInputSchema: z.ZodType<Prisma.CompanyUpdateOneRequiredWithoutWishListNestedInput> = z.object({
  create: z.union([ z.lazy(() => CompanyCreateWithoutWishListInputSchema),z.lazy(() => CompanyUncheckedCreateWithoutWishListInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CompanyCreateOrConnectWithoutWishListInputSchema).optional(),
  upsert: z.lazy(() => CompanyUpsertWithoutWishListInputSchema).optional(),
  connect: z.lazy(() => CompanyWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CompanyUpdateWithoutWishListInputSchema),z.lazy(() => CompanyUncheckedUpdateWithoutWishListInputSchema) ]).optional(),
}).strict();

export const ProductUpdateManyWithoutWishListsNestedInputSchema: z.ZodType<Prisma.ProductUpdateManyWithoutWishListsNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutWishListsInputSchema),z.lazy(() => ProductCreateWithoutWishListsInputSchema).array(),z.lazy(() => ProductUncheckedCreateWithoutWishListsInputSchema),z.lazy(() => ProductUncheckedCreateWithoutWishListsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductCreateOrConnectWithoutWishListsInputSchema),z.lazy(() => ProductCreateOrConnectWithoutWishListsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ProductUpsertWithWhereUniqueWithoutWishListsInputSchema),z.lazy(() => ProductUpsertWithWhereUniqueWithoutWishListsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ProductUpdateWithWhereUniqueWithoutWishListsInputSchema),z.lazy(() => ProductUpdateWithWhereUniqueWithoutWishListsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ProductUpdateManyWithWhereWithoutWishListsInputSchema),z.lazy(() => ProductUpdateManyWithWhereWithoutWishListsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ProductScalarWhereInputSchema),z.lazy(() => ProductScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const WishListUpdateproductsIdsInputSchema: z.ZodType<Prisma.WishListUpdateproductsIdsInput> = z.object({
  set: z.string().array().optional(),
  push: z.union([ z.string(),z.string().array() ]).optional(),
}).strict();

export const ProductUncheckedUpdateManyWithoutWishListsNestedInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateManyWithoutWishListsNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutWishListsInputSchema),z.lazy(() => ProductCreateWithoutWishListsInputSchema).array(),z.lazy(() => ProductUncheckedCreateWithoutWishListsInputSchema),z.lazy(() => ProductUncheckedCreateWithoutWishListsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductCreateOrConnectWithoutWishListsInputSchema),z.lazy(() => ProductCreateOrConnectWithoutWishListsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ProductUpsertWithWhereUniqueWithoutWishListsInputSchema),z.lazy(() => ProductUpsertWithWhereUniqueWithoutWishListsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ProductUpdateWithWhereUniqueWithoutWishListsInputSchema),z.lazy(() => ProductUpdateWithWhereUniqueWithoutWishListsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ProductUpdateManyWithWhereWithoutWishListsInputSchema),z.lazy(() => ProductUpdateManyWithWhereWithoutWishListsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ProductScalarWhereInputSchema),z.lazy(() => ProductScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ProductCreateNestedManyWithoutCompanyInputSchema: z.ZodType<Prisma.ProductCreateNestedManyWithoutCompanyInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutCompanyInputSchema),z.lazy(() => ProductCreateWithoutCompanyInputSchema).array(),z.lazy(() => ProductUncheckedCreateWithoutCompanyInputSchema),z.lazy(() => ProductUncheckedCreateWithoutCompanyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductCreateOrConnectWithoutCompanyInputSchema),z.lazy(() => ProductCreateOrConnectWithoutCompanyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProductCreateManyCompanyInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const OrderCreateNestedManyWithoutCompanyInputSchema: z.ZodType<Prisma.OrderCreateNestedManyWithoutCompanyInput> = z.object({
  create: z.union([ z.lazy(() => OrderCreateWithoutCompanyInputSchema),z.lazy(() => OrderCreateWithoutCompanyInputSchema).array(),z.lazy(() => OrderUncheckedCreateWithoutCompanyInputSchema),z.lazy(() => OrderUncheckedCreateWithoutCompanyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrderCreateOrConnectWithoutCompanyInputSchema),z.lazy(() => OrderCreateOrConnectWithoutCompanyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrderCreateManyCompanyInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const WorkerCreateNestedManyWithoutCompanyInputSchema: z.ZodType<Prisma.WorkerCreateNestedManyWithoutCompanyInput> = z.object({
  create: z.union([ z.lazy(() => WorkerCreateWithoutCompanyInputSchema),z.lazy(() => WorkerCreateWithoutCompanyInputSchema).array(),z.lazy(() => WorkerUncheckedCreateWithoutCompanyInputSchema),z.lazy(() => WorkerUncheckedCreateWithoutCompanyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => WorkerCreateOrConnectWithoutCompanyInputSchema),z.lazy(() => WorkerCreateOrConnectWithoutCompanyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => WorkerCreateManyCompanyInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => WorkerWhereUniqueInputSchema),z.lazy(() => WorkerWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const CouponCreateNestedManyWithoutCompanyInputSchema: z.ZodType<Prisma.CouponCreateNestedManyWithoutCompanyInput> = z.object({
  create: z.union([ z.lazy(() => CouponCreateWithoutCompanyInputSchema),z.lazy(() => CouponCreateWithoutCompanyInputSchema).array(),z.lazy(() => CouponUncheckedCreateWithoutCompanyInputSchema),z.lazy(() => CouponUncheckedCreateWithoutCompanyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CouponCreateOrConnectWithoutCompanyInputSchema),z.lazy(() => CouponCreateOrConnectWithoutCompanyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CouponCreateManyCompanyInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CouponWhereUniqueInputSchema),z.lazy(() => CouponWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const WishListCreateNestedManyWithoutCompanyInputSchema: z.ZodType<Prisma.WishListCreateNestedManyWithoutCompanyInput> = z.object({
  create: z.union([ z.lazy(() => WishListCreateWithoutCompanyInputSchema),z.lazy(() => WishListCreateWithoutCompanyInputSchema).array(),z.lazy(() => WishListUncheckedCreateWithoutCompanyInputSchema),z.lazy(() => WishListUncheckedCreateWithoutCompanyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => WishListCreateOrConnectWithoutCompanyInputSchema),z.lazy(() => WishListCreateOrConnectWithoutCompanyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => WishListCreateManyCompanyInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => WishListWhereUniqueInputSchema),z.lazy(() => WishListWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const CategoryCreateNestedManyWithoutCompanyInputSchema: z.ZodType<Prisma.CategoryCreateNestedManyWithoutCompanyInput> = z.object({
  create: z.union([ z.lazy(() => CategoryCreateWithoutCompanyInputSchema),z.lazy(() => CategoryCreateWithoutCompanyInputSchema).array(),z.lazy(() => CategoryUncheckedCreateWithoutCompanyInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutCompanyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CategoryCreateOrConnectWithoutCompanyInputSchema),z.lazy(() => CategoryCreateOrConnectWithoutCompanyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CategoryCreateManyCompanyInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CategoryWhereUniqueInputSchema),z.lazy(() => CategoryWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ProductUncheckedCreateNestedManyWithoutCompanyInputSchema: z.ZodType<Prisma.ProductUncheckedCreateNestedManyWithoutCompanyInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutCompanyInputSchema),z.lazy(() => ProductCreateWithoutCompanyInputSchema).array(),z.lazy(() => ProductUncheckedCreateWithoutCompanyInputSchema),z.lazy(() => ProductUncheckedCreateWithoutCompanyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductCreateOrConnectWithoutCompanyInputSchema),z.lazy(() => ProductCreateOrConnectWithoutCompanyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProductCreateManyCompanyInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const OrderUncheckedCreateNestedManyWithoutCompanyInputSchema: z.ZodType<Prisma.OrderUncheckedCreateNestedManyWithoutCompanyInput> = z.object({
  create: z.union([ z.lazy(() => OrderCreateWithoutCompanyInputSchema),z.lazy(() => OrderCreateWithoutCompanyInputSchema).array(),z.lazy(() => OrderUncheckedCreateWithoutCompanyInputSchema),z.lazy(() => OrderUncheckedCreateWithoutCompanyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrderCreateOrConnectWithoutCompanyInputSchema),z.lazy(() => OrderCreateOrConnectWithoutCompanyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrderCreateManyCompanyInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const WorkerUncheckedCreateNestedManyWithoutCompanyInputSchema: z.ZodType<Prisma.WorkerUncheckedCreateNestedManyWithoutCompanyInput> = z.object({
  create: z.union([ z.lazy(() => WorkerCreateWithoutCompanyInputSchema),z.lazy(() => WorkerCreateWithoutCompanyInputSchema).array(),z.lazy(() => WorkerUncheckedCreateWithoutCompanyInputSchema),z.lazy(() => WorkerUncheckedCreateWithoutCompanyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => WorkerCreateOrConnectWithoutCompanyInputSchema),z.lazy(() => WorkerCreateOrConnectWithoutCompanyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => WorkerCreateManyCompanyInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => WorkerWhereUniqueInputSchema),z.lazy(() => WorkerWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const CouponUncheckedCreateNestedManyWithoutCompanyInputSchema: z.ZodType<Prisma.CouponUncheckedCreateNestedManyWithoutCompanyInput> = z.object({
  create: z.union([ z.lazy(() => CouponCreateWithoutCompanyInputSchema),z.lazy(() => CouponCreateWithoutCompanyInputSchema).array(),z.lazy(() => CouponUncheckedCreateWithoutCompanyInputSchema),z.lazy(() => CouponUncheckedCreateWithoutCompanyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CouponCreateOrConnectWithoutCompanyInputSchema),z.lazy(() => CouponCreateOrConnectWithoutCompanyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CouponCreateManyCompanyInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CouponWhereUniqueInputSchema),z.lazy(() => CouponWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const WishListUncheckedCreateNestedManyWithoutCompanyInputSchema: z.ZodType<Prisma.WishListUncheckedCreateNestedManyWithoutCompanyInput> = z.object({
  create: z.union([ z.lazy(() => WishListCreateWithoutCompanyInputSchema),z.lazy(() => WishListCreateWithoutCompanyInputSchema).array(),z.lazy(() => WishListUncheckedCreateWithoutCompanyInputSchema),z.lazy(() => WishListUncheckedCreateWithoutCompanyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => WishListCreateOrConnectWithoutCompanyInputSchema),z.lazy(() => WishListCreateOrConnectWithoutCompanyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => WishListCreateManyCompanyInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => WishListWhereUniqueInputSchema),z.lazy(() => WishListWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const CategoryUncheckedCreateNestedManyWithoutCompanyInputSchema: z.ZodType<Prisma.CategoryUncheckedCreateNestedManyWithoutCompanyInput> = z.object({
  create: z.union([ z.lazy(() => CategoryCreateWithoutCompanyInputSchema),z.lazy(() => CategoryCreateWithoutCompanyInputSchema).array(),z.lazy(() => CategoryUncheckedCreateWithoutCompanyInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutCompanyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CategoryCreateOrConnectWithoutCompanyInputSchema),z.lazy(() => CategoryCreateOrConnectWithoutCompanyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CategoryCreateManyCompanyInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CategoryWhereUniqueInputSchema),z.lazy(() => CategoryWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const BoolFieldUpdateOperationsInputSchema: z.ZodType<Prisma.BoolFieldUpdateOperationsInput> = z.object({
  set: z.boolean().optional()
}).strict();

export const ProductUpdateManyWithoutCompanyNestedInputSchema: z.ZodType<Prisma.ProductUpdateManyWithoutCompanyNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutCompanyInputSchema),z.lazy(() => ProductCreateWithoutCompanyInputSchema).array(),z.lazy(() => ProductUncheckedCreateWithoutCompanyInputSchema),z.lazy(() => ProductUncheckedCreateWithoutCompanyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductCreateOrConnectWithoutCompanyInputSchema),z.lazy(() => ProductCreateOrConnectWithoutCompanyInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ProductUpsertWithWhereUniqueWithoutCompanyInputSchema),z.lazy(() => ProductUpsertWithWhereUniqueWithoutCompanyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProductCreateManyCompanyInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ProductUpdateWithWhereUniqueWithoutCompanyInputSchema),z.lazy(() => ProductUpdateWithWhereUniqueWithoutCompanyInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ProductUpdateManyWithWhereWithoutCompanyInputSchema),z.lazy(() => ProductUpdateManyWithWhereWithoutCompanyInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ProductScalarWhereInputSchema),z.lazy(() => ProductScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const OrderUpdateManyWithoutCompanyNestedInputSchema: z.ZodType<Prisma.OrderUpdateManyWithoutCompanyNestedInput> = z.object({
  create: z.union([ z.lazy(() => OrderCreateWithoutCompanyInputSchema),z.lazy(() => OrderCreateWithoutCompanyInputSchema).array(),z.lazy(() => OrderUncheckedCreateWithoutCompanyInputSchema),z.lazy(() => OrderUncheckedCreateWithoutCompanyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrderCreateOrConnectWithoutCompanyInputSchema),z.lazy(() => OrderCreateOrConnectWithoutCompanyInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => OrderUpsertWithWhereUniqueWithoutCompanyInputSchema),z.lazy(() => OrderUpsertWithWhereUniqueWithoutCompanyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrderCreateManyCompanyInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => OrderUpdateWithWhereUniqueWithoutCompanyInputSchema),z.lazy(() => OrderUpdateWithWhereUniqueWithoutCompanyInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => OrderUpdateManyWithWhereWithoutCompanyInputSchema),z.lazy(() => OrderUpdateManyWithWhereWithoutCompanyInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => OrderScalarWhereInputSchema),z.lazy(() => OrderScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const WorkerUpdateManyWithoutCompanyNestedInputSchema: z.ZodType<Prisma.WorkerUpdateManyWithoutCompanyNestedInput> = z.object({
  create: z.union([ z.lazy(() => WorkerCreateWithoutCompanyInputSchema),z.lazy(() => WorkerCreateWithoutCompanyInputSchema).array(),z.lazy(() => WorkerUncheckedCreateWithoutCompanyInputSchema),z.lazy(() => WorkerUncheckedCreateWithoutCompanyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => WorkerCreateOrConnectWithoutCompanyInputSchema),z.lazy(() => WorkerCreateOrConnectWithoutCompanyInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => WorkerUpsertWithWhereUniqueWithoutCompanyInputSchema),z.lazy(() => WorkerUpsertWithWhereUniqueWithoutCompanyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => WorkerCreateManyCompanyInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => WorkerWhereUniqueInputSchema),z.lazy(() => WorkerWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => WorkerWhereUniqueInputSchema),z.lazy(() => WorkerWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => WorkerWhereUniqueInputSchema),z.lazy(() => WorkerWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => WorkerWhereUniqueInputSchema),z.lazy(() => WorkerWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => WorkerUpdateWithWhereUniqueWithoutCompanyInputSchema),z.lazy(() => WorkerUpdateWithWhereUniqueWithoutCompanyInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => WorkerUpdateManyWithWhereWithoutCompanyInputSchema),z.lazy(() => WorkerUpdateManyWithWhereWithoutCompanyInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => WorkerScalarWhereInputSchema),z.lazy(() => WorkerScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const CouponUpdateManyWithoutCompanyNestedInputSchema: z.ZodType<Prisma.CouponUpdateManyWithoutCompanyNestedInput> = z.object({
  create: z.union([ z.lazy(() => CouponCreateWithoutCompanyInputSchema),z.lazy(() => CouponCreateWithoutCompanyInputSchema).array(),z.lazy(() => CouponUncheckedCreateWithoutCompanyInputSchema),z.lazy(() => CouponUncheckedCreateWithoutCompanyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CouponCreateOrConnectWithoutCompanyInputSchema),z.lazy(() => CouponCreateOrConnectWithoutCompanyInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CouponUpsertWithWhereUniqueWithoutCompanyInputSchema),z.lazy(() => CouponUpsertWithWhereUniqueWithoutCompanyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CouponCreateManyCompanyInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CouponWhereUniqueInputSchema),z.lazy(() => CouponWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CouponWhereUniqueInputSchema),z.lazy(() => CouponWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CouponWhereUniqueInputSchema),z.lazy(() => CouponWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CouponWhereUniqueInputSchema),z.lazy(() => CouponWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CouponUpdateWithWhereUniqueWithoutCompanyInputSchema),z.lazy(() => CouponUpdateWithWhereUniqueWithoutCompanyInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CouponUpdateManyWithWhereWithoutCompanyInputSchema),z.lazy(() => CouponUpdateManyWithWhereWithoutCompanyInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CouponScalarWhereInputSchema),z.lazy(() => CouponScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const WishListUpdateManyWithoutCompanyNestedInputSchema: z.ZodType<Prisma.WishListUpdateManyWithoutCompanyNestedInput> = z.object({
  create: z.union([ z.lazy(() => WishListCreateWithoutCompanyInputSchema),z.lazy(() => WishListCreateWithoutCompanyInputSchema).array(),z.lazy(() => WishListUncheckedCreateWithoutCompanyInputSchema),z.lazy(() => WishListUncheckedCreateWithoutCompanyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => WishListCreateOrConnectWithoutCompanyInputSchema),z.lazy(() => WishListCreateOrConnectWithoutCompanyInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => WishListUpsertWithWhereUniqueWithoutCompanyInputSchema),z.lazy(() => WishListUpsertWithWhereUniqueWithoutCompanyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => WishListCreateManyCompanyInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => WishListWhereUniqueInputSchema),z.lazy(() => WishListWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => WishListWhereUniqueInputSchema),z.lazy(() => WishListWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => WishListWhereUniqueInputSchema),z.lazy(() => WishListWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => WishListWhereUniqueInputSchema),z.lazy(() => WishListWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => WishListUpdateWithWhereUniqueWithoutCompanyInputSchema),z.lazy(() => WishListUpdateWithWhereUniqueWithoutCompanyInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => WishListUpdateManyWithWhereWithoutCompanyInputSchema),z.lazy(() => WishListUpdateManyWithWhereWithoutCompanyInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => WishListScalarWhereInputSchema),z.lazy(() => WishListScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const CategoryUpdateManyWithoutCompanyNestedInputSchema: z.ZodType<Prisma.CategoryUpdateManyWithoutCompanyNestedInput> = z.object({
  create: z.union([ z.lazy(() => CategoryCreateWithoutCompanyInputSchema),z.lazy(() => CategoryCreateWithoutCompanyInputSchema).array(),z.lazy(() => CategoryUncheckedCreateWithoutCompanyInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutCompanyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CategoryCreateOrConnectWithoutCompanyInputSchema),z.lazy(() => CategoryCreateOrConnectWithoutCompanyInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CategoryUpsertWithWhereUniqueWithoutCompanyInputSchema),z.lazy(() => CategoryUpsertWithWhereUniqueWithoutCompanyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CategoryCreateManyCompanyInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CategoryWhereUniqueInputSchema),z.lazy(() => CategoryWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CategoryWhereUniqueInputSchema),z.lazy(() => CategoryWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CategoryWhereUniqueInputSchema),z.lazy(() => CategoryWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CategoryWhereUniqueInputSchema),z.lazy(() => CategoryWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CategoryUpdateWithWhereUniqueWithoutCompanyInputSchema),z.lazy(() => CategoryUpdateWithWhereUniqueWithoutCompanyInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CategoryUpdateManyWithWhereWithoutCompanyInputSchema),z.lazy(() => CategoryUpdateManyWithWhereWithoutCompanyInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CategoryScalarWhereInputSchema),z.lazy(() => CategoryScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ProductUncheckedUpdateManyWithoutCompanyNestedInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateManyWithoutCompanyNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutCompanyInputSchema),z.lazy(() => ProductCreateWithoutCompanyInputSchema).array(),z.lazy(() => ProductUncheckedCreateWithoutCompanyInputSchema),z.lazy(() => ProductUncheckedCreateWithoutCompanyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductCreateOrConnectWithoutCompanyInputSchema),z.lazy(() => ProductCreateOrConnectWithoutCompanyInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ProductUpsertWithWhereUniqueWithoutCompanyInputSchema),z.lazy(() => ProductUpsertWithWhereUniqueWithoutCompanyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProductCreateManyCompanyInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ProductUpdateWithWhereUniqueWithoutCompanyInputSchema),z.lazy(() => ProductUpdateWithWhereUniqueWithoutCompanyInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ProductUpdateManyWithWhereWithoutCompanyInputSchema),z.lazy(() => ProductUpdateManyWithWhereWithoutCompanyInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ProductScalarWhereInputSchema),z.lazy(() => ProductScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const OrderUncheckedUpdateManyWithoutCompanyNestedInputSchema: z.ZodType<Prisma.OrderUncheckedUpdateManyWithoutCompanyNestedInput> = z.object({
  create: z.union([ z.lazy(() => OrderCreateWithoutCompanyInputSchema),z.lazy(() => OrderCreateWithoutCompanyInputSchema).array(),z.lazy(() => OrderUncheckedCreateWithoutCompanyInputSchema),z.lazy(() => OrderUncheckedCreateWithoutCompanyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrderCreateOrConnectWithoutCompanyInputSchema),z.lazy(() => OrderCreateOrConnectWithoutCompanyInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => OrderUpsertWithWhereUniqueWithoutCompanyInputSchema),z.lazy(() => OrderUpsertWithWhereUniqueWithoutCompanyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrderCreateManyCompanyInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => OrderUpdateWithWhereUniqueWithoutCompanyInputSchema),z.lazy(() => OrderUpdateWithWhereUniqueWithoutCompanyInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => OrderUpdateManyWithWhereWithoutCompanyInputSchema),z.lazy(() => OrderUpdateManyWithWhereWithoutCompanyInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => OrderScalarWhereInputSchema),z.lazy(() => OrderScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const WorkerUncheckedUpdateManyWithoutCompanyNestedInputSchema: z.ZodType<Prisma.WorkerUncheckedUpdateManyWithoutCompanyNestedInput> = z.object({
  create: z.union([ z.lazy(() => WorkerCreateWithoutCompanyInputSchema),z.lazy(() => WorkerCreateWithoutCompanyInputSchema).array(),z.lazy(() => WorkerUncheckedCreateWithoutCompanyInputSchema),z.lazy(() => WorkerUncheckedCreateWithoutCompanyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => WorkerCreateOrConnectWithoutCompanyInputSchema),z.lazy(() => WorkerCreateOrConnectWithoutCompanyInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => WorkerUpsertWithWhereUniqueWithoutCompanyInputSchema),z.lazy(() => WorkerUpsertWithWhereUniqueWithoutCompanyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => WorkerCreateManyCompanyInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => WorkerWhereUniqueInputSchema),z.lazy(() => WorkerWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => WorkerWhereUniqueInputSchema),z.lazy(() => WorkerWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => WorkerWhereUniqueInputSchema),z.lazy(() => WorkerWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => WorkerWhereUniqueInputSchema),z.lazy(() => WorkerWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => WorkerUpdateWithWhereUniqueWithoutCompanyInputSchema),z.lazy(() => WorkerUpdateWithWhereUniqueWithoutCompanyInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => WorkerUpdateManyWithWhereWithoutCompanyInputSchema),z.lazy(() => WorkerUpdateManyWithWhereWithoutCompanyInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => WorkerScalarWhereInputSchema),z.lazy(() => WorkerScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const CouponUncheckedUpdateManyWithoutCompanyNestedInputSchema: z.ZodType<Prisma.CouponUncheckedUpdateManyWithoutCompanyNestedInput> = z.object({
  create: z.union([ z.lazy(() => CouponCreateWithoutCompanyInputSchema),z.lazy(() => CouponCreateWithoutCompanyInputSchema).array(),z.lazy(() => CouponUncheckedCreateWithoutCompanyInputSchema),z.lazy(() => CouponUncheckedCreateWithoutCompanyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CouponCreateOrConnectWithoutCompanyInputSchema),z.lazy(() => CouponCreateOrConnectWithoutCompanyInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CouponUpsertWithWhereUniqueWithoutCompanyInputSchema),z.lazy(() => CouponUpsertWithWhereUniqueWithoutCompanyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CouponCreateManyCompanyInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CouponWhereUniqueInputSchema),z.lazy(() => CouponWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CouponWhereUniqueInputSchema),z.lazy(() => CouponWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CouponWhereUniqueInputSchema),z.lazy(() => CouponWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CouponWhereUniqueInputSchema),z.lazy(() => CouponWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CouponUpdateWithWhereUniqueWithoutCompanyInputSchema),z.lazy(() => CouponUpdateWithWhereUniqueWithoutCompanyInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CouponUpdateManyWithWhereWithoutCompanyInputSchema),z.lazy(() => CouponUpdateManyWithWhereWithoutCompanyInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CouponScalarWhereInputSchema),z.lazy(() => CouponScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const WishListUncheckedUpdateManyWithoutCompanyNestedInputSchema: z.ZodType<Prisma.WishListUncheckedUpdateManyWithoutCompanyNestedInput> = z.object({
  create: z.union([ z.lazy(() => WishListCreateWithoutCompanyInputSchema),z.lazy(() => WishListCreateWithoutCompanyInputSchema).array(),z.lazy(() => WishListUncheckedCreateWithoutCompanyInputSchema),z.lazy(() => WishListUncheckedCreateWithoutCompanyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => WishListCreateOrConnectWithoutCompanyInputSchema),z.lazy(() => WishListCreateOrConnectWithoutCompanyInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => WishListUpsertWithWhereUniqueWithoutCompanyInputSchema),z.lazy(() => WishListUpsertWithWhereUniqueWithoutCompanyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => WishListCreateManyCompanyInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => WishListWhereUniqueInputSchema),z.lazy(() => WishListWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => WishListWhereUniqueInputSchema),z.lazy(() => WishListWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => WishListWhereUniqueInputSchema),z.lazy(() => WishListWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => WishListWhereUniqueInputSchema),z.lazy(() => WishListWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => WishListUpdateWithWhereUniqueWithoutCompanyInputSchema),z.lazy(() => WishListUpdateWithWhereUniqueWithoutCompanyInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => WishListUpdateManyWithWhereWithoutCompanyInputSchema),z.lazy(() => WishListUpdateManyWithWhereWithoutCompanyInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => WishListScalarWhereInputSchema),z.lazy(() => WishListScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const CategoryUncheckedUpdateManyWithoutCompanyNestedInputSchema: z.ZodType<Prisma.CategoryUncheckedUpdateManyWithoutCompanyNestedInput> = z.object({
  create: z.union([ z.lazy(() => CategoryCreateWithoutCompanyInputSchema),z.lazy(() => CategoryCreateWithoutCompanyInputSchema).array(),z.lazy(() => CategoryUncheckedCreateWithoutCompanyInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutCompanyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CategoryCreateOrConnectWithoutCompanyInputSchema),z.lazy(() => CategoryCreateOrConnectWithoutCompanyInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CategoryUpsertWithWhereUniqueWithoutCompanyInputSchema),z.lazy(() => CategoryUpsertWithWhereUniqueWithoutCompanyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CategoryCreateManyCompanyInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CategoryWhereUniqueInputSchema),z.lazy(() => CategoryWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CategoryWhereUniqueInputSchema),z.lazy(() => CategoryWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CategoryWhereUniqueInputSchema),z.lazy(() => CategoryWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CategoryWhereUniqueInputSchema),z.lazy(() => CategoryWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CategoryUpdateWithWhereUniqueWithoutCompanyInputSchema),z.lazy(() => CategoryUpdateWithWhereUniqueWithoutCompanyInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CategoryUpdateManyWithWhereWithoutCompanyInputSchema),z.lazy(() => CategoryUpdateManyWithWhereWithoutCompanyInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CategoryScalarWhereInputSchema),z.lazy(() => CategoryScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ProductCreateviewsInputSchema: z.ZodType<Prisma.ProductCreateviewsInput> = z.object({
  set: z.string().array()
}).strict();

export const CompanyCreateNestedOneWithoutProductsInputSchema: z.ZodType<Prisma.CompanyCreateNestedOneWithoutProductsInput> = z.object({
  create: z.union([ z.lazy(() => CompanyCreateWithoutProductsInputSchema),z.lazy(() => CompanyUncheckedCreateWithoutProductsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CompanyCreateOrConnectWithoutProductsInputSchema).optional(),
  connect: z.lazy(() => CompanyWhereUniqueInputSchema).optional()
}).strict();

export const CategoryCreateNestedManyWithoutProductsInputSchema: z.ZodType<Prisma.CategoryCreateNestedManyWithoutProductsInput> = z.object({
  create: z.union([ z.lazy(() => CategoryCreateWithoutProductsInputSchema),z.lazy(() => CategoryCreateWithoutProductsInputSchema).array(),z.lazy(() => CategoryUncheckedCreateWithoutProductsInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutProductsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CategoryCreateOrConnectWithoutProductsInputSchema),z.lazy(() => CategoryCreateOrConnectWithoutProductsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CategoryWhereUniqueInputSchema),z.lazy(() => CategoryWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const BusinessCreateNestedManyWithoutLikedProductsInputSchema: z.ZodType<Prisma.BusinessCreateNestedManyWithoutLikedProductsInput> = z.object({
  create: z.union([ z.lazy(() => BusinessCreateWithoutLikedProductsInputSchema),z.lazy(() => BusinessCreateWithoutLikedProductsInputSchema).array(),z.lazy(() => BusinessUncheckedCreateWithoutLikedProductsInputSchema),z.lazy(() => BusinessUncheckedCreateWithoutLikedProductsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BusinessCreateOrConnectWithoutLikedProductsInputSchema),z.lazy(() => BusinessCreateOrConnectWithoutLikedProductsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BusinessWhereUniqueInputSchema),z.lazy(() => BusinessWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const WishListCreateNestedManyWithoutProductsInputSchema: z.ZodType<Prisma.WishListCreateNestedManyWithoutProductsInput> = z.object({
  create: z.union([ z.lazy(() => WishListCreateWithoutProductsInputSchema),z.lazy(() => WishListCreateWithoutProductsInputSchema).array(),z.lazy(() => WishListUncheckedCreateWithoutProductsInputSchema),z.lazy(() => WishListUncheckedCreateWithoutProductsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => WishListCreateOrConnectWithoutProductsInputSchema),z.lazy(() => WishListCreateOrConnectWithoutProductsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => WishListWhereUniqueInputSchema),z.lazy(() => WishListWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ProductCreatecategoryIdsInputSchema: z.ZodType<Prisma.ProductCreatecategoryIdsInput> = z.object({
  set: z.string().array()
}).strict();

export const ProductCreatebusinessLikeIdsInputSchema: z.ZodType<Prisma.ProductCreatebusinessLikeIdsInput> = z.object({
  set: z.string().array()
}).strict();

export const ProductCreatewishListIdsInputSchema: z.ZodType<Prisma.ProductCreatewishListIdsInput> = z.object({
  set: z.string().array()
}).strict();

export const CategoryUncheckedCreateNestedManyWithoutProductsInputSchema: z.ZodType<Prisma.CategoryUncheckedCreateNestedManyWithoutProductsInput> = z.object({
  create: z.union([ z.lazy(() => CategoryCreateWithoutProductsInputSchema),z.lazy(() => CategoryCreateWithoutProductsInputSchema).array(),z.lazy(() => CategoryUncheckedCreateWithoutProductsInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutProductsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CategoryCreateOrConnectWithoutProductsInputSchema),z.lazy(() => CategoryCreateOrConnectWithoutProductsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CategoryWhereUniqueInputSchema),z.lazy(() => CategoryWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const BusinessUncheckedCreateNestedManyWithoutLikedProductsInputSchema: z.ZodType<Prisma.BusinessUncheckedCreateNestedManyWithoutLikedProductsInput> = z.object({
  create: z.union([ z.lazy(() => BusinessCreateWithoutLikedProductsInputSchema),z.lazy(() => BusinessCreateWithoutLikedProductsInputSchema).array(),z.lazy(() => BusinessUncheckedCreateWithoutLikedProductsInputSchema),z.lazy(() => BusinessUncheckedCreateWithoutLikedProductsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BusinessCreateOrConnectWithoutLikedProductsInputSchema),z.lazy(() => BusinessCreateOrConnectWithoutLikedProductsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BusinessWhereUniqueInputSchema),z.lazy(() => BusinessWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const WishListUncheckedCreateNestedManyWithoutProductsInputSchema: z.ZodType<Prisma.WishListUncheckedCreateNestedManyWithoutProductsInput> = z.object({
  create: z.union([ z.lazy(() => WishListCreateWithoutProductsInputSchema),z.lazy(() => WishListCreateWithoutProductsInputSchema).array(),z.lazy(() => WishListUncheckedCreateWithoutProductsInputSchema),z.lazy(() => WishListUncheckedCreateWithoutProductsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => WishListCreateOrConnectWithoutProductsInputSchema),z.lazy(() => WishListCreateOrConnectWithoutProductsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => WishListWhereUniqueInputSchema),z.lazy(() => WishListWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional().nullable(),
  unset: z.boolean().optional()
}).strict();

export const IntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const NullableIntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableIntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional().nullable(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional(),
  unset: z.boolean().optional()
}).strict();

export const ProductUpdateviewsInputSchema: z.ZodType<Prisma.ProductUpdateviewsInput> = z.object({
  set: z.string().array().optional(),
  push: z.union([ z.string(),z.string().array() ]).optional(),
}).strict();

export const CompanyUpdateOneRequiredWithoutProductsNestedInputSchema: z.ZodType<Prisma.CompanyUpdateOneRequiredWithoutProductsNestedInput> = z.object({
  create: z.union([ z.lazy(() => CompanyCreateWithoutProductsInputSchema),z.lazy(() => CompanyUncheckedCreateWithoutProductsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CompanyCreateOrConnectWithoutProductsInputSchema).optional(),
  upsert: z.lazy(() => CompanyUpsertWithoutProductsInputSchema).optional(),
  connect: z.lazy(() => CompanyWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CompanyUpdateWithoutProductsInputSchema),z.lazy(() => CompanyUncheckedUpdateWithoutProductsInputSchema) ]).optional(),
}).strict();

export const CategoryUpdateManyWithoutProductsNestedInputSchema: z.ZodType<Prisma.CategoryUpdateManyWithoutProductsNestedInput> = z.object({
  create: z.union([ z.lazy(() => CategoryCreateWithoutProductsInputSchema),z.lazy(() => CategoryCreateWithoutProductsInputSchema).array(),z.lazy(() => CategoryUncheckedCreateWithoutProductsInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutProductsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CategoryCreateOrConnectWithoutProductsInputSchema),z.lazy(() => CategoryCreateOrConnectWithoutProductsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CategoryUpsertWithWhereUniqueWithoutProductsInputSchema),z.lazy(() => CategoryUpsertWithWhereUniqueWithoutProductsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => CategoryWhereUniqueInputSchema),z.lazy(() => CategoryWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CategoryWhereUniqueInputSchema),z.lazy(() => CategoryWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CategoryWhereUniqueInputSchema),z.lazy(() => CategoryWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CategoryWhereUniqueInputSchema),z.lazy(() => CategoryWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CategoryUpdateWithWhereUniqueWithoutProductsInputSchema),z.lazy(() => CategoryUpdateWithWhereUniqueWithoutProductsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CategoryUpdateManyWithWhereWithoutProductsInputSchema),z.lazy(() => CategoryUpdateManyWithWhereWithoutProductsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CategoryScalarWhereInputSchema),z.lazy(() => CategoryScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const BusinessUpdateManyWithoutLikedProductsNestedInputSchema: z.ZodType<Prisma.BusinessUpdateManyWithoutLikedProductsNestedInput> = z.object({
  create: z.union([ z.lazy(() => BusinessCreateWithoutLikedProductsInputSchema),z.lazy(() => BusinessCreateWithoutLikedProductsInputSchema).array(),z.lazy(() => BusinessUncheckedCreateWithoutLikedProductsInputSchema),z.lazy(() => BusinessUncheckedCreateWithoutLikedProductsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BusinessCreateOrConnectWithoutLikedProductsInputSchema),z.lazy(() => BusinessCreateOrConnectWithoutLikedProductsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BusinessUpsertWithWhereUniqueWithoutLikedProductsInputSchema),z.lazy(() => BusinessUpsertWithWhereUniqueWithoutLikedProductsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => BusinessWhereUniqueInputSchema),z.lazy(() => BusinessWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BusinessWhereUniqueInputSchema),z.lazy(() => BusinessWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BusinessWhereUniqueInputSchema),z.lazy(() => BusinessWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BusinessWhereUniqueInputSchema),z.lazy(() => BusinessWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BusinessUpdateWithWhereUniqueWithoutLikedProductsInputSchema),z.lazy(() => BusinessUpdateWithWhereUniqueWithoutLikedProductsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BusinessUpdateManyWithWhereWithoutLikedProductsInputSchema),z.lazy(() => BusinessUpdateManyWithWhereWithoutLikedProductsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BusinessScalarWhereInputSchema),z.lazy(() => BusinessScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const WishListUpdateManyWithoutProductsNestedInputSchema: z.ZodType<Prisma.WishListUpdateManyWithoutProductsNestedInput> = z.object({
  create: z.union([ z.lazy(() => WishListCreateWithoutProductsInputSchema),z.lazy(() => WishListCreateWithoutProductsInputSchema).array(),z.lazy(() => WishListUncheckedCreateWithoutProductsInputSchema),z.lazy(() => WishListUncheckedCreateWithoutProductsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => WishListCreateOrConnectWithoutProductsInputSchema),z.lazy(() => WishListCreateOrConnectWithoutProductsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => WishListUpsertWithWhereUniqueWithoutProductsInputSchema),z.lazy(() => WishListUpsertWithWhereUniqueWithoutProductsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => WishListWhereUniqueInputSchema),z.lazy(() => WishListWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => WishListWhereUniqueInputSchema),z.lazy(() => WishListWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => WishListWhereUniqueInputSchema),z.lazy(() => WishListWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => WishListWhereUniqueInputSchema),z.lazy(() => WishListWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => WishListUpdateWithWhereUniqueWithoutProductsInputSchema),z.lazy(() => WishListUpdateWithWhereUniqueWithoutProductsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => WishListUpdateManyWithWhereWithoutProductsInputSchema),z.lazy(() => WishListUpdateManyWithWhereWithoutProductsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => WishListScalarWhereInputSchema),z.lazy(() => WishListScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ProductUpdatecategoryIdsInputSchema: z.ZodType<Prisma.ProductUpdatecategoryIdsInput> = z.object({
  set: z.string().array().optional(),
  push: z.union([ z.string(),z.string().array() ]).optional(),
}).strict();

export const ProductUpdatebusinessLikeIdsInputSchema: z.ZodType<Prisma.ProductUpdatebusinessLikeIdsInput> = z.object({
  set: z.string().array().optional(),
  push: z.union([ z.string(),z.string().array() ]).optional(),
}).strict();

export const ProductUpdatewishListIdsInputSchema: z.ZodType<Prisma.ProductUpdatewishListIdsInput> = z.object({
  set: z.string().array().optional(),
  push: z.union([ z.string(),z.string().array() ]).optional(),
}).strict();

export const CategoryUncheckedUpdateManyWithoutProductsNestedInputSchema: z.ZodType<Prisma.CategoryUncheckedUpdateManyWithoutProductsNestedInput> = z.object({
  create: z.union([ z.lazy(() => CategoryCreateWithoutProductsInputSchema),z.lazy(() => CategoryCreateWithoutProductsInputSchema).array(),z.lazy(() => CategoryUncheckedCreateWithoutProductsInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutProductsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CategoryCreateOrConnectWithoutProductsInputSchema),z.lazy(() => CategoryCreateOrConnectWithoutProductsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CategoryUpsertWithWhereUniqueWithoutProductsInputSchema),z.lazy(() => CategoryUpsertWithWhereUniqueWithoutProductsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => CategoryWhereUniqueInputSchema),z.lazy(() => CategoryWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CategoryWhereUniqueInputSchema),z.lazy(() => CategoryWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CategoryWhereUniqueInputSchema),z.lazy(() => CategoryWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CategoryWhereUniqueInputSchema),z.lazy(() => CategoryWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CategoryUpdateWithWhereUniqueWithoutProductsInputSchema),z.lazy(() => CategoryUpdateWithWhereUniqueWithoutProductsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CategoryUpdateManyWithWhereWithoutProductsInputSchema),z.lazy(() => CategoryUpdateManyWithWhereWithoutProductsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CategoryScalarWhereInputSchema),z.lazy(() => CategoryScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const BusinessUncheckedUpdateManyWithoutLikedProductsNestedInputSchema: z.ZodType<Prisma.BusinessUncheckedUpdateManyWithoutLikedProductsNestedInput> = z.object({
  create: z.union([ z.lazy(() => BusinessCreateWithoutLikedProductsInputSchema),z.lazy(() => BusinessCreateWithoutLikedProductsInputSchema).array(),z.lazy(() => BusinessUncheckedCreateWithoutLikedProductsInputSchema),z.lazy(() => BusinessUncheckedCreateWithoutLikedProductsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BusinessCreateOrConnectWithoutLikedProductsInputSchema),z.lazy(() => BusinessCreateOrConnectWithoutLikedProductsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BusinessUpsertWithWhereUniqueWithoutLikedProductsInputSchema),z.lazy(() => BusinessUpsertWithWhereUniqueWithoutLikedProductsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => BusinessWhereUniqueInputSchema),z.lazy(() => BusinessWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BusinessWhereUniqueInputSchema),z.lazy(() => BusinessWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BusinessWhereUniqueInputSchema),z.lazy(() => BusinessWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BusinessWhereUniqueInputSchema),z.lazy(() => BusinessWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BusinessUpdateWithWhereUniqueWithoutLikedProductsInputSchema),z.lazy(() => BusinessUpdateWithWhereUniqueWithoutLikedProductsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BusinessUpdateManyWithWhereWithoutLikedProductsInputSchema),z.lazy(() => BusinessUpdateManyWithWhereWithoutLikedProductsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BusinessScalarWhereInputSchema),z.lazy(() => BusinessScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const WishListUncheckedUpdateManyWithoutProductsNestedInputSchema: z.ZodType<Prisma.WishListUncheckedUpdateManyWithoutProductsNestedInput> = z.object({
  create: z.union([ z.lazy(() => WishListCreateWithoutProductsInputSchema),z.lazy(() => WishListCreateWithoutProductsInputSchema).array(),z.lazy(() => WishListUncheckedCreateWithoutProductsInputSchema),z.lazy(() => WishListUncheckedCreateWithoutProductsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => WishListCreateOrConnectWithoutProductsInputSchema),z.lazy(() => WishListCreateOrConnectWithoutProductsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => WishListUpsertWithWhereUniqueWithoutProductsInputSchema),z.lazy(() => WishListUpsertWithWhereUniqueWithoutProductsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => WishListWhereUniqueInputSchema),z.lazy(() => WishListWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => WishListWhereUniqueInputSchema),z.lazy(() => WishListWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => WishListWhereUniqueInputSchema),z.lazy(() => WishListWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => WishListWhereUniqueInputSchema),z.lazy(() => WishListWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => WishListUpdateWithWhereUniqueWithoutProductsInputSchema),z.lazy(() => WishListUpdateWithWhereUniqueWithoutProductsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => WishListUpdateManyWithWhereWithoutProductsInputSchema),z.lazy(() => WishListUpdateManyWithWhereWithoutProductsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => WishListScalarWhereInputSchema),z.lazy(() => WishListScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const CompanyCreateNestedOneWithoutWorkersInputSchema: z.ZodType<Prisma.CompanyCreateNestedOneWithoutWorkersInput> = z.object({
  create: z.union([ z.lazy(() => CompanyCreateWithoutWorkersInputSchema),z.lazy(() => CompanyUncheckedCreateWithoutWorkersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CompanyCreateOrConnectWithoutWorkersInputSchema).optional(),
  connect: z.lazy(() => CompanyWhereUniqueInputSchema).optional()
}).strict();

export const EnumWorkerRoleFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumWorkerRoleFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => WorkerRoleSchema).optional()
}).strict();

export const CompanyUpdateOneRequiredWithoutWorkersNestedInputSchema: z.ZodType<Prisma.CompanyUpdateOneRequiredWithoutWorkersNestedInput> = z.object({
  create: z.union([ z.lazy(() => CompanyCreateWithoutWorkersInputSchema),z.lazy(() => CompanyUncheckedCreateWithoutWorkersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CompanyCreateOrConnectWithoutWorkersInputSchema).optional(),
  upsert: z.lazy(() => CompanyUpsertWithoutWorkersInputSchema).optional(),
  connect: z.lazy(() => CompanyWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CompanyUpdateWithoutWorkersInputSchema),z.lazy(() => CompanyUncheckedUpdateWithoutWorkersInputSchema) ]).optional(),
}).strict();

export const OrderItemListCreateEnvelopeInputSchema: z.ZodType<Prisma.OrderItemListCreateEnvelopeInput> = z.object({
  set: z.union([ z.lazy(() => OrderItemCreateInputSchema),z.lazy(() => OrderItemCreateInputSchema).array() ]).optional(),
}).strict();

export const OrderItemCreateInputSchema: z.ZodType<Prisma.OrderItemCreateInput> = z.object({
  id: z.string(),
  name: z.string(),
  size: z.string(),
  color: z.string(),
  price: z.number(),
  freeShipping: z.boolean().optional(),
  image: z.union([ z.lazy(() => OrderItemCreateimageInputSchema),z.string().array() ]).optional(),
}).strict();

export const BusinessCreateNestedOneWithoutOrdersInputSchema: z.ZodType<Prisma.BusinessCreateNestedOneWithoutOrdersInput> = z.object({
  create: z.union([ z.lazy(() => BusinessCreateWithoutOrdersInputSchema),z.lazy(() => BusinessUncheckedCreateWithoutOrdersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BusinessCreateOrConnectWithoutOrdersInputSchema).optional(),
  connect: z.lazy(() => BusinessWhereUniqueInputSchema).optional()
}).strict();

export const CompanyCreateNestedOneWithoutOrdersInputSchema: z.ZodType<Prisma.CompanyCreateNestedOneWithoutOrdersInput> = z.object({
  create: z.union([ z.lazy(() => CompanyCreateWithoutOrdersInputSchema),z.lazy(() => CompanyUncheckedCreateWithoutOrdersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CompanyCreateOrConnectWithoutOrdersInputSchema).optional(),
  connect: z.lazy(() => CompanyWhereUniqueInputSchema).optional()
}).strict();

export const CouponCreateNestedOneWithoutOrdersInputSchema: z.ZodType<Prisma.CouponCreateNestedOneWithoutOrdersInput> = z.object({
  create: z.union([ z.lazy(() => CouponCreateWithoutOrdersInputSchema),z.lazy(() => CouponUncheckedCreateWithoutOrdersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CouponCreateOrConnectWithoutOrdersInputSchema).optional(),
  connect: z.lazy(() => CouponWhereUniqueInputSchema).optional()
}).strict();

export const FloatFieldUpdateOperationsInputSchema: z.ZodType<Prisma.FloatFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const OrderItemListUpdateEnvelopeInputSchema: z.ZodType<Prisma.OrderItemListUpdateEnvelopeInput> = z.object({
  set: z.union([ z.lazy(() => OrderItemCreateInputSchema),z.lazy(() => OrderItemCreateInputSchema).array() ]).optional(),
  push: z.union([ z.lazy(() => OrderItemCreateInputSchema),z.lazy(() => OrderItemCreateInputSchema).array() ]).optional(),
  updateMany: z.lazy(() => OrderItemUpdateManyInputSchema).optional(),
  deleteMany: z.lazy(() => OrderItemDeleteManyInputSchema).optional()
}).strict();

export const BusinessUpdateOneWithoutOrdersNestedInputSchema: z.ZodType<Prisma.BusinessUpdateOneWithoutOrdersNestedInput> = z.object({
  create: z.union([ z.lazy(() => BusinessCreateWithoutOrdersInputSchema),z.lazy(() => BusinessUncheckedCreateWithoutOrdersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BusinessCreateOrConnectWithoutOrdersInputSchema).optional(),
  upsert: z.lazy(() => BusinessUpsertWithoutOrdersInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.boolean().optional(),
  connect: z.lazy(() => BusinessWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => BusinessUpdateWithoutOrdersInputSchema),z.lazy(() => BusinessUncheckedUpdateWithoutOrdersInputSchema) ]).optional(),
}).strict();

export const CompanyUpdateOneWithoutOrdersNestedInputSchema: z.ZodType<Prisma.CompanyUpdateOneWithoutOrdersNestedInput> = z.object({
  create: z.union([ z.lazy(() => CompanyCreateWithoutOrdersInputSchema),z.lazy(() => CompanyUncheckedCreateWithoutOrdersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CompanyCreateOrConnectWithoutOrdersInputSchema).optional(),
  upsert: z.lazy(() => CompanyUpsertWithoutOrdersInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.boolean().optional(),
  connect: z.lazy(() => CompanyWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CompanyUpdateWithoutOrdersInputSchema),z.lazy(() => CompanyUncheckedUpdateWithoutOrdersInputSchema) ]).optional(),
}).strict();

export const CouponUpdateOneWithoutOrdersNestedInputSchema: z.ZodType<Prisma.CouponUpdateOneWithoutOrdersNestedInput> = z.object({
  create: z.union([ z.lazy(() => CouponCreateWithoutOrdersInputSchema),z.lazy(() => CouponUncheckedCreateWithoutOrdersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CouponCreateOrConnectWithoutOrdersInputSchema).optional(),
  upsert: z.lazy(() => CouponUpsertWithoutOrdersInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.boolean().optional(),
  connect: z.lazy(() => CouponWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CouponUpdateWithoutOrdersInputSchema),z.lazy(() => CouponUncheckedUpdateWithoutOrdersInputSchema) ]).optional(),
}).strict();

export const OrderCreateNestedManyWithoutCouponInputSchema: z.ZodType<Prisma.OrderCreateNestedManyWithoutCouponInput> = z.object({
  create: z.union([ z.lazy(() => OrderCreateWithoutCouponInputSchema),z.lazy(() => OrderCreateWithoutCouponInputSchema).array(),z.lazy(() => OrderUncheckedCreateWithoutCouponInputSchema),z.lazy(() => OrderUncheckedCreateWithoutCouponInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrderCreateOrConnectWithoutCouponInputSchema),z.lazy(() => OrderCreateOrConnectWithoutCouponInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrderCreateManyCouponInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const CompanyCreateNestedOneWithoutCouponsInputSchema: z.ZodType<Prisma.CompanyCreateNestedOneWithoutCouponsInput> = z.object({
  create: z.union([ z.lazy(() => CompanyCreateWithoutCouponsInputSchema),z.lazy(() => CompanyUncheckedCreateWithoutCouponsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CompanyCreateOrConnectWithoutCouponsInputSchema).optional(),
  connect: z.lazy(() => CompanyWhereUniqueInputSchema).optional()
}).strict();

export const OrderUncheckedCreateNestedManyWithoutCouponInputSchema: z.ZodType<Prisma.OrderUncheckedCreateNestedManyWithoutCouponInput> = z.object({
  create: z.union([ z.lazy(() => OrderCreateWithoutCouponInputSchema),z.lazy(() => OrderCreateWithoutCouponInputSchema).array(),z.lazy(() => OrderUncheckedCreateWithoutCouponInputSchema),z.lazy(() => OrderUncheckedCreateWithoutCouponInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrderCreateOrConnectWithoutCouponInputSchema),z.lazy(() => OrderCreateOrConnectWithoutCouponInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrderCreateManyCouponInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const OrderUpdateManyWithoutCouponNestedInputSchema: z.ZodType<Prisma.OrderUpdateManyWithoutCouponNestedInput> = z.object({
  create: z.union([ z.lazy(() => OrderCreateWithoutCouponInputSchema),z.lazy(() => OrderCreateWithoutCouponInputSchema).array(),z.lazy(() => OrderUncheckedCreateWithoutCouponInputSchema),z.lazy(() => OrderUncheckedCreateWithoutCouponInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrderCreateOrConnectWithoutCouponInputSchema),z.lazy(() => OrderCreateOrConnectWithoutCouponInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => OrderUpsertWithWhereUniqueWithoutCouponInputSchema),z.lazy(() => OrderUpsertWithWhereUniqueWithoutCouponInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrderCreateManyCouponInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => OrderUpdateWithWhereUniqueWithoutCouponInputSchema),z.lazy(() => OrderUpdateWithWhereUniqueWithoutCouponInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => OrderUpdateManyWithWhereWithoutCouponInputSchema),z.lazy(() => OrderUpdateManyWithWhereWithoutCouponInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => OrderScalarWhereInputSchema),z.lazy(() => OrderScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const CompanyUpdateOneWithoutCouponsNestedInputSchema: z.ZodType<Prisma.CompanyUpdateOneWithoutCouponsNestedInput> = z.object({
  create: z.union([ z.lazy(() => CompanyCreateWithoutCouponsInputSchema),z.lazy(() => CompanyUncheckedCreateWithoutCouponsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CompanyCreateOrConnectWithoutCouponsInputSchema).optional(),
  upsert: z.lazy(() => CompanyUpsertWithoutCouponsInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.boolean().optional(),
  connect: z.lazy(() => CompanyWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CompanyUpdateWithoutCouponsInputSchema),z.lazy(() => CompanyUncheckedUpdateWithoutCouponsInputSchema) ]).optional(),
}).strict();

export const OrderUncheckedUpdateManyWithoutCouponNestedInputSchema: z.ZodType<Prisma.OrderUncheckedUpdateManyWithoutCouponNestedInput> = z.object({
  create: z.union([ z.lazy(() => OrderCreateWithoutCouponInputSchema),z.lazy(() => OrderCreateWithoutCouponInputSchema).array(),z.lazy(() => OrderUncheckedCreateWithoutCouponInputSchema),z.lazy(() => OrderUncheckedCreateWithoutCouponInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrderCreateOrConnectWithoutCouponInputSchema),z.lazy(() => OrderCreateOrConnectWithoutCouponInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => OrderUpsertWithWhereUniqueWithoutCouponInputSchema),z.lazy(() => OrderUpsertWithWhereUniqueWithoutCouponInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrderCreateManyCouponInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => OrderUpdateWithWhereUniqueWithoutCouponInputSchema),z.lazy(() => OrderUpdateWithWhereUniqueWithoutCouponInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => OrderUpdateManyWithWhereWithoutCouponInputSchema),z.lazy(() => OrderUpdateManyWithWhereWithoutCouponInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => OrderScalarWhereInputSchema),z.lazy(() => OrderScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const CompanyCreateNestedOneWithoutCategoriesInputSchema: z.ZodType<Prisma.CompanyCreateNestedOneWithoutCategoriesInput> = z.object({
  create: z.union([ z.lazy(() => CompanyCreateWithoutCategoriesInputSchema),z.lazy(() => CompanyUncheckedCreateWithoutCategoriesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CompanyCreateOrConnectWithoutCategoriesInputSchema).optional(),
  connect: z.lazy(() => CompanyWhereUniqueInputSchema).optional()
}).strict();

export const ProductCreateNestedManyWithoutCategoriesInputSchema: z.ZodType<Prisma.ProductCreateNestedManyWithoutCategoriesInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutCategoriesInputSchema),z.lazy(() => ProductCreateWithoutCategoriesInputSchema).array(),z.lazy(() => ProductUncheckedCreateWithoutCategoriesInputSchema),z.lazy(() => ProductUncheckedCreateWithoutCategoriesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductCreateOrConnectWithoutCategoriesInputSchema),z.lazy(() => ProductCreateOrConnectWithoutCategoriesInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const CategoryCreateproductsIdsInputSchema: z.ZodType<Prisma.CategoryCreateproductsIdsInput> = z.object({
  set: z.string().array()
}).strict();

export const ProductUncheckedCreateNestedManyWithoutCategoriesInputSchema: z.ZodType<Prisma.ProductUncheckedCreateNestedManyWithoutCategoriesInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutCategoriesInputSchema),z.lazy(() => ProductCreateWithoutCategoriesInputSchema).array(),z.lazy(() => ProductUncheckedCreateWithoutCategoriesInputSchema),z.lazy(() => ProductUncheckedCreateWithoutCategoriesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductCreateOrConnectWithoutCategoriesInputSchema),z.lazy(() => ProductCreateOrConnectWithoutCategoriesInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const CompanyUpdateOneRequiredWithoutCategoriesNestedInputSchema: z.ZodType<Prisma.CompanyUpdateOneRequiredWithoutCategoriesNestedInput> = z.object({
  create: z.union([ z.lazy(() => CompanyCreateWithoutCategoriesInputSchema),z.lazy(() => CompanyUncheckedCreateWithoutCategoriesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CompanyCreateOrConnectWithoutCategoriesInputSchema).optional(),
  upsert: z.lazy(() => CompanyUpsertWithoutCategoriesInputSchema).optional(),
  connect: z.lazy(() => CompanyWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CompanyUpdateWithoutCategoriesInputSchema),z.lazy(() => CompanyUncheckedUpdateWithoutCategoriesInputSchema) ]).optional(),
}).strict();

export const ProductUpdateManyWithoutCategoriesNestedInputSchema: z.ZodType<Prisma.ProductUpdateManyWithoutCategoriesNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutCategoriesInputSchema),z.lazy(() => ProductCreateWithoutCategoriesInputSchema).array(),z.lazy(() => ProductUncheckedCreateWithoutCategoriesInputSchema),z.lazy(() => ProductUncheckedCreateWithoutCategoriesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductCreateOrConnectWithoutCategoriesInputSchema),z.lazy(() => ProductCreateOrConnectWithoutCategoriesInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ProductUpsertWithWhereUniqueWithoutCategoriesInputSchema),z.lazy(() => ProductUpsertWithWhereUniqueWithoutCategoriesInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ProductUpdateWithWhereUniqueWithoutCategoriesInputSchema),z.lazy(() => ProductUpdateWithWhereUniqueWithoutCategoriesInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ProductUpdateManyWithWhereWithoutCategoriesInputSchema),z.lazy(() => ProductUpdateManyWithWhereWithoutCategoriesInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ProductScalarWhereInputSchema),z.lazy(() => ProductScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const CategoryUpdateproductsIdsInputSchema: z.ZodType<Prisma.CategoryUpdateproductsIdsInput> = z.object({
  set: z.string().array().optional(),
  push: z.union([ z.string(),z.string().array() ]).optional(),
}).strict();

export const ProductUncheckedUpdateManyWithoutCategoriesNestedInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateManyWithoutCategoriesNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutCategoriesInputSchema),z.lazy(() => ProductCreateWithoutCategoriesInputSchema).array(),z.lazy(() => ProductUncheckedCreateWithoutCategoriesInputSchema),z.lazy(() => ProductUncheckedCreateWithoutCategoriesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductCreateOrConnectWithoutCategoriesInputSchema),z.lazy(() => ProductCreateOrConnectWithoutCategoriesInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ProductUpsertWithWhereUniqueWithoutCategoriesInputSchema),z.lazy(() => ProductUpsertWithWhereUniqueWithoutCategoriesInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProductWhereUniqueInputSchema),z.lazy(() => ProductWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ProductUpdateWithWhereUniqueWithoutCategoriesInputSchema),z.lazy(() => ProductUpdateWithWhereUniqueWithoutCategoriesInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ProductUpdateManyWithWhereWithoutCategoriesInputSchema),z.lazy(() => ProductUpdateManyWithWhereWithoutCategoriesInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ProductScalarWhereInputSchema),z.lazy(() => ProductScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedEnumBusinessTypeFilterSchema: z.ZodType<Prisma.NestedEnumBusinessTypeFilter> = z.object({
  equals: z.lazy(() => BusinessTypeSchema).optional(),
  in: z.lazy(() => BusinessTypeSchema).array().optional(),
  notIn: z.lazy(() => BusinessTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => BusinessTypeSchema),z.lazy(() => NestedEnumBusinessTypeFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedEnumBusinessTypeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumBusinessTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => BusinessTypeSchema).optional(),
  in: z.lazy(() => BusinessTypeSchema).array().optional(),
  notIn: z.lazy(() => BusinessTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => BusinessTypeSchema),z.lazy(() => NestedEnumBusinessTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumBusinessTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumBusinessTypeFilterSchema).optional()
}).strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const NestedBoolFilterSchema: z.ZodType<Prisma.NestedBoolFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolFilterSchema) ]).optional(),
}).strict();

export const NestedBoolWithAggregatesFilterSchema: z.ZodType<Prisma.NestedBoolWithAggregatesFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterSchema).optional()
}).strict();

export const NestedStringNullableFilterSchema: z.ZodType<Prisma.NestedStringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
  isSet: z.boolean().optional()
}).strict();

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
  isSet: z.boolean().optional()
}).strict();

export const NestedStringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  isSet: z.boolean().optional()
}).strict();

export const NestedIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict();

export const NestedIntNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntNullableWithAggregatesFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  isSet: z.boolean().optional()
}).strict();

export const NestedFloatNullableFilterSchema: z.ZodType<Prisma.NestedFloatNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatNullableFilterSchema) ]).optional().nullable(),
  isSet: z.boolean().optional()
}).strict();

export const NestedEnumWorkerRoleFilterSchema: z.ZodType<Prisma.NestedEnumWorkerRoleFilter> = z.object({
  equals: z.lazy(() => WorkerRoleSchema).optional(),
  in: z.lazy(() => WorkerRoleSchema).array().optional(),
  notIn: z.lazy(() => WorkerRoleSchema).array().optional(),
  not: z.union([ z.lazy(() => WorkerRoleSchema),z.lazy(() => NestedEnumWorkerRoleFilterSchema) ]).optional(),
}).strict();

export const NestedEnumWorkerRoleWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumWorkerRoleWithAggregatesFilter> = z.object({
  equals: z.lazy(() => WorkerRoleSchema).optional(),
  in: z.lazy(() => WorkerRoleSchema).array().optional(),
  notIn: z.lazy(() => WorkerRoleSchema).array().optional(),
  not: z.union([ z.lazy(() => WorkerRoleSchema),z.lazy(() => NestedEnumWorkerRoleWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumWorkerRoleFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumWorkerRoleFilterSchema).optional()
}).strict();

export const OrderItemWhereInputSchema: z.ZodType<Prisma.OrderItemWhereInput> = z.object({
  AND: z.union([ z.lazy(() => OrderItemWhereInputSchema),z.lazy(() => OrderItemWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => OrderItemWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OrderItemWhereInputSchema),z.lazy(() => OrderItemWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  size: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  color: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  price: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  freeShipping: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  image: z.lazy(() => StringNullableListFilterSchema).optional()
}).strict();

export const NestedFloatWithAggregatesFilterSchema: z.ZodType<Prisma.NestedFloatWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedFloatFilterSchema).optional(),
  _min: z.lazy(() => NestedFloatFilterSchema).optional(),
  _max: z.lazy(() => NestedFloatFilterSchema).optional()
}).strict();

export const OrderCreateWithoutBusinessInputSchema: z.ZodType<Prisma.OrderCreateWithoutBusinessInput> = z.object({
  id: z.string().optional(),
  subtotal: z.number(),
  delivery: z.number(),
  discount: z.number(),
  total: z.number(),
  items: z.union([ z.lazy(() => OrderItemListCreateEnvelopeInputSchema),z.lazy(() => OrderItemCreateInputSchema),z.lazy(() => OrderItemCreateInputSchema).array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  Company: z.lazy(() => CompanyCreateNestedOneWithoutOrdersInputSchema).optional(),
  coupon: z.lazy(() => CouponCreateNestedOneWithoutOrdersInputSchema).optional()
}).strict();

export const OrderUncheckedCreateWithoutBusinessInputSchema: z.ZodType<Prisma.OrderUncheckedCreateWithoutBusinessInput> = z.object({
  id: z.string().optional(),
  subtotal: z.number(),
  delivery: z.number(),
  discount: z.number(),
  total: z.number(),
  items: z.union([ z.lazy(() => OrderItemListCreateEnvelopeInputSchema),z.lazy(() => OrderItemCreateInputSchema),z.lazy(() => OrderItemCreateInputSchema).array() ]).optional(),
  companyId: z.string().optional().nullable(),
  couponId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const OrderCreateOrConnectWithoutBusinessInputSchema: z.ZodType<Prisma.OrderCreateOrConnectWithoutBusinessInput> = z.object({
  where: z.lazy(() => OrderWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => OrderCreateWithoutBusinessInputSchema),z.lazy(() => OrderUncheckedCreateWithoutBusinessInputSchema) ]),
}).strict();

export const OrderCreateManyBusinessInputEnvelopeSchema: z.ZodType<Prisma.OrderCreateManyBusinessInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => OrderCreateManyBusinessInputSchema),z.lazy(() => OrderCreateManyBusinessInputSchema).array() ]),
}).strict();

export const WishListCreateWithoutBusinessInputSchema: z.ZodType<Prisma.WishListCreateWithoutBusinessInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  company: z.lazy(() => CompanyCreateNestedOneWithoutWishListInputSchema),
  products: z.lazy(() => ProductCreateNestedManyWithoutWishListsInputSchema).optional()
}).strict();

export const WishListUncheckedCreateWithoutBusinessInputSchema: z.ZodType<Prisma.WishListUncheckedCreateWithoutBusinessInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  companyId: z.string(),
  productsIds: z.union([ z.lazy(() => WishListCreateproductsIdsInputSchema),z.string().array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  products: z.lazy(() => ProductUncheckedCreateNestedManyWithoutWishListsInputSchema).optional()
}).strict();

export const WishListCreateOrConnectWithoutBusinessInputSchema: z.ZodType<Prisma.WishListCreateOrConnectWithoutBusinessInput> = z.object({
  where: z.lazy(() => WishListWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => WishListCreateWithoutBusinessInputSchema),z.lazy(() => WishListUncheckedCreateWithoutBusinessInputSchema) ]),
}).strict();

export const WishListCreateManyBusinessInputEnvelopeSchema: z.ZodType<Prisma.WishListCreateManyBusinessInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => WishListCreateManyBusinessInputSchema),z.lazy(() => WishListCreateManyBusinessInputSchema).array() ]),
}).strict();

export const ProductCreateWithoutLikesInputSchema: z.ZodType<Prisma.ProductCreateWithoutLikesInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  dec: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
  price: z.number(),
  oldPrice: z.number().optional().nullable(),
  available: z.boolean().optional(),
  hot: z.boolean().optional(),
  freeShipping: z.boolean().optional(),
  views: z.union([ z.lazy(() => ProductCreateviewsInputSchema),z.string().array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  company: z.lazy(() => CompanyCreateNestedOneWithoutProductsInputSchema),
  categories: z.lazy(() => CategoryCreateNestedManyWithoutProductsInputSchema).optional(),
  wishLists: z.lazy(() => WishListCreateNestedManyWithoutProductsInputSchema).optional()
}).strict();

export const ProductUncheckedCreateWithoutLikesInputSchema: z.ZodType<Prisma.ProductUncheckedCreateWithoutLikesInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  dec: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
  price: z.number(),
  oldPrice: z.number().optional().nullable(),
  available: z.boolean().optional(),
  hot: z.boolean().optional(),
  freeShipping: z.boolean().optional(),
  views: z.union([ z.lazy(() => ProductCreateviewsInputSchema),z.string().array() ]).optional(),
  companyId: z.string(),
  categoryIds: z.union([ z.lazy(() => ProductCreatecategoryIdsInputSchema),z.string().array() ]).optional(),
  businessLikeIds: z.union([ z.lazy(() => ProductCreatebusinessLikeIdsInputSchema),z.string().array() ]).optional(),
  wishListIds: z.union([ z.lazy(() => ProductCreatewishListIdsInputSchema),z.string().array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  categories: z.lazy(() => CategoryUncheckedCreateNestedManyWithoutProductsInputSchema).optional(),
  wishLists: z.lazy(() => WishListUncheckedCreateNestedManyWithoutProductsInputSchema).optional()
}).strict();

export const ProductCreateOrConnectWithoutLikesInputSchema: z.ZodType<Prisma.ProductCreateOrConnectWithoutLikesInput> = z.object({
  where: z.lazy(() => ProductWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProductCreateWithoutLikesInputSchema),z.lazy(() => ProductUncheckedCreateWithoutLikesInputSchema) ]),
}).strict();

export const OrderUpsertWithWhereUniqueWithoutBusinessInputSchema: z.ZodType<Prisma.OrderUpsertWithWhereUniqueWithoutBusinessInput> = z.object({
  where: z.lazy(() => OrderWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => OrderUpdateWithoutBusinessInputSchema),z.lazy(() => OrderUncheckedUpdateWithoutBusinessInputSchema) ]),
  create: z.union([ z.lazy(() => OrderCreateWithoutBusinessInputSchema),z.lazy(() => OrderUncheckedCreateWithoutBusinessInputSchema) ]),
}).strict();

export const OrderUpdateWithWhereUniqueWithoutBusinessInputSchema: z.ZodType<Prisma.OrderUpdateWithWhereUniqueWithoutBusinessInput> = z.object({
  where: z.lazy(() => OrderWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => OrderUpdateWithoutBusinessInputSchema),z.lazy(() => OrderUncheckedUpdateWithoutBusinessInputSchema) ]),
}).strict();

export const OrderUpdateManyWithWhereWithoutBusinessInputSchema: z.ZodType<Prisma.OrderUpdateManyWithWhereWithoutBusinessInput> = z.object({
  where: z.lazy(() => OrderScalarWhereInputSchema),
  data: z.union([ z.lazy(() => OrderUpdateManyMutationInputSchema),z.lazy(() => OrderUncheckedUpdateManyWithoutOrdersInputSchema) ]),
}).strict();

export const OrderScalarWhereInputSchema: z.ZodType<Prisma.OrderScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => OrderScalarWhereInputSchema),z.lazy(() => OrderScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => OrderScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OrderScalarWhereInputSchema),z.lazy(() => OrderScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  subtotal: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  delivery: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  discount: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  total: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  businessId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  companyId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  couponId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const WishListUpsertWithWhereUniqueWithoutBusinessInputSchema: z.ZodType<Prisma.WishListUpsertWithWhereUniqueWithoutBusinessInput> = z.object({
  where: z.lazy(() => WishListWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => WishListUpdateWithoutBusinessInputSchema),z.lazy(() => WishListUncheckedUpdateWithoutBusinessInputSchema) ]),
  create: z.union([ z.lazy(() => WishListCreateWithoutBusinessInputSchema),z.lazy(() => WishListUncheckedCreateWithoutBusinessInputSchema) ]),
}).strict();

export const WishListUpdateWithWhereUniqueWithoutBusinessInputSchema: z.ZodType<Prisma.WishListUpdateWithWhereUniqueWithoutBusinessInput> = z.object({
  where: z.lazy(() => WishListWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => WishListUpdateWithoutBusinessInputSchema),z.lazy(() => WishListUncheckedUpdateWithoutBusinessInputSchema) ]),
}).strict();

export const WishListUpdateManyWithWhereWithoutBusinessInputSchema: z.ZodType<Prisma.WishListUpdateManyWithWhereWithoutBusinessInput> = z.object({
  where: z.lazy(() => WishListScalarWhereInputSchema),
  data: z.union([ z.lazy(() => WishListUpdateManyMutationInputSchema),z.lazy(() => WishListUncheckedUpdateManyWithoutWishListsInputSchema) ]),
}).strict();

export const WishListScalarWhereInputSchema: z.ZodType<Prisma.WishListScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => WishListScalarWhereInputSchema),z.lazy(() => WishListScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => WishListScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => WishListScalarWhereInputSchema),z.lazy(() => WishListScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  businessId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  companyId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  productsIds: z.lazy(() => StringNullableListFilterSchema).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const ProductUpsertWithWhereUniqueWithoutLikesInputSchema: z.ZodType<Prisma.ProductUpsertWithWhereUniqueWithoutLikesInput> = z.object({
  where: z.lazy(() => ProductWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ProductUpdateWithoutLikesInputSchema),z.lazy(() => ProductUncheckedUpdateWithoutLikesInputSchema) ]),
  create: z.union([ z.lazy(() => ProductCreateWithoutLikesInputSchema),z.lazy(() => ProductUncheckedCreateWithoutLikesInputSchema) ]),
}).strict();

export const ProductUpdateWithWhereUniqueWithoutLikesInputSchema: z.ZodType<Prisma.ProductUpdateWithWhereUniqueWithoutLikesInput> = z.object({
  where: z.lazy(() => ProductWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ProductUpdateWithoutLikesInputSchema),z.lazy(() => ProductUncheckedUpdateWithoutLikesInputSchema) ]),
}).strict();

export const ProductUpdateManyWithWhereWithoutLikesInputSchema: z.ZodType<Prisma.ProductUpdateManyWithWhereWithoutLikesInput> = z.object({
  where: z.lazy(() => ProductScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ProductUpdateManyMutationInputSchema),z.lazy(() => ProductUncheckedUpdateManyWithoutLikedProductsInputSchema) ]),
}).strict();

export const ProductScalarWhereInputSchema: z.ZodType<Prisma.ProductScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ProductScalarWhereInputSchema),z.lazy(() => ProductScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProductScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProductScalarWhereInputSchema),z.lazy(() => ProductScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  dec: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  image: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  price: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  oldPrice: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  available: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  hot: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  freeShipping: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  views: z.lazy(() => StringNullableListFilterSchema).optional(),
  companyId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  categoryIds: z.lazy(() => StringNullableListFilterSchema).optional(),
  businessLikeIds: z.lazy(() => StringNullableListFilterSchema).optional(),
  wishListIds: z.lazy(() => StringNullableListFilterSchema).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const BusinessCreateWithoutWishListsInputSchema: z.ZodType<Prisma.BusinessCreateWithoutWishListsInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  password: z.string(),
  phoneNumber: z.string(),
  state: z.string(),
  location: z.string(),
  neighborhood: z.string(),
  type: z.lazy(() => BusinessTypeSchema),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  orders: z.lazy(() => OrderCreateNestedManyWithoutBusinessInputSchema).optional(),
  likedProducts: z.lazy(() => ProductCreateNestedManyWithoutLikesInputSchema).optional()
}).strict();

export const BusinessUncheckedCreateWithoutWishListsInputSchema: z.ZodType<Prisma.BusinessUncheckedCreateWithoutWishListsInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  password: z.string(),
  phoneNumber: z.string(),
  state: z.string(),
  location: z.string(),
  neighborhood: z.string(),
  type: z.lazy(() => BusinessTypeSchema),
  productsLikedIds: z.union([ z.lazy(() => BusinessCreateproductsLikedIdsInputSchema),z.string().array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  orders: z.lazy(() => OrderUncheckedCreateNestedManyWithoutBusinessInputSchema).optional(),
  likedProducts: z.lazy(() => ProductUncheckedCreateNestedManyWithoutLikesInputSchema).optional()
}).strict();

export const BusinessCreateOrConnectWithoutWishListsInputSchema: z.ZodType<Prisma.BusinessCreateOrConnectWithoutWishListsInput> = z.object({
  where: z.lazy(() => BusinessWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BusinessCreateWithoutWishListsInputSchema),z.lazy(() => BusinessUncheckedCreateWithoutWishListsInputSchema) ]),
}).strict();

export const CompanyCreateWithoutWishListInputSchema: z.ZodType<Prisma.CompanyCreateWithoutWishListInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  type: z.lazy(() => BusinessTypeSchema),
  active: z.boolean().optional(),
  logo: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  products: z.lazy(() => ProductCreateNestedManyWithoutCompanyInputSchema).optional(),
  orders: z.lazy(() => OrderCreateNestedManyWithoutCompanyInputSchema).optional(),
  workers: z.lazy(() => WorkerCreateNestedManyWithoutCompanyInputSchema).optional(),
  coupons: z.lazy(() => CouponCreateNestedManyWithoutCompanyInputSchema).optional(),
  categories: z.lazy(() => CategoryCreateNestedManyWithoutCompanyInputSchema).optional()
}).strict();

export const CompanyUncheckedCreateWithoutWishListInputSchema: z.ZodType<Prisma.CompanyUncheckedCreateWithoutWishListInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  type: z.lazy(() => BusinessTypeSchema),
  active: z.boolean().optional(),
  logo: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  products: z.lazy(() => ProductUncheckedCreateNestedManyWithoutCompanyInputSchema).optional(),
  orders: z.lazy(() => OrderUncheckedCreateNestedManyWithoutCompanyInputSchema).optional(),
  workers: z.lazy(() => WorkerUncheckedCreateNestedManyWithoutCompanyInputSchema).optional(),
  coupons: z.lazy(() => CouponUncheckedCreateNestedManyWithoutCompanyInputSchema).optional(),
  categories: z.lazy(() => CategoryUncheckedCreateNestedManyWithoutCompanyInputSchema).optional()
}).strict();

export const CompanyCreateOrConnectWithoutWishListInputSchema: z.ZodType<Prisma.CompanyCreateOrConnectWithoutWishListInput> = z.object({
  where: z.lazy(() => CompanyWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CompanyCreateWithoutWishListInputSchema),z.lazy(() => CompanyUncheckedCreateWithoutWishListInputSchema) ]),
}).strict();

export const ProductCreateWithoutWishListsInputSchema: z.ZodType<Prisma.ProductCreateWithoutWishListsInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  dec: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
  price: z.number(),
  oldPrice: z.number().optional().nullable(),
  available: z.boolean().optional(),
  hot: z.boolean().optional(),
  freeShipping: z.boolean().optional(),
  views: z.union([ z.lazy(() => ProductCreateviewsInputSchema),z.string().array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  company: z.lazy(() => CompanyCreateNestedOneWithoutProductsInputSchema),
  categories: z.lazy(() => CategoryCreateNestedManyWithoutProductsInputSchema).optional(),
  likes: z.lazy(() => BusinessCreateNestedManyWithoutLikedProductsInputSchema).optional()
}).strict();

export const ProductUncheckedCreateWithoutWishListsInputSchema: z.ZodType<Prisma.ProductUncheckedCreateWithoutWishListsInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  dec: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
  price: z.number(),
  oldPrice: z.number().optional().nullable(),
  available: z.boolean().optional(),
  hot: z.boolean().optional(),
  freeShipping: z.boolean().optional(),
  views: z.union([ z.lazy(() => ProductCreateviewsInputSchema),z.string().array() ]).optional(),
  companyId: z.string(),
  categoryIds: z.union([ z.lazy(() => ProductCreatecategoryIdsInputSchema),z.string().array() ]).optional(),
  businessLikeIds: z.union([ z.lazy(() => ProductCreatebusinessLikeIdsInputSchema),z.string().array() ]).optional(),
  wishListIds: z.union([ z.lazy(() => ProductCreatewishListIdsInputSchema),z.string().array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  categories: z.lazy(() => CategoryUncheckedCreateNestedManyWithoutProductsInputSchema).optional(),
  likes: z.lazy(() => BusinessUncheckedCreateNestedManyWithoutLikedProductsInputSchema).optional()
}).strict();

export const ProductCreateOrConnectWithoutWishListsInputSchema: z.ZodType<Prisma.ProductCreateOrConnectWithoutWishListsInput> = z.object({
  where: z.lazy(() => ProductWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProductCreateWithoutWishListsInputSchema),z.lazy(() => ProductUncheckedCreateWithoutWishListsInputSchema) ]),
}).strict();

export const BusinessUpsertWithoutWishListsInputSchema: z.ZodType<Prisma.BusinessUpsertWithoutWishListsInput> = z.object({
  update: z.union([ z.lazy(() => BusinessUpdateWithoutWishListsInputSchema),z.lazy(() => BusinessUncheckedUpdateWithoutWishListsInputSchema) ]),
  create: z.union([ z.lazy(() => BusinessCreateWithoutWishListsInputSchema),z.lazy(() => BusinessUncheckedCreateWithoutWishListsInputSchema) ]),
}).strict();

export const BusinessUpdateWithoutWishListsInputSchema: z.ZodType<Prisma.BusinessUpdateWithoutWishListsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phoneNumber: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  state: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  location: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  neighborhood: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => BusinessTypeSchema),z.lazy(() => EnumBusinessTypeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  orders: z.lazy(() => OrderUpdateManyWithoutBusinessNestedInputSchema).optional(),
  likedProducts: z.lazy(() => ProductUpdateManyWithoutLikesNestedInputSchema).optional()
}).strict();

export const BusinessUncheckedUpdateWithoutWishListsInputSchema: z.ZodType<Prisma.BusinessUncheckedUpdateWithoutWishListsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phoneNumber: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  state: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  location: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  neighborhood: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => BusinessTypeSchema),z.lazy(() => EnumBusinessTypeFieldUpdateOperationsInputSchema) ]).optional(),
  productsLikedIds: z.union([ z.lazy(() => BusinessUpdateproductsLikedIdsInputSchema),z.string().array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  orders: z.lazy(() => OrderUncheckedUpdateManyWithoutBusinessNestedInputSchema).optional(),
  likedProducts: z.lazy(() => ProductUncheckedUpdateManyWithoutLikesNestedInputSchema).optional()
}).strict();

export const CompanyUpsertWithoutWishListInputSchema: z.ZodType<Prisma.CompanyUpsertWithoutWishListInput> = z.object({
  update: z.union([ z.lazy(() => CompanyUpdateWithoutWishListInputSchema),z.lazy(() => CompanyUncheckedUpdateWithoutWishListInputSchema) ]),
  create: z.union([ z.lazy(() => CompanyCreateWithoutWishListInputSchema),z.lazy(() => CompanyUncheckedCreateWithoutWishListInputSchema) ]),
}).strict();

export const CompanyUpdateWithoutWishListInputSchema: z.ZodType<Prisma.CompanyUpdateWithoutWishListInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => BusinessTypeSchema),z.lazy(() => EnumBusinessTypeFieldUpdateOperationsInputSchema) ]).optional(),
  active: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  logo: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  products: z.lazy(() => ProductUpdateManyWithoutCompanyNestedInputSchema).optional(),
  orders: z.lazy(() => OrderUpdateManyWithoutCompanyNestedInputSchema).optional(),
  workers: z.lazy(() => WorkerUpdateManyWithoutCompanyNestedInputSchema).optional(),
  coupons: z.lazy(() => CouponUpdateManyWithoutCompanyNestedInputSchema).optional(),
  categories: z.lazy(() => CategoryUpdateManyWithoutCompanyNestedInputSchema).optional()
}).strict();

export const CompanyUncheckedUpdateWithoutWishListInputSchema: z.ZodType<Prisma.CompanyUncheckedUpdateWithoutWishListInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => BusinessTypeSchema),z.lazy(() => EnumBusinessTypeFieldUpdateOperationsInputSchema) ]).optional(),
  active: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  logo: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  products: z.lazy(() => ProductUncheckedUpdateManyWithoutCompanyNestedInputSchema).optional(),
  orders: z.lazy(() => OrderUncheckedUpdateManyWithoutCompanyNestedInputSchema).optional(),
  workers: z.lazy(() => WorkerUncheckedUpdateManyWithoutCompanyNestedInputSchema).optional(),
  coupons: z.lazy(() => CouponUncheckedUpdateManyWithoutCompanyNestedInputSchema).optional(),
  categories: z.lazy(() => CategoryUncheckedUpdateManyWithoutCompanyNestedInputSchema).optional()
}).strict();

export const ProductUpsertWithWhereUniqueWithoutWishListsInputSchema: z.ZodType<Prisma.ProductUpsertWithWhereUniqueWithoutWishListsInput> = z.object({
  where: z.lazy(() => ProductWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ProductUpdateWithoutWishListsInputSchema),z.lazy(() => ProductUncheckedUpdateWithoutWishListsInputSchema) ]),
  create: z.union([ z.lazy(() => ProductCreateWithoutWishListsInputSchema),z.lazy(() => ProductUncheckedCreateWithoutWishListsInputSchema) ]),
}).strict();

export const ProductUpdateWithWhereUniqueWithoutWishListsInputSchema: z.ZodType<Prisma.ProductUpdateWithWhereUniqueWithoutWishListsInput> = z.object({
  where: z.lazy(() => ProductWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ProductUpdateWithoutWishListsInputSchema),z.lazy(() => ProductUncheckedUpdateWithoutWishListsInputSchema) ]),
}).strict();

export const ProductUpdateManyWithWhereWithoutWishListsInputSchema: z.ZodType<Prisma.ProductUpdateManyWithWhereWithoutWishListsInput> = z.object({
  where: z.lazy(() => ProductScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ProductUpdateManyMutationInputSchema),z.lazy(() => ProductUncheckedUpdateManyWithoutProductsInputSchema) ]),
}).strict();

export const ProductCreateWithoutCompanyInputSchema: z.ZodType<Prisma.ProductCreateWithoutCompanyInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  dec: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
  price: z.number(),
  oldPrice: z.number().optional().nullable(),
  available: z.boolean().optional(),
  hot: z.boolean().optional(),
  freeShipping: z.boolean().optional(),
  views: z.union([ z.lazy(() => ProductCreateviewsInputSchema),z.string().array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  categories: z.lazy(() => CategoryCreateNestedManyWithoutProductsInputSchema).optional(),
  likes: z.lazy(() => BusinessCreateNestedManyWithoutLikedProductsInputSchema).optional(),
  wishLists: z.lazy(() => WishListCreateNestedManyWithoutProductsInputSchema).optional()
}).strict();

export const ProductUncheckedCreateWithoutCompanyInputSchema: z.ZodType<Prisma.ProductUncheckedCreateWithoutCompanyInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  dec: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
  price: z.number(),
  oldPrice: z.number().optional().nullable(),
  available: z.boolean().optional(),
  hot: z.boolean().optional(),
  freeShipping: z.boolean().optional(),
  views: z.union([ z.lazy(() => ProductCreateviewsInputSchema),z.string().array() ]).optional(),
  categoryIds: z.union([ z.lazy(() => ProductCreatecategoryIdsInputSchema),z.string().array() ]).optional(),
  businessLikeIds: z.union([ z.lazy(() => ProductCreatebusinessLikeIdsInputSchema),z.string().array() ]).optional(),
  wishListIds: z.union([ z.lazy(() => ProductCreatewishListIdsInputSchema),z.string().array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  categories: z.lazy(() => CategoryUncheckedCreateNestedManyWithoutProductsInputSchema).optional(),
  likes: z.lazy(() => BusinessUncheckedCreateNestedManyWithoutLikedProductsInputSchema).optional(),
  wishLists: z.lazy(() => WishListUncheckedCreateNestedManyWithoutProductsInputSchema).optional()
}).strict();

export const ProductCreateOrConnectWithoutCompanyInputSchema: z.ZodType<Prisma.ProductCreateOrConnectWithoutCompanyInput> = z.object({
  where: z.lazy(() => ProductWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProductCreateWithoutCompanyInputSchema),z.lazy(() => ProductUncheckedCreateWithoutCompanyInputSchema) ]),
}).strict();

export const ProductCreateManyCompanyInputEnvelopeSchema: z.ZodType<Prisma.ProductCreateManyCompanyInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ProductCreateManyCompanyInputSchema),z.lazy(() => ProductCreateManyCompanyInputSchema).array() ]),
}).strict();

export const OrderCreateWithoutCompanyInputSchema: z.ZodType<Prisma.OrderCreateWithoutCompanyInput> = z.object({
  id: z.string().optional(),
  subtotal: z.number(),
  delivery: z.number(),
  discount: z.number(),
  total: z.number(),
  items: z.union([ z.lazy(() => OrderItemListCreateEnvelopeInputSchema),z.lazy(() => OrderItemCreateInputSchema),z.lazy(() => OrderItemCreateInputSchema).array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  Business: z.lazy(() => BusinessCreateNestedOneWithoutOrdersInputSchema).optional(),
  coupon: z.lazy(() => CouponCreateNestedOneWithoutOrdersInputSchema).optional()
}).strict();

export const OrderUncheckedCreateWithoutCompanyInputSchema: z.ZodType<Prisma.OrderUncheckedCreateWithoutCompanyInput> = z.object({
  id: z.string().optional(),
  subtotal: z.number(),
  delivery: z.number(),
  discount: z.number(),
  total: z.number(),
  items: z.union([ z.lazy(() => OrderItemListCreateEnvelopeInputSchema),z.lazy(() => OrderItemCreateInputSchema),z.lazy(() => OrderItemCreateInputSchema).array() ]).optional(),
  businessId: z.string().optional().nullable(),
  couponId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const OrderCreateOrConnectWithoutCompanyInputSchema: z.ZodType<Prisma.OrderCreateOrConnectWithoutCompanyInput> = z.object({
  where: z.lazy(() => OrderWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => OrderCreateWithoutCompanyInputSchema),z.lazy(() => OrderUncheckedCreateWithoutCompanyInputSchema) ]),
}).strict();

export const OrderCreateManyCompanyInputEnvelopeSchema: z.ZodType<Prisma.OrderCreateManyCompanyInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => OrderCreateManyCompanyInputSchema),z.lazy(() => OrderCreateManyCompanyInputSchema).array() ]),
}).strict();

export const WorkerCreateWithoutCompanyInputSchema: z.ZodType<Prisma.WorkerCreateWithoutCompanyInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  phoneNumber: z.string(),
  password: z.string(),
  role: z.lazy(() => WorkerRoleSchema),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const WorkerUncheckedCreateWithoutCompanyInputSchema: z.ZodType<Prisma.WorkerUncheckedCreateWithoutCompanyInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  phoneNumber: z.string(),
  password: z.string(),
  role: z.lazy(() => WorkerRoleSchema),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const WorkerCreateOrConnectWithoutCompanyInputSchema: z.ZodType<Prisma.WorkerCreateOrConnectWithoutCompanyInput> = z.object({
  where: z.lazy(() => WorkerWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => WorkerCreateWithoutCompanyInputSchema),z.lazy(() => WorkerUncheckedCreateWithoutCompanyInputSchema) ]),
}).strict();

export const WorkerCreateManyCompanyInputEnvelopeSchema: z.ZodType<Prisma.WorkerCreateManyCompanyInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => WorkerCreateManyCompanyInputSchema),z.lazy(() => WorkerCreateManyCompanyInputSchema).array() ]),
}).strict();

export const CouponCreateWithoutCompanyInputSchema: z.ZodType<Prisma.CouponCreateWithoutCompanyInput> = z.object({
  id: z.string().optional(),
  code: z.string(),
  amount: z.number(),
  isValid: z.boolean(),
  active: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  orders: z.lazy(() => OrderCreateNestedManyWithoutCouponInputSchema).optional()
}).strict();

export const CouponUncheckedCreateWithoutCompanyInputSchema: z.ZodType<Prisma.CouponUncheckedCreateWithoutCompanyInput> = z.object({
  id: z.string().optional(),
  code: z.string(),
  amount: z.number(),
  isValid: z.boolean(),
  active: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  orders: z.lazy(() => OrderUncheckedCreateNestedManyWithoutCouponInputSchema).optional()
}).strict();

export const CouponCreateOrConnectWithoutCompanyInputSchema: z.ZodType<Prisma.CouponCreateOrConnectWithoutCompanyInput> = z.object({
  where: z.lazy(() => CouponWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CouponCreateWithoutCompanyInputSchema),z.lazy(() => CouponUncheckedCreateWithoutCompanyInputSchema) ]),
}).strict();

export const CouponCreateManyCompanyInputEnvelopeSchema: z.ZodType<Prisma.CouponCreateManyCompanyInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => CouponCreateManyCompanyInputSchema),z.lazy(() => CouponCreateManyCompanyInputSchema).array() ]),
}).strict();

export const WishListCreateWithoutCompanyInputSchema: z.ZodType<Prisma.WishListCreateWithoutCompanyInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  Business: z.lazy(() => BusinessCreateNestedOneWithoutWishListsInputSchema),
  products: z.lazy(() => ProductCreateNestedManyWithoutWishListsInputSchema).optional()
}).strict();

export const WishListUncheckedCreateWithoutCompanyInputSchema: z.ZodType<Prisma.WishListUncheckedCreateWithoutCompanyInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  businessId: z.string(),
  productsIds: z.union([ z.lazy(() => WishListCreateproductsIdsInputSchema),z.string().array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  products: z.lazy(() => ProductUncheckedCreateNestedManyWithoutWishListsInputSchema).optional()
}).strict();

export const WishListCreateOrConnectWithoutCompanyInputSchema: z.ZodType<Prisma.WishListCreateOrConnectWithoutCompanyInput> = z.object({
  where: z.lazy(() => WishListWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => WishListCreateWithoutCompanyInputSchema),z.lazy(() => WishListUncheckedCreateWithoutCompanyInputSchema) ]),
}).strict();

export const WishListCreateManyCompanyInputEnvelopeSchema: z.ZodType<Prisma.WishListCreateManyCompanyInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => WishListCreateManyCompanyInputSchema),z.lazy(() => WishListCreateManyCompanyInputSchema).array() ]),
}).strict();

export const CategoryCreateWithoutCompanyInputSchema: z.ZodType<Prisma.CategoryCreateWithoutCompanyInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  products: z.lazy(() => ProductCreateNestedManyWithoutCategoriesInputSchema).optional()
}).strict();

export const CategoryUncheckedCreateWithoutCompanyInputSchema: z.ZodType<Prisma.CategoryUncheckedCreateWithoutCompanyInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  productsIds: z.union([ z.lazy(() => CategoryCreateproductsIdsInputSchema),z.string().array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  products: z.lazy(() => ProductUncheckedCreateNestedManyWithoutCategoriesInputSchema).optional()
}).strict();

export const CategoryCreateOrConnectWithoutCompanyInputSchema: z.ZodType<Prisma.CategoryCreateOrConnectWithoutCompanyInput> = z.object({
  where: z.lazy(() => CategoryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CategoryCreateWithoutCompanyInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutCompanyInputSchema) ]),
}).strict();

export const CategoryCreateManyCompanyInputEnvelopeSchema: z.ZodType<Prisma.CategoryCreateManyCompanyInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => CategoryCreateManyCompanyInputSchema),z.lazy(() => CategoryCreateManyCompanyInputSchema).array() ]),
}).strict();

export const ProductUpsertWithWhereUniqueWithoutCompanyInputSchema: z.ZodType<Prisma.ProductUpsertWithWhereUniqueWithoutCompanyInput> = z.object({
  where: z.lazy(() => ProductWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ProductUpdateWithoutCompanyInputSchema),z.lazy(() => ProductUncheckedUpdateWithoutCompanyInputSchema) ]),
  create: z.union([ z.lazy(() => ProductCreateWithoutCompanyInputSchema),z.lazy(() => ProductUncheckedCreateWithoutCompanyInputSchema) ]),
}).strict();

export const ProductUpdateWithWhereUniqueWithoutCompanyInputSchema: z.ZodType<Prisma.ProductUpdateWithWhereUniqueWithoutCompanyInput> = z.object({
  where: z.lazy(() => ProductWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ProductUpdateWithoutCompanyInputSchema),z.lazy(() => ProductUncheckedUpdateWithoutCompanyInputSchema) ]),
}).strict();

export const ProductUpdateManyWithWhereWithoutCompanyInputSchema: z.ZodType<Prisma.ProductUpdateManyWithWhereWithoutCompanyInput> = z.object({
  where: z.lazy(() => ProductScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ProductUpdateManyMutationInputSchema),z.lazy(() => ProductUncheckedUpdateManyWithoutProductsInputSchema) ]),
}).strict();

export const OrderUpsertWithWhereUniqueWithoutCompanyInputSchema: z.ZodType<Prisma.OrderUpsertWithWhereUniqueWithoutCompanyInput> = z.object({
  where: z.lazy(() => OrderWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => OrderUpdateWithoutCompanyInputSchema),z.lazy(() => OrderUncheckedUpdateWithoutCompanyInputSchema) ]),
  create: z.union([ z.lazy(() => OrderCreateWithoutCompanyInputSchema),z.lazy(() => OrderUncheckedCreateWithoutCompanyInputSchema) ]),
}).strict();

export const OrderUpdateWithWhereUniqueWithoutCompanyInputSchema: z.ZodType<Prisma.OrderUpdateWithWhereUniqueWithoutCompanyInput> = z.object({
  where: z.lazy(() => OrderWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => OrderUpdateWithoutCompanyInputSchema),z.lazy(() => OrderUncheckedUpdateWithoutCompanyInputSchema) ]),
}).strict();

export const OrderUpdateManyWithWhereWithoutCompanyInputSchema: z.ZodType<Prisma.OrderUpdateManyWithWhereWithoutCompanyInput> = z.object({
  where: z.lazy(() => OrderScalarWhereInputSchema),
  data: z.union([ z.lazy(() => OrderUpdateManyMutationInputSchema),z.lazy(() => OrderUncheckedUpdateManyWithoutOrdersInputSchema) ]),
}).strict();

export const WorkerUpsertWithWhereUniqueWithoutCompanyInputSchema: z.ZodType<Prisma.WorkerUpsertWithWhereUniqueWithoutCompanyInput> = z.object({
  where: z.lazy(() => WorkerWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => WorkerUpdateWithoutCompanyInputSchema),z.lazy(() => WorkerUncheckedUpdateWithoutCompanyInputSchema) ]),
  create: z.union([ z.lazy(() => WorkerCreateWithoutCompanyInputSchema),z.lazy(() => WorkerUncheckedCreateWithoutCompanyInputSchema) ]),
}).strict();

export const WorkerUpdateWithWhereUniqueWithoutCompanyInputSchema: z.ZodType<Prisma.WorkerUpdateWithWhereUniqueWithoutCompanyInput> = z.object({
  where: z.lazy(() => WorkerWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => WorkerUpdateWithoutCompanyInputSchema),z.lazy(() => WorkerUncheckedUpdateWithoutCompanyInputSchema) ]),
}).strict();

export const WorkerUpdateManyWithWhereWithoutCompanyInputSchema: z.ZodType<Prisma.WorkerUpdateManyWithWhereWithoutCompanyInput> = z.object({
  where: z.lazy(() => WorkerScalarWhereInputSchema),
  data: z.union([ z.lazy(() => WorkerUpdateManyMutationInputSchema),z.lazy(() => WorkerUncheckedUpdateManyWithoutWorkersInputSchema) ]),
}).strict();

export const WorkerScalarWhereInputSchema: z.ZodType<Prisma.WorkerScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => WorkerScalarWhereInputSchema),z.lazy(() => WorkerScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => WorkerScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => WorkerScalarWhereInputSchema),z.lazy(() => WorkerScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  phoneNumber: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  password: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  role: z.union([ z.lazy(() => EnumWorkerRoleFilterSchema),z.lazy(() => WorkerRoleSchema) ]).optional(),
  companyId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const CouponUpsertWithWhereUniqueWithoutCompanyInputSchema: z.ZodType<Prisma.CouponUpsertWithWhereUniqueWithoutCompanyInput> = z.object({
  where: z.lazy(() => CouponWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CouponUpdateWithoutCompanyInputSchema),z.lazy(() => CouponUncheckedUpdateWithoutCompanyInputSchema) ]),
  create: z.union([ z.lazy(() => CouponCreateWithoutCompanyInputSchema),z.lazy(() => CouponUncheckedCreateWithoutCompanyInputSchema) ]),
}).strict();

export const CouponUpdateWithWhereUniqueWithoutCompanyInputSchema: z.ZodType<Prisma.CouponUpdateWithWhereUniqueWithoutCompanyInput> = z.object({
  where: z.lazy(() => CouponWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CouponUpdateWithoutCompanyInputSchema),z.lazy(() => CouponUncheckedUpdateWithoutCompanyInputSchema) ]),
}).strict();

export const CouponUpdateManyWithWhereWithoutCompanyInputSchema: z.ZodType<Prisma.CouponUpdateManyWithWhereWithoutCompanyInput> = z.object({
  where: z.lazy(() => CouponScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CouponUpdateManyMutationInputSchema),z.lazy(() => CouponUncheckedUpdateManyWithoutCouponsInputSchema) ]),
}).strict();

export const CouponScalarWhereInputSchema: z.ZodType<Prisma.CouponScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CouponScalarWhereInputSchema),z.lazy(() => CouponScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CouponScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CouponScalarWhereInputSchema),z.lazy(() => CouponScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  companyId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  code: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  amount: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  isValid: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  active: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const WishListUpsertWithWhereUniqueWithoutCompanyInputSchema: z.ZodType<Prisma.WishListUpsertWithWhereUniqueWithoutCompanyInput> = z.object({
  where: z.lazy(() => WishListWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => WishListUpdateWithoutCompanyInputSchema),z.lazy(() => WishListUncheckedUpdateWithoutCompanyInputSchema) ]),
  create: z.union([ z.lazy(() => WishListCreateWithoutCompanyInputSchema),z.lazy(() => WishListUncheckedCreateWithoutCompanyInputSchema) ]),
}).strict();

export const WishListUpdateWithWhereUniqueWithoutCompanyInputSchema: z.ZodType<Prisma.WishListUpdateWithWhereUniqueWithoutCompanyInput> = z.object({
  where: z.lazy(() => WishListWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => WishListUpdateWithoutCompanyInputSchema),z.lazy(() => WishListUncheckedUpdateWithoutCompanyInputSchema) ]),
}).strict();

export const WishListUpdateManyWithWhereWithoutCompanyInputSchema: z.ZodType<Prisma.WishListUpdateManyWithWhereWithoutCompanyInput> = z.object({
  where: z.lazy(() => WishListScalarWhereInputSchema),
  data: z.union([ z.lazy(() => WishListUpdateManyMutationInputSchema),z.lazy(() => WishListUncheckedUpdateManyWithoutWishListInputSchema) ]),
}).strict();

export const CategoryUpsertWithWhereUniqueWithoutCompanyInputSchema: z.ZodType<Prisma.CategoryUpsertWithWhereUniqueWithoutCompanyInput> = z.object({
  where: z.lazy(() => CategoryWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CategoryUpdateWithoutCompanyInputSchema),z.lazy(() => CategoryUncheckedUpdateWithoutCompanyInputSchema) ]),
  create: z.union([ z.lazy(() => CategoryCreateWithoutCompanyInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutCompanyInputSchema) ]),
}).strict();

export const CategoryUpdateWithWhereUniqueWithoutCompanyInputSchema: z.ZodType<Prisma.CategoryUpdateWithWhereUniqueWithoutCompanyInput> = z.object({
  where: z.lazy(() => CategoryWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CategoryUpdateWithoutCompanyInputSchema),z.lazy(() => CategoryUncheckedUpdateWithoutCompanyInputSchema) ]),
}).strict();

export const CategoryUpdateManyWithWhereWithoutCompanyInputSchema: z.ZodType<Prisma.CategoryUpdateManyWithWhereWithoutCompanyInput> = z.object({
  where: z.lazy(() => CategoryScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CategoryUpdateManyMutationInputSchema),z.lazy(() => CategoryUncheckedUpdateManyWithoutCategoriesInputSchema) ]),
}).strict();

export const CategoryScalarWhereInputSchema: z.ZodType<Prisma.CategoryScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CategoryScalarWhereInputSchema),z.lazy(() => CategoryScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CategoryScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CategoryScalarWhereInputSchema),z.lazy(() => CategoryScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  companyId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  productsIds: z.lazy(() => StringNullableListFilterSchema).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const CompanyCreateWithoutProductsInputSchema: z.ZodType<Prisma.CompanyCreateWithoutProductsInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  type: z.lazy(() => BusinessTypeSchema),
  active: z.boolean().optional(),
  logo: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  orders: z.lazy(() => OrderCreateNestedManyWithoutCompanyInputSchema).optional(),
  workers: z.lazy(() => WorkerCreateNestedManyWithoutCompanyInputSchema).optional(),
  coupons: z.lazy(() => CouponCreateNestedManyWithoutCompanyInputSchema).optional(),
  WishList: z.lazy(() => WishListCreateNestedManyWithoutCompanyInputSchema).optional(),
  categories: z.lazy(() => CategoryCreateNestedManyWithoutCompanyInputSchema).optional()
}).strict();

export const CompanyUncheckedCreateWithoutProductsInputSchema: z.ZodType<Prisma.CompanyUncheckedCreateWithoutProductsInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  type: z.lazy(() => BusinessTypeSchema),
  active: z.boolean().optional(),
  logo: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  orders: z.lazy(() => OrderUncheckedCreateNestedManyWithoutCompanyInputSchema).optional(),
  workers: z.lazy(() => WorkerUncheckedCreateNestedManyWithoutCompanyInputSchema).optional(),
  coupons: z.lazy(() => CouponUncheckedCreateNestedManyWithoutCompanyInputSchema).optional(),
  WishList: z.lazy(() => WishListUncheckedCreateNestedManyWithoutCompanyInputSchema).optional(),
  categories: z.lazy(() => CategoryUncheckedCreateNestedManyWithoutCompanyInputSchema).optional()
}).strict();

export const CompanyCreateOrConnectWithoutProductsInputSchema: z.ZodType<Prisma.CompanyCreateOrConnectWithoutProductsInput> = z.object({
  where: z.lazy(() => CompanyWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CompanyCreateWithoutProductsInputSchema),z.lazy(() => CompanyUncheckedCreateWithoutProductsInputSchema) ]),
}).strict();

export const CategoryCreateWithoutProductsInputSchema: z.ZodType<Prisma.CategoryCreateWithoutProductsInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  company: z.lazy(() => CompanyCreateNestedOneWithoutCategoriesInputSchema)
}).strict();

export const CategoryUncheckedCreateWithoutProductsInputSchema: z.ZodType<Prisma.CategoryUncheckedCreateWithoutProductsInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  companyId: z.string(),
  productsIds: z.union([ z.lazy(() => CategoryCreateproductsIdsInputSchema),z.string().array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const CategoryCreateOrConnectWithoutProductsInputSchema: z.ZodType<Prisma.CategoryCreateOrConnectWithoutProductsInput> = z.object({
  where: z.lazy(() => CategoryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CategoryCreateWithoutProductsInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutProductsInputSchema) ]),
}).strict();

export const BusinessCreateWithoutLikedProductsInputSchema: z.ZodType<Prisma.BusinessCreateWithoutLikedProductsInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  password: z.string(),
  phoneNumber: z.string(),
  state: z.string(),
  location: z.string(),
  neighborhood: z.string(),
  type: z.lazy(() => BusinessTypeSchema),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  orders: z.lazy(() => OrderCreateNestedManyWithoutBusinessInputSchema).optional(),
  wishLists: z.lazy(() => WishListCreateNestedManyWithoutBusinessInputSchema).optional()
}).strict();

export const BusinessUncheckedCreateWithoutLikedProductsInputSchema: z.ZodType<Prisma.BusinessUncheckedCreateWithoutLikedProductsInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  password: z.string(),
  phoneNumber: z.string(),
  state: z.string(),
  location: z.string(),
  neighborhood: z.string(),
  type: z.lazy(() => BusinessTypeSchema),
  productsLikedIds: z.union([ z.lazy(() => BusinessCreateproductsLikedIdsInputSchema),z.string().array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  orders: z.lazy(() => OrderUncheckedCreateNestedManyWithoutBusinessInputSchema).optional(),
  wishLists: z.lazy(() => WishListUncheckedCreateNestedManyWithoutBusinessInputSchema).optional()
}).strict();

export const BusinessCreateOrConnectWithoutLikedProductsInputSchema: z.ZodType<Prisma.BusinessCreateOrConnectWithoutLikedProductsInput> = z.object({
  where: z.lazy(() => BusinessWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BusinessCreateWithoutLikedProductsInputSchema),z.lazy(() => BusinessUncheckedCreateWithoutLikedProductsInputSchema) ]),
}).strict();

export const WishListCreateWithoutProductsInputSchema: z.ZodType<Prisma.WishListCreateWithoutProductsInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  Business: z.lazy(() => BusinessCreateNestedOneWithoutWishListsInputSchema),
  company: z.lazy(() => CompanyCreateNestedOneWithoutWishListInputSchema)
}).strict();

export const WishListUncheckedCreateWithoutProductsInputSchema: z.ZodType<Prisma.WishListUncheckedCreateWithoutProductsInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  businessId: z.string(),
  companyId: z.string(),
  productsIds: z.union([ z.lazy(() => WishListCreateproductsIdsInputSchema),z.string().array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const WishListCreateOrConnectWithoutProductsInputSchema: z.ZodType<Prisma.WishListCreateOrConnectWithoutProductsInput> = z.object({
  where: z.lazy(() => WishListWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => WishListCreateWithoutProductsInputSchema),z.lazy(() => WishListUncheckedCreateWithoutProductsInputSchema) ]),
}).strict();

export const CompanyUpsertWithoutProductsInputSchema: z.ZodType<Prisma.CompanyUpsertWithoutProductsInput> = z.object({
  update: z.union([ z.lazy(() => CompanyUpdateWithoutProductsInputSchema),z.lazy(() => CompanyUncheckedUpdateWithoutProductsInputSchema) ]),
  create: z.union([ z.lazy(() => CompanyCreateWithoutProductsInputSchema),z.lazy(() => CompanyUncheckedCreateWithoutProductsInputSchema) ]),
}).strict();

export const CompanyUpdateWithoutProductsInputSchema: z.ZodType<Prisma.CompanyUpdateWithoutProductsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => BusinessTypeSchema),z.lazy(() => EnumBusinessTypeFieldUpdateOperationsInputSchema) ]).optional(),
  active: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  logo: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  orders: z.lazy(() => OrderUpdateManyWithoutCompanyNestedInputSchema).optional(),
  workers: z.lazy(() => WorkerUpdateManyWithoutCompanyNestedInputSchema).optional(),
  coupons: z.lazy(() => CouponUpdateManyWithoutCompanyNestedInputSchema).optional(),
  WishList: z.lazy(() => WishListUpdateManyWithoutCompanyNestedInputSchema).optional(),
  categories: z.lazy(() => CategoryUpdateManyWithoutCompanyNestedInputSchema).optional()
}).strict();

export const CompanyUncheckedUpdateWithoutProductsInputSchema: z.ZodType<Prisma.CompanyUncheckedUpdateWithoutProductsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => BusinessTypeSchema),z.lazy(() => EnumBusinessTypeFieldUpdateOperationsInputSchema) ]).optional(),
  active: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  logo: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  orders: z.lazy(() => OrderUncheckedUpdateManyWithoutCompanyNestedInputSchema).optional(),
  workers: z.lazy(() => WorkerUncheckedUpdateManyWithoutCompanyNestedInputSchema).optional(),
  coupons: z.lazy(() => CouponUncheckedUpdateManyWithoutCompanyNestedInputSchema).optional(),
  WishList: z.lazy(() => WishListUncheckedUpdateManyWithoutCompanyNestedInputSchema).optional(),
  categories: z.lazy(() => CategoryUncheckedUpdateManyWithoutCompanyNestedInputSchema).optional()
}).strict();

export const CategoryUpsertWithWhereUniqueWithoutProductsInputSchema: z.ZodType<Prisma.CategoryUpsertWithWhereUniqueWithoutProductsInput> = z.object({
  where: z.lazy(() => CategoryWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CategoryUpdateWithoutProductsInputSchema),z.lazy(() => CategoryUncheckedUpdateWithoutProductsInputSchema) ]),
  create: z.union([ z.lazy(() => CategoryCreateWithoutProductsInputSchema),z.lazy(() => CategoryUncheckedCreateWithoutProductsInputSchema) ]),
}).strict();

export const CategoryUpdateWithWhereUniqueWithoutProductsInputSchema: z.ZodType<Prisma.CategoryUpdateWithWhereUniqueWithoutProductsInput> = z.object({
  where: z.lazy(() => CategoryWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CategoryUpdateWithoutProductsInputSchema),z.lazy(() => CategoryUncheckedUpdateWithoutProductsInputSchema) ]),
}).strict();

export const CategoryUpdateManyWithWhereWithoutProductsInputSchema: z.ZodType<Prisma.CategoryUpdateManyWithWhereWithoutProductsInput> = z.object({
  where: z.lazy(() => CategoryScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CategoryUpdateManyMutationInputSchema),z.lazy(() => CategoryUncheckedUpdateManyWithoutCategoriesInputSchema) ]),
}).strict();

export const BusinessUpsertWithWhereUniqueWithoutLikedProductsInputSchema: z.ZodType<Prisma.BusinessUpsertWithWhereUniqueWithoutLikedProductsInput> = z.object({
  where: z.lazy(() => BusinessWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => BusinessUpdateWithoutLikedProductsInputSchema),z.lazy(() => BusinessUncheckedUpdateWithoutLikedProductsInputSchema) ]),
  create: z.union([ z.lazy(() => BusinessCreateWithoutLikedProductsInputSchema),z.lazy(() => BusinessUncheckedCreateWithoutLikedProductsInputSchema) ]),
}).strict();

export const BusinessUpdateWithWhereUniqueWithoutLikedProductsInputSchema: z.ZodType<Prisma.BusinessUpdateWithWhereUniqueWithoutLikedProductsInput> = z.object({
  where: z.lazy(() => BusinessWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => BusinessUpdateWithoutLikedProductsInputSchema),z.lazy(() => BusinessUncheckedUpdateWithoutLikedProductsInputSchema) ]),
}).strict();

export const BusinessUpdateManyWithWhereWithoutLikedProductsInputSchema: z.ZodType<Prisma.BusinessUpdateManyWithWhereWithoutLikedProductsInput> = z.object({
  where: z.lazy(() => BusinessScalarWhereInputSchema),
  data: z.union([ z.lazy(() => BusinessUpdateManyMutationInputSchema),z.lazy(() => BusinessUncheckedUpdateManyWithoutLikesInputSchema) ]),
}).strict();

export const BusinessScalarWhereInputSchema: z.ZodType<Prisma.BusinessScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => BusinessScalarWhereInputSchema),z.lazy(() => BusinessScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BusinessScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BusinessScalarWhereInputSchema),z.lazy(() => BusinessScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  password: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  phoneNumber: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  state: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  location: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  neighborhood: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => EnumBusinessTypeFilterSchema),z.lazy(() => BusinessTypeSchema) ]).optional(),
  productsLikedIds: z.lazy(() => StringNullableListFilterSchema).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const WishListUpsertWithWhereUniqueWithoutProductsInputSchema: z.ZodType<Prisma.WishListUpsertWithWhereUniqueWithoutProductsInput> = z.object({
  where: z.lazy(() => WishListWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => WishListUpdateWithoutProductsInputSchema),z.lazy(() => WishListUncheckedUpdateWithoutProductsInputSchema) ]),
  create: z.union([ z.lazy(() => WishListCreateWithoutProductsInputSchema),z.lazy(() => WishListUncheckedCreateWithoutProductsInputSchema) ]),
}).strict();

export const WishListUpdateWithWhereUniqueWithoutProductsInputSchema: z.ZodType<Prisma.WishListUpdateWithWhereUniqueWithoutProductsInput> = z.object({
  where: z.lazy(() => WishListWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => WishListUpdateWithoutProductsInputSchema),z.lazy(() => WishListUncheckedUpdateWithoutProductsInputSchema) ]),
}).strict();

export const WishListUpdateManyWithWhereWithoutProductsInputSchema: z.ZodType<Prisma.WishListUpdateManyWithWhereWithoutProductsInput> = z.object({
  where: z.lazy(() => WishListScalarWhereInputSchema),
  data: z.union([ z.lazy(() => WishListUpdateManyMutationInputSchema),z.lazy(() => WishListUncheckedUpdateManyWithoutWishListsInputSchema) ]),
}).strict();

export const CompanyCreateWithoutWorkersInputSchema: z.ZodType<Prisma.CompanyCreateWithoutWorkersInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  type: z.lazy(() => BusinessTypeSchema),
  active: z.boolean().optional(),
  logo: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  products: z.lazy(() => ProductCreateNestedManyWithoutCompanyInputSchema).optional(),
  orders: z.lazy(() => OrderCreateNestedManyWithoutCompanyInputSchema).optional(),
  coupons: z.lazy(() => CouponCreateNestedManyWithoutCompanyInputSchema).optional(),
  WishList: z.lazy(() => WishListCreateNestedManyWithoutCompanyInputSchema).optional(),
  categories: z.lazy(() => CategoryCreateNestedManyWithoutCompanyInputSchema).optional()
}).strict();

export const CompanyUncheckedCreateWithoutWorkersInputSchema: z.ZodType<Prisma.CompanyUncheckedCreateWithoutWorkersInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  type: z.lazy(() => BusinessTypeSchema),
  active: z.boolean().optional(),
  logo: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  products: z.lazy(() => ProductUncheckedCreateNestedManyWithoutCompanyInputSchema).optional(),
  orders: z.lazy(() => OrderUncheckedCreateNestedManyWithoutCompanyInputSchema).optional(),
  coupons: z.lazy(() => CouponUncheckedCreateNestedManyWithoutCompanyInputSchema).optional(),
  WishList: z.lazy(() => WishListUncheckedCreateNestedManyWithoutCompanyInputSchema).optional(),
  categories: z.lazy(() => CategoryUncheckedCreateNestedManyWithoutCompanyInputSchema).optional()
}).strict();

export const CompanyCreateOrConnectWithoutWorkersInputSchema: z.ZodType<Prisma.CompanyCreateOrConnectWithoutWorkersInput> = z.object({
  where: z.lazy(() => CompanyWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CompanyCreateWithoutWorkersInputSchema),z.lazy(() => CompanyUncheckedCreateWithoutWorkersInputSchema) ]),
}).strict();

export const CompanyUpsertWithoutWorkersInputSchema: z.ZodType<Prisma.CompanyUpsertWithoutWorkersInput> = z.object({
  update: z.union([ z.lazy(() => CompanyUpdateWithoutWorkersInputSchema),z.lazy(() => CompanyUncheckedUpdateWithoutWorkersInputSchema) ]),
  create: z.union([ z.lazy(() => CompanyCreateWithoutWorkersInputSchema),z.lazy(() => CompanyUncheckedCreateWithoutWorkersInputSchema) ]),
}).strict();

export const CompanyUpdateWithoutWorkersInputSchema: z.ZodType<Prisma.CompanyUpdateWithoutWorkersInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => BusinessTypeSchema),z.lazy(() => EnumBusinessTypeFieldUpdateOperationsInputSchema) ]).optional(),
  active: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  logo: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  products: z.lazy(() => ProductUpdateManyWithoutCompanyNestedInputSchema).optional(),
  orders: z.lazy(() => OrderUpdateManyWithoutCompanyNestedInputSchema).optional(),
  coupons: z.lazy(() => CouponUpdateManyWithoutCompanyNestedInputSchema).optional(),
  WishList: z.lazy(() => WishListUpdateManyWithoutCompanyNestedInputSchema).optional(),
  categories: z.lazy(() => CategoryUpdateManyWithoutCompanyNestedInputSchema).optional()
}).strict();

export const CompanyUncheckedUpdateWithoutWorkersInputSchema: z.ZodType<Prisma.CompanyUncheckedUpdateWithoutWorkersInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => BusinessTypeSchema),z.lazy(() => EnumBusinessTypeFieldUpdateOperationsInputSchema) ]).optional(),
  active: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  logo: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  products: z.lazy(() => ProductUncheckedUpdateManyWithoutCompanyNestedInputSchema).optional(),
  orders: z.lazy(() => OrderUncheckedUpdateManyWithoutCompanyNestedInputSchema).optional(),
  coupons: z.lazy(() => CouponUncheckedUpdateManyWithoutCompanyNestedInputSchema).optional(),
  WishList: z.lazy(() => WishListUncheckedUpdateManyWithoutCompanyNestedInputSchema).optional(),
  categories: z.lazy(() => CategoryUncheckedUpdateManyWithoutCompanyNestedInputSchema).optional()
}).strict();

export const OrderItemCreateimageInputSchema: z.ZodType<Prisma.OrderItemCreateimageInput> = z.object({
  set: z.string().array()
}).strict();

export const BusinessCreateWithoutOrdersInputSchema: z.ZodType<Prisma.BusinessCreateWithoutOrdersInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  password: z.string(),
  phoneNumber: z.string(),
  state: z.string(),
  location: z.string(),
  neighborhood: z.string(),
  type: z.lazy(() => BusinessTypeSchema),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  wishLists: z.lazy(() => WishListCreateNestedManyWithoutBusinessInputSchema).optional(),
  likedProducts: z.lazy(() => ProductCreateNestedManyWithoutLikesInputSchema).optional()
}).strict();

export const BusinessUncheckedCreateWithoutOrdersInputSchema: z.ZodType<Prisma.BusinessUncheckedCreateWithoutOrdersInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  password: z.string(),
  phoneNumber: z.string(),
  state: z.string(),
  location: z.string(),
  neighborhood: z.string(),
  type: z.lazy(() => BusinessTypeSchema),
  productsLikedIds: z.union([ z.lazy(() => BusinessCreateproductsLikedIdsInputSchema),z.string().array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  wishLists: z.lazy(() => WishListUncheckedCreateNestedManyWithoutBusinessInputSchema).optional(),
  likedProducts: z.lazy(() => ProductUncheckedCreateNestedManyWithoutLikesInputSchema).optional()
}).strict();

export const BusinessCreateOrConnectWithoutOrdersInputSchema: z.ZodType<Prisma.BusinessCreateOrConnectWithoutOrdersInput> = z.object({
  where: z.lazy(() => BusinessWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BusinessCreateWithoutOrdersInputSchema),z.lazy(() => BusinessUncheckedCreateWithoutOrdersInputSchema) ]),
}).strict();

export const CompanyCreateWithoutOrdersInputSchema: z.ZodType<Prisma.CompanyCreateWithoutOrdersInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  type: z.lazy(() => BusinessTypeSchema),
  active: z.boolean().optional(),
  logo: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  products: z.lazy(() => ProductCreateNestedManyWithoutCompanyInputSchema).optional(),
  workers: z.lazy(() => WorkerCreateNestedManyWithoutCompanyInputSchema).optional(),
  coupons: z.lazy(() => CouponCreateNestedManyWithoutCompanyInputSchema).optional(),
  WishList: z.lazy(() => WishListCreateNestedManyWithoutCompanyInputSchema).optional(),
  categories: z.lazy(() => CategoryCreateNestedManyWithoutCompanyInputSchema).optional()
}).strict();

export const CompanyUncheckedCreateWithoutOrdersInputSchema: z.ZodType<Prisma.CompanyUncheckedCreateWithoutOrdersInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  type: z.lazy(() => BusinessTypeSchema),
  active: z.boolean().optional(),
  logo: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  products: z.lazy(() => ProductUncheckedCreateNestedManyWithoutCompanyInputSchema).optional(),
  workers: z.lazy(() => WorkerUncheckedCreateNestedManyWithoutCompanyInputSchema).optional(),
  coupons: z.lazy(() => CouponUncheckedCreateNestedManyWithoutCompanyInputSchema).optional(),
  WishList: z.lazy(() => WishListUncheckedCreateNestedManyWithoutCompanyInputSchema).optional(),
  categories: z.lazy(() => CategoryUncheckedCreateNestedManyWithoutCompanyInputSchema).optional()
}).strict();

export const CompanyCreateOrConnectWithoutOrdersInputSchema: z.ZodType<Prisma.CompanyCreateOrConnectWithoutOrdersInput> = z.object({
  where: z.lazy(() => CompanyWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CompanyCreateWithoutOrdersInputSchema),z.lazy(() => CompanyUncheckedCreateWithoutOrdersInputSchema) ]),
}).strict();

export const CouponCreateWithoutOrdersInputSchema: z.ZodType<Prisma.CouponCreateWithoutOrdersInput> = z.object({
  id: z.string().optional(),
  code: z.string(),
  amount: z.number(),
  isValid: z.boolean(),
  active: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  Company: z.lazy(() => CompanyCreateNestedOneWithoutCouponsInputSchema).optional()
}).strict();

export const CouponUncheckedCreateWithoutOrdersInputSchema: z.ZodType<Prisma.CouponUncheckedCreateWithoutOrdersInput> = z.object({
  id: z.string().optional(),
  companyId: z.string().optional().nullable(),
  code: z.string(),
  amount: z.number(),
  isValid: z.boolean(),
  active: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const CouponCreateOrConnectWithoutOrdersInputSchema: z.ZodType<Prisma.CouponCreateOrConnectWithoutOrdersInput> = z.object({
  where: z.lazy(() => CouponWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CouponCreateWithoutOrdersInputSchema),z.lazy(() => CouponUncheckedCreateWithoutOrdersInputSchema) ]),
}).strict();

export const OrderItemUpdateManyInputSchema: z.ZodType<Prisma.OrderItemUpdateManyInput> = z.object({
  where: z.lazy(() => OrderItemWhereInputSchema),
  data: z.lazy(() => OrderItemUpdateInputSchema)
}).strict();

export const OrderItemDeleteManyInputSchema: z.ZodType<Prisma.OrderItemDeleteManyInput> = z.object({
  where: z.lazy(() => OrderItemWhereInputSchema)
}).strict();

export const BusinessUpsertWithoutOrdersInputSchema: z.ZodType<Prisma.BusinessUpsertWithoutOrdersInput> = z.object({
  update: z.union([ z.lazy(() => BusinessUpdateWithoutOrdersInputSchema),z.lazy(() => BusinessUncheckedUpdateWithoutOrdersInputSchema) ]),
  create: z.union([ z.lazy(() => BusinessCreateWithoutOrdersInputSchema),z.lazy(() => BusinessUncheckedCreateWithoutOrdersInputSchema) ]),
}).strict();

export const BusinessUpdateWithoutOrdersInputSchema: z.ZodType<Prisma.BusinessUpdateWithoutOrdersInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phoneNumber: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  state: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  location: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  neighborhood: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => BusinessTypeSchema),z.lazy(() => EnumBusinessTypeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  wishLists: z.lazy(() => WishListUpdateManyWithoutBusinessNestedInputSchema).optional(),
  likedProducts: z.lazy(() => ProductUpdateManyWithoutLikesNestedInputSchema).optional()
}).strict();

export const BusinessUncheckedUpdateWithoutOrdersInputSchema: z.ZodType<Prisma.BusinessUncheckedUpdateWithoutOrdersInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phoneNumber: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  state: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  location: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  neighborhood: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => BusinessTypeSchema),z.lazy(() => EnumBusinessTypeFieldUpdateOperationsInputSchema) ]).optional(),
  productsLikedIds: z.union([ z.lazy(() => BusinessUpdateproductsLikedIdsInputSchema),z.string().array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  wishLists: z.lazy(() => WishListUncheckedUpdateManyWithoutBusinessNestedInputSchema).optional(),
  likedProducts: z.lazy(() => ProductUncheckedUpdateManyWithoutLikesNestedInputSchema).optional()
}).strict();

export const CompanyUpsertWithoutOrdersInputSchema: z.ZodType<Prisma.CompanyUpsertWithoutOrdersInput> = z.object({
  update: z.union([ z.lazy(() => CompanyUpdateWithoutOrdersInputSchema),z.lazy(() => CompanyUncheckedUpdateWithoutOrdersInputSchema) ]),
  create: z.union([ z.lazy(() => CompanyCreateWithoutOrdersInputSchema),z.lazy(() => CompanyUncheckedCreateWithoutOrdersInputSchema) ]),
}).strict();

export const CompanyUpdateWithoutOrdersInputSchema: z.ZodType<Prisma.CompanyUpdateWithoutOrdersInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => BusinessTypeSchema),z.lazy(() => EnumBusinessTypeFieldUpdateOperationsInputSchema) ]).optional(),
  active: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  logo: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  products: z.lazy(() => ProductUpdateManyWithoutCompanyNestedInputSchema).optional(),
  workers: z.lazy(() => WorkerUpdateManyWithoutCompanyNestedInputSchema).optional(),
  coupons: z.lazy(() => CouponUpdateManyWithoutCompanyNestedInputSchema).optional(),
  WishList: z.lazy(() => WishListUpdateManyWithoutCompanyNestedInputSchema).optional(),
  categories: z.lazy(() => CategoryUpdateManyWithoutCompanyNestedInputSchema).optional()
}).strict();

export const CompanyUncheckedUpdateWithoutOrdersInputSchema: z.ZodType<Prisma.CompanyUncheckedUpdateWithoutOrdersInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => BusinessTypeSchema),z.lazy(() => EnumBusinessTypeFieldUpdateOperationsInputSchema) ]).optional(),
  active: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  logo: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  products: z.lazy(() => ProductUncheckedUpdateManyWithoutCompanyNestedInputSchema).optional(),
  workers: z.lazy(() => WorkerUncheckedUpdateManyWithoutCompanyNestedInputSchema).optional(),
  coupons: z.lazy(() => CouponUncheckedUpdateManyWithoutCompanyNestedInputSchema).optional(),
  WishList: z.lazy(() => WishListUncheckedUpdateManyWithoutCompanyNestedInputSchema).optional(),
  categories: z.lazy(() => CategoryUncheckedUpdateManyWithoutCompanyNestedInputSchema).optional()
}).strict();

export const CouponUpsertWithoutOrdersInputSchema: z.ZodType<Prisma.CouponUpsertWithoutOrdersInput> = z.object({
  update: z.union([ z.lazy(() => CouponUpdateWithoutOrdersInputSchema),z.lazy(() => CouponUncheckedUpdateWithoutOrdersInputSchema) ]),
  create: z.union([ z.lazy(() => CouponCreateWithoutOrdersInputSchema),z.lazy(() => CouponUncheckedCreateWithoutOrdersInputSchema) ]),
}).strict();

export const CouponUpdateWithoutOrdersInputSchema: z.ZodType<Prisma.CouponUpdateWithoutOrdersInput> = z.object({
  code: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  amount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  isValid: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  active: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Company: z.lazy(() => CompanyUpdateOneWithoutCouponsNestedInputSchema).optional()
}).strict();

export const CouponUncheckedUpdateWithoutOrdersInputSchema: z.ZodType<Prisma.CouponUncheckedUpdateWithoutOrdersInput> = z.object({
  companyId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  code: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  amount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  isValid: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  active: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const OrderCreateWithoutCouponInputSchema: z.ZodType<Prisma.OrderCreateWithoutCouponInput> = z.object({
  id: z.string().optional(),
  subtotal: z.number(),
  delivery: z.number(),
  discount: z.number(),
  total: z.number(),
  items: z.union([ z.lazy(() => OrderItemListCreateEnvelopeInputSchema),z.lazy(() => OrderItemCreateInputSchema),z.lazy(() => OrderItemCreateInputSchema).array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  Business: z.lazy(() => BusinessCreateNestedOneWithoutOrdersInputSchema).optional(),
  Company: z.lazy(() => CompanyCreateNestedOneWithoutOrdersInputSchema).optional()
}).strict();

export const OrderUncheckedCreateWithoutCouponInputSchema: z.ZodType<Prisma.OrderUncheckedCreateWithoutCouponInput> = z.object({
  id: z.string().optional(),
  subtotal: z.number(),
  delivery: z.number(),
  discount: z.number(),
  total: z.number(),
  items: z.union([ z.lazy(() => OrderItemListCreateEnvelopeInputSchema),z.lazy(() => OrderItemCreateInputSchema),z.lazy(() => OrderItemCreateInputSchema).array() ]).optional(),
  businessId: z.string().optional().nullable(),
  companyId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const OrderCreateOrConnectWithoutCouponInputSchema: z.ZodType<Prisma.OrderCreateOrConnectWithoutCouponInput> = z.object({
  where: z.lazy(() => OrderWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => OrderCreateWithoutCouponInputSchema),z.lazy(() => OrderUncheckedCreateWithoutCouponInputSchema) ]),
}).strict();

export const OrderCreateManyCouponInputEnvelopeSchema: z.ZodType<Prisma.OrderCreateManyCouponInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => OrderCreateManyCouponInputSchema),z.lazy(() => OrderCreateManyCouponInputSchema).array() ]),
}).strict();

export const CompanyCreateWithoutCouponsInputSchema: z.ZodType<Prisma.CompanyCreateWithoutCouponsInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  type: z.lazy(() => BusinessTypeSchema),
  active: z.boolean().optional(),
  logo: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  products: z.lazy(() => ProductCreateNestedManyWithoutCompanyInputSchema).optional(),
  orders: z.lazy(() => OrderCreateNestedManyWithoutCompanyInputSchema).optional(),
  workers: z.lazy(() => WorkerCreateNestedManyWithoutCompanyInputSchema).optional(),
  WishList: z.lazy(() => WishListCreateNestedManyWithoutCompanyInputSchema).optional(),
  categories: z.lazy(() => CategoryCreateNestedManyWithoutCompanyInputSchema).optional()
}).strict();

export const CompanyUncheckedCreateWithoutCouponsInputSchema: z.ZodType<Prisma.CompanyUncheckedCreateWithoutCouponsInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  type: z.lazy(() => BusinessTypeSchema),
  active: z.boolean().optional(),
  logo: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  products: z.lazy(() => ProductUncheckedCreateNestedManyWithoutCompanyInputSchema).optional(),
  orders: z.lazy(() => OrderUncheckedCreateNestedManyWithoutCompanyInputSchema).optional(),
  workers: z.lazy(() => WorkerUncheckedCreateNestedManyWithoutCompanyInputSchema).optional(),
  WishList: z.lazy(() => WishListUncheckedCreateNestedManyWithoutCompanyInputSchema).optional(),
  categories: z.lazy(() => CategoryUncheckedCreateNestedManyWithoutCompanyInputSchema).optional()
}).strict();

export const CompanyCreateOrConnectWithoutCouponsInputSchema: z.ZodType<Prisma.CompanyCreateOrConnectWithoutCouponsInput> = z.object({
  where: z.lazy(() => CompanyWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CompanyCreateWithoutCouponsInputSchema),z.lazy(() => CompanyUncheckedCreateWithoutCouponsInputSchema) ]),
}).strict();

export const OrderUpsertWithWhereUniqueWithoutCouponInputSchema: z.ZodType<Prisma.OrderUpsertWithWhereUniqueWithoutCouponInput> = z.object({
  where: z.lazy(() => OrderWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => OrderUpdateWithoutCouponInputSchema),z.lazy(() => OrderUncheckedUpdateWithoutCouponInputSchema) ]),
  create: z.union([ z.lazy(() => OrderCreateWithoutCouponInputSchema),z.lazy(() => OrderUncheckedCreateWithoutCouponInputSchema) ]),
}).strict();

export const OrderUpdateWithWhereUniqueWithoutCouponInputSchema: z.ZodType<Prisma.OrderUpdateWithWhereUniqueWithoutCouponInput> = z.object({
  where: z.lazy(() => OrderWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => OrderUpdateWithoutCouponInputSchema),z.lazy(() => OrderUncheckedUpdateWithoutCouponInputSchema) ]),
}).strict();

export const OrderUpdateManyWithWhereWithoutCouponInputSchema: z.ZodType<Prisma.OrderUpdateManyWithWhereWithoutCouponInput> = z.object({
  where: z.lazy(() => OrderScalarWhereInputSchema),
  data: z.union([ z.lazy(() => OrderUpdateManyMutationInputSchema),z.lazy(() => OrderUncheckedUpdateManyWithoutOrdersInputSchema) ]),
}).strict();

export const CompanyUpsertWithoutCouponsInputSchema: z.ZodType<Prisma.CompanyUpsertWithoutCouponsInput> = z.object({
  update: z.union([ z.lazy(() => CompanyUpdateWithoutCouponsInputSchema),z.lazy(() => CompanyUncheckedUpdateWithoutCouponsInputSchema) ]),
  create: z.union([ z.lazy(() => CompanyCreateWithoutCouponsInputSchema),z.lazy(() => CompanyUncheckedCreateWithoutCouponsInputSchema) ]),
}).strict();

export const CompanyUpdateWithoutCouponsInputSchema: z.ZodType<Prisma.CompanyUpdateWithoutCouponsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => BusinessTypeSchema),z.lazy(() => EnumBusinessTypeFieldUpdateOperationsInputSchema) ]).optional(),
  active: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  logo: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  products: z.lazy(() => ProductUpdateManyWithoutCompanyNestedInputSchema).optional(),
  orders: z.lazy(() => OrderUpdateManyWithoutCompanyNestedInputSchema).optional(),
  workers: z.lazy(() => WorkerUpdateManyWithoutCompanyNestedInputSchema).optional(),
  WishList: z.lazy(() => WishListUpdateManyWithoutCompanyNestedInputSchema).optional(),
  categories: z.lazy(() => CategoryUpdateManyWithoutCompanyNestedInputSchema).optional()
}).strict();

export const CompanyUncheckedUpdateWithoutCouponsInputSchema: z.ZodType<Prisma.CompanyUncheckedUpdateWithoutCouponsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => BusinessTypeSchema),z.lazy(() => EnumBusinessTypeFieldUpdateOperationsInputSchema) ]).optional(),
  active: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  logo: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  products: z.lazy(() => ProductUncheckedUpdateManyWithoutCompanyNestedInputSchema).optional(),
  orders: z.lazy(() => OrderUncheckedUpdateManyWithoutCompanyNestedInputSchema).optional(),
  workers: z.lazy(() => WorkerUncheckedUpdateManyWithoutCompanyNestedInputSchema).optional(),
  WishList: z.lazy(() => WishListUncheckedUpdateManyWithoutCompanyNestedInputSchema).optional(),
  categories: z.lazy(() => CategoryUncheckedUpdateManyWithoutCompanyNestedInputSchema).optional()
}).strict();

export const CompanyCreateWithoutCategoriesInputSchema: z.ZodType<Prisma.CompanyCreateWithoutCategoriesInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  type: z.lazy(() => BusinessTypeSchema),
  active: z.boolean().optional(),
  logo: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  products: z.lazy(() => ProductCreateNestedManyWithoutCompanyInputSchema).optional(),
  orders: z.lazy(() => OrderCreateNestedManyWithoutCompanyInputSchema).optional(),
  workers: z.lazy(() => WorkerCreateNestedManyWithoutCompanyInputSchema).optional(),
  coupons: z.lazy(() => CouponCreateNestedManyWithoutCompanyInputSchema).optional(),
  WishList: z.lazy(() => WishListCreateNestedManyWithoutCompanyInputSchema).optional()
}).strict();

export const CompanyUncheckedCreateWithoutCategoriesInputSchema: z.ZodType<Prisma.CompanyUncheckedCreateWithoutCategoriesInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  type: z.lazy(() => BusinessTypeSchema),
  active: z.boolean().optional(),
  logo: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  products: z.lazy(() => ProductUncheckedCreateNestedManyWithoutCompanyInputSchema).optional(),
  orders: z.lazy(() => OrderUncheckedCreateNestedManyWithoutCompanyInputSchema).optional(),
  workers: z.lazy(() => WorkerUncheckedCreateNestedManyWithoutCompanyInputSchema).optional(),
  coupons: z.lazy(() => CouponUncheckedCreateNestedManyWithoutCompanyInputSchema).optional(),
  WishList: z.lazy(() => WishListUncheckedCreateNestedManyWithoutCompanyInputSchema).optional()
}).strict();

export const CompanyCreateOrConnectWithoutCategoriesInputSchema: z.ZodType<Prisma.CompanyCreateOrConnectWithoutCategoriesInput> = z.object({
  where: z.lazy(() => CompanyWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CompanyCreateWithoutCategoriesInputSchema),z.lazy(() => CompanyUncheckedCreateWithoutCategoriesInputSchema) ]),
}).strict();

export const ProductCreateWithoutCategoriesInputSchema: z.ZodType<Prisma.ProductCreateWithoutCategoriesInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  dec: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
  price: z.number(),
  oldPrice: z.number().optional().nullable(),
  available: z.boolean().optional(),
  hot: z.boolean().optional(),
  freeShipping: z.boolean().optional(),
  views: z.union([ z.lazy(() => ProductCreateviewsInputSchema),z.string().array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  company: z.lazy(() => CompanyCreateNestedOneWithoutProductsInputSchema),
  likes: z.lazy(() => BusinessCreateNestedManyWithoutLikedProductsInputSchema).optional(),
  wishLists: z.lazy(() => WishListCreateNestedManyWithoutProductsInputSchema).optional()
}).strict();

export const ProductUncheckedCreateWithoutCategoriesInputSchema: z.ZodType<Prisma.ProductUncheckedCreateWithoutCategoriesInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  dec: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
  price: z.number(),
  oldPrice: z.number().optional().nullable(),
  available: z.boolean().optional(),
  hot: z.boolean().optional(),
  freeShipping: z.boolean().optional(),
  views: z.union([ z.lazy(() => ProductCreateviewsInputSchema),z.string().array() ]).optional(),
  companyId: z.string(),
  categoryIds: z.union([ z.lazy(() => ProductCreatecategoryIdsInputSchema),z.string().array() ]).optional(),
  businessLikeIds: z.union([ z.lazy(() => ProductCreatebusinessLikeIdsInputSchema),z.string().array() ]).optional(),
  wishListIds: z.union([ z.lazy(() => ProductCreatewishListIdsInputSchema),z.string().array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  likes: z.lazy(() => BusinessUncheckedCreateNestedManyWithoutLikedProductsInputSchema).optional(),
  wishLists: z.lazy(() => WishListUncheckedCreateNestedManyWithoutProductsInputSchema).optional()
}).strict();

export const ProductCreateOrConnectWithoutCategoriesInputSchema: z.ZodType<Prisma.ProductCreateOrConnectWithoutCategoriesInput> = z.object({
  where: z.lazy(() => ProductWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProductCreateWithoutCategoriesInputSchema),z.lazy(() => ProductUncheckedCreateWithoutCategoriesInputSchema) ]),
}).strict();

export const CompanyUpsertWithoutCategoriesInputSchema: z.ZodType<Prisma.CompanyUpsertWithoutCategoriesInput> = z.object({
  update: z.union([ z.lazy(() => CompanyUpdateWithoutCategoriesInputSchema),z.lazy(() => CompanyUncheckedUpdateWithoutCategoriesInputSchema) ]),
  create: z.union([ z.lazy(() => CompanyCreateWithoutCategoriesInputSchema),z.lazy(() => CompanyUncheckedCreateWithoutCategoriesInputSchema) ]),
}).strict();

export const CompanyUpdateWithoutCategoriesInputSchema: z.ZodType<Prisma.CompanyUpdateWithoutCategoriesInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => BusinessTypeSchema),z.lazy(() => EnumBusinessTypeFieldUpdateOperationsInputSchema) ]).optional(),
  active: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  logo: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  products: z.lazy(() => ProductUpdateManyWithoutCompanyNestedInputSchema).optional(),
  orders: z.lazy(() => OrderUpdateManyWithoutCompanyNestedInputSchema).optional(),
  workers: z.lazy(() => WorkerUpdateManyWithoutCompanyNestedInputSchema).optional(),
  coupons: z.lazy(() => CouponUpdateManyWithoutCompanyNestedInputSchema).optional(),
  WishList: z.lazy(() => WishListUpdateManyWithoutCompanyNestedInputSchema).optional()
}).strict();

export const CompanyUncheckedUpdateWithoutCategoriesInputSchema: z.ZodType<Prisma.CompanyUncheckedUpdateWithoutCategoriesInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => BusinessTypeSchema),z.lazy(() => EnumBusinessTypeFieldUpdateOperationsInputSchema) ]).optional(),
  active: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  logo: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  products: z.lazy(() => ProductUncheckedUpdateManyWithoutCompanyNestedInputSchema).optional(),
  orders: z.lazy(() => OrderUncheckedUpdateManyWithoutCompanyNestedInputSchema).optional(),
  workers: z.lazy(() => WorkerUncheckedUpdateManyWithoutCompanyNestedInputSchema).optional(),
  coupons: z.lazy(() => CouponUncheckedUpdateManyWithoutCompanyNestedInputSchema).optional(),
  WishList: z.lazy(() => WishListUncheckedUpdateManyWithoutCompanyNestedInputSchema).optional()
}).strict();

export const ProductUpsertWithWhereUniqueWithoutCategoriesInputSchema: z.ZodType<Prisma.ProductUpsertWithWhereUniqueWithoutCategoriesInput> = z.object({
  where: z.lazy(() => ProductWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ProductUpdateWithoutCategoriesInputSchema),z.lazy(() => ProductUncheckedUpdateWithoutCategoriesInputSchema) ]),
  create: z.union([ z.lazy(() => ProductCreateWithoutCategoriesInputSchema),z.lazy(() => ProductUncheckedCreateWithoutCategoriesInputSchema) ]),
}).strict();

export const ProductUpdateWithWhereUniqueWithoutCategoriesInputSchema: z.ZodType<Prisma.ProductUpdateWithWhereUniqueWithoutCategoriesInput> = z.object({
  where: z.lazy(() => ProductWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ProductUpdateWithoutCategoriesInputSchema),z.lazy(() => ProductUncheckedUpdateWithoutCategoriesInputSchema) ]),
}).strict();

export const ProductUpdateManyWithWhereWithoutCategoriesInputSchema: z.ZodType<Prisma.ProductUpdateManyWithWhereWithoutCategoriesInput> = z.object({
  where: z.lazy(() => ProductScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ProductUpdateManyMutationInputSchema),z.lazy(() => ProductUncheckedUpdateManyWithoutProductsInputSchema) ]),
}).strict();

export const OrderCreateManyBusinessInputSchema: z.ZodType<Prisma.OrderCreateManyBusinessInput> = z.object({
  id: z.string().optional(),
  subtotal: z.number(),
  delivery: z.number(),
  discount: z.number(),
  total: z.number(),
  items: z.union([ z.lazy(() => OrderItemListCreateEnvelopeInputSchema),z.lazy(() => OrderItemCreateInputSchema),z.lazy(() => OrderItemCreateInputSchema).array() ]).optional(),
  companyId: z.string().optional().nullable(),
  couponId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const WishListCreateManyBusinessInputSchema: z.ZodType<Prisma.WishListCreateManyBusinessInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  companyId: z.string(),
  productsIds: z.union([ z.lazy(() => WishListCreateproductsIdsInputSchema),z.string().array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const OrderUpdateWithoutBusinessInputSchema: z.ZodType<Prisma.OrderUpdateWithoutBusinessInput> = z.object({
  subtotal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  delivery: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  discount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  total: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  items: z.union([ z.lazy(() => OrderItemListUpdateEnvelopeInputSchema),z.lazy(() => OrderItemCreateInputSchema),z.lazy(() => OrderItemCreateInputSchema).array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Company: z.lazy(() => CompanyUpdateOneWithoutOrdersNestedInputSchema).optional(),
  coupon: z.lazy(() => CouponUpdateOneWithoutOrdersNestedInputSchema).optional()
}).strict();

export const OrderUncheckedUpdateWithoutBusinessInputSchema: z.ZodType<Prisma.OrderUncheckedUpdateWithoutBusinessInput> = z.object({
  subtotal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  delivery: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  discount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  total: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  items: z.union([ z.lazy(() => OrderItemListUpdateEnvelopeInputSchema),z.lazy(() => OrderItemCreateInputSchema),z.lazy(() => OrderItemCreateInputSchema).array() ]).optional(),
  companyId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  couponId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const OrderUncheckedUpdateManyWithoutOrdersInputSchema: z.ZodType<Prisma.OrderUncheckedUpdateManyWithoutOrdersInput> = z.object({
  subtotal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  delivery: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  discount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  total: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  items: z.union([ z.lazy(() => OrderItemListUpdateEnvelopeInputSchema),z.lazy(() => OrderItemCreateInputSchema),z.lazy(() => OrderItemCreateInputSchema).array() ]).optional(),
  companyId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  couponId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const WishListUpdateWithoutBusinessInputSchema: z.ZodType<Prisma.WishListUpdateWithoutBusinessInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  company: z.lazy(() => CompanyUpdateOneRequiredWithoutWishListNestedInputSchema).optional(),
  products: z.lazy(() => ProductUpdateManyWithoutWishListsNestedInputSchema).optional()
}).strict();

export const WishListUncheckedUpdateWithoutBusinessInputSchema: z.ZodType<Prisma.WishListUncheckedUpdateWithoutBusinessInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  companyId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  productsIds: z.union([ z.lazy(() => WishListUpdateproductsIdsInputSchema),z.string().array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  products: z.lazy(() => ProductUncheckedUpdateManyWithoutWishListsNestedInputSchema).optional()
}).strict();

export const WishListUncheckedUpdateManyWithoutWishListsInputSchema: z.ZodType<Prisma.WishListUncheckedUpdateManyWithoutWishListsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  companyId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  productsIds: z.union([ z.lazy(() => WishListUpdateproductsIdsInputSchema),z.string().array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ProductUpdateWithoutLikesInputSchema: z.ZodType<Prisma.ProductUpdateWithoutLikesInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dec: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  price: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  oldPrice: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  available: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  hot: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  freeShipping: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  views: z.union([ z.lazy(() => ProductUpdateviewsInputSchema),z.string().array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  company: z.lazy(() => CompanyUpdateOneRequiredWithoutProductsNestedInputSchema).optional(),
  categories: z.lazy(() => CategoryUpdateManyWithoutProductsNestedInputSchema).optional(),
  wishLists: z.lazy(() => WishListUpdateManyWithoutProductsNestedInputSchema).optional()
}).strict();

export const ProductUncheckedUpdateWithoutLikesInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateWithoutLikesInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dec: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  price: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  oldPrice: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  available: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  hot: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  freeShipping: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  views: z.union([ z.lazy(() => ProductUpdateviewsInputSchema),z.string().array() ]).optional(),
  companyId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  categoryIds: z.union([ z.lazy(() => ProductUpdatecategoryIdsInputSchema),z.string().array() ]).optional(),
  businessLikeIds: z.union([ z.lazy(() => ProductUpdatebusinessLikeIdsInputSchema),z.string().array() ]).optional(),
  wishListIds: z.union([ z.lazy(() => ProductUpdatewishListIdsInputSchema),z.string().array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  categories: z.lazy(() => CategoryUncheckedUpdateManyWithoutProductsNestedInputSchema).optional(),
  wishLists: z.lazy(() => WishListUncheckedUpdateManyWithoutProductsNestedInputSchema).optional()
}).strict();

export const ProductUncheckedUpdateManyWithoutLikedProductsInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateManyWithoutLikedProductsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dec: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  price: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  oldPrice: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  available: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  hot: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  freeShipping: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  views: z.union([ z.lazy(() => ProductUpdateviewsInputSchema),z.string().array() ]).optional(),
  companyId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  categoryIds: z.union([ z.lazy(() => ProductUpdatecategoryIdsInputSchema),z.string().array() ]).optional(),
  businessLikeIds: z.union([ z.lazy(() => ProductUpdatebusinessLikeIdsInputSchema),z.string().array() ]).optional(),
  wishListIds: z.union([ z.lazy(() => ProductUpdatewishListIdsInputSchema),z.string().array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ProductUpdateWithoutWishListsInputSchema: z.ZodType<Prisma.ProductUpdateWithoutWishListsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dec: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  price: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  oldPrice: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  available: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  hot: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  freeShipping: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  views: z.union([ z.lazy(() => ProductUpdateviewsInputSchema),z.string().array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  company: z.lazy(() => CompanyUpdateOneRequiredWithoutProductsNestedInputSchema).optional(),
  categories: z.lazy(() => CategoryUpdateManyWithoutProductsNestedInputSchema).optional(),
  likes: z.lazy(() => BusinessUpdateManyWithoutLikedProductsNestedInputSchema).optional()
}).strict();

export const ProductUncheckedUpdateWithoutWishListsInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateWithoutWishListsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dec: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  price: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  oldPrice: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  available: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  hot: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  freeShipping: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  views: z.union([ z.lazy(() => ProductUpdateviewsInputSchema),z.string().array() ]).optional(),
  companyId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  categoryIds: z.union([ z.lazy(() => ProductUpdatecategoryIdsInputSchema),z.string().array() ]).optional(),
  businessLikeIds: z.union([ z.lazy(() => ProductUpdatebusinessLikeIdsInputSchema),z.string().array() ]).optional(),
  wishListIds: z.union([ z.lazy(() => ProductUpdatewishListIdsInputSchema),z.string().array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  categories: z.lazy(() => CategoryUncheckedUpdateManyWithoutProductsNestedInputSchema).optional(),
  likes: z.lazy(() => BusinessUncheckedUpdateManyWithoutLikedProductsNestedInputSchema).optional()
}).strict();

export const ProductUncheckedUpdateManyWithoutProductsInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateManyWithoutProductsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dec: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  price: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  oldPrice: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  available: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  hot: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  freeShipping: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  views: z.union([ z.lazy(() => ProductUpdateviewsInputSchema),z.string().array() ]).optional(),
  companyId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  categoryIds: z.union([ z.lazy(() => ProductUpdatecategoryIdsInputSchema),z.string().array() ]).optional(),
  businessLikeIds: z.union([ z.lazy(() => ProductUpdatebusinessLikeIdsInputSchema),z.string().array() ]).optional(),
  wishListIds: z.union([ z.lazy(() => ProductUpdatewishListIdsInputSchema),z.string().array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ProductCreateManyCompanyInputSchema: z.ZodType<Prisma.ProductCreateManyCompanyInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  dec: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
  price: z.number().int(),
  oldPrice: z.number().int().optional().nullable(),
  available: z.boolean().optional(),
  hot: z.boolean().optional(),
  freeShipping: z.boolean().optional(),
  views: z.union([ z.lazy(() => ProductCreateviewsInputSchema),z.string().array() ]).optional(),
  categoryIds: z.union([ z.lazy(() => ProductCreatecategoryIdsInputSchema),z.string().array() ]).optional(),
  businessLikeIds: z.union([ z.lazy(() => ProductCreatebusinessLikeIdsInputSchema),z.string().array() ]).optional(),
  wishListIds: z.union([ z.lazy(() => ProductCreatewishListIdsInputSchema),z.string().array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const OrderCreateManyCompanyInputSchema: z.ZodType<Prisma.OrderCreateManyCompanyInput> = z.object({
  id: z.string().optional(),
  subtotal: z.number(),
  delivery: z.number(),
  discount: z.number(),
  total: z.number(),
  items: z.union([ z.lazy(() => OrderItemListCreateEnvelopeInputSchema),z.lazy(() => OrderItemCreateInputSchema),z.lazy(() => OrderItemCreateInputSchema).array() ]).optional(),
  businessId: z.string().optional().nullable(),
  couponId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const WorkerCreateManyCompanyInputSchema: z.ZodType<Prisma.WorkerCreateManyCompanyInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  phoneNumber: z.string(),
  password: z.string(),
  role: z.lazy(() => WorkerRoleSchema),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const CouponCreateManyCompanyInputSchema: z.ZodType<Prisma.CouponCreateManyCompanyInput> = z.object({
  id: z.string().optional(),
  code: z.string(),
  amount: z.number(),
  isValid: z.boolean(),
  active: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const WishListCreateManyCompanyInputSchema: z.ZodType<Prisma.WishListCreateManyCompanyInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  businessId: z.string(),
  productsIds: z.union([ z.lazy(() => WishListCreateproductsIdsInputSchema),z.string().array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const CategoryCreateManyCompanyInputSchema: z.ZodType<Prisma.CategoryCreateManyCompanyInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  productsIds: z.union([ z.lazy(() => CategoryCreateproductsIdsInputSchema),z.string().array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const ProductUpdateWithoutCompanyInputSchema: z.ZodType<Prisma.ProductUpdateWithoutCompanyInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dec: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  price: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  oldPrice: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  available: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  hot: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  freeShipping: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  views: z.union([ z.lazy(() => ProductUpdateviewsInputSchema),z.string().array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  categories: z.lazy(() => CategoryUpdateManyWithoutProductsNestedInputSchema).optional(),
  likes: z.lazy(() => BusinessUpdateManyWithoutLikedProductsNestedInputSchema).optional(),
  wishLists: z.lazy(() => WishListUpdateManyWithoutProductsNestedInputSchema).optional()
}).strict();

export const ProductUncheckedUpdateWithoutCompanyInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateWithoutCompanyInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dec: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  price: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  oldPrice: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  available: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  hot: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  freeShipping: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  views: z.union([ z.lazy(() => ProductUpdateviewsInputSchema),z.string().array() ]).optional(),
  categoryIds: z.union([ z.lazy(() => ProductUpdatecategoryIdsInputSchema),z.string().array() ]).optional(),
  businessLikeIds: z.union([ z.lazy(() => ProductUpdatebusinessLikeIdsInputSchema),z.string().array() ]).optional(),
  wishListIds: z.union([ z.lazy(() => ProductUpdatewishListIdsInputSchema),z.string().array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  categories: z.lazy(() => CategoryUncheckedUpdateManyWithoutProductsNestedInputSchema).optional(),
  likes: z.lazy(() => BusinessUncheckedUpdateManyWithoutLikedProductsNestedInputSchema).optional(),
  wishLists: z.lazy(() => WishListUncheckedUpdateManyWithoutProductsNestedInputSchema).optional()
}).strict();

export const OrderUpdateWithoutCompanyInputSchema: z.ZodType<Prisma.OrderUpdateWithoutCompanyInput> = z.object({
  subtotal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  delivery: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  discount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  total: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  items: z.union([ z.lazy(() => OrderItemListUpdateEnvelopeInputSchema),z.lazy(() => OrderItemCreateInputSchema),z.lazy(() => OrderItemCreateInputSchema).array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Business: z.lazy(() => BusinessUpdateOneWithoutOrdersNestedInputSchema).optional(),
  coupon: z.lazy(() => CouponUpdateOneWithoutOrdersNestedInputSchema).optional()
}).strict();

export const OrderUncheckedUpdateWithoutCompanyInputSchema: z.ZodType<Prisma.OrderUncheckedUpdateWithoutCompanyInput> = z.object({
  subtotal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  delivery: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  discount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  total: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  items: z.union([ z.lazy(() => OrderItemListUpdateEnvelopeInputSchema),z.lazy(() => OrderItemCreateInputSchema),z.lazy(() => OrderItemCreateInputSchema).array() ]).optional(),
  businessId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  couponId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const WorkerUpdateWithoutCompanyInputSchema: z.ZodType<Prisma.WorkerUpdateWithoutCompanyInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phoneNumber: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => WorkerRoleSchema),z.lazy(() => EnumWorkerRoleFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const WorkerUncheckedUpdateWithoutCompanyInputSchema: z.ZodType<Prisma.WorkerUncheckedUpdateWithoutCompanyInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phoneNumber: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => WorkerRoleSchema),z.lazy(() => EnumWorkerRoleFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const WorkerUncheckedUpdateManyWithoutWorkersInputSchema: z.ZodType<Prisma.WorkerUncheckedUpdateManyWithoutWorkersInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phoneNumber: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => WorkerRoleSchema),z.lazy(() => EnumWorkerRoleFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CouponUpdateWithoutCompanyInputSchema: z.ZodType<Prisma.CouponUpdateWithoutCompanyInput> = z.object({
  code: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  amount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  isValid: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  active: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  orders: z.lazy(() => OrderUpdateManyWithoutCouponNestedInputSchema).optional()
}).strict();

export const CouponUncheckedUpdateWithoutCompanyInputSchema: z.ZodType<Prisma.CouponUncheckedUpdateWithoutCompanyInput> = z.object({
  code: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  amount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  isValid: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  active: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  orders: z.lazy(() => OrderUncheckedUpdateManyWithoutCouponNestedInputSchema).optional()
}).strict();

export const CouponUncheckedUpdateManyWithoutCouponsInputSchema: z.ZodType<Prisma.CouponUncheckedUpdateManyWithoutCouponsInput> = z.object({
  code: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  amount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  isValid: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  active: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const WishListUpdateWithoutCompanyInputSchema: z.ZodType<Prisma.WishListUpdateWithoutCompanyInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Business: z.lazy(() => BusinessUpdateOneRequiredWithoutWishListsNestedInputSchema).optional(),
  products: z.lazy(() => ProductUpdateManyWithoutWishListsNestedInputSchema).optional()
}).strict();

export const WishListUncheckedUpdateWithoutCompanyInputSchema: z.ZodType<Prisma.WishListUncheckedUpdateWithoutCompanyInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  businessId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  productsIds: z.union([ z.lazy(() => WishListUpdateproductsIdsInputSchema),z.string().array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  products: z.lazy(() => ProductUncheckedUpdateManyWithoutWishListsNestedInputSchema).optional()
}).strict();

export const WishListUncheckedUpdateManyWithoutWishListInputSchema: z.ZodType<Prisma.WishListUncheckedUpdateManyWithoutWishListInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  businessId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  productsIds: z.union([ z.lazy(() => WishListUpdateproductsIdsInputSchema),z.string().array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CategoryUpdateWithoutCompanyInputSchema: z.ZodType<Prisma.CategoryUpdateWithoutCompanyInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  products: z.lazy(() => ProductUpdateManyWithoutCategoriesNestedInputSchema).optional()
}).strict();

export const CategoryUncheckedUpdateWithoutCompanyInputSchema: z.ZodType<Prisma.CategoryUncheckedUpdateWithoutCompanyInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  productsIds: z.union([ z.lazy(() => CategoryUpdateproductsIdsInputSchema),z.string().array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  products: z.lazy(() => ProductUncheckedUpdateManyWithoutCategoriesNestedInputSchema).optional()
}).strict();

export const CategoryUncheckedUpdateManyWithoutCategoriesInputSchema: z.ZodType<Prisma.CategoryUncheckedUpdateManyWithoutCategoriesInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  productsIds: z.union([ z.lazy(() => CategoryUpdateproductsIdsInputSchema),z.string().array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CategoryUpdateWithoutProductsInputSchema: z.ZodType<Prisma.CategoryUpdateWithoutProductsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  company: z.lazy(() => CompanyUpdateOneRequiredWithoutCategoriesNestedInputSchema).optional()
}).strict();

export const CategoryUncheckedUpdateWithoutProductsInputSchema: z.ZodType<Prisma.CategoryUncheckedUpdateWithoutProductsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  companyId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  productsIds: z.union([ z.lazy(() => CategoryUpdateproductsIdsInputSchema),z.string().array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const BusinessUpdateWithoutLikedProductsInputSchema: z.ZodType<Prisma.BusinessUpdateWithoutLikedProductsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phoneNumber: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  state: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  location: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  neighborhood: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => BusinessTypeSchema),z.lazy(() => EnumBusinessTypeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  orders: z.lazy(() => OrderUpdateManyWithoutBusinessNestedInputSchema).optional(),
  wishLists: z.lazy(() => WishListUpdateManyWithoutBusinessNestedInputSchema).optional()
}).strict();

export const BusinessUncheckedUpdateWithoutLikedProductsInputSchema: z.ZodType<Prisma.BusinessUncheckedUpdateWithoutLikedProductsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phoneNumber: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  state: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  location: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  neighborhood: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => BusinessTypeSchema),z.lazy(() => EnumBusinessTypeFieldUpdateOperationsInputSchema) ]).optional(),
  productsLikedIds: z.union([ z.lazy(() => BusinessUpdateproductsLikedIdsInputSchema),z.string().array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  orders: z.lazy(() => OrderUncheckedUpdateManyWithoutBusinessNestedInputSchema).optional(),
  wishLists: z.lazy(() => WishListUncheckedUpdateManyWithoutBusinessNestedInputSchema).optional()
}).strict();

export const BusinessUncheckedUpdateManyWithoutLikesInputSchema: z.ZodType<Prisma.BusinessUncheckedUpdateManyWithoutLikesInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phoneNumber: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  state: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  location: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  neighborhood: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => BusinessTypeSchema),z.lazy(() => EnumBusinessTypeFieldUpdateOperationsInputSchema) ]).optional(),
  productsLikedIds: z.union([ z.lazy(() => BusinessUpdateproductsLikedIdsInputSchema),z.string().array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const WishListUpdateWithoutProductsInputSchema: z.ZodType<Prisma.WishListUpdateWithoutProductsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Business: z.lazy(() => BusinessUpdateOneRequiredWithoutWishListsNestedInputSchema).optional(),
  company: z.lazy(() => CompanyUpdateOneRequiredWithoutWishListNestedInputSchema).optional()
}).strict();

export const WishListUncheckedUpdateWithoutProductsInputSchema: z.ZodType<Prisma.WishListUncheckedUpdateWithoutProductsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  businessId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  companyId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  productsIds: z.union([ z.lazy(() => WishListUpdateproductsIdsInputSchema),z.string().array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const OrderItemUpdateInputSchema: z.ZodType<Prisma.OrderItemUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  size: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  color: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  freeShipping: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.lazy(() => OrderItemUpdateimageInputSchema),z.string().array() ]).optional(),
}).strict();

export const OrderCreateManyCouponInputSchema: z.ZodType<Prisma.OrderCreateManyCouponInput> = z.object({
  id: z.string().optional(),
  subtotal: z.number(),
  delivery: z.number(),
  discount: z.number(),
  total: z.number(),
  items: z.union([ z.lazy(() => OrderItemListCreateEnvelopeInputSchema),z.lazy(() => OrderItemCreateInputSchema),z.lazy(() => OrderItemCreateInputSchema).array() ]).optional(),
  businessId: z.string().optional().nullable(),
  companyId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const OrderUpdateWithoutCouponInputSchema: z.ZodType<Prisma.OrderUpdateWithoutCouponInput> = z.object({
  subtotal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  delivery: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  discount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  total: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  items: z.union([ z.lazy(() => OrderItemListUpdateEnvelopeInputSchema),z.lazy(() => OrderItemCreateInputSchema),z.lazy(() => OrderItemCreateInputSchema).array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Business: z.lazy(() => BusinessUpdateOneWithoutOrdersNestedInputSchema).optional(),
  Company: z.lazy(() => CompanyUpdateOneWithoutOrdersNestedInputSchema).optional()
}).strict();

export const OrderUncheckedUpdateWithoutCouponInputSchema: z.ZodType<Prisma.OrderUncheckedUpdateWithoutCouponInput> = z.object({
  subtotal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  delivery: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  discount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  total: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  items: z.union([ z.lazy(() => OrderItemListUpdateEnvelopeInputSchema),z.lazy(() => OrderItemCreateInputSchema),z.lazy(() => OrderItemCreateInputSchema).array() ]).optional(),
  businessId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  companyId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ProductUpdateWithoutCategoriesInputSchema: z.ZodType<Prisma.ProductUpdateWithoutCategoriesInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dec: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  price: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  oldPrice: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  available: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  hot: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  freeShipping: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  views: z.union([ z.lazy(() => ProductUpdateviewsInputSchema),z.string().array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  company: z.lazy(() => CompanyUpdateOneRequiredWithoutProductsNestedInputSchema).optional(),
  likes: z.lazy(() => BusinessUpdateManyWithoutLikedProductsNestedInputSchema).optional(),
  wishLists: z.lazy(() => WishListUpdateManyWithoutProductsNestedInputSchema).optional()
}).strict();

export const ProductUncheckedUpdateWithoutCategoriesInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateWithoutCategoriesInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dec: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  price: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  oldPrice: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  available: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  hot: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  freeShipping: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  views: z.union([ z.lazy(() => ProductUpdateviewsInputSchema),z.string().array() ]).optional(),
  companyId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  categoryIds: z.union([ z.lazy(() => ProductUpdatecategoryIdsInputSchema),z.string().array() ]).optional(),
  businessLikeIds: z.union([ z.lazy(() => ProductUpdatebusinessLikeIdsInputSchema),z.string().array() ]).optional(),
  wishListIds: z.union([ z.lazy(() => ProductUpdatewishListIdsInputSchema),z.string().array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  likes: z.lazy(() => BusinessUncheckedUpdateManyWithoutLikedProductsNestedInputSchema).optional(),
  wishLists: z.lazy(() => WishListUncheckedUpdateManyWithoutProductsNestedInputSchema).optional()
}).strict();

export const OrderItemUpdateimageInputSchema: z.ZodType<Prisma.OrderItemUpdateimageInput> = z.object({
  set: z.string().array().optional(),
  push: z.union([ z.string(),z.string().array() ]).optional(),
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const BusinessFindFirstArgsSchema: z.ZodType<Prisma.BusinessFindFirstArgs> = z.object({
  select: BusinessSelectSchema.optional(),
  include: BusinessIncludeSchema.optional(),
  where: BusinessWhereInputSchema.optional(),
  orderBy: z.union([ BusinessOrderByWithRelationInputSchema.array(),BusinessOrderByWithRelationInputSchema ]).optional(),
  cursor: BusinessWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: BusinessScalarFieldEnumSchema.array().optional(),
}).strict()

export const BusinessFindFirstOrThrowArgsSchema: z.ZodType<Prisma.BusinessFindFirstOrThrowArgs> = z.object({
  select: BusinessSelectSchema.optional(),
  include: BusinessIncludeSchema.optional(),
  where: BusinessWhereInputSchema.optional(),
  orderBy: z.union([ BusinessOrderByWithRelationInputSchema.array(),BusinessOrderByWithRelationInputSchema ]).optional(),
  cursor: BusinessWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: BusinessScalarFieldEnumSchema.array().optional(),
}).strict()

export const BusinessFindManyArgsSchema: z.ZodType<Prisma.BusinessFindManyArgs> = z.object({
  select: BusinessSelectSchema.optional(),
  include: BusinessIncludeSchema.optional(),
  where: BusinessWhereInputSchema.optional(),
  orderBy: z.union([ BusinessOrderByWithRelationInputSchema.array(),BusinessOrderByWithRelationInputSchema ]).optional(),
  cursor: BusinessWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: BusinessScalarFieldEnumSchema.array().optional(),
}).strict()

export const BusinessAggregateArgsSchema: z.ZodType<Prisma.BusinessAggregateArgs> = z.object({
  where: BusinessWhereInputSchema.optional(),
  orderBy: z.union([ BusinessOrderByWithRelationInputSchema.array(),BusinessOrderByWithRelationInputSchema ]).optional(),
  cursor: BusinessWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const BusinessGroupByArgsSchema: z.ZodType<Prisma.BusinessGroupByArgs> = z.object({
  where: BusinessWhereInputSchema.optional(),
  orderBy: z.union([ BusinessOrderByWithAggregationInputSchema.array(),BusinessOrderByWithAggregationInputSchema ]).optional(),
  by: BusinessScalarFieldEnumSchema.array(),
  having: BusinessScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const BusinessFindUniqueArgsSchema: z.ZodType<Prisma.BusinessFindUniqueArgs> = z.object({
  select: BusinessSelectSchema.optional(),
  include: BusinessIncludeSchema.optional(),
  where: BusinessWhereUniqueInputSchema,
}).strict()

export const BusinessFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.BusinessFindUniqueOrThrowArgs> = z.object({
  select: BusinessSelectSchema.optional(),
  include: BusinessIncludeSchema.optional(),
  where: BusinessWhereUniqueInputSchema,
}).strict()

export const WishListFindFirstArgsSchema: z.ZodType<Prisma.WishListFindFirstArgs> = z.object({
  select: WishListSelectSchema.optional(),
  include: WishListIncludeSchema.optional(),
  where: WishListWhereInputSchema.optional(),
  orderBy: z.union([ WishListOrderByWithRelationInputSchema.array(),WishListOrderByWithRelationInputSchema ]).optional(),
  cursor: WishListWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: WishListScalarFieldEnumSchema.array().optional(),
}).strict()

export const WishListFindFirstOrThrowArgsSchema: z.ZodType<Prisma.WishListFindFirstOrThrowArgs> = z.object({
  select: WishListSelectSchema.optional(),
  include: WishListIncludeSchema.optional(),
  where: WishListWhereInputSchema.optional(),
  orderBy: z.union([ WishListOrderByWithRelationInputSchema.array(),WishListOrderByWithRelationInputSchema ]).optional(),
  cursor: WishListWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: WishListScalarFieldEnumSchema.array().optional(),
}).strict()

export const WishListFindManyArgsSchema: z.ZodType<Prisma.WishListFindManyArgs> = z.object({
  select: WishListSelectSchema.optional(),
  include: WishListIncludeSchema.optional(),
  where: WishListWhereInputSchema.optional(),
  orderBy: z.union([ WishListOrderByWithRelationInputSchema.array(),WishListOrderByWithRelationInputSchema ]).optional(),
  cursor: WishListWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: WishListScalarFieldEnumSchema.array().optional(),
}).strict()

export const WishListAggregateArgsSchema: z.ZodType<Prisma.WishListAggregateArgs> = z.object({
  where: WishListWhereInputSchema.optional(),
  orderBy: z.union([ WishListOrderByWithRelationInputSchema.array(),WishListOrderByWithRelationInputSchema ]).optional(),
  cursor: WishListWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const WishListGroupByArgsSchema: z.ZodType<Prisma.WishListGroupByArgs> = z.object({
  where: WishListWhereInputSchema.optional(),
  orderBy: z.union([ WishListOrderByWithAggregationInputSchema.array(),WishListOrderByWithAggregationInputSchema ]).optional(),
  by: WishListScalarFieldEnumSchema.array(),
  having: WishListScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const WishListFindUniqueArgsSchema: z.ZodType<Prisma.WishListFindUniqueArgs> = z.object({
  select: WishListSelectSchema.optional(),
  include: WishListIncludeSchema.optional(),
  where: WishListWhereUniqueInputSchema,
}).strict()

export const WishListFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.WishListFindUniqueOrThrowArgs> = z.object({
  select: WishListSelectSchema.optional(),
  include: WishListIncludeSchema.optional(),
  where: WishListWhereUniqueInputSchema,
}).strict()

export const CompanyFindFirstArgsSchema: z.ZodType<Prisma.CompanyFindFirstArgs> = z.object({
  select: CompanySelectSchema.optional(),
  include: CompanyIncludeSchema.optional(),
  where: CompanyWhereInputSchema.optional(),
  orderBy: z.union([ CompanyOrderByWithRelationInputSchema.array(),CompanyOrderByWithRelationInputSchema ]).optional(),
  cursor: CompanyWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: CompanyScalarFieldEnumSchema.array().optional(),
}).strict()

export const CompanyFindFirstOrThrowArgsSchema: z.ZodType<Prisma.CompanyFindFirstOrThrowArgs> = z.object({
  select: CompanySelectSchema.optional(),
  include: CompanyIncludeSchema.optional(),
  where: CompanyWhereInputSchema.optional(),
  orderBy: z.union([ CompanyOrderByWithRelationInputSchema.array(),CompanyOrderByWithRelationInputSchema ]).optional(),
  cursor: CompanyWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: CompanyScalarFieldEnumSchema.array().optional(),
}).strict()

export const CompanyFindManyArgsSchema: z.ZodType<Prisma.CompanyFindManyArgs> = z.object({
  select: CompanySelectSchema.optional(),
  include: CompanyIncludeSchema.optional(),
  where: CompanyWhereInputSchema.optional(),
  orderBy: z.union([ CompanyOrderByWithRelationInputSchema.array(),CompanyOrderByWithRelationInputSchema ]).optional(),
  cursor: CompanyWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: CompanyScalarFieldEnumSchema.array().optional(),
}).strict()

export const CompanyAggregateArgsSchema: z.ZodType<Prisma.CompanyAggregateArgs> = z.object({
  where: CompanyWhereInputSchema.optional(),
  orderBy: z.union([ CompanyOrderByWithRelationInputSchema.array(),CompanyOrderByWithRelationInputSchema ]).optional(),
  cursor: CompanyWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const CompanyGroupByArgsSchema: z.ZodType<Prisma.CompanyGroupByArgs> = z.object({
  where: CompanyWhereInputSchema.optional(),
  orderBy: z.union([ CompanyOrderByWithAggregationInputSchema.array(),CompanyOrderByWithAggregationInputSchema ]).optional(),
  by: CompanyScalarFieldEnumSchema.array(),
  having: CompanyScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const CompanyFindUniqueArgsSchema: z.ZodType<Prisma.CompanyFindUniqueArgs> = z.object({
  select: CompanySelectSchema.optional(),
  include: CompanyIncludeSchema.optional(),
  where: CompanyWhereUniqueInputSchema,
}).strict()

export const CompanyFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.CompanyFindUniqueOrThrowArgs> = z.object({
  select: CompanySelectSchema.optional(),
  include: CompanyIncludeSchema.optional(),
  where: CompanyWhereUniqueInputSchema,
}).strict()

export const ProductFindFirstArgsSchema: z.ZodType<Prisma.ProductFindFirstArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  where: ProductWhereInputSchema.optional(),
  orderBy: z.union([ ProductOrderByWithRelationInputSchema.array(),ProductOrderByWithRelationInputSchema ]).optional(),
  cursor: ProductWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ProductScalarFieldEnumSchema.array().optional(),
}).strict()

export const ProductFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ProductFindFirstOrThrowArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  where: ProductWhereInputSchema.optional(),
  orderBy: z.union([ ProductOrderByWithRelationInputSchema.array(),ProductOrderByWithRelationInputSchema ]).optional(),
  cursor: ProductWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ProductScalarFieldEnumSchema.array().optional(),
}).strict()

export const ProductFindManyArgsSchema: z.ZodType<Prisma.ProductFindManyArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  where: ProductWhereInputSchema.optional(),
  orderBy: z.union([ ProductOrderByWithRelationInputSchema.array(),ProductOrderByWithRelationInputSchema ]).optional(),
  cursor: ProductWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ProductScalarFieldEnumSchema.array().optional(),
}).strict()

export const ProductAggregateArgsSchema: z.ZodType<Prisma.ProductAggregateArgs> = z.object({
  where: ProductWhereInputSchema.optional(),
  orderBy: z.union([ ProductOrderByWithRelationInputSchema.array(),ProductOrderByWithRelationInputSchema ]).optional(),
  cursor: ProductWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const ProductGroupByArgsSchema: z.ZodType<Prisma.ProductGroupByArgs> = z.object({
  where: ProductWhereInputSchema.optional(),
  orderBy: z.union([ ProductOrderByWithAggregationInputSchema.array(),ProductOrderByWithAggregationInputSchema ]).optional(),
  by: ProductScalarFieldEnumSchema.array(),
  having: ProductScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const ProductFindUniqueArgsSchema: z.ZodType<Prisma.ProductFindUniqueArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  where: ProductWhereUniqueInputSchema,
}).strict()

export const ProductFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ProductFindUniqueOrThrowArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  where: ProductWhereUniqueInputSchema,
}).strict()

export const WorkerFindFirstArgsSchema: z.ZodType<Prisma.WorkerFindFirstArgs> = z.object({
  select: WorkerSelectSchema.optional(),
  include: WorkerIncludeSchema.optional(),
  where: WorkerWhereInputSchema.optional(),
  orderBy: z.union([ WorkerOrderByWithRelationInputSchema.array(),WorkerOrderByWithRelationInputSchema ]).optional(),
  cursor: WorkerWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: WorkerScalarFieldEnumSchema.array().optional(),
}).strict()

export const WorkerFindFirstOrThrowArgsSchema: z.ZodType<Prisma.WorkerFindFirstOrThrowArgs> = z.object({
  select: WorkerSelectSchema.optional(),
  include: WorkerIncludeSchema.optional(),
  where: WorkerWhereInputSchema.optional(),
  orderBy: z.union([ WorkerOrderByWithRelationInputSchema.array(),WorkerOrderByWithRelationInputSchema ]).optional(),
  cursor: WorkerWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: WorkerScalarFieldEnumSchema.array().optional(),
}).strict()

export const WorkerFindManyArgsSchema: z.ZodType<Prisma.WorkerFindManyArgs> = z.object({
  select: WorkerSelectSchema.optional(),
  include: WorkerIncludeSchema.optional(),
  where: WorkerWhereInputSchema.optional(),
  orderBy: z.union([ WorkerOrderByWithRelationInputSchema.array(),WorkerOrderByWithRelationInputSchema ]).optional(),
  cursor: WorkerWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: WorkerScalarFieldEnumSchema.array().optional(),
}).strict()

export const WorkerAggregateArgsSchema: z.ZodType<Prisma.WorkerAggregateArgs> = z.object({
  where: WorkerWhereInputSchema.optional(),
  orderBy: z.union([ WorkerOrderByWithRelationInputSchema.array(),WorkerOrderByWithRelationInputSchema ]).optional(),
  cursor: WorkerWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const WorkerGroupByArgsSchema: z.ZodType<Prisma.WorkerGroupByArgs> = z.object({
  where: WorkerWhereInputSchema.optional(),
  orderBy: z.union([ WorkerOrderByWithAggregationInputSchema.array(),WorkerOrderByWithAggregationInputSchema ]).optional(),
  by: WorkerScalarFieldEnumSchema.array(),
  having: WorkerScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const WorkerFindUniqueArgsSchema: z.ZodType<Prisma.WorkerFindUniqueArgs> = z.object({
  select: WorkerSelectSchema.optional(),
  include: WorkerIncludeSchema.optional(),
  where: WorkerWhereUniqueInputSchema,
}).strict()

export const WorkerFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.WorkerFindUniqueOrThrowArgs> = z.object({
  select: WorkerSelectSchema.optional(),
  include: WorkerIncludeSchema.optional(),
  where: WorkerWhereUniqueInputSchema,
}).strict()

export const OrderFindFirstArgsSchema: z.ZodType<Prisma.OrderFindFirstArgs> = z.object({
  select: OrderSelectSchema.optional(),
  include: OrderIncludeSchema.optional(),
  where: OrderWhereInputSchema.optional(),
  orderBy: z.union([ OrderOrderByWithRelationInputSchema.array(),OrderOrderByWithRelationInputSchema ]).optional(),
  cursor: OrderWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: OrderScalarFieldEnumSchema.array().optional(),
}).strict()

export const OrderFindFirstOrThrowArgsSchema: z.ZodType<Prisma.OrderFindFirstOrThrowArgs> = z.object({
  select: OrderSelectSchema.optional(),
  include: OrderIncludeSchema.optional(),
  where: OrderWhereInputSchema.optional(),
  orderBy: z.union([ OrderOrderByWithRelationInputSchema.array(),OrderOrderByWithRelationInputSchema ]).optional(),
  cursor: OrderWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: OrderScalarFieldEnumSchema.array().optional(),
}).strict()

export const OrderFindManyArgsSchema: z.ZodType<Prisma.OrderFindManyArgs> = z.object({
  select: OrderSelectSchema.optional(),
  include: OrderIncludeSchema.optional(),
  where: OrderWhereInputSchema.optional(),
  orderBy: z.union([ OrderOrderByWithRelationInputSchema.array(),OrderOrderByWithRelationInputSchema ]).optional(),
  cursor: OrderWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: OrderScalarFieldEnumSchema.array().optional(),
}).strict()

export const OrderAggregateArgsSchema: z.ZodType<Prisma.OrderAggregateArgs> = z.object({
  where: OrderWhereInputSchema.optional(),
  orderBy: z.union([ OrderOrderByWithRelationInputSchema.array(),OrderOrderByWithRelationInputSchema ]).optional(),
  cursor: OrderWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const OrderGroupByArgsSchema: z.ZodType<Prisma.OrderGroupByArgs> = z.object({
  where: OrderWhereInputSchema.optional(),
  orderBy: z.union([ OrderOrderByWithAggregationInputSchema.array(),OrderOrderByWithAggregationInputSchema ]).optional(),
  by: OrderScalarFieldEnumSchema.array(),
  having: OrderScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const OrderFindUniqueArgsSchema: z.ZodType<Prisma.OrderFindUniqueArgs> = z.object({
  select: OrderSelectSchema.optional(),
  include: OrderIncludeSchema.optional(),
  where: OrderWhereUniqueInputSchema,
}).strict()

export const OrderFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.OrderFindUniqueOrThrowArgs> = z.object({
  select: OrderSelectSchema.optional(),
  include: OrderIncludeSchema.optional(),
  where: OrderWhereUniqueInputSchema,
}).strict()

export const CouponFindFirstArgsSchema: z.ZodType<Prisma.CouponFindFirstArgs> = z.object({
  select: CouponSelectSchema.optional(),
  include: CouponIncludeSchema.optional(),
  where: CouponWhereInputSchema.optional(),
  orderBy: z.union([ CouponOrderByWithRelationInputSchema.array(),CouponOrderByWithRelationInputSchema ]).optional(),
  cursor: CouponWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: CouponScalarFieldEnumSchema.array().optional(),
}).strict()

export const CouponFindFirstOrThrowArgsSchema: z.ZodType<Prisma.CouponFindFirstOrThrowArgs> = z.object({
  select: CouponSelectSchema.optional(),
  include: CouponIncludeSchema.optional(),
  where: CouponWhereInputSchema.optional(),
  orderBy: z.union([ CouponOrderByWithRelationInputSchema.array(),CouponOrderByWithRelationInputSchema ]).optional(),
  cursor: CouponWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: CouponScalarFieldEnumSchema.array().optional(),
}).strict()

export const CouponFindManyArgsSchema: z.ZodType<Prisma.CouponFindManyArgs> = z.object({
  select: CouponSelectSchema.optional(),
  include: CouponIncludeSchema.optional(),
  where: CouponWhereInputSchema.optional(),
  orderBy: z.union([ CouponOrderByWithRelationInputSchema.array(),CouponOrderByWithRelationInputSchema ]).optional(),
  cursor: CouponWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: CouponScalarFieldEnumSchema.array().optional(),
}).strict()

export const CouponAggregateArgsSchema: z.ZodType<Prisma.CouponAggregateArgs> = z.object({
  where: CouponWhereInputSchema.optional(),
  orderBy: z.union([ CouponOrderByWithRelationInputSchema.array(),CouponOrderByWithRelationInputSchema ]).optional(),
  cursor: CouponWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const CouponGroupByArgsSchema: z.ZodType<Prisma.CouponGroupByArgs> = z.object({
  where: CouponWhereInputSchema.optional(),
  orderBy: z.union([ CouponOrderByWithAggregationInputSchema.array(),CouponOrderByWithAggregationInputSchema ]).optional(),
  by: CouponScalarFieldEnumSchema.array(),
  having: CouponScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const CouponFindUniqueArgsSchema: z.ZodType<Prisma.CouponFindUniqueArgs> = z.object({
  select: CouponSelectSchema.optional(),
  include: CouponIncludeSchema.optional(),
  where: CouponWhereUniqueInputSchema,
}).strict()

export const CouponFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.CouponFindUniqueOrThrowArgs> = z.object({
  select: CouponSelectSchema.optional(),
  include: CouponIncludeSchema.optional(),
  where: CouponWhereUniqueInputSchema,
}).strict()

export const CategoryFindFirstArgsSchema: z.ZodType<Prisma.CategoryFindFirstArgs> = z.object({
  select: CategorySelectSchema.optional(),
  include: CategoryIncludeSchema.optional(),
  where: CategoryWhereInputSchema.optional(),
  orderBy: z.union([ CategoryOrderByWithRelationInputSchema.array(),CategoryOrderByWithRelationInputSchema ]).optional(),
  cursor: CategoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: CategoryScalarFieldEnumSchema.array().optional(),
}).strict()

export const CategoryFindFirstOrThrowArgsSchema: z.ZodType<Prisma.CategoryFindFirstOrThrowArgs> = z.object({
  select: CategorySelectSchema.optional(),
  include: CategoryIncludeSchema.optional(),
  where: CategoryWhereInputSchema.optional(),
  orderBy: z.union([ CategoryOrderByWithRelationInputSchema.array(),CategoryOrderByWithRelationInputSchema ]).optional(),
  cursor: CategoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: CategoryScalarFieldEnumSchema.array().optional(),
}).strict()

export const CategoryFindManyArgsSchema: z.ZodType<Prisma.CategoryFindManyArgs> = z.object({
  select: CategorySelectSchema.optional(),
  include: CategoryIncludeSchema.optional(),
  where: CategoryWhereInputSchema.optional(),
  orderBy: z.union([ CategoryOrderByWithRelationInputSchema.array(),CategoryOrderByWithRelationInputSchema ]).optional(),
  cursor: CategoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: CategoryScalarFieldEnumSchema.array().optional(),
}).strict()

export const CategoryAggregateArgsSchema: z.ZodType<Prisma.CategoryAggregateArgs> = z.object({
  where: CategoryWhereInputSchema.optional(),
  orderBy: z.union([ CategoryOrderByWithRelationInputSchema.array(),CategoryOrderByWithRelationInputSchema ]).optional(),
  cursor: CategoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const CategoryGroupByArgsSchema: z.ZodType<Prisma.CategoryGroupByArgs> = z.object({
  where: CategoryWhereInputSchema.optional(),
  orderBy: z.union([ CategoryOrderByWithAggregationInputSchema.array(),CategoryOrderByWithAggregationInputSchema ]).optional(),
  by: CategoryScalarFieldEnumSchema.array(),
  having: CategoryScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const CategoryFindUniqueArgsSchema: z.ZodType<Prisma.CategoryFindUniqueArgs> = z.object({
  select: CategorySelectSchema.optional(),
  include: CategoryIncludeSchema.optional(),
  where: CategoryWhereUniqueInputSchema,
}).strict()

export const CategoryFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.CategoryFindUniqueOrThrowArgs> = z.object({
  select: CategorySelectSchema.optional(),
  include: CategoryIncludeSchema.optional(),
  where: CategoryWhereUniqueInputSchema,
}).strict()

export const BusinessCreateArgsSchema: z.ZodType<Prisma.BusinessCreateArgs> = z.object({
  select: BusinessSelectSchema.optional(),
  include: BusinessIncludeSchema.optional(),
  data: z.union([ BusinessCreateInputSchema,BusinessUncheckedCreateInputSchema ]),
}).strict()

export const BusinessUpsertArgsSchema: z.ZodType<Prisma.BusinessUpsertArgs> = z.object({
  select: BusinessSelectSchema.optional(),
  include: BusinessIncludeSchema.optional(),
  where: BusinessWhereUniqueInputSchema,
  create: z.union([ BusinessCreateInputSchema,BusinessUncheckedCreateInputSchema ]),
  update: z.union([ BusinessUpdateInputSchema,BusinessUncheckedUpdateInputSchema ]),
}).strict()

export const BusinessCreateManyArgsSchema: z.ZodType<Prisma.BusinessCreateManyArgs> = z.object({
  data: z.union([ BusinessCreateManyInputSchema,BusinessCreateManyInputSchema.array() ]),
}).strict()

export const BusinessDeleteArgsSchema: z.ZodType<Prisma.BusinessDeleteArgs> = z.object({
  select: BusinessSelectSchema.optional(),
  include: BusinessIncludeSchema.optional(),
  where: BusinessWhereUniqueInputSchema,
}).strict()

export const BusinessUpdateArgsSchema: z.ZodType<Prisma.BusinessUpdateArgs> = z.object({
  select: BusinessSelectSchema.optional(),
  include: BusinessIncludeSchema.optional(),
  data: z.union([ BusinessUpdateInputSchema,BusinessUncheckedUpdateInputSchema ]),
  where: BusinessWhereUniqueInputSchema,
}).strict()

export const BusinessUpdateManyArgsSchema: z.ZodType<Prisma.BusinessUpdateManyArgs> = z.object({
  data: z.union([ BusinessUpdateManyMutationInputSchema,BusinessUncheckedUpdateManyInputSchema ]),
  where: BusinessWhereInputSchema.optional(),
}).strict()

export const BusinessDeleteManyArgsSchema: z.ZodType<Prisma.BusinessDeleteManyArgs> = z.object({
  where: BusinessWhereInputSchema.optional(),
}).strict()

export const WishListCreateArgsSchema: z.ZodType<Prisma.WishListCreateArgs> = z.object({
  select: WishListSelectSchema.optional(),
  include: WishListIncludeSchema.optional(),
  data: z.union([ WishListCreateInputSchema,WishListUncheckedCreateInputSchema ]),
}).strict()

export const WishListUpsertArgsSchema: z.ZodType<Prisma.WishListUpsertArgs> = z.object({
  select: WishListSelectSchema.optional(),
  include: WishListIncludeSchema.optional(),
  where: WishListWhereUniqueInputSchema,
  create: z.union([ WishListCreateInputSchema,WishListUncheckedCreateInputSchema ]),
  update: z.union([ WishListUpdateInputSchema,WishListUncheckedUpdateInputSchema ]),
}).strict()

export const WishListCreateManyArgsSchema: z.ZodType<Prisma.WishListCreateManyArgs> = z.object({
  data: z.union([ WishListCreateManyInputSchema,WishListCreateManyInputSchema.array() ]),
}).strict()

export const WishListDeleteArgsSchema: z.ZodType<Prisma.WishListDeleteArgs> = z.object({
  select: WishListSelectSchema.optional(),
  include: WishListIncludeSchema.optional(),
  where: WishListWhereUniqueInputSchema,
}).strict()

export const WishListUpdateArgsSchema: z.ZodType<Prisma.WishListUpdateArgs> = z.object({
  select: WishListSelectSchema.optional(),
  include: WishListIncludeSchema.optional(),
  data: z.union([ WishListUpdateInputSchema,WishListUncheckedUpdateInputSchema ]),
  where: WishListWhereUniqueInputSchema,
}).strict()

export const WishListUpdateManyArgsSchema: z.ZodType<Prisma.WishListUpdateManyArgs> = z.object({
  data: z.union([ WishListUpdateManyMutationInputSchema,WishListUncheckedUpdateManyInputSchema ]),
  where: WishListWhereInputSchema.optional(),
}).strict()

export const WishListDeleteManyArgsSchema: z.ZodType<Prisma.WishListDeleteManyArgs> = z.object({
  where: WishListWhereInputSchema.optional(),
}).strict()

export const CompanyCreateArgsSchema: z.ZodType<Prisma.CompanyCreateArgs> = z.object({
  select: CompanySelectSchema.optional(),
  include: CompanyIncludeSchema.optional(),
  data: z.union([ CompanyCreateInputSchema,CompanyUncheckedCreateInputSchema ]),
}).strict()

export const CompanyUpsertArgsSchema: z.ZodType<Prisma.CompanyUpsertArgs> = z.object({
  select: CompanySelectSchema.optional(),
  include: CompanyIncludeSchema.optional(),
  where: CompanyWhereUniqueInputSchema,
  create: z.union([ CompanyCreateInputSchema,CompanyUncheckedCreateInputSchema ]),
  update: z.union([ CompanyUpdateInputSchema,CompanyUncheckedUpdateInputSchema ]),
}).strict()

export const CompanyCreateManyArgsSchema: z.ZodType<Prisma.CompanyCreateManyArgs> = z.object({
  data: z.union([ CompanyCreateManyInputSchema,CompanyCreateManyInputSchema.array() ]),
}).strict()

export const CompanyDeleteArgsSchema: z.ZodType<Prisma.CompanyDeleteArgs> = z.object({
  select: CompanySelectSchema.optional(),
  include: CompanyIncludeSchema.optional(),
  where: CompanyWhereUniqueInputSchema,
}).strict()

export const CompanyUpdateArgsSchema: z.ZodType<Prisma.CompanyUpdateArgs> = z.object({
  select: CompanySelectSchema.optional(),
  include: CompanyIncludeSchema.optional(),
  data: z.union([ CompanyUpdateInputSchema,CompanyUncheckedUpdateInputSchema ]),
  where: CompanyWhereUniqueInputSchema,
}).strict()

export const CompanyUpdateManyArgsSchema: z.ZodType<Prisma.CompanyUpdateManyArgs> = z.object({
  data: z.union([ CompanyUpdateManyMutationInputSchema,CompanyUncheckedUpdateManyInputSchema ]),
  where: CompanyWhereInputSchema.optional(),
}).strict()

export const CompanyDeleteManyArgsSchema: z.ZodType<Prisma.CompanyDeleteManyArgs> = z.object({
  where: CompanyWhereInputSchema.optional(),
}).strict()

export const ProductCreateArgsSchema: z.ZodType<Prisma.ProductCreateArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  data: z.union([ ProductCreateInputSchema,ProductUncheckedCreateInputSchema ]),
}).strict()

export const ProductUpsertArgsSchema: z.ZodType<Prisma.ProductUpsertArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  where: ProductWhereUniqueInputSchema,
  create: z.union([ ProductCreateInputSchema,ProductUncheckedCreateInputSchema ]),
  update: z.union([ ProductUpdateInputSchema,ProductUncheckedUpdateInputSchema ]),
}).strict()

export const ProductCreateManyArgsSchema: z.ZodType<Prisma.ProductCreateManyArgs> = z.object({
  data: z.union([ ProductCreateManyInputSchema,ProductCreateManyInputSchema.array() ]),
}).strict()

export const ProductDeleteArgsSchema: z.ZodType<Prisma.ProductDeleteArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  where: ProductWhereUniqueInputSchema,
}).strict()

export const ProductUpdateArgsSchema: z.ZodType<Prisma.ProductUpdateArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  data: z.union([ ProductUpdateInputSchema,ProductUncheckedUpdateInputSchema ]),
  where: ProductWhereUniqueInputSchema,
}).strict()

export const ProductUpdateManyArgsSchema: z.ZodType<Prisma.ProductUpdateManyArgs> = z.object({
  data: z.union([ ProductUpdateManyMutationInputSchema,ProductUncheckedUpdateManyInputSchema ]),
  where: ProductWhereInputSchema.optional(),
}).strict()

export const ProductDeleteManyArgsSchema: z.ZodType<Prisma.ProductDeleteManyArgs> = z.object({
  where: ProductWhereInputSchema.optional(),
}).strict()

export const WorkerCreateArgsSchema: z.ZodType<Prisma.WorkerCreateArgs> = z.object({
  select: WorkerSelectSchema.optional(),
  include: WorkerIncludeSchema.optional(),
  data: z.union([ WorkerCreateInputSchema,WorkerUncheckedCreateInputSchema ]),
}).strict()

export const WorkerUpsertArgsSchema: z.ZodType<Prisma.WorkerUpsertArgs> = z.object({
  select: WorkerSelectSchema.optional(),
  include: WorkerIncludeSchema.optional(),
  where: WorkerWhereUniqueInputSchema,
  create: z.union([ WorkerCreateInputSchema,WorkerUncheckedCreateInputSchema ]),
  update: z.union([ WorkerUpdateInputSchema,WorkerUncheckedUpdateInputSchema ]),
}).strict()

export const WorkerCreateManyArgsSchema: z.ZodType<Prisma.WorkerCreateManyArgs> = z.object({
  data: z.union([ WorkerCreateManyInputSchema,WorkerCreateManyInputSchema.array() ]),
}).strict()

export const WorkerDeleteArgsSchema: z.ZodType<Prisma.WorkerDeleteArgs> = z.object({
  select: WorkerSelectSchema.optional(),
  include: WorkerIncludeSchema.optional(),
  where: WorkerWhereUniqueInputSchema,
}).strict()

export const WorkerUpdateArgsSchema: z.ZodType<Prisma.WorkerUpdateArgs> = z.object({
  select: WorkerSelectSchema.optional(),
  include: WorkerIncludeSchema.optional(),
  data: z.union([ WorkerUpdateInputSchema,WorkerUncheckedUpdateInputSchema ]),
  where: WorkerWhereUniqueInputSchema,
}).strict()

export const WorkerUpdateManyArgsSchema: z.ZodType<Prisma.WorkerUpdateManyArgs> = z.object({
  data: z.union([ WorkerUpdateManyMutationInputSchema,WorkerUncheckedUpdateManyInputSchema ]),
  where: WorkerWhereInputSchema.optional(),
}).strict()

export const WorkerDeleteManyArgsSchema: z.ZodType<Prisma.WorkerDeleteManyArgs> = z.object({
  where: WorkerWhereInputSchema.optional(),
}).strict()

export const OrderCreateArgsSchema: z.ZodType<Prisma.OrderCreateArgs> = z.object({
  select: OrderSelectSchema.optional(),
  include: OrderIncludeSchema.optional(),
  data: z.union([ OrderCreateInputSchema,OrderUncheckedCreateInputSchema ]),
}).strict()

export const OrderUpsertArgsSchema: z.ZodType<Prisma.OrderUpsertArgs> = z.object({
  select: OrderSelectSchema.optional(),
  include: OrderIncludeSchema.optional(),
  where: OrderWhereUniqueInputSchema,
  create: z.union([ OrderCreateInputSchema,OrderUncheckedCreateInputSchema ]),
  update: z.union([ OrderUpdateInputSchema,OrderUncheckedUpdateInputSchema ]),
}).strict()

export const OrderCreateManyArgsSchema: z.ZodType<Prisma.OrderCreateManyArgs> = z.object({
  data: z.union([ OrderCreateManyInputSchema,OrderCreateManyInputSchema.array() ]),
}).strict()

export const OrderDeleteArgsSchema: z.ZodType<Prisma.OrderDeleteArgs> = z.object({
  select: OrderSelectSchema.optional(),
  include: OrderIncludeSchema.optional(),
  where: OrderWhereUniqueInputSchema,
}).strict()

export const OrderUpdateArgsSchema: z.ZodType<Prisma.OrderUpdateArgs> = z.object({
  select: OrderSelectSchema.optional(),
  include: OrderIncludeSchema.optional(),
  data: z.union([ OrderUpdateInputSchema,OrderUncheckedUpdateInputSchema ]),
  where: OrderWhereUniqueInputSchema,
}).strict()

export const OrderUpdateManyArgsSchema: z.ZodType<Prisma.OrderUpdateManyArgs> = z.object({
  data: z.union([ OrderUpdateManyMutationInputSchema,OrderUncheckedUpdateManyInputSchema ]),
  where: OrderWhereInputSchema.optional(),
}).strict()

export const OrderDeleteManyArgsSchema: z.ZodType<Prisma.OrderDeleteManyArgs> = z.object({
  where: OrderWhereInputSchema.optional(),
}).strict()

export const CouponCreateArgsSchema: z.ZodType<Prisma.CouponCreateArgs> = z.object({
  select: CouponSelectSchema.optional(),
  include: CouponIncludeSchema.optional(),
  data: z.union([ CouponCreateInputSchema,CouponUncheckedCreateInputSchema ]),
}).strict()

export const CouponUpsertArgsSchema: z.ZodType<Prisma.CouponUpsertArgs> = z.object({
  select: CouponSelectSchema.optional(),
  include: CouponIncludeSchema.optional(),
  where: CouponWhereUniqueInputSchema,
  create: z.union([ CouponCreateInputSchema,CouponUncheckedCreateInputSchema ]),
  update: z.union([ CouponUpdateInputSchema,CouponUncheckedUpdateInputSchema ]),
}).strict()

export const CouponCreateManyArgsSchema: z.ZodType<Prisma.CouponCreateManyArgs> = z.object({
  data: z.union([ CouponCreateManyInputSchema,CouponCreateManyInputSchema.array() ]),
}).strict()

export const CouponDeleteArgsSchema: z.ZodType<Prisma.CouponDeleteArgs> = z.object({
  select: CouponSelectSchema.optional(),
  include: CouponIncludeSchema.optional(),
  where: CouponWhereUniqueInputSchema,
}).strict()

export const CouponUpdateArgsSchema: z.ZodType<Prisma.CouponUpdateArgs> = z.object({
  select: CouponSelectSchema.optional(),
  include: CouponIncludeSchema.optional(),
  data: z.union([ CouponUpdateInputSchema,CouponUncheckedUpdateInputSchema ]),
  where: CouponWhereUniqueInputSchema,
}).strict()

export const CouponUpdateManyArgsSchema: z.ZodType<Prisma.CouponUpdateManyArgs> = z.object({
  data: z.union([ CouponUpdateManyMutationInputSchema,CouponUncheckedUpdateManyInputSchema ]),
  where: CouponWhereInputSchema.optional(),
}).strict()

export const CouponDeleteManyArgsSchema: z.ZodType<Prisma.CouponDeleteManyArgs> = z.object({
  where: CouponWhereInputSchema.optional(),
}).strict()

export const CategoryCreateArgsSchema: z.ZodType<Prisma.CategoryCreateArgs> = z.object({
  select: CategorySelectSchema.optional(),
  include: CategoryIncludeSchema.optional(),
  data: z.union([ CategoryCreateInputSchema,CategoryUncheckedCreateInputSchema ]),
}).strict()

export const CategoryUpsertArgsSchema: z.ZodType<Prisma.CategoryUpsertArgs> = z.object({
  select: CategorySelectSchema.optional(),
  include: CategoryIncludeSchema.optional(),
  where: CategoryWhereUniqueInputSchema,
  create: z.union([ CategoryCreateInputSchema,CategoryUncheckedCreateInputSchema ]),
  update: z.union([ CategoryUpdateInputSchema,CategoryUncheckedUpdateInputSchema ]),
}).strict()

export const CategoryCreateManyArgsSchema: z.ZodType<Prisma.CategoryCreateManyArgs> = z.object({
  data: z.union([ CategoryCreateManyInputSchema,CategoryCreateManyInputSchema.array() ]),
}).strict()

export const CategoryDeleteArgsSchema: z.ZodType<Prisma.CategoryDeleteArgs> = z.object({
  select: CategorySelectSchema.optional(),
  include: CategoryIncludeSchema.optional(),
  where: CategoryWhereUniqueInputSchema,
}).strict()

export const CategoryUpdateArgsSchema: z.ZodType<Prisma.CategoryUpdateArgs> = z.object({
  select: CategorySelectSchema.optional(),
  include: CategoryIncludeSchema.optional(),
  data: z.union([ CategoryUpdateInputSchema,CategoryUncheckedUpdateInputSchema ]),
  where: CategoryWhereUniqueInputSchema,
}).strict()

export const CategoryUpdateManyArgsSchema: z.ZodType<Prisma.CategoryUpdateManyArgs> = z.object({
  data: z.union([ CategoryUpdateManyMutationInputSchema,CategoryUncheckedUpdateManyInputSchema ]),
  where: CategoryWhereInputSchema.optional(),
}).strict()

export const CategoryDeleteManyArgsSchema: z.ZodType<Prisma.CategoryDeleteManyArgs> = z.object({
  where: CategoryWhereInputSchema.optional(),
}).strict()