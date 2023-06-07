import ProductModel, { ProductInputtableTypes } from '../database/models/product.model';

async function cadastrarProduto(product: ProductInputtableTypes): Promise<unknown> { 
  const dataValues = await ProductModel.create(product);
  // console.log(dataValues);
  
  return dataValues;
}

async function procurarProduto(): Promise<unknown> {
  const product = await ProductModel.findAll();

  return product;
}

export default { cadastrarProduto, procurarProduto };