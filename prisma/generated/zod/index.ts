import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const BusinessScalarFieldEnumSchema = z.enum(['id','name','password','phoneNumber','state','location','neighborhood','type','couponIds']);

export const ComponyScalarFieldEnumSchema = z.enum(['id','name','type']);

export const CouponScalarFieldEnumSchema = z.enum(['id','code','amount','isValid','businessIds']);

export const OrderScalarFieldEnumSchema = z.enum(['id','subtotal','delivery','discount','total','couponId','componyId']);

export const ProductScalarFieldEnumSchema = z.enum(['id','name','dec','category','company','image','likes','veiws','orders','price','oldPrice','available','hot','freeShipping']);

export const QueryModeSchema = z.enum(['default','insensitive']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const WorkerScalarFieldEnumSchema = z.enum(['id','name','password','role','componyId']);

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
  couponIds: z.string().array(),
})

export type Business = z.infer<typeof BusinessSchema>

/////////////////////////////////////////
// COMPONY SCHEMA
/////////////////////////////////////////

export const ComponySchema = z.object({
  type: BusinessTypeSchema,
  id: z.string(),
  name: z.string(),
})

export type Compony = z.infer<typeof ComponySchema>

/////////////////////////////////////////
// WORKER SCHEMA
/////////////////////////////////////////

export const WorkerSchema = z.object({
  role: WorkerRoleSchema,
  id: z.string(),
  name: z.string(),
  password: z.string(),
  componyId: z.string(),
})

export type Worker = z.infer<typeof WorkerSchema>

/////////////////////////////////////////
// PRODUCT SCHEMA
/////////////////////////////////////////

export const ProductSchema = z.object({
  id: z.string(),
  name: z.string(),
  dec: z.string(),
  category: z.string(),
  company: z.string(),
  image: z.string().nullable(),
  likes: z.string().array(),
  veiws: z.string().array(),
  orders: z.string().array(),
  price: z.number().int(),
  oldPrice: z.number().int().nullable(),
  available: z.boolean(),
  hot: z.boolean(),
  freeShipping: z.boolean(),
})

export type Product = z.infer<typeof ProductSchema>

/////////////////////////////////////////
// ORDER SCHEMA
/////////////////////////////////////////

export const OrderSchema = z.object({
  id: z.string(),
  subtotal: z.number(),
  delivery: z.number(),
  discount: z.number(),
  total: z.number(),
  couponId: z.string().nullable(),
  componyId: z.string(),
})

export type Order = z.infer<typeof OrderSchema>

/////////////////////////////////////////
// COUPON SCHEMA
/////////////////////////////////////////

export const CouponSchema = z.object({
  id: z.string(),
  code: z.string(),
  amount: z.number(),
  isValid: z.boolean(),
  businessIds: z.string().array(),
})

export type Coupon = z.infer<typeof CouponSchema>

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
  images: z.string().array(),
  size: z.string(),
  color: z.string(),
  price: z.number().int(),
  freeShipping: z.boolean(),
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
  coupons: z.boolean().optional(),
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
  couponIds: z.boolean().optional(),
  coupons: z.union([z.boolean(),z.lazy(() => CouponArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => BusinessCountOutputTypeArgsSchema)]).optional(),
}).strict()

// COMPONY
//------------------------------------------------------

export const ComponyIncludeSchema: z.ZodType<Prisma.ComponyInclude> = z.object({
}).strict()

export const ComponyArgsSchema: z.ZodType<Prisma.ComponyArgs> = z.object({
  select: z.lazy(() => ComponySelectSchema).optional(),
  include: z.lazy(() => ComponyIncludeSchema).optional(),
}).strict();

export const ComponyCountOutputTypeArgsSchema: z.ZodType<Prisma.ComponyCountOutputTypeArgs> = z.object({
  select: z.lazy(() => ComponyCountOutputTypeSelectSchema).nullish(),
}).strict();

export const ComponyCountOutputTypeSelectSchema: z.ZodType<Prisma.ComponyCountOutputTypeSelect> = z.object({
  orders: z.boolean().optional(),
  workers: z.boolean().optional(),
}).strict();

export const ComponySelectSchema: z.ZodType<Prisma.ComponySelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  type: z.boolean().optional(),
  orders: z.union([z.boolean(),z.lazy(() => OrderArgsSchema)]).optional(),
  workers: z.union([z.boolean(),z.lazy(() => WorkerArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ComponyCountOutputTypeArgsSchema)]).optional(),
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
  password: z.boolean().optional(),
  role: z.boolean().optional(),
  componyId: z.boolean().optional(),
  company: z.union([z.boolean(),z.lazy(() => ComponyArgsSchema)]).optional(),
}).strict()

// PRODUCT
//------------------------------------------------------

export const ProductArgsSchema: z.ZodType<Prisma.ProductArgs> = z.object({
  select: z.lazy(() => ProductSelectSchema).optional(),
}).strict();

export const ProductSelectSchema: z.ZodType<Prisma.ProductSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  dec: z.boolean().optional(),
  category: z.boolean().optional(),
  company: z.boolean().optional(),
  image: z.boolean().optional(),
  likes: z.boolean().optional(),
  veiws: z.boolean().optional(),
  orders: z.boolean().optional(),
  price: z.boolean().optional(),
  oldPrice: z.boolean().optional(),
  available: z.boolean().optional(),
  hot: z.boolean().optional(),
  freeShipping: z.boolean().optional(),
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
  items: z.union([z.boolean(),z.lazy(() => OrderItemArgsSchema)]).optional(),
  subtotal: z.boolean().optional(),
  delivery: z.boolean().optional(),
  discount: z.boolean().optional(),
  total: z.boolean().optional(),
  couponId: z.boolean().optional(),
  componyId: z.boolean().optional(),
  coupon: z.union([z.boolean(),z.lazy(() => CouponArgsSchema)]).optional(),
  compony: z.union([z.boolean(),z.lazy(() => ComponyArgsSchema)]).optional(),
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
  businesses: z.boolean().optional(),
}).strict();

export const CouponSelectSchema: z.ZodType<Prisma.CouponSelect> = z.object({
  id: z.boolean().optional(),
  code: z.boolean().optional(),
  amount: z.boolean().optional(),
  isValid: z.boolean().optional(),
  businessIds: z.boolean().optional(),
  orders: z.union([z.boolean(),z.lazy(() => OrderArgsSchema)]).optional(),
  businesses: z.union([z.boolean(),z.lazy(() => BusinessArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CouponCountOutputTypeArgsSchema)]).optional(),
}).strict()

// ORDER ITEM
//------------------------------------------------------

export const OrderItemArgsSchema: z.ZodType<Prisma.OrderItemArgs> = z.object({
  select: z.lazy(() => OrderItemSelectSchema).optional(),
}).strict();

export const OrderItemSelectSchema: z.ZodType<Prisma.OrderItemSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  images: z.boolean().optional(),
  size: z.boolean().optional(),
  color: z.boolean().optional(),
  price: z.boolean().optional(),
  freeShipping: z.boolean().optional(),
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
  couponIds: z.lazy(() => StringNullableListFilterSchema).optional(),
  coupons: z.lazy(() => CouponListRelationFilterSchema).optional()
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
  couponIds: z.lazy(() => SortOrderSchema).optional(),
  coupons: z.lazy(() => CouponOrderByRelationAggregateInputSchema).optional()
}).strict();

export const BusinessWhereUniqueInputSchema: z.ZodType<Prisma.BusinessWhereUniqueInput> = z.object({
  id: z.string().optional()
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
  couponIds: z.lazy(() => SortOrderSchema).optional(),
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
  couponIds: z.lazy(() => StringNullableListFilterSchema).optional()
}).strict();

export const ComponyWhereInputSchema: z.ZodType<Prisma.ComponyWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ComponyWhereInputSchema),z.lazy(() => ComponyWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ComponyWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ComponyWhereInputSchema),z.lazy(() => ComponyWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => EnumBusinessTypeFilterSchema),z.lazy(() => BusinessTypeSchema) ]).optional(),
  orders: z.lazy(() => OrderListRelationFilterSchema).optional(),
  workers: z.lazy(() => WorkerListRelationFilterSchema).optional()
}).strict();

export const ComponyOrderByWithRelationInputSchema: z.ZodType<Prisma.ComponyOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  orders: z.lazy(() => OrderOrderByRelationAggregateInputSchema).optional(),
  workers: z.lazy(() => WorkerOrderByRelationAggregateInputSchema).optional()
}).strict();

export const ComponyWhereUniqueInputSchema: z.ZodType<Prisma.ComponyWhereUniqueInput> = z.object({
  id: z.string().optional()
}).strict();

export const ComponyOrderByWithAggregationInputSchema: z.ZodType<Prisma.ComponyOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ComponyCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ComponyMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ComponyMinOrderByAggregateInputSchema).optional()
}).strict();

export const ComponyScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ComponyScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ComponyScalarWhereWithAggregatesInputSchema),z.lazy(() => ComponyScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ComponyScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ComponyScalarWhereWithAggregatesInputSchema),z.lazy(() => ComponyScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => EnumBusinessTypeWithAggregatesFilterSchema),z.lazy(() => BusinessTypeSchema) ]).optional(),
}).strict();

export const WorkerWhereInputSchema: z.ZodType<Prisma.WorkerWhereInput> = z.object({
  AND: z.union([ z.lazy(() => WorkerWhereInputSchema),z.lazy(() => WorkerWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => WorkerWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => WorkerWhereInputSchema),z.lazy(() => WorkerWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  password: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  role: z.union([ z.lazy(() => EnumWorkerRoleFilterSchema),z.lazy(() => WorkerRoleSchema) ]).optional(),
  componyId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  company: z.union([ z.lazy(() => ComponyRelationFilterSchema),z.lazy(() => ComponyWhereInputSchema) ]).optional(),
}).strict();

export const WorkerOrderByWithRelationInputSchema: z.ZodType<Prisma.WorkerOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  componyId: z.lazy(() => SortOrderSchema).optional(),
  company: z.lazy(() => ComponyOrderByWithRelationInputSchema).optional()
}).strict();

export const WorkerWhereUniqueInputSchema: z.ZodType<Prisma.WorkerWhereUniqueInput> = z.object({
  id: z.string().optional()
}).strict();

export const WorkerOrderByWithAggregationInputSchema: z.ZodType<Prisma.WorkerOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  componyId: z.lazy(() => SortOrderSchema).optional(),
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
  password: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  role: z.union([ z.lazy(() => EnumWorkerRoleWithAggregatesFilterSchema),z.lazy(() => WorkerRoleSchema) ]).optional(),
  componyId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const ProductWhereInputSchema: z.ZodType<Prisma.ProductWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ProductWhereInputSchema),z.lazy(() => ProductWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProductWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProductWhereInputSchema),z.lazy(() => ProductWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  dec: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  category: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  company: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  image: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  likes: z.lazy(() => StringNullableListFilterSchema).optional(),
  veiws: z.lazy(() => StringNullableListFilterSchema).optional(),
  orders: z.lazy(() => StringNullableListFilterSchema).optional(),
  price: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  oldPrice: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  available: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  hot: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  freeShipping: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
}).strict();

export const ProductOrderByWithRelationInputSchema: z.ZodType<Prisma.ProductOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  dec: z.lazy(() => SortOrderSchema).optional(),
  category: z.lazy(() => SortOrderSchema).optional(),
  company: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  likes: z.lazy(() => SortOrderSchema).optional(),
  veiws: z.lazy(() => SortOrderSchema).optional(),
  orders: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  oldPrice: z.lazy(() => SortOrderSchema).optional(),
  available: z.lazy(() => SortOrderSchema).optional(),
  hot: z.lazy(() => SortOrderSchema).optional(),
  freeShipping: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProductWhereUniqueInputSchema: z.ZodType<Prisma.ProductWhereUniqueInput> = z.object({
  id: z.string().optional()
}).strict();

