import { Request, Response } from 'express';
import order from '../service/order.service';

async function procurarPedido(req: Request, res: Response): Promise<Response> {
  const pedidos = await order.order();

  return res.status(200).json(pedidos);
}

export default { procurarPedido };