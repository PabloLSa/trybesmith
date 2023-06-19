import { Request, Response, NextFunction } from 'express';

const validateName = (req: Request, res: Response, next: NextFunction): unknown => { 
  const { name } = req.body;
  if (!name) { 
    return res.status(400).json({ message: '"name" is required' });
  }
  if (typeof name !== 'string') {
    return res.status(422).json({ message: '"name" must be a string' });
  }
  if (name.length < 3) { 
    return res.status(422).json({ message: '"name" length must be at least 3 characters long' });
  }
  next();
};

const valitdatePrice = (req: Request, res: Response, next: NextFunction):unknown => {
  const { price } = req.body;
  if (!price) {
    return res.status(400).json({ message: '"price" is required' });
  }
  if (typeof price !== 'string') {
    return res.status(422).json({ message: '"price" must be a string' });
  }
  if (price.length < 3) {
    return res.status(422).json({ message: '"price" length must be at least 3 characters long' });
  }

  next();
};

const validateProductId = (req: Request, res: Response, next: NextFunction): unknown => {
  const { productIds } = req.body;
  if (!productIds) {
    return res.status(400).json({ message: '"productIds" is required' });
  }

  if (!Array.isArray(productIds)) {
    return res.status(422).json({ message: '"productIds" must be an array' });
  }
  if (productIds.length === 0) {
    return res.status(422).json({ message: '"productIds" must include only numbers' });
  }

  const isNotNumber = productIds.some((productId) => typeof productId !== 'number');
  if (isNotNumber) {
    return res.status(422).json({ message: '"productIds" must be a number' });
  }
  next();
};

export default { validateName, valitdatePrice, validateProductId };