export const ProductOrderByWithAggregationInputSchema: z.ZodType<Prisma.ProductOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  dec: z.lazy(() => SortOrderSchema).optional(),
  category: z.lazy(() => SortOrderSchema).optional(),
  company: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  likes: z.lazy(() => SortOrderSchema).optional(),
  veiws: z.lazy(() => SortOrderSchema).optional(),
  orders: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  oldPrice: z.lazy(() => SortOrderSchema).optional(),
  available: z.lazy(() => SortOrderSchema).optional(),
  hot: z.lazy(() => SortOrderSchema).optional(),
  freeShipping: z.lazy(() => SortOrderSchema).optional(),
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
  dec: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  category: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  company: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  image: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  likes: z.lazy(() => StringNullableListFilterSchema).optional(),
  veiws: z.lazy(() => StringNullableListFilterSchema).optional(),
  orders: z.lazy(() => StringNullableListFilterSchema).optional(),
  price: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  oldPrice: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  available: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  hot: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  freeShipping: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
}).strict();

export const OrderWhereInputSchema: z.ZodType<Prisma.OrderWhereInput> = z.object({
  AND: z.union([ z.lazy(() => OrderWhereInputSchema),z.lazy(() => OrderWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => OrderWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OrderWhereInputSchema),z.lazy(() => OrderWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  items: z.union([ z.lazy(() => OrderItemCompositeListFilterSchema),z.lazy(() => OrderItemObjectEqualityInputSchema).array(),z.lazy(() => OrderItemObjectEqualityInputSchema) ]).optional(),
  subtotal: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  delivery: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  discount: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  total: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  couponId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  componyId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  coupon: z.union([ z.lazy(() => CouponRelationFilterSchema),z.lazy(() => CouponWhereInputSchema) ]).optional().nullable(),
  compony: z.union([ z.lazy(() => ComponyRelationFilterSchema),z.lazy(() => ComponyWhereInputSchema) ]).optional(),
}).strict();

export const OrderOrderByWithRelationInputSchema: z.ZodType<Prisma.OrderOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  items: z.lazy(() => OrderItemOrderByCompositeAggregateInputSchema).optional(),
  subtotal: z.lazy(() => SortOrderSchema).optional(),
  delivery: z.lazy(() => SortOrderSchema).optional(),
  discount: z.lazy(() => SortOrderSchema).optional(),
  total: z.lazy(() => SortOrderSchema).optional(),
  couponId: z.lazy(() => SortOrderSchema).optional(),
  componyId: z.lazy(() => SortOrderSchema).optional(),
  coupon: z.lazy(() => CouponOrderByWithRelationInputSchema).optional(),
  compony: z.lazy(() => ComponyOrderByWithRelationInputSchema).optional()
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
  couponId: z.lazy(() => SortOrderSchema).optional(),
  componyId: z.lazy(() => SortOrderSchema).optional(),
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
  couponId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  componyId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const CouponWhereInputSchema: z.ZodType<Prisma.CouponWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CouponWhereInputSchema),z.lazy(() => CouponWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CouponWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CouponWhereInputSchema),z.lazy(() => CouponWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  code: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  amount: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  isValid: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  businessIds: z.lazy(() => StringNullableListFilterSchema).optional(),
  orders: z.lazy(() => OrderListRelationFilterSchema).optional(),
  businesses: z.lazy(() => BusinessListRelationFilterSchema).optional()
}).strict();

export const CouponOrderByWithRelationInputSchema: z.ZodType<Prisma.CouponOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  code: z.lazy(() => SortOrderSchema).optional(),
  amount: z.lazy(() => SortOrderSchema).optional(),
  isValid: z.lazy(() => SortOrderSchema).optional(),
  businessIds: z.lazy(() => SortOrderSchema).optional(),
  orders: z.lazy(() => OrderOrderByRelationAggregateInputSchema).optional(),
  businesses: z.lazy(() => BusinessOrderByRelationAggregateInputSchema).optional()
}).strict();

export const CouponWhereUniqueInputSchema: z.ZodType<Prisma.CouponWhereUniqueInput> = z.object({
  id: z.string().optional()
}).strict();

export const CouponOrderByWithAggregationInputSchema: z.ZodType<Prisma.CouponOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  code: z.lazy(() => SortOrderSchema).optional(),
  amount: z.lazy(() => SortOrderSchema).optional(),
  isValid: z.lazy(() => SortOrderSchema).optional(),
  businessIds: z.lazy(() => SortOrderSchema).optional(),
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
  code: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  amount: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  isValid: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  businessIds: z.lazy(() => StringNullableListFilterSchema).optional()
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
  coupons: z.lazy(() => CouponCreateNestedManyWithoutBusinessesInputSchema).optional()
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
  couponIds: z.union([ z.lazy(() => BusinessCreatecouponIdsInputSchema),z.string().array() ]).optional(),
  coupons: z.lazy(() => CouponUncheckedCreateNestedManyWithoutBusinessesInputSchema).optional()
}).strict();

export const BusinessUpdateInputSchema: z.ZodType<Prisma.BusinessUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phoneNumber: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  state: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  location: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  neighborhood: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => BusinessTypeSchema),z.lazy(() => EnumBusinessTypeFieldUpdateOperationsInputSchema) ]).optional(),
  coupons: z.lazy(() => CouponUpdateManyWithoutBusinessesNestedInputSchema).optional()
}).strict();

export const BusinessUncheckedUpdateInputSchema: z.ZodType<Prisma.BusinessUncheckedUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phoneNumber: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  state: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  location: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  neighborhood: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => BusinessTypeSchema),z.lazy(() => EnumBusinessTypeFieldUpdateOperationsInputSchema) ]).optional(),
  couponIds: z.union([ z.lazy(() => BusinessUpdatecouponIdsInputSchema),z.string().array() ]).optional(),
  coupons: z.lazy(() => CouponUncheckedUpdateManyWithoutBusinessesNestedInputSchema).optional()
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
  couponIds: z.union([ z.lazy(() => BusinessCreatecouponIdsInputSchema),z.string().array() ]).optional(),
}).strict();

export const BusinessUpdateManyMutationInputSchema: z.ZodType<Prisma.BusinessUpdateManyMutationInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phoneNumber: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  state: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  location: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  neighborhood: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => BusinessTypeSchema),z.lazy(() => EnumBusinessTypeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const BusinessUncheckedUpdateManyInputSchema: z.ZodType<Prisma.BusinessUncheckedUpdateManyInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phoneNumber: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  state: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  location: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  neighborhood: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => BusinessTypeSchema),z.lazy(() => EnumBusinessTypeFieldUpdateOperationsInputSchema) ]).optional(),
  couponIds: z.union([ z.lazy(() => BusinessUpdatecouponIdsInputSchema),z.string().array() ]).optional(),
}).strict();

export const ComponyCreateInputSchema: z.ZodType<Prisma.ComponyCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  type: z.lazy(() => BusinessTypeSchema),
  orders: z.lazy(() => OrderCreateNestedManyWithoutComponyInputSchema).optional(),
  workers: z.lazy(() => WorkerCreateNestedManyWithoutCompanyInputSchema).optional()
}).strict();

export const ComponyUncheckedCreateInputSchema: z.ZodType<Prisma.ComponyUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  type: z.lazy(() => BusinessTypeSchema),
  orders: z.lazy(() => OrderUncheckedCreateNestedManyWithoutComponyInputSchema).optional(),
  workers: z.lazy(() => WorkerUncheckedCreateNestedManyWithoutCompanyInputSchema).optional()
}).strict();

export const ComponyUpdateInputSchema: z.ZodType<Prisma.ComponyUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => BusinessTypeSchema),z.lazy(() => EnumBusinessTypeFieldUpdateOperationsInputSchema) ]).optional(),
  orders: z.lazy(() => OrderUpdateManyWithoutComponyNestedInputSchema).optional(),
  workers: z.lazy(() => WorkerUpdateManyWithoutCompanyNestedInputSchema).optional()
}).strict();

export const ComponyUncheckedUpdateInputSchema: z.ZodType<Prisma.ComponyUncheckedUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => BusinessTypeSchema),z.lazy(() => EnumBusinessTypeFieldUpdateOperationsInputSchema) ]).optional(),
  orders: z.lazy(() => OrderUncheckedUpdateManyWithoutComponyNestedInputSchema).optional(),
  workers: z.lazy(() => WorkerUncheckedUpdateManyWithoutCompanyNestedInputSchema).optional()
}).strict();

export const ComponyCreateManyInputSchema: z.ZodType<Prisma.ComponyCreateManyInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  type: z.lazy(() => BusinessTypeSchema)
}).strict();

export const ComponyUpdateManyMutationInputSchema: z.ZodType<Prisma.ComponyUpdateManyMutationInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => BusinessTypeSchema),z.lazy(() => EnumBusinessTypeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ComponyUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ComponyUncheckedUpdateManyInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => BusinessTypeSchema),z.lazy(() => EnumBusinessTypeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const WorkerCreateInputSchema: z.ZodType<Prisma.WorkerCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  password: z.string(),
  role: z.lazy(() => WorkerRoleSchema),
  company: z.lazy(() => ComponyCreateNestedOneWithoutWorkersInputSchema)
}).strict();

export const WorkerUncheckedCreateInputSchema: z.ZodType<Prisma.WorkerUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  password: z.string(),
  role: z.lazy(() => WorkerRoleSchema),
  componyId: z.string()
}).strict();

export const WorkerUpdateInputSchema: z.ZodType<Prisma.WorkerUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => WorkerRoleSchema),z.lazy(() => EnumWorkerRoleFieldUpdateOperationsInputSchema) ]).optional(),
  company: z.lazy(() => ComponyUpdateOneRequiredWithoutWorkersNestedInputSchema).optional()
}).strict();

export const WorkerUncheckedUpdateInputSchema: z.ZodType<Prisma.WorkerUncheckedUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => WorkerRoleSchema),z.lazy(() => EnumWorkerRoleFieldUpdateOperationsInputSchema) ]).optional(),
  componyId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const WorkerCreateManyInputSchema: z.ZodType<Prisma.WorkerCreateManyInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  password: z.string(),
  role: z.lazy(() => WorkerRoleSchema),
  componyId: z.string()
}).strict();

export const WorkerUpdateManyMutationInputSchema: z.ZodType<Prisma.WorkerUpdateManyMutationInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => WorkerRoleSchema),z.lazy(() => EnumWorkerRoleFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const WorkerUncheckedUpdateManyInputSchema: z.ZodType<Prisma.WorkerUncheckedUpdateManyInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => WorkerRoleSchema),z.lazy(() => EnumWorkerRoleFieldUpdateOperationsInputSchema) ]).optional(),
  componyId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ProductCreateInputSchema: z.ZodType<Prisma.ProductCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  dec: z.string(),
  category: z.string(),
  company: z.string(),
  image: z.string().optional().nullable(),
  likes: z.union([ z.lazy(() => ProductCreatelikesInputSchema),z.string().array() ]).optional(),
  veiws: z.union([ z.lazy(() => ProductCreateveiwsInputSchema),z.string().array() ]).optional(),
  orders: z.union([ z.lazy(() => ProductCreateordersInputSchema),z.string().array() ]).optional(),
  price: z.number().int(),
  oldPrice: z.number().int().optional().nullable(),
  available: z.boolean().optional(),
  hot: z.boolean().optional(),
  freeShipping: z.boolean().optional()
}).strict();

export const ProductUncheckedCreateInputSchema: z.ZodType<Prisma.ProductUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  dec: z.string(),
  category: z.string(),
  company: z.string(),
  image: z.string().optional().nullable(),
  likes: z.union([ z.lazy(() => ProductCreatelikesInputSchema),z.string().array() ]).optional(),
  veiws: z.union([ z.lazy(() => ProductCreateveiwsInputSchema),z.string().array() ]).optional(),
  orders: z.union([ z.lazy(() => ProductCreateordersInputSchema),z.string().array() ]).optional(),
  price: z.number().int(),
  oldPrice: z.number().int().optional().nullable(),
  available: z.boolean().optional(),
  hot: z.boolean().optional(),
  freeShipping: z.boolean().optional()
}).strict();

