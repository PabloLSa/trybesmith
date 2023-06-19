import { OrderReturn } from '../types/Order';
import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';

async function order(): Promise<OrderReturn[]> { 
  const dataValues = await OrderModel.findAll({
    include: [{ model: ProductModel,
      as: 'productIds',
      attributes: {
        exclude: ['name', 'price', 'orderId'],
      },
    }],

  });

  // console.log(dataValues);

  const pedido = dataValues.map((d) => d.dataValues);
  
  const pedidos = pedido.map((d) => ({ 
    productIds: d.productIds?.map((p) => p.id), id: d.id, userId: d.userId }));
  
  return pedidos;
}

async function createOrder(userId: number, productIds: number[]): 
Promise<{ userId: number, productIds: number[] }> {
  const orders = await OrderModel.create({ userId });
  const orderId = orders.dataValues.id;
  // await ProductModel.update({ orderId }, { where: { id: productIds } });
  // console.log('retorno da função >>', { productIds, userId });
  await Promise.all(productIds.map((productId) =>
    ProductModel.update({ orderId }, { where: { id: productId } })));

  return { productIds, userId };
}

export default { order, createOrder };
