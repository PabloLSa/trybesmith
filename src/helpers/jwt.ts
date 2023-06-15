import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'secret';

const createToken = (id: number, username: string): string => {
  const token = jwt.sign({ id, username }, secret, { algorithm: 'HS256', expiresIn: '10d' });
  return token;
};

export default createToken;