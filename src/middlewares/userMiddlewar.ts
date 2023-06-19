import { Request, Response, NextFunction } from 'express';
import User from '../database/models/user.model';

const validateUser = async (req: Request, res: Response, next: NextFunction) => {
  const user = req.body;

  if (!user.userId) {
    return res.status(400).json({ message: '"userId" is required' });
  }

  if (typeof user.userId !== 'number') {
    return res.status(422).json({ message: '"userId" must be a number' });
  }

  const userExists = await User.findByPk(user.userId);
  if (!userExists) {
    return res.status(404).json({ message: '"userId" not found' });
  }
  next();
};

export default validateUser;