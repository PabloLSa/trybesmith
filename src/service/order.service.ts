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
  console.log('******', pedidos);
  
  return pedidos;
}

export default { order };
