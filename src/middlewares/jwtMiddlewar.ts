import { Request, Response, NextFunction } from 'express';
import verify from '../utils/jwt';

const jwtMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    verify.verifyToken(token);
  
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

export default jwtMiddleware;