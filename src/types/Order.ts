export type Order = {
  id: number;
  userId: number;
  productId?: number;
  productIds?:{
    id: number,
  }[] 
};

export type OrderReturn = {
  id: number;
  userId: number;
  productIds?: number[]
};
