import { NextFunction, Request, Response } from 'express';

function loginMiddleware(req:Request, res:Response, next:NextFunction): unknown {
  const { password, username } = req.body;

  if (!password || !username) { 
    return res.status(400).json({ message: '"username" and "password" are required' }); 
  }
  return next();
}

export default loginMiddleware;