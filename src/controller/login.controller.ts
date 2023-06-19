import { Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHttp';
import login from '../service/login.service';

async function logincontroller(req: Request, res: Response): Promise<Response> {
  const resposta = await login.login(req.body);
  if (resposta.status !== 'SUCCESSFUL') {
    return res.status(mapStatusHTTP(resposta.status)).json(resposta.data); 
  }

  return res.status(200).json(resposta.data);
}

export default { logincontroller };