export const ProductUpdateInputSchema: z.ZodType<Prisma.ProductUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dec: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  category: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  company: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  likes: z.union([ z.lazy(() => ProductUpdatelikesInputSchema),z.string().array() ]).optional(),
  veiws: z.union([ z.lazy(() => ProductUpdateveiwsInputSchema),z.string().array() ]).optional(),
  orders: z.union([ z.lazy(() => ProductUpdateordersInputSchema),z.string().array() ]).optional(),
  price: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  oldPrice: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  available: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  hot: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  freeShipping: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ProductUncheckedUpdateInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dec: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  category: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  company: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  likes: z.union([ z.lazy(() => ProductUpdatelikesInputSchema),z.string().array() ]).optional(),
  veiws: z.union([ z.lazy(() => ProductUpdateveiwsInputSchema),z.string().array() ]).optional(),
  orders: z.union([ z.lazy(() => ProductUpdateordersInputSchema),z.string().array() ]).optional(),
  price: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  oldPrice: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  available: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  hot: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  freeShipping: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ProductCreateManyInputSchema: z.ZodType<Prisma.ProductCreateManyInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  dec: z.string(),
  category: z.string(),
  company: z.string(),
  image: z.string().optional().nullable(),
  likes: z.union([ z.lazy(() => ProductCreatelikesInputSchema),z.string().array() ]).optional(),
  veiws: z.union([ z.lazy(() => ProductCreateveiwsInputSchema),z.string().array() ]).optional(),
  orders: z.union([ z.lazy(() => ProductCreateordersInputSchema),z.string().array() ]).optional(),
  price: z.number().int(),
  oldPrice: z.number().int().optional().nullable(),
  available: z.boolean().optional(),
  hot: z.boolean().optional(),
  freeShipping: z.boolean().optional()
}).strict();

export const ProductUpdateManyMutationInputSchema: z.ZodType<Prisma.ProductUpdateManyMutationInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dec: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  category: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  company: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  likes: z.union([ z.lazy(() => ProductUpdatelikesInputSchema),z.string().array() ]).optional(),
  veiws: z.union([ z.lazy(() => ProductUpdateveiwsInputSchema),z.string().array() ]).optional(),
  orders: z.union([ z.lazy(() => ProductUpdateordersInputSchema),z.string().array() ]).optional(),
  price: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  oldPrice: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  available: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  hot: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  freeShipping: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ProductUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateManyInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dec: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  category: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  company: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  likes: z.union([ z.lazy(() => ProductUpdatelikesInputSchema),z.string().array() ]).optional(),
  veiws: z.union([ z.lazy(() => ProductUpdateveiwsInputSchema),z.string().array() ]).optional(),
  orders: z.union([ z.lazy(() => ProductUpdateordersInputSchema),z.string().array() ]).optional(),
  price: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  oldPrice: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  available: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  hot: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  freeShipping: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const OrderCreateInputSchema: z.ZodType<Prisma.OrderCreateInput> = z.object({
  id: z.string().optional(),
  items: z.union([ z.lazy(() => OrderItemListCreateEnvelopeInputSchema),z.lazy(() => OrderItemCreateInputSchema),z.lazy(() => OrderItemCreateInputSchema).array() ]).optional(),
  subtotal: z.number(),
  delivery: z.number(),
  discount: z.number(),
  total: z.number(),
  coupon: z.lazy(() => CouponCreateNestedOneWithoutOrdersInputSchema).optional(),
  compony: z.lazy(() => ComponyCreateNestedOneWithoutOrdersInputSchema)
}).strict();

export const OrderUncheckedCreateInputSchema: z.ZodType<Prisma.OrderUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  items: z.union([ z.lazy(() => OrderItemListCreateEnvelopeInputSchema),z.lazy(() => OrderItemCreateInputSchema),z.lazy(() => OrderItemCreateInputSchema).array() ]).optional(),
  subtotal: z.number(),
  delivery: z.number(),
  discount: z.number(),
  total: z.number(),
  couponId: z.string().optional().nullable(),
  componyId: z.string()
}).strict();

export const OrderUpdateInputSchema: z.ZodType<Prisma.OrderUpdateInput> = z.object({
  items: z.union([ z.lazy(() => OrderItemListUpdateEnvelopeInputSchema),z.lazy(() => OrderItemCreateInputSchema),z.lazy(() => OrderItemCreateInputSchema).array() ]).optional(),
  subtotal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  delivery: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  discount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  total: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  coupon: z.lazy(() => CouponUpdateOneWithoutOrdersNestedInputSchema).optional(),
  compony: z.lazy(() => ComponyUpdateOneRequiredWithoutOrdersNestedInputSchema).optional()
}).strict();

export const OrderUncheckedUpdateInputSchema: z.ZodType<Prisma.OrderUncheckedUpdateInput> = z.object({
  items: z.union([ z.lazy(() => OrderItemListUpdateEnvelopeInputSchema),z.lazy(() => OrderItemCreateInputSchema),z.lazy(() => OrderItemCreateInputSchema).array() ]).optional(),
  subtotal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  delivery: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  discount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  total: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  couponId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  componyId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const OrderCreateManyInputSchema: z.ZodType<Prisma.OrderCreateManyInput> = z.object({
  id: z.string().optional(),
  items: z.union([ z.lazy(() => OrderItemListCreateEnvelopeInputSchema),z.lazy(() => OrderItemCreateInputSchema),z.lazy(() => OrderItemCreateInputSchema).array() ]).optional(),
  subtotal: z.number(),
  delivery: z.number(),
  discount: z.number(),
  total: z.number(),
  couponId: z.string().optional().nullable(),
  componyId: z.string()
}).strict();

export const OrderUpdateManyMutationInputSchema: z.ZodType<Prisma.OrderUpdateManyMutationInput> = z.object({
  items: z.union([ z.lazy(() => OrderItemListUpdateEnvelopeInputSchema),z.lazy(() => OrderItemCreateInputSchema),z.lazy(() => OrderItemCreateInputSchema).array() ]).optional(),
  subtotal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  delivery: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  discount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  total: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const OrderUncheckedUpdateManyInputSchema: z.ZodType<Prisma.OrderUncheckedUpdateManyInput> = z.object({
  items: z.union([ z.lazy(() => OrderItemListUpdateEnvelopeInputSchema),z.lazy(() => OrderItemCreateInputSchema),z.lazy(() => OrderItemCreateInputSchema).array() ]).optional(),
  subtotal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  delivery: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  discount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  total: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  couponId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  componyId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CouponCreateInputSchema: z.ZodType<Prisma.CouponCreateInput> = z.object({
  id: z.string().optional(),
  code: z.string(),
  amount: z.number(),
  isValid: z.boolean(),
  orders: z.lazy(() => OrderCreateNestedManyWithoutCouponInputSchema).optional(),
  businesses: z.lazy(() => BusinessCreateNestedManyWithoutCouponsInputSchema).optional()
}).strict();

export const CouponUncheckedCreateInputSchema: z.ZodType<Prisma.CouponUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  code: z.string(),
  amount: z.number(),
  isValid: z.boolean(),
  businessIds: z.union([ z.lazy(() => CouponCreatebusinessIdsInputSchema),z.string().array() ]).optional(),
  orders: z.lazy(() => OrderUncheckedCreateNestedManyWithoutCouponInputSchema).optional(),
  businesses: z.lazy(() => BusinessUncheckedCreateNestedManyWithoutCouponsInputSchema).optional()
}).strict();

export const CouponUpdateInputSchema: z.ZodType<Prisma.CouponUpdateInput> = z.object({
  code: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  amount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  isValid: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  orders: z.lazy(() => OrderUpdateManyWithoutCouponNestedInputSchema).optional(),
  businesses: z.lazy(() => BusinessUpdateManyWithoutCouponsNestedInputSchema).optional()
}).strict();

export const CouponUncheckedUpdateInputSchema: z.ZodType<Prisma.CouponUncheckedUpdateInput> = z.object({
  code: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  amount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  isValid: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  businessIds: z.union([ z.lazy(() => CouponUpdatebusinessIdsInputSchema),z.string().array() ]).optional(),
  orders: z.lazy(() => OrderUncheckedUpdateManyWithoutCouponNestedInputSchema).optional(),
  businesses: z.lazy(() => BusinessUncheckedUpdateManyWithoutCouponsNestedInputSchema).optional()
}).strict();

export const CouponCreateManyInputSchema: z.ZodType<Prisma.CouponCreateManyInput> = z.object({
  id: z.string().optional(),
  code: z.string(),
  amount: z.number(),
  isValid: z.boolean(),
  businessIds: z.union([ z.lazy(() => CouponCreatebusinessIdsInputSchema),z.string().array() ]).optional(),
}).strict();

export const CouponUpdateManyMutationInputSchema: z.ZodType<Prisma.CouponUpdateManyMutationInput> = z.object({
  code: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  amount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  isValid: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CouponUncheckedUpdateManyInputSchema: z.ZodType<Prisma.CouponUncheckedUpdateManyInput> = z.object({
  code: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  amount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  isValid: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  businessIds: z.union([ z.lazy(() => CouponUpdatebusinessIdsInputSchema),z.string().array() ]).optional(),
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

export const CouponListRelationFilterSchema: z.ZodType<Prisma.CouponListRelationFilter> = z.object({
  every: z.lazy(() => CouponWhereInputSchema).optional(),
  some: z.lazy(() => CouponWhereInputSchema).optional(),
  none: z.lazy(() => CouponWhereInputSchema).optional()
}).strict();

export const CouponOrderByRelationAggregateInputSchema: z.ZodType<Prisma.CouponOrderByRelationAggregateInput> = z.object({
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
  couponIds: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BusinessMaxOrderByAggregateInputSchema: z.ZodType<Prisma.BusinessMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  phoneNumber: z.lazy(() => SortOrderSchema).optional(),
  state: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional(),
  neighborhood: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BusinessMinOrderByAggregateInputSchema: z.ZodType<Prisma.BusinessMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  phoneNumber: z.lazy(() => SortOrderSchema).optional(),
  state: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional(),
  neighborhood: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional()
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

export const OrderListRelationFilterSchema: z.ZodType<Prisma.OrderListRelationFilter> = z.object({
  every: z.lazy(() => OrderWhereInputSchema).optional(),
  some: z.lazy(() => OrderWhereInputSchema).optional(),
  none: z.lazy(() => OrderWhereInputSchema).optional()
}).strict();

export const WorkerListRelationFilterSchema: z.ZodType<Prisma.WorkerListRelationFilter> = z.object({
  every: z.lazy(() => WorkerWhereInputSchema).optional(),
  some: z.lazy(() => WorkerWhereInputSchema).optional(),
  none: z.lazy(() => WorkerWhereInputSchema).optional()
}).strict();

export const OrderOrderByRelationAggregateInputSchema: z.ZodType<Prisma.OrderOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const WorkerOrderByRelationAggregateInputSchema: z.ZodType<Prisma.WorkerOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ComponyCountOrderByAggregateInputSchema: z.ZodType<Prisma.ComponyCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ComponyMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ComponyMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ComponyMinOrderByAggregateInputSchema: z.ZodType<Prisma.ComponyMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EnumWorkerRoleFilterSchema: z.ZodType<Prisma.EnumWorkerRoleFilter> = z.object({
  equals: z.lazy(() => WorkerRoleSchema).optional(),
  in: z.lazy(() => WorkerRoleSchema).array().optional(),
  notIn: z.lazy(() => WorkerRoleSchema).array().optional(),
  not: z.union([ z.lazy(() => WorkerRoleSchema),z.lazy(() => NestedEnumWorkerRoleFilterSchema) ]).optional(),
}).strict();

export const ComponyRelationFilterSchema: z.ZodType<Prisma.ComponyRelationFilter> = z.object({
  is: z.lazy(() => ComponyWhereInputSchema).optional(),
  isNot: z.lazy(() => ComponyWhereInputSchema).optional()
}).strict();

export const WorkerCountOrderByAggregateInputSchema: z.ZodType<Prisma.WorkerCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  componyId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const WorkerMaxOrderByAggregateInputSchema: z.ZodType<Prisma.WorkerMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  componyId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const WorkerMinOrderByAggregateInputSchema: z.ZodType<Prisma.WorkerMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  componyId: z.lazy(() => SortOrderSchema).optional()
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

export const BoolFilterSchema: z.ZodType<Prisma.BoolFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolFilterSchema) ]).optional(),
}).strict();

export const ProductCountOrderByAggregateInputSchema: z.ZodType<Prisma.ProductCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  dec: z.lazy(() => SortOrderSchema).optional(),
  category: z.lazy(() => SortOrderSchema).optional(),
  company: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  likes: z.lazy(() => SortOrderSchema).optional(),
  veiws: z.lazy(() => SortOrderSchema).optional(),
  orders: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  oldPrice: z.lazy(() => SortOrderSchema).optional(),
  available: z.lazy(() => SortOrderSchema).optional(),
  hot: z.lazy(() => SortOrderSchema).optional(),
  freeShipping: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProductAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ProductAvgOrderByAggregateInput> = z.object({
  price: z.lazy(() => SortOrderSchema).optional(),
  oldPrice: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProductMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ProductMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  dec: z.lazy(() => SortOrderSchema).optional(),
  category: z.lazy(() => SortOrderSchema).optional(),
  company: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  oldPrice: z.lazy(() => SortOrderSchema).optional(),
  available: z.lazy(() => SortOrderSchema).optional(),
  hot: z.lazy(() => SortOrderSchema).optional(),
  freeShipping: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProductMinOrderByAggregateInputSchema: z.ZodType<Prisma.ProductMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  dec: z.lazy(() => SortOrderSchema).optional(),
  category: z.lazy(() => SortOrderSchema).optional(),
  company: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  oldPrice: z.lazy(() => SortOrderSchema).optional(),
  available: z.lazy(() => SortOrderSchema).optional(),
  hot: z.lazy(() => SortOrderSchema).optional(),
  freeShipping: z.lazy(() => SortOrderSchema).optional()
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

export const BoolWithAggregatesFilterSchema: z.ZodType<Prisma.BoolWithAggregatesFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterSchema).optional()
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
  images: z.string().array().optional(),
  size: z.string(),
  color: z.string(),
  price: z.number(),
  freeShipping: z.boolean()
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
  couponId: z.lazy(() => SortOrderSchema).optional(),
  componyId: z.lazy(() => SortOrderSchema).optional()
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
  couponId: z.lazy(() => SortOrderSchema).optional(),
  componyId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const OrderMinOrderByAggregateInputSchema: z.ZodType<Prisma.OrderMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  subtotal: z.lazy(() => SortOrderSchema).optional(),
  delivery: z.lazy(() => SortOrderSchema).optional(),
  discount: z.lazy(() => SortOrderSchema).optional(),
  total: z.lazy(() => SortOrderSchema).optional(),
  couponId: z.lazy(() => SortOrderSchema).optional(),
  componyId: z.lazy(() => SortOrderSchema).optional()
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

export const BusinessListRelationFilterSchema: z.ZodType<Prisma.BusinessListRelationFilter> = z.object({
  every: z.lazy(() => BusinessWhereInputSchema).optional(),
  some: z.lazy(() => BusinessWhereInputSchema).optional(),
  none: z.lazy(() => BusinessWhereInputSchema).optional()
}).strict();

export const BusinessOrderByRelationAggregateInputSchema: z.ZodType<Prisma.BusinessOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CouponCountOrderByAggregateInputSchema: z.ZodType<Prisma.CouponCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  code: z.lazy(() => SortOrderSchema).optional(),
  amount: z.lazy(() => SortOrderSchema).optional(),
  isValid: z.lazy(() => SortOrderSchema).optional(),
  businessIds: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CouponAvgOrderByAggregateInputSchema: z.ZodType<Prisma.CouponAvgOrderByAggregateInput> = z.object({
  amount: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CouponMaxOrderByAggregateInputSchema: z.ZodType<Prisma.CouponMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  code: z.lazy(() => SortOrderSchema).optional(),
  amount: z.lazy(() => SortOrderSchema).optional(),
  isValid: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CouponMinOrderByAggregateInputSchema: z.ZodType<Prisma.CouponMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  code: z.lazy(() => SortOrderSchema).optional(),
  amount: z.lazy(() => SortOrderSchema).optional(),
  isValid: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CouponSumOrderByAggregateInputSchema: z.ZodType<Prisma.CouponSumOrderByAggregateInput> = z.object({
  amount: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CouponCreateNestedManyWithoutBusinessesInputSchema: z.ZodType<Prisma.CouponCreateNestedManyWithoutBusinessesInput> = z.object({
  create: z.union([ z.lazy(() => CouponCreateWithoutBusinessesInputSchema),z.lazy(() => CouponCreateWithoutBusinessesInputSchema).array(),z.lazy(() => CouponUncheckedCreateWithoutBusinessesInputSchema),z.lazy(() => CouponUncheckedCreateWithoutBusinessesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CouponCreateOrConnectWithoutBusinessesInputSchema),z.lazy(() => CouponCreateOrConnectWithoutBusinessesInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CouponWhereUniqueInputSchema),z.lazy(() => CouponWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const BusinessCreatecouponIdsInputSchema: z.ZodType<Prisma.BusinessCreatecouponIdsInput> = z.object({
  set: z.string().array()
}).strict();

export const CouponUncheckedCreateNestedManyWithoutBusinessesInputSchema: z.ZodType<Prisma.CouponUncheckedCreateNestedManyWithoutBusinessesInput> = z.object({
  create: z.union([ z.lazy(() => CouponCreateWithoutBusinessesInputSchema),z.lazy(() => CouponCreateWithoutBusinessesInputSchema).array(),z.lazy(() => CouponUncheckedCreateWithoutBusinessesInputSchema),z.lazy(() => CouponUncheckedCreateWithoutBusinessesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CouponCreateOrConnectWithoutBusinessesInputSchema),z.lazy(() => CouponCreateOrConnectWithoutBusinessesInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CouponWhereUniqueInputSchema),z.lazy(() => CouponWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const EnumBusinessTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumBusinessTypeFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => BusinessTypeSchema).optional()
}).strict();

export const CouponUpdateManyWithoutBusinessesNestedInputSchema: z.ZodType<Prisma.CouponUpdateManyWithoutBusinessesNestedInput> = z.object({
  create: z.union([ z.lazy(() => CouponCreateWithoutBusinessesInputSchema),z.lazy(() => CouponCreateWithoutBusinessesInputSchema).array(),z.lazy(() => CouponUncheckedCreateWithoutBusinessesInputSchema),z.lazy(() => CouponUncheckedCreateWithoutBusinessesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CouponCreateOrConnectWithoutBusinessesInputSchema),z.lazy(() => CouponCreateOrConnectWithoutBusinessesInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CouponUpsertWithWhereUniqueWithoutBusinessesInputSchema),z.lazy(() => CouponUpsertWithWhereUniqueWithoutBusinessesInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => CouponWhereUniqueInputSchema),z.lazy(() => CouponWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CouponWhereUniqueInputSchema),z.lazy(() => CouponWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CouponWhereUniqueInputSchema),z.lazy(() => CouponWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CouponWhereUniqueInputSchema),z.lazy(() => CouponWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CouponUpdateWithWhereUniqueWithoutBusinessesInputSchema),z.lazy(() => CouponUpdateWithWhereUniqueWithoutBusinessesInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CouponUpdateManyWithWhereWithoutBusinessesInputSchema),z.lazy(() => CouponUpdateManyWithWhereWithoutBusinessesInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CouponScalarWhereInputSchema),z.lazy(() => CouponScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const BusinessUpdatecouponIdsInputSchema: z.ZodType<Prisma.BusinessUpdatecouponIdsInput> = z.object({
  set: z.string().array().optional(),
  push: z.union([ z.string(),z.string().array() ]).optional(),
}).strict();

export const CouponUncheckedUpdateManyWithoutBusinessesNestedInputSchema: z.ZodType<Prisma.CouponUncheckedUpdateManyWithoutBusinessesNestedInput> = z.object({
  create: z.union([ z.lazy(() => CouponCreateWithoutBusinessesInputSchema),z.lazy(() => CouponCreateWithoutBusinessesInputSchema).array(),z.lazy(() => CouponUncheckedCreateWithoutBusinessesInputSchema),z.lazy(() => CouponUncheckedCreateWithoutBusinessesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CouponCreateOrConnectWithoutBusinessesInputSchema),z.lazy(() => CouponCreateOrConnectWithoutBusinessesInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CouponUpsertWithWhereUniqueWithoutBusinessesInputSchema),z.lazy(() => CouponUpsertWithWhereUniqueWithoutBusinessesInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => CouponWhereUniqueInputSchema),z.lazy(() => CouponWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CouponWhereUniqueInputSchema),z.lazy(() => CouponWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CouponWhereUniqueInputSchema),z.lazy(() => CouponWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CouponWhereUniqueInputSchema),z.lazy(() => CouponWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CouponUpdateWithWhereUniqueWithoutBusinessesInputSchema),z.lazy(() => CouponUpdateWithWhereUniqueWithoutBusinessesInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CouponUpdateManyWithWhereWithoutBusinessesInputSchema),z.lazy(() => CouponUpdateManyWithWhereWithoutBusinessesInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CouponScalarWhereInputSchema),z.lazy(() => CouponScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const OrderCreateNestedManyWithoutComponyInputSchema: z.ZodType<Prisma.OrderCreateNestedManyWithoutComponyInput> = z.object({
  create: z.union([ z.lazy(() => OrderCreateWithoutComponyInputSchema),z.lazy(() => OrderCreateWithoutComponyInputSchema).array(),z.lazy(() => OrderUncheckedCreateWithoutComponyInputSchema),z.lazy(() => OrderUncheckedCreateWithoutComponyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrderCreateOrConnectWithoutComponyInputSchema),z.lazy(() => OrderCreateOrConnectWithoutComponyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrderCreateManyComponyInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const WorkerCreateNestedManyWithoutCompanyInputSchema: z.ZodType<Prisma.WorkerCreateNestedManyWithoutCompanyInput> = z.object({
  create: z.union([ z.lazy(() => WorkerCreateWithoutCompanyInputSchema),z.lazy(() => WorkerCreateWithoutCompanyInputSchema).array(),z.lazy(() => WorkerUncheckedCreateWithoutCompanyInputSchema),z.lazy(() => WorkerUncheckedCreateWithoutCompanyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => WorkerCreateOrConnectWithoutCompanyInputSchema),z.lazy(() => WorkerCreateOrConnectWithoutCompanyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => WorkerCreateManyCompanyInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => WorkerWhereUniqueInputSchema),z.lazy(() => WorkerWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const OrderUncheckedCreateNestedManyWithoutComponyInputSchema: z.ZodType<Prisma.OrderUncheckedCreateNestedManyWithoutComponyInput> = z.object({
  create: z.union([ z.lazy(() => OrderCreateWithoutComponyInputSchema),z.lazy(() => OrderCreateWithoutComponyInputSchema).array(),z.lazy(() => OrderUncheckedCreateWithoutComponyInputSchema),z.lazy(() => OrderUncheckedCreateWithoutComponyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrderCreateOrConnectWithoutComponyInputSchema),z.lazy(() => OrderCreateOrConnectWithoutComponyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrderCreateManyComponyInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const WorkerUncheckedCreateNestedManyWithoutCompanyInputSchema: z.ZodType<Prisma.WorkerUncheckedCreateNestedManyWithoutCompanyInput> = z.object({
  create: z.union([ z.lazy(() => WorkerCreateWithoutCompanyInputSchema),z.lazy(() => WorkerCreateWithoutCompanyInputSchema).array(),z.lazy(() => WorkerUncheckedCreateWithoutCompanyInputSchema),z.lazy(() => WorkerUncheckedCreateWithoutCompanyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => WorkerCreateOrConnectWithoutCompanyInputSchema),z.lazy(() => WorkerCreateOrConnectWithoutCompanyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => WorkerCreateManyCompanyInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => WorkerWhereUniqueInputSchema),z.lazy(() => WorkerWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const OrderUpdateManyWithoutComponyNestedInputSchema: z.ZodType<Prisma.OrderUpdateManyWithoutComponyNestedInput> = z.object({
  create: z.union([ z.lazy(() => OrderCreateWithoutComponyInputSchema),z.lazy(() => OrderCreateWithoutComponyInputSchema).array(),z.lazy(() => OrderUncheckedCreateWithoutComponyInputSchema),z.lazy(() => OrderUncheckedCreateWithoutComponyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrderCreateOrConnectWithoutComponyInputSchema),z.lazy(() => OrderCreateOrConnectWithoutComponyInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => OrderUpsertWithWhereUniqueWithoutComponyInputSchema),z.lazy(() => OrderUpsertWithWhereUniqueWithoutComponyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrderCreateManyComponyInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => OrderUpdateWithWhereUniqueWithoutComponyInputSchema),z.lazy(() => OrderUpdateWithWhereUniqueWithoutComponyInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => OrderUpdateManyWithWhereWithoutComponyInputSchema),z.lazy(() => OrderUpdateManyWithWhereWithoutComponyInputSchema).array() ]).optional(),
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

export const OrderUncheckedUpdateManyWithoutComponyNestedInputSchema: z.ZodType<Prisma.OrderUncheckedUpdateManyWithoutComponyNestedInput> = z.object({
  create: z.union([ z.lazy(() => OrderCreateWithoutComponyInputSchema),z.lazy(() => OrderCreateWithoutComponyInputSchema).array(),z.lazy(() => OrderUncheckedCreateWithoutComponyInputSchema),z.lazy(() => OrderUncheckedCreateWithoutComponyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrderCreateOrConnectWithoutComponyInputSchema),z.lazy(() => OrderCreateOrConnectWithoutComponyInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => OrderUpsertWithWhereUniqueWithoutComponyInputSchema),z.lazy(() => OrderUpsertWithWhereUniqueWithoutComponyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrderCreateManyComponyInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => OrderUpdateWithWhereUniqueWithoutComponyInputSchema),z.lazy(() => OrderUpdateWithWhereUniqueWithoutComponyInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => OrderUpdateManyWithWhereWithoutComponyInputSchema),z.lazy(() => OrderUpdateManyWithWhereWithoutComponyInputSchema).array() ]).optional(),
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

export const ComponyCreateNestedOneWithoutWorkersInputSchema: z.ZodType<Prisma.ComponyCreateNestedOneWithoutWorkersInput> = z.object({
  create: z.union([ z.lazy(() => ComponyCreateWithoutWorkersInputSchema),z.lazy(() => ComponyUncheckedCreateWithoutWorkersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ComponyCreateOrConnectWithoutWorkersInputSchema).optional(),
  connect: z.lazy(() => ComponyWhereUniqueInputSchema).optional()
}).strict();

export const EnumWorkerRoleFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumWorkerRoleFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => WorkerRoleSchema).optional()
}).strict();

export const ComponyUpdateOneRequiredWithoutWorkersNestedInputSchema: z.ZodType<Prisma.ComponyUpdateOneRequiredWithoutWorkersNestedInput> = z.object({
  create: z.union([ z.lazy(() => ComponyCreateWithoutWorkersInputSchema),z.lazy(() => ComponyUncheckedCreateWithoutWorkersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ComponyCreateOrConnectWithoutWorkersInputSchema).optional(),
  upsert: z.lazy(() => ComponyUpsertWithoutWorkersInputSchema).optional(),
  connect: z.lazy(() => ComponyWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ComponyUpdateWithoutWorkersInputSchema),z.lazy(() => ComponyUncheckedUpdateWithoutWorkersInputSchema) ]).optional(),
}).strict();

export const ProductCreatelikesInputSchema: z.ZodType<Prisma.ProductCreatelikesInput> = z.object({
  set: z.string().array()
}).strict();

export const ProductCreateveiwsInputSchema: z.ZodType<Prisma.ProductCreateveiwsInput> = z.object({
  set: z.string().array()
}).strict();

export const ProductCreateordersInputSchema: z.ZodType<Prisma.ProductCreateordersInput> = z.object({
  set: z.string().array()
}).strict();

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional().nullable(),
  unset: z.boolean().optional()
}).strict();

export const ProductUpdatelikesInputSchema: z.ZodType<Prisma.ProductUpdatelikesInput> = z.object({
  set: z.string().array().optional(),
  push: z.union([ z.string(),z.string().array() ]).optional(),
}).strict();

export const ProductUpdateveiwsInputSchema: z.ZodType<Prisma.ProductUpdateveiwsInput> = z.object({
  set: z.string().array().optional(),
  push: z.union([ z.string(),z.string().array() ]).optional(),
}).strict();

export const ProductUpdateordersInputSchema: z.ZodType<Prisma.ProductUpdateordersInput> = z.object({
  set: z.string().array().optional(),
  push: z.union([ z.string(),z.string().array() ]).optional(),
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

export const BoolFieldUpdateOperationsInputSchema: z.ZodType<Prisma.BoolFieldUpdateOperationsInput> = z.object({
  set: z.boolean().optional()
}).strict();

export const OrderItemListCreateEnvelopeInputSchema: z.ZodType<Prisma.OrderItemListCreateEnvelopeInput> = z.object({
  set: z.union([ z.lazy(() => OrderItemCreateInputSchema),z.lazy(() => OrderItemCreateInputSchema).array() ]).optional(),
}).strict();

export const OrderItemCreateInputSchema: z.ZodType<Prisma.OrderItemCreateInput> = z.object({
  id: z.string(),
  name: z.string(),
  images: z.union([ z.lazy(() => OrderItemCreateimagesInputSchema),z.string().array() ]).optional(),
  size: z.string(),
  color: z.string(),
  price: z.number(),
  freeShipping: z.boolean().optional()
}).strict();

export const CouponCreateNestedOneWithoutOrdersInputSchema: z.ZodType<Prisma.CouponCreateNestedOneWithoutOrdersInput> = z.object({
  create: z.union([ z.lazy(() => CouponCreateWithoutOrdersInputSchema),z.lazy(() => CouponUncheckedCreateWithoutOrdersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CouponCreateOrConnectWithoutOrdersInputSchema).optional(),
  connect: z.lazy(() => CouponWhereUniqueInputSchema).optional()
}).strict();

export const ComponyCreateNestedOneWithoutOrdersInputSchema: z.ZodType<Prisma.ComponyCreateNestedOneWithoutOrdersInput> = z.object({
  create: z.union([ z.lazy(() => ComponyCreateWithoutOrdersInputSchema),z.lazy(() => ComponyUncheckedCreateWithoutOrdersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ComponyCreateOrConnectWithoutOrdersInputSchema).optional(),
  connect: z.lazy(() => ComponyWhereUniqueInputSchema).optional()
}).strict();

export const OrderItemListUpdateEnvelopeInputSchema: z.ZodType<Prisma.OrderItemListUpdateEnvelopeInput> = z.object({
  set: z.union([ z.lazy(() => OrderItemCreateInputSchema),z.lazy(() => OrderItemCreateInputSchema).array() ]).optional(),
  push: z.union([ z.lazy(() => OrderItemCreateInputSchema),z.lazy(() => OrderItemCreateInputSchema).array() ]).optional(),
  updateMany: z.lazy(() => OrderItemUpdateManyInputSchema).optional(),
  deleteMany: z.lazy(() => OrderItemDeleteManyInputSchema).optional()
}).strict();

export const FloatFieldUpdateOperationsInputSchema: z.ZodType<Prisma.FloatFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
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

export const ComponyUpdateOneRequiredWithoutOrdersNestedInputSchema: z.ZodType<Prisma.ComponyUpdateOneRequiredWithoutOrdersNestedInput> = z.object({
  create: z.union([ z.lazy(() => ComponyCreateWithoutOrdersInputSchema),z.lazy(() => ComponyUncheckedCreateWithoutOrdersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ComponyCreateOrConnectWithoutOrdersInputSchema).optional(),
  upsert: z.lazy(() => ComponyUpsertWithoutOrdersInputSchema).optional(),
  connect: z.lazy(() => ComponyWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ComponyUpdateWithoutOrdersInputSchema),z.lazy(() => ComponyUncheckedUpdateWithoutOrdersInputSchema) ]).optional(),
}).strict();

export const OrderCreateNestedManyWithoutCouponInputSchema: z.ZodType<Prisma.OrderCreateNestedManyWithoutCouponInput> = z.object({
  create: z.union([ z.lazy(() => OrderCreateWithoutCouponInputSchema),z.lazy(() => OrderCreateWithoutCouponInputSchema).array(),z.lazy(() => OrderUncheckedCreateWithoutCouponInputSchema),z.lazy(() => OrderUncheckedCreateWithoutCouponInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrderCreateOrConnectWithoutCouponInputSchema),z.lazy(() => OrderCreateOrConnectWithoutCouponInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrderCreateManyCouponInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const BusinessCreateNestedManyWithoutCouponsInputSchema: z.ZodType<Prisma.BusinessCreateNestedManyWithoutCouponsInput> = z.object({
  create: z.union([ z.lazy(() => BusinessCreateWithoutCouponsInputSchema),z.lazy(() => BusinessCreateWithoutCouponsInputSchema).array(),z.lazy(() => BusinessUncheckedCreateWithoutCouponsInputSchema),z.lazy(() => BusinessUncheckedCreateWithoutCouponsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BusinessCreateOrConnectWithoutCouponsInputSchema),z.lazy(() => BusinessCreateOrConnectWithoutCouponsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BusinessWhereUniqueInputSchema),z.lazy(() => BusinessWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const CouponCreatebusinessIdsInputSchema: z.ZodType<Prisma.CouponCreatebusinessIdsInput> = z.object({
  set: z.string().array()
}).strict();

export const OrderUncheckedCreateNestedManyWithoutCouponInputSchema: z.ZodType<Prisma.OrderUncheckedCreateNestedManyWithoutCouponInput> = z.object({
  create: z.union([ z.lazy(() => OrderCreateWithoutCouponInputSchema),z.lazy(() => OrderCreateWithoutCouponInputSchema).array(),z.lazy(() => OrderUncheckedCreateWithoutCouponInputSchema),z.lazy(() => OrderUncheckedCreateWithoutCouponInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OrderCreateOrConnectWithoutCouponInputSchema),z.lazy(() => OrderCreateOrConnectWithoutCouponInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OrderCreateManyCouponInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => OrderWhereUniqueInputSchema),z.lazy(() => OrderWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const BusinessUncheckedCreateNestedManyWithoutCouponsInputSchema: z.ZodType<Prisma.BusinessUncheckedCreateNestedManyWithoutCouponsInput> = z.object({
  create: z.union([ z.lazy(() => BusinessCreateWithoutCouponsInputSchema),z.lazy(() => BusinessCreateWithoutCouponsInputSchema).array(),z.lazy(() => BusinessUncheckedCreateWithoutCouponsInputSchema),z.lazy(() => BusinessUncheckedCreateWithoutCouponsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BusinessCreateOrConnectWithoutCouponsInputSchema),z.lazy(() => BusinessCreateOrConnectWithoutCouponsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BusinessWhereUniqueInputSchema),z.lazy(() => BusinessWhereUniqueInputSchema).array() ]).optional(),
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

export const BusinessUpdateManyWithoutCouponsNestedInputSchema: z.ZodType<Prisma.BusinessUpdateManyWithoutCouponsNestedInput> = z.object({
  create: z.union([ z.lazy(() => BusinessCreateWithoutCouponsInputSchema),z.lazy(() => BusinessCreateWithoutCouponsInputSchema).array(),z.lazy(() => BusinessUncheckedCreateWithoutCouponsInputSchema),z.lazy(() => BusinessUncheckedCreateWithoutCouponsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BusinessCreateOrConnectWithoutCouponsInputSchema),z.lazy(() => BusinessCreateOrConnectWithoutCouponsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BusinessUpsertWithWhereUniqueWithoutCouponsInputSchema),z.lazy(() => BusinessUpsertWithWhereUniqueWithoutCouponsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => BusinessWhereUniqueInputSchema),z.lazy(() => BusinessWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BusinessWhereUniqueInputSchema),z.lazy(() => BusinessWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BusinessWhereUniqueInputSchema),z.lazy(() => BusinessWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BusinessWhereUniqueInputSchema),z.lazy(() => BusinessWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BusinessUpdateWithWhereUniqueWithoutCouponsInputSchema),z.lazy(() => BusinessUpdateWithWhereUniqueWithoutCouponsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BusinessUpdateManyWithWhereWithoutCouponsInputSchema),z.lazy(() => BusinessUpdateManyWithWhereWithoutCouponsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BusinessScalarWhereInputSchema),z.lazy(() => BusinessScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const CouponUpdatebusinessIdsInputSchema: z.ZodType<Prisma.CouponUpdatebusinessIdsInput> = z.object({
  set: z.string().array().optional(),
  push: z.union([ z.string(),z.string().array() ]).optional(),
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

export const BusinessUncheckedUpdateManyWithoutCouponsNestedInputSchema: z.ZodType<Prisma.BusinessUncheckedUpdateManyWithoutCouponsNestedInput> = z.object({
  create: z.union([ z.lazy(() => BusinessCreateWithoutCouponsInputSchema),z.lazy(() => BusinessCreateWithoutCouponsInputSchema).array(),z.lazy(() => BusinessUncheckedCreateWithoutCouponsInputSchema),z.lazy(() => BusinessUncheckedCreateWithoutCouponsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BusinessCreateOrConnectWithoutCouponsInputSchema),z.lazy(() => BusinessCreateOrConnectWithoutCouponsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BusinessUpsertWithWhereUniqueWithoutCouponsInputSchema),z.lazy(() => BusinessUpsertWithWhereUniqueWithoutCouponsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => BusinessWhereUniqueInputSchema),z.lazy(() => BusinessWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BusinessWhereUniqueInputSchema),z.lazy(() => BusinessWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BusinessWhereUniqueInputSchema),z.lazy(() => BusinessWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BusinessWhereUniqueInputSchema),z.lazy(() => BusinessWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BusinessUpdateWithWhereUniqueWithoutCouponsInputSchema),z.lazy(() => BusinessUpdateWithWhereUniqueWithoutCouponsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BusinessUpdateManyWithWhereWithoutCouponsInputSchema),z.lazy(() => BusinessUpdateManyWithWhereWithoutCouponsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BusinessScalarWhereInputSchema),z.lazy(() => BusinessScalarWhereInputSchema).array() ]).optional(),
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

export const NestedBoolFilterSchema: z.ZodType<Prisma.NestedBoolFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolFilterSchema) ]).optional(),
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

export const NestedBoolWithAggregatesFilterSchema: z.ZodType<Prisma.NestedBoolWithAggregatesFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterSchema).optional()
}).strict();

export const OrderItemWhereInputSchema: z.ZodType<Prisma.OrderItemWhereInput> = z.object({
  AND: z.union([ z.lazy(() => OrderItemWhereInputSchema),z.lazy(() => OrderItemWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => OrderItemWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OrderItemWhereInputSchema),z.lazy(() => OrderItemWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  images: z.lazy(() => StringNullableListFilterSchema).optional(),
  size: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  color: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  price: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  freeShipping: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
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

export const CouponCreateWithoutBusinessesInputSchema: z.ZodType<Prisma.CouponCreateWithoutBusinessesInput> = z.object({
  id: z.string().optional(),
  code: z.string(),
  amount: z.number(),
  isValid: z.boolean(),
  orders: z.lazy(() => OrderCreateNestedManyWithoutCouponInputSchema).optional()
}).strict();

export const CouponUncheckedCreateWithoutBusinessesInputSchema: z.ZodType<Prisma.CouponUncheckedCreateWithoutBusinessesInput> = z.object({
  id: z.string().optional(),
  code: z.string(),
  amount: z.number(),
  isValid: z.boolean(),
  businessIds: z.union([ z.lazy(() => CouponCreatebusinessIdsInputSchema),z.string().array() ]).optional(),
  orders: z.lazy(() => OrderUncheckedCreateNestedManyWithoutCouponInputSchema).optional()
}).strict();

export const CouponCreateOrConnectWithoutBusinessesInputSchema: z.ZodType<Prisma.CouponCreateOrConnectWithoutBusinessesInput> = z.object({
  where: z.lazy(() => CouponWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CouponCreateWithoutBusinessesInputSchema),z.lazy(() => CouponUncheckedCreateWithoutBusinessesInputSchema) ]),
}).strict();

export const CouponUpsertWithWhereUniqueWithoutBusinessesInputSchema: z.ZodType<Prisma.CouponUpsertWithWhereUniqueWithoutBusinessesInput> = z.object({
  where: z.lazy(() => CouponWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CouponUpdateWithoutBusinessesInputSchema),z.lazy(() => CouponUncheckedUpdateWithoutBusinessesInputSchema) ]),
  create: z.union([ z.lazy(() => CouponCreateWithoutBusinessesInputSchema),z.lazy(() => CouponUncheckedCreateWithoutBusinessesInputSchema) ]),
}).strict();

export const CouponUpdateWithWhereUniqueWithoutBusinessesInputSchema: z.ZodType<Prisma.CouponUpdateWithWhereUniqueWithoutBusinessesInput> = z.object({
  where: z.lazy(() => CouponWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CouponUpdateWithoutBusinessesInputSchema),z.lazy(() => CouponUncheckedUpdateWithoutBusinessesInputSchema) ]),
}).strict();

export const CouponUpdateManyWithWhereWithoutBusinessesInputSchema: z.ZodType<Prisma.CouponUpdateManyWithWhereWithoutBusinessesInput> = z.object({
  where: z.lazy(() => CouponScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CouponUpdateManyMutationInputSchema),z.lazy(() => CouponUncheckedUpdateManyWithoutCouponsInputSchema) ]),
}).strict();

export const CouponScalarWhereInputSchema: z.ZodType<Prisma.CouponScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CouponScalarWhereInputSchema),z.lazy(() => CouponScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CouponScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CouponScalarWhereInputSchema),z.lazy(() => CouponScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  code: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  amount: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  isValid: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  businessIds: z.lazy(() => StringNullableListFilterSchema).optional()
}).strict();

export const OrderCreateWithoutComponyInputSchema: z.ZodType<Prisma.OrderCreateWithoutComponyInput> = z.object({
  id: z.string().optional(),
  items: z.union([ z.lazy(() => OrderItemListCreateEnvelopeInputSchema),z.lazy(() => OrderItemCreateInputSchema),z.lazy(() => OrderItemCreateInputSchema).array() ]).optional(),
  subtotal: z.number(),
  delivery: z.number(),
  discount: z.number(),
  total: z.number(),
  coupon: z.lazy(() => CouponCreateNestedOneWithoutOrdersInputSchema).optional()
}).strict();

export const OrderUncheckedCreateWithoutComponyInputSchema: z.ZodType<Prisma.OrderUncheckedCreateWithoutComponyInput> = z.object({
  id: z.string().optional(),
  items: z.union([ z.lazy(() => OrderItemListCreateEnvelopeInputSchema),z.lazy(() => OrderItemCreateInputSchema),z.lazy(() => OrderItemCreateInputSchema).array() ]).optional(),
  subtotal: z.number(),
  delivery: z.number(),
  discount: z.number(),
  total: z.number(),
  couponId: z.string().optional().nullable()
}).strict();

export const OrderCreateOrConnectWithoutComponyInputSchema: z.ZodType<Prisma.OrderCreateOrConnectWithoutComponyInput> = z.object({
  where: z.lazy(() => OrderWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => OrderCreateWithoutComponyInputSchema),z.lazy(() => OrderUncheckedCreateWithoutComponyInputSchema) ]),
}).strict();

export const OrderCreateManyComponyInputEnvelopeSchema: z.ZodType<Prisma.OrderCreateManyComponyInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => OrderCreateManyComponyInputSchema),z.lazy(() => OrderCreateManyComponyInputSchema).array() ]),
}).strict();

export const WorkerCreateWithoutCompanyInputSchema: z.ZodType<Prisma.WorkerCreateWithoutCompanyInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  password: z.string(),
  role: z.lazy(() => WorkerRoleSchema)
}).strict();

export const WorkerUncheckedCreateWithoutCompanyInputSchema: z.ZodType<Prisma.WorkerUncheckedCreateWithoutCompanyInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  password: z.string(),
  role: z.lazy(() => WorkerRoleSchema)
}).strict();

export const WorkerCreateOrConnectWithoutCompanyInputSchema: z.ZodType<Prisma.WorkerCreateOrConnectWithoutCompanyInput> = z.object({
  where: z.lazy(() => WorkerWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => WorkerCreateWithoutCompanyInputSchema),z.lazy(() => WorkerUncheckedCreateWithoutCompanyInputSchema) ]),
}).strict();

export const WorkerCreateManyCompanyInputEnvelopeSchema: z.ZodType<Prisma.WorkerCreateManyCompanyInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => WorkerCreateManyCompanyInputSchema),z.lazy(() => WorkerCreateManyCompanyInputSchema).array() ]),
}).strict();

export const OrderUpsertWithWhereUniqueWithoutComponyInputSchema: z.ZodType<Prisma.OrderUpsertWithWhereUniqueWithoutComponyInput> = z.object({
  where: z.lazy(() => OrderWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => OrderUpdateWithoutComponyInputSchema),z.lazy(() => OrderUncheckedUpdateWithoutComponyInputSchema) ]),
  create: z.union([ z.lazy(() => OrderCreateWithoutComponyInputSchema),z.lazy(() => OrderUncheckedCreateWithoutComponyInputSchema) ]),
}).strict();

export const OrderUpdateWithWhereUniqueWithoutComponyInputSchema: z.ZodType<Prisma.OrderUpdateWithWhereUniqueWithoutComponyInput> = z.object({
  where: z.lazy(() => OrderWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => OrderUpdateWithoutComponyInputSchema),z.lazy(() => OrderUncheckedUpdateWithoutComponyInputSchema) ]),
}).strict();

export const OrderUpdateManyWithWhereWithoutComponyInputSchema: z.ZodType<Prisma.OrderUpdateManyWithWhereWithoutComponyInput> = z.object({
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
  couponId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  componyId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
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
  password: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  role: z.union([ z.lazy(() => EnumWorkerRoleFilterSchema),z.lazy(() => WorkerRoleSchema) ]).optional(),
  componyId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const ComponyCreateWithoutWorkersInputSchema: z.ZodType<Prisma.ComponyCreateWithoutWorkersInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  type: z.lazy(() => BusinessTypeSchema),
  orders: z.lazy(() => OrderCreateNestedManyWithoutComponyInputSchema).optional()
}).strict();

export const ComponyUncheckedCreateWithoutWorkersInputSchema: z.ZodType<Prisma.ComponyUncheckedCreateWithoutWorkersInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  type: z.lazy(() => BusinessTypeSchema),
  orders: z.lazy(() => OrderUncheckedCreateNestedManyWithoutComponyInputSchema).optional()
}).strict();

export const ComponyCreateOrConnectWithoutWorkersInputSchema: z.ZodType<Prisma.ComponyCreateOrConnectWithoutWorkersInput> = z.object({
  where: z.lazy(() => ComponyWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ComponyCreateWithoutWorkersInputSchema),z.lazy(() => ComponyUncheckedCreateWithoutWorkersInputSchema) ]),
}).strict();

export const ComponyUpsertWithoutWorkersInputSchema: z.ZodType<Prisma.ComponyUpsertWithoutWorkersInput> = z.object({
  update: z.union([ z.lazy(() => ComponyUpdateWithoutWorkersInputSchema),z.lazy(() => ComponyUncheckedUpdateWithoutWorkersInputSchema) ]),
  create: z.union([ z.lazy(() => ComponyCreateWithoutWorkersInputSchema),z.lazy(() => ComponyUncheckedCreateWithoutWorkersInputSchema) ]),
}).strict();

export const ComponyUpdateWithoutWorkersInputSchema: z.ZodType<Prisma.ComponyUpdateWithoutWorkersInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => BusinessTypeSchema),z.lazy(() => EnumBusinessTypeFieldUpdateOperationsInputSchema) ]).optional(),
  orders: z.lazy(() => OrderUpdateManyWithoutComponyNestedInputSchema).optional()
}).strict();

export const ComponyUncheckedUpdateWithoutWorkersInputSchema: z.ZodType<Prisma.ComponyUncheckedUpdateWithoutWorkersInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => BusinessTypeSchema),z.lazy(() => EnumBusinessTypeFieldUpdateOperationsInputSchema) ]).optional(),
  orders: z.lazy(() => OrderUncheckedUpdateManyWithoutComponyNestedInputSchema).optional()
}).strict();

export const OrderItemCreateimagesInputSchema: z.ZodType<Prisma.OrderItemCreateimagesInput> = z.object({
  set: z.string().array()
}).strict();

export const CouponCreateWithoutOrdersInputSchema: z.ZodType<Prisma.CouponCreateWithoutOrdersInput> = z.object({
  id: z.string().optional(),
  code: z.string(),
  amount: z.number(),
  isValid: z.boolean(),
  businesses: z.lazy(() => BusinessCreateNestedManyWithoutCouponsInputSchema).optional()
}).strict();

export const CouponUncheckedCreateWithoutOrdersInputSchema: z.ZodType<Prisma.CouponUncheckedCreateWithoutOrdersInput> = z.object({
  id: z.string().optional(),
  code: z.string(),
  amount: z.number(),
  isValid: z.boolean(),
  businessIds: z.union([ z.lazy(() => CouponCreatebusinessIdsInputSchema),z.string().array() ]).optional(),
  businesses: z.lazy(() => BusinessUncheckedCreateNestedManyWithoutCouponsInputSchema).optional()
}).strict();

export const CouponCreateOrConnectWithoutOrdersInputSchema: z.ZodType<Prisma.CouponCreateOrConnectWithoutOrdersInput> = z.object({
  where: z.lazy(() => CouponWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CouponCreateWithoutOrdersInputSchema),z.lazy(() => CouponUncheckedCreateWithoutOrdersInputSchema) ]),
}).strict();

export const ComponyCreateWithoutOrdersInputSchema: z.ZodType<Prisma.ComponyCreateWithoutOrdersInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  type: z.lazy(() => BusinessTypeSchema),
  workers: z.lazy(() => WorkerCreateNestedManyWithoutCompanyInputSchema).optional()
}).strict();

export const ComponyUncheckedCreateWithoutOrdersInputSchema: z.ZodType<Prisma.ComponyUncheckedCreateWithoutOrdersInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  type: z.lazy(() => BusinessTypeSchema),
  workers: z.lazy(() => WorkerUncheckedCreateNestedManyWithoutCompanyInputSchema).optional()
}).strict();

export const ComponyCreateOrConnectWithoutOrdersInputSchema: z.ZodType<Prisma.ComponyCreateOrConnectWithoutOrdersInput> = z.object({
  where: z.lazy(() => ComponyWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ComponyCreateWithoutOrdersInputSchema),z.lazy(() => ComponyUncheckedCreateWithoutOrdersInputSchema) ]),
}).strict();

export const OrderItemUpdateManyInputSchema: z.ZodType<Prisma.OrderItemUpdateManyInput> = z.object({
  where: z.lazy(() => OrderItemWhereInputSchema),
  data: z.lazy(() => OrderItemUpdateInputSchema)
}).strict();

export const OrderItemDeleteManyInputSchema: z.ZodType<Prisma.OrderItemDeleteManyInput> = z.object({
  where: z.lazy(() => OrderItemWhereInputSchema)
}).strict();

export const CouponUpsertWithoutOrdersInputSchema: z.ZodType<Prisma.CouponUpsertWithoutOrdersInput> = z.object({
  update: z.union([ z.lazy(() => CouponUpdateWithoutOrdersInputSchema),z.lazy(() => CouponUncheckedUpdateWithoutOrdersInputSchema) ]),
  create: z.union([ z.lazy(() => CouponCreateWithoutOrdersInputSchema),z.lazy(() => CouponUncheckedCreateWithoutOrdersInputSchema) ]),
}).strict();

export const CouponUpdateWithoutOrdersInputSchema: z.ZodType<Prisma.CouponUpdateWithoutOrdersInput> = z.object({
  code: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  amount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  isValid: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  businesses: z.lazy(() => BusinessUpdateManyWithoutCouponsNestedInputSchema).optional()
}).strict();

export const CouponUncheckedUpdateWithoutOrdersInputSchema: z.ZodType<Prisma.CouponUncheckedUpdateWithoutOrdersInput> = z.object({
  code: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  amount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  isValid: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  businessIds: z.union([ z.lazy(() => CouponUpdatebusinessIdsInputSchema),z.string().array() ]).optional(),
  businesses: z.lazy(() => BusinessUncheckedUpdateManyWithoutCouponsNestedInputSchema).optional()
}).strict();

export const ComponyUpsertWithoutOrdersInputSchema: z.ZodType<Prisma.ComponyUpsertWithoutOrdersInput> = z.object({
  update: z.union([ z.lazy(() => ComponyUpdateWithoutOrdersInputSchema),z.lazy(() => ComponyUncheckedUpdateWithoutOrdersInputSchema) ]),
  create: z.union([ z.lazy(() => ComponyCreateWithoutOrdersInputSchema),z.lazy(() => ComponyUncheckedCreateWithoutOrdersInputSchema) ]),
}).strict();

export const ComponyUpdateWithoutOrdersInputSchema: z.ZodType<Prisma.ComponyUpdateWithoutOrdersInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => BusinessTypeSchema),z.lazy(() => EnumBusinessTypeFieldUpdateOperationsInputSchema) ]).optional(),
  workers: z.lazy(() => WorkerUpdateManyWithoutCompanyNestedInputSchema).optional()
}).strict();

export const ComponyUncheckedUpdateWithoutOrdersInputSchema: z.ZodType<Prisma.ComponyUncheckedUpdateWithoutOrdersInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => BusinessTypeSchema),z.lazy(() => EnumBusinessTypeFieldUpdateOperationsInputSchema) ]).optional(),
  workers: z.lazy(() => WorkerUncheckedUpdateManyWithoutCompanyNestedInputSchema).optional()
}).strict();

export const OrderCreateWithoutCouponInputSchema: z.ZodType<Prisma.OrderCreateWithoutCouponInput> = z.object({
  id: z.string().optional(),
  items: z.union([ z.lazy(() => OrderItemListCreateEnvelopeInputSchema),z.lazy(() => OrderItemCreateInputSchema),z.lazy(() => OrderItemCreateInputSchema).array() ]).optional(),
  subtotal: z.number(),
  delivery: z.number(),
  discount: z.number(),
  total: z.number(),
  compony: z.lazy(() => ComponyCreateNestedOneWithoutOrdersInputSchema)
}).strict();

export const OrderUncheckedCreateWithoutCouponInputSchema: z.ZodType<Prisma.OrderUncheckedCreateWithoutCouponInput> = z.object({
  id: z.string().optional(),
  items: z.union([ z.lazy(() => OrderItemListCreateEnvelopeInputSchema),z.lazy(() => OrderItemCreateInputSchema),z.lazy(() => OrderItemCreateInputSchema).array() ]).optional(),
  subtotal: z.number(),
  delivery: z.number(),
  discount: z.number(),
  total: z.number(),
  componyId: z.string()
}).strict();

export const OrderCreateOrConnectWithoutCouponInputSchema: z.ZodType<Prisma.OrderCreateOrConnectWithoutCouponInput> = z.object({
  where: z.lazy(() => OrderWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => OrderCreateWithoutCouponInputSchema),z.lazy(() => OrderUncheckedCreateWithoutCouponInputSchema) ]),
}).strict();

export const OrderCreateManyCouponInputEnvelopeSchema: z.ZodType<Prisma.OrderCreateManyCouponInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => OrderCreateManyCouponInputSchema),z.lazy(() => OrderCreateManyCouponInputSchema).array() ]),
}).strict();

export const BusinessCreateWithoutCouponsInputSchema: z.ZodType<Prisma.BusinessCreateWithoutCouponsInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  password: z.string(),
  phoneNumber: z.string(),
  state: z.string(),
  location: z.string(),
  neighborhood: z.string(),
  type: z.lazy(() => BusinessTypeSchema)
}).strict();

export const BusinessUncheckedCreateWithoutCouponsInputSchema: z.ZodType<Prisma.BusinessUncheckedCreateWithoutCouponsInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  password: z.string(),
  phoneNumber: z.string(),
  state: z.string(),
  location: z.string(),
  neighborhood: z.string(),
  type: z.lazy(() => BusinessTypeSchema),
  couponIds: z.union([ z.lazy(() => BusinessCreatecouponIdsInputSchema),z.string().array() ]).optional(),
}).strict();

export const BusinessCreateOrConnectWithoutCouponsInputSchema: z.ZodType<Prisma.BusinessCreateOrConnectWithoutCouponsInput> = z.object({
  where: z.lazy(() => BusinessWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BusinessCreateWithoutCouponsInputSchema),z.lazy(() => BusinessUncheckedCreateWithoutCouponsInputSchema) ]),
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

export const BusinessUpsertWithWhereUniqueWithoutCouponsInputSchema: z.ZodType<Prisma.BusinessUpsertWithWhereUniqueWithoutCouponsInput> = z.object({
  where: z.lazy(() => BusinessWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => BusinessUpdateWithoutCouponsInputSchema),z.lazy(() => BusinessUncheckedUpdateWithoutCouponsInputSchema) ]),
  create: z.union([ z.lazy(() => BusinessCreateWithoutCouponsInputSchema),z.lazy(() => BusinessUncheckedCreateWithoutCouponsInputSchema) ]),
}).strict();

export const BusinessUpdateWithWhereUniqueWithoutCouponsInputSchema: z.ZodType<Prisma.BusinessUpdateWithWhereUniqueWithoutCouponsInput> = z.object({
  where: z.lazy(() => BusinessWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => BusinessUpdateWithoutCouponsInputSchema),z.lazy(() => BusinessUncheckedUpdateWithoutCouponsInputSchema) ]),
}).strict();

export const BusinessUpdateManyWithWhereWithoutCouponsInputSchema: z.ZodType<Prisma.BusinessUpdateManyWithWhereWithoutCouponsInput> = z.object({
  where: z.lazy(() => BusinessScalarWhereInputSchema),
  data: z.union([ z.lazy(() => BusinessUpdateManyMutationInputSchema),z.lazy(() => BusinessUncheckedUpdateManyWithoutBusinessesInputSchema) ]),
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
  couponIds: z.lazy(() => StringNullableListFilterSchema).optional()
}).strict();

export const CouponUpdateWithoutBusinessesInputSchema: z.ZodType<Prisma.CouponUpdateWithoutBusinessesInput> = z.object({
  code: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  amount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  isValid: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  orders: z.lazy(() => OrderUpdateManyWithoutCouponNestedInputSchema).optional()
}).strict();

export const CouponUncheckedUpdateWithoutBusinessesInputSchema: z.ZodType<Prisma.CouponUncheckedUpdateWithoutBusinessesInput> = z.object({
  code: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  amount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  isValid: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  businessIds: z.union([ z.lazy(() => CouponUpdatebusinessIdsInputSchema),z.string().array() ]).optional(),
  orders: z.lazy(() => OrderUncheckedUpdateManyWithoutCouponNestedInputSchema).optional()
}).strict();

export const CouponUncheckedUpdateManyWithoutCouponsInputSchema: z.ZodType<Prisma.CouponUncheckedUpdateManyWithoutCouponsInput> = z.object({
  code: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  amount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  isValid: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  businessIds: z.union([ z.lazy(() => CouponUpdatebusinessIdsInputSchema),z.string().array() ]).optional(),
}).strict();

export const OrderCreateManyComponyInputSchema: z.ZodType<Prisma.OrderCreateManyComponyInput> = z.object({
  id: z.string().optional(),
  items: z.union([ z.lazy(() => OrderItemListCreateEnvelopeInputSchema),z.lazy(() => OrderItemCreateInputSchema),z.lazy(() => OrderItemCreateInputSchema).array() ]).optional(),
  subtotal: z.number(),
  delivery: z.number(),
  discount: z.number(),
  total: z.number(),
  couponId: z.string().optional().nullable()
}).strict();

export const WorkerCreateManyCompanyInputSchema: z.ZodType<Prisma.WorkerCreateManyCompanyInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  password: z.string(),
  role: z.lazy(() => WorkerRoleSchema)
}).strict();

export const OrderUpdateWithoutComponyInputSchema: z.ZodType<Prisma.OrderUpdateWithoutComponyInput> = z.object({
  items: z.union([ z.lazy(() => OrderItemListUpdateEnvelopeInputSchema),z.lazy(() => OrderItemCreateInputSchema),z.lazy(() => OrderItemCreateInputSchema).array() ]).optional(),
  subtotal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  delivery: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  discount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  total: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  coupon: z.lazy(() => CouponUpdateOneWithoutOrdersNestedInputSchema).optional()
}).strict();

