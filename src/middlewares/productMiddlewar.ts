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

export default { validateName, valitdatePrice };