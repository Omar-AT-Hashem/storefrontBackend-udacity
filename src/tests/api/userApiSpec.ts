import supertest, { Response, Test } from 'supertest';
import app from '../../index';

const request: supertest.SuperTest<Test> = supertest(app);

const testUser = {
  firstName: 'test',
  lastName: 'user',
  userName: 'testUserAPI',
  password: 'test123'
};

describe('User API', () => {
  describe('endpoint /users', () => {
    it('index endpoint should unauthorized', async () => {
      const response: Response = await request.get('/users');
      expect(response.status).toBe(404);
    });
  });

  describe('endpoint /users/create', () => {
    it('for create user /users/create', async () => {
      // const response: Response = await request
      //   .post('localhost:3000/api/users/create')
      //   .set('Content-type', 'application/json')
      //   .send(testUser);

        request
        .post('localhost:3000/api/users/create')
        .send(testUser)
        .expect('Content-Type', 'application/json')
        .expect(200)
    })
    });

    it('for get user /users/1', async () => {
      const response: Response = await request.get('/users/1');
      expect(response.status).toBe(404);
    });

    it('for update /users/1', async () => {
      const response: Response = await request.put('/users/1');
      expect(response.status).toBe(404);
    });
  });

  describe('invalid endpoint: /user', () => {
    it('returns 404 for invalid endpoint', async () => {
      const response: Response = await request.get('/user');
      expect(response.status).toBe(404);
    });
  });