export const OrderUncheckedUpdateWithoutComponyInputSchema: z.ZodType<Prisma.OrderUncheckedUpdateWithoutComponyInput> = z.object({
  items: z.union([ z.lazy(() => OrderItemListUpdateEnvelopeInputSchema),z.lazy(() => OrderItemCreateInputSchema),z.lazy(() => OrderItemCreateInputSchema).array() ]).optional(),
  subtotal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  delivery: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  discount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  total: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  couponId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const OrderUncheckedUpdateManyWithoutOrdersInputSchema: z.ZodType<Prisma.OrderUncheckedUpdateManyWithoutOrdersInput> = z.object({
  items: z.union([ z.lazy(() => OrderItemListUpdateEnvelopeInputSchema),z.lazy(() => OrderItemCreateInputSchema),z.lazy(() => OrderItemCreateInputSchema).array() ]).optional(),
  subtotal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  delivery: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  discount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  total: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  couponId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const WorkerUpdateWithoutCompanyInputSchema: z.ZodType<Prisma.WorkerUpdateWithoutCompanyInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => WorkerRoleSchema),z.lazy(() => EnumWorkerRoleFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const WorkerUncheckedUpdateWithoutCompanyInputSchema: z.ZodType<Prisma.WorkerUncheckedUpdateWithoutCompanyInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => WorkerRoleSchema),z.lazy(() => EnumWorkerRoleFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const WorkerUncheckedUpdateManyWithoutWorkersInputSchema: z.ZodType<Prisma.WorkerUncheckedUpdateManyWithoutWorkersInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => WorkerRoleSchema),z.lazy(() => EnumWorkerRoleFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const OrderItemUpdateInputSchema: z.ZodType<Prisma.OrderItemUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  images: z.union([ z.lazy(() => OrderItemUpdateimagesInputSchema),z.string().array() ]).optional(),
  size: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  color: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  freeShipping: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const OrderCreateManyCouponInputSchema: z.ZodType<Prisma.OrderCreateManyCouponInput> = z.object({
  id: z.string().optional(),
  items: z.union([ z.lazy(() => OrderItemListCreateEnvelopeInputSchema),z.lazy(() => OrderItemCreateInputSchema),z.lazy(() => OrderItemCreateInputSchema).array() ]).optional(),
  subtotal: z.number(),
  delivery: z.number(),
  discount: z.number(),
  total: z.number(),
  componyId: z.string()
}).strict();

export const OrderUpdateWithoutCouponInputSchema: z.ZodType<Prisma.OrderUpdateWithoutCouponInput> = z.object({
  items: z.union([ z.lazy(() => OrderItemListUpdateEnvelopeInputSchema),z.lazy(() => OrderItemCreateInputSchema),z.lazy(() => OrderItemCreateInputSchema).array() ]).optional(),
  subtotal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  delivery: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  discount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  total: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  compony: z.lazy(() => ComponyUpdateOneRequiredWithoutOrdersNestedInputSchema).optional()
}).strict();

export const OrderUncheckedUpdateWithoutCouponInputSchema: z.ZodType<Prisma.OrderUncheckedUpdateWithoutCouponInput> = z.object({
  items: z.union([ z.lazy(() => OrderItemListUpdateEnvelopeInputSchema),z.lazy(() => OrderItemCreateInputSchema),z.lazy(() => OrderItemCreateInputSchema).array() ]).optional(),
  subtotal: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  delivery: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  discount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  total: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  componyId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const BusinessUpdateWithoutCouponsInputSchema: z.ZodType<Prisma.BusinessUpdateWithoutCouponsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phoneNumber: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  state: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  location: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  neighborhood: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => BusinessTypeSchema),z.lazy(() => EnumBusinessTypeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const BusinessUncheckedUpdateWithoutCouponsInputSchema: z.ZodType<Prisma.BusinessUncheckedUpdateWithoutCouponsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phoneNumber: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  state: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  location: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  neighborhood: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => BusinessTypeSchema),z.lazy(() => EnumBusinessTypeFieldUpdateOperationsInputSchema) ]).optional(),
  couponIds: z.union([ z.lazy(() => BusinessUpdatecouponIdsInputSchema),z.string().array() ]).optional(),
}).strict();

export const BusinessUncheckedUpdateManyWithoutBusinessesInputSchema: z.ZodType<Prisma.BusinessUncheckedUpdateManyWithoutBusinessesInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phoneNumber: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  state: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  location: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  neighborhood: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => BusinessTypeSchema),z.lazy(() => EnumBusinessTypeFieldUpdateOperationsInputSchema) ]).optional(),
  couponIds: z.union([ z.lazy(() => BusinessUpdatecouponIdsInputSchema),z.string().array() ]).optional(),
}).strict();

