import bcrypt from 'bcryptjs';
import { ServiceResponse } from 'src/types/ServiceResponse';
import UserModel from '../database/models/user.model';
import createToken from '../utils/jwt';

type Login = { username: string, password: string };
async function login(user: Login): Promise<ServiceResponse<{ token: string }>> {
  const { username, password } = user;
  const resposta = await UserModel.findOne({
    where: { username },
  });
  
  if (!resposta) {
    return { status: 'UNAUTHORIZED', data: { message: 'Username or password invalid' } };
  }
  const cryptoPassword = resposta.dataValues.password;
  const verifyPassword = bcrypt.compareSync(password, cryptoPassword);
  if (!verifyPassword) {
    // console.log('entrou aqui 2');
    return { status: 'UNAUTHORIZED', 
      data: { message: 'Username or password invalid' } };
  }

  const token = createToken.createToken(resposta.dataValues.id, resposta.dataValues.username);
  return { status: 'SUCCESSFUL', data: { token } };
}

export default { login }; 