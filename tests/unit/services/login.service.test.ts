import UserModel, { UserInputtableTypes } from '../../../src/database/models/user.model';
import { expect } from 'chai';
import sinon from 'sinon';
import bcrypt from 'bcryptjs';
import  loginService  from '../../../src/service/login.service';
import { User } from '../../../src/types/User';

describe('LoginService', function () {
  beforeEach(function () { sinon.restore(); });

  it('deve retornar um token', async function () {
    const resultUser:User = { 
      id: 1, 
      username: 'Hagar',
      password: 'terrível',
      level: 1,
      vocation: "200",
    };
    
    const loginS = UserModel.build(resultUser)
    const userBody = {
        username: 'Hagar',
        password: 'terrível',
    
    }

    sinon.stub(UserModel, 'findOne').resolves(loginS);
    sinon.stub(bcrypt, 'compareSync').returns(true);
    const resposta = await loginService.login(userBody);
    
    

    expect(resposta.status).to.be.equal('SUCCESSFUL');
    expect(resposta.data).to.have.property('token');
    
  });

  it('deve retornar um status: "UNAUTHORIZED", senha inválida', async function () {
    const resultUser:User = { 
      id: 1, 
      username: 'Hagar',
      password: 'senha inválida',
      level: 1,
      vocation: "200",
    };
    
    const loginS = UserModel.build(resultUser)
    const userBody = {
        username: 'Hagar',
        password: 'terrível',
    
    }

    sinon.stub(UserModel, 'findOne').resolves(loginS);
    sinon.stub(bcrypt, 'compareSync').returns(false);
    const resposta = await loginService.login(userBody);
    
    

    expect(resposta.status).to.be.equal('UNAUTHORIZED');
    // expect(resposta.data).to.have.property('token');
    
  });

  it('deve retornar um status: "UNAUTHORIZED", usuário inválida', async function () {
    // const resultUser:User = { 
    //   id: 1, 
    //   username: 'inválido',
    //   password: 'terrível',
    //   level: 1,
    //   vocation: "200",
    // };
    
    // const loginS = UserModel.build(resultUser)
    const userBody = {
        username: 'Hagar',
        password: 'terrível',
    
    }

    sinon.stub(UserModel, 'findOne').resolves(null);
    sinon.stub(bcrypt, 'compareSync').returns(true);
    const resposta = await loginService.login(userBody);
    
    

    expect(resposta.status).to.be.equal('UNAUTHORIZED');
    // expect(resposta.data).to.have.property('token');
    
  });


});
