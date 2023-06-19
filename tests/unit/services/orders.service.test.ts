import { expect } from 'chai';
import { number } from 'joi';
import sinon from 'sinon';
import OrderModel from '../../../src/database/models/order.model';
import  Order   from '../../../src/service/order.service';

describe('OrdersService', function () {
  beforeEach(function () { sinon.restore(); });

    
    it('deve retornar os pedidos corretos', async function () {
      const order = OrderModel.build( 
        { id: 1, userId: 1, productIds: [{ id: 12}]});
        order.dataValues.productIds = [{id:12}];
      sinon.stub(OrderModel, 
        'findAll').resolves([order]);
        
        const resposta = await Order.order()
        expect(resposta).to.be.deep.equal([{ id: 1, userId: 1, productIds: [12]}]);
      

    })

     it('deve retornar os novos pedidos', async function () {
       const order = OrderModel.build( 
         { userId: 1, productIds: [{id:12}]});
        
      sinon.stub(OrderModel, 
         'create').resolves(order);
        
         const resposta = await Order.createOrder(10,[12] )
          expect(resposta).to.be.deep.equal({ productIds: [ 12 ], userId: 1 });
        



     })
  });
