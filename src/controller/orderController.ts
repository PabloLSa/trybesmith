import { Request, Response } from 'express';
import order from '../service/order.service'; // up

async function procurarPedido(req: Request, res: Response): Promise<Response> {
  const pedidos = await order.order();

  return res.status(200).json(pedidos);
}

async function criarPedido(req: Request, res: Response): Promise<Response> {
  const { userId, productIds } = req.body;
  const pedidos = await order.createOrder(userId, productIds);
  
  return res.status(201).json(pedidos);
}

export default { procurarPedido, criarPedido };