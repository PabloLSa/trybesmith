import { Request, Response } from 'express';
import productService from '../service/product.service';

async function cadastrarProduto(req: Request, res: Response): Promise<Response> { 
  const product = req.body;
  const resultData = await productService.cadastrarProduto(product);

  return res.status(201).json(resultData);
}

async function procurarProduto(req: Request, res: Response): Promise<Response> {
  const product = await productService.procurarProduto();

  return res.status(200).json(product);
}

export default { cadastrarProduto, procurarProduto };