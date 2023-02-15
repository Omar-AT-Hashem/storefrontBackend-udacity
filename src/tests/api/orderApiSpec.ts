import supertest, { Response, Test } from 'supertest';
import app from '../../index';
import {createJWTToken} from '../../createJWTToken'

const request: supertest.SuperTest<Test> = supertest(app);

const token: string = createJWTToken(1, 'test', 'user')
const testOrder = {
  user_id: 1,
  status: 'active',
}
describe('Orders API', () => {
  describe('endpoint /orders/create', () => {
    it('create orders endpoint ', async () => {
      request
      .post('localhost:3000/api/orders/create')
      .set('Authorization', `Bearer ${token}`)
      .send(testOrder)
      .expect('Content-Type', 'application/json')
      .expect(200)
    });
    it('get user orders /orders/user should be authorized', async () => {
      const response: Response = await request.get('/orders/user');
      expect(response.status).toBe(404);
    });
    it('get user completed orders /orders/user/completed should be authorized', async () => {
      const response: Response = await request.get('/orders/user/completed');
      expect(response.status).toBe(404);
    });
  });

  describe('invalid endpoint: /orders', () => {
    it('returns 404 for invalid endpoint', async () => {
      const response: Response = await request.get('/orders');
      expect(response.status).toBe(404);
    });
  });
});
