import supertest, { Response, Test } from 'supertest';
import app from '../../index';

const request: supertest.SuperTest<Test> = supertest(app);

const testProduct =  {  
name: "scent",
price: "25",
category: "perfume"
}

describe('Product API', () => {
  describe('endpoint /products', () => {
    it('index endpoint should return all products', async () => {
      const response: Response = await request.get('/products');
      expect(response.status).toBe(404);
    });
  });

  describe('endpoint /products/create', () => {
    it('for create product /products/create', async () => {
      request
      .post('localhost:3000/api/products/create')
      .send(testProduct)
      .expect('Content-Type', 'application/json')
      .expect(200)
  })
  });
    });

    it('for get product /products/1', async () => {
      const response: Response = await request.get('/products/1');
      expect(response.status).toBe(404);
    });

    it('for update /products/1 unauthorized', async () => {
      const response: Response = await request.put('/products/1');
      expect(response.status).toBe(404);
    });

    it('for delete /products/1 unauthorized', async () => {
      const response: Response = await request.put('/products/1');
      expect(response.status).toBe(404);
    });
 

  describe('invalid endpoint: /product', () => {
    it('returns 404 for invalid endpoint', async () => {
      const response: Response = await request.get('/product');
      expect(response.status).toBe(404);
    });
  });