export const OrderItemUpdateimagesInputSchema: z.ZodType<Prisma.OrderItemUpdateimagesInput> = z.object({
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

export const ComponyFindFirstArgsSchema: z.ZodType<Prisma.ComponyFindFirstArgs> = z.object({
  select: ComponySelectSchema.optional(),
  include: ComponyIncludeSchema.optional(),
  where: ComponyWhereInputSchema.optional(),
  orderBy: z.union([ ComponyOrderByWithRelationInputSchema.array(),ComponyOrderByWithRelationInputSchema ]).optional(),
  cursor: ComponyWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ComponyScalarFieldEnumSchema.array().optional(),
}).strict()

export const ComponyFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ComponyFindFirstOrThrowArgs> = z.object({
  select: ComponySelectSchema.optional(),
  include: ComponyIncludeSchema.optional(),
  where: ComponyWhereInputSchema.optional(),
  orderBy: z.union([ ComponyOrderByWithRelationInputSchema.array(),ComponyOrderByWithRelationInputSchema ]).optional(),
  cursor: ComponyWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ComponyScalarFieldEnumSchema.array().optional(),
}).strict()

export const ComponyFindManyArgsSchema: z.ZodType<Prisma.ComponyFindManyArgs> = z.object({
  select: ComponySelectSchema.optional(),
  include: ComponyIncludeSchema.optional(),
  where: ComponyWhereInputSchema.optional(),
  orderBy: z.union([ ComponyOrderByWithRelationInputSchema.array(),ComponyOrderByWithRelationInputSchema ]).optional(),
  cursor: ComponyWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ComponyScalarFieldEnumSchema.array().optional(),
}).strict()

export const ComponyAggregateArgsSchema: z.ZodType<Prisma.ComponyAggregateArgs> = z.object({
  where: ComponyWhereInputSchema.optional(),
  orderBy: z.union([ ComponyOrderByWithRelationInputSchema.array(),ComponyOrderByWithRelationInputSchema ]).optional(),
  cursor: ComponyWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const ComponyGroupByArgsSchema: z.ZodType<Prisma.ComponyGroupByArgs> = z.object({
  where: ComponyWhereInputSchema.optional(),
  orderBy: z.union([ ComponyOrderByWithAggregationInputSchema.array(),ComponyOrderByWithAggregationInputSchema ]).optional(),
  by: ComponyScalarFieldEnumSchema.array(),
  having: ComponyScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const ComponyFindUniqueArgsSchema: z.ZodType<Prisma.ComponyFindUniqueArgs> = z.object({
  select: ComponySelectSchema.optional(),
  include: ComponyIncludeSchema.optional(),
  where: ComponyWhereUniqueInputSchema,
}).strict()

export const ComponyFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ComponyFindUniqueOrThrowArgs> = z.object({
  select: ComponySelectSchema.optional(),
  include: ComponyIncludeSchema.optional(),
  where: ComponyWhereUniqueInputSchema,
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

export const ProductFindFirstArgsSchema: z.ZodType<Prisma.ProductFindFirstArgs> = z.object({
  select: ProductSelectSchema.optional(),
  where: ProductWhereInputSchema.optional(),
  orderBy: z.union([ ProductOrderByWithRelationInputSchema.array(),ProductOrderByWithRelationInputSchema ]).optional(),
  cursor: ProductWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ProductScalarFieldEnumSchema.array().optional(),
}).strict()

export const ProductFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ProductFindFirstOrThrowArgs> = z.object({
  select: ProductSelectSchema.optional(),
  where: ProductWhereInputSchema.optional(),
  orderBy: z.union([ ProductOrderByWithRelationInputSchema.array(),ProductOrderByWithRelationInputSchema ]).optional(),
  cursor: ProductWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ProductScalarFieldEnumSchema.array().optional(),
}).strict()

export const ProductFindManyArgsSchema: z.ZodType<Prisma.ProductFindManyArgs> = z.object({
  select: ProductSelectSchema.optional(),
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
  where: ProductWhereUniqueInputSchema,
}).strict()

export const ProductFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ProductFindUniqueOrThrowArgs> = z.object({
  select: ProductSelectSchema.optional(),
  where: ProductWhereUniqueInputSchema,
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

export const ComponyCreateArgsSchema: z.ZodType<Prisma.ComponyCreateArgs> = z.object({
  select: ComponySelectSchema.optional(),
  include: ComponyIncludeSchema.optional(),
  data: z.union([ ComponyCreateInputSchema,ComponyUncheckedCreateInputSchema ]),
}).strict()

export const ComponyUpsertArgsSchema: z.ZodType<Prisma.ComponyUpsertArgs> = z.object({
  select: ComponySelectSchema.optional(),
  include: ComponyIncludeSchema.optional(),
  where: ComponyWhereUniqueInputSchema,
  create: z.union([ ComponyCreateInputSchema,ComponyUncheckedCreateInputSchema ]),
  update: z.union([ ComponyUpdateInputSchema,ComponyUncheckedUpdateInputSchema ]),
}).strict()

export const ComponyCreateManyArgsSchema: z.ZodType<Prisma.ComponyCreateManyArgs> = z.object({
  data: z.union([ ComponyCreateManyInputSchema,ComponyCreateManyInputSchema.array() ]),
}).strict()

export const ComponyDeleteArgsSchema: z.ZodType<Prisma.ComponyDeleteArgs> = z.object({
  select: ComponySelectSchema.optional(),
  include: ComponyIncludeSchema.optional(),
  where: ComponyWhereUniqueInputSchema,
}).strict()

export const ComponyUpdateArgsSchema: z.ZodType<Prisma.ComponyUpdateArgs> = z.object({
  select: ComponySelectSchema.optional(),
  include: ComponyIncludeSchema.optional(),
  data: z.union([ ComponyUpdateInputSchema,ComponyUncheckedUpdateInputSchema ]),
  where: ComponyWhereUniqueInputSchema,
}).strict()

export const ComponyUpdateManyArgsSchema: z.ZodType<Prisma.ComponyUpdateManyArgs> = z.object({
  data: z.union([ ComponyUpdateManyMutationInputSchema,ComponyUncheckedUpdateManyInputSchema ]),
  where: ComponyWhereInputSchema.optional(),
}).strict()

export const ComponyDeleteManyArgsSchema: z.ZodType<Prisma.ComponyDeleteManyArgs> = z.object({
  where: ComponyWhereInputSchema.optional(),
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

export const ProductCreateArgsSchema: z.ZodType<Prisma.ProductCreateArgs> = z.object({
  select: ProductSelectSchema.optional(),
  data: z.union([ ProductCreateInputSchema,ProductUncheckedCreateInputSchema ]),
}).strict()

export const ProductUpsertArgsSchema: z.ZodType<Prisma.ProductUpsertArgs> = z.object({
  select: ProductSelectSchema.optional(),
  where: ProductWhereUniqueInputSchema,
  create: z.union([ ProductCreateInputSchema,ProductUncheckedCreateInputSchema ]),
  update: z.union([ ProductUpdateInputSchema,ProductUncheckedUpdateInputSchema ]),
}).strict()

export const ProductCreateManyArgsSchema: z.ZodType<Prisma.ProductCreateManyArgs> = z.object({
  data: z.union([ ProductCreateManyInputSchema,ProductCreateManyInputSchema.array() ]),
}).strict()

export const ProductDeleteArgsSchema: z.ZodType<Prisma.ProductDeleteArgs> = z.object({
  select: ProductSelectSchema.optional(),
  where: ProductWhereUniqueInputSchema,
}).strict()

export const ProductUpdateArgsSchema: z.ZodType<Prisma.ProductUpdateArgs> = z.object({
  select: ProductSelectSchema.optional(),
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