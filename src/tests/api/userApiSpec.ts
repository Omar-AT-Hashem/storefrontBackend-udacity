import supertest from 'supertest'
import app from '../../index'
import { createJWTToken } from '../../createJWTToken'

const request = supertest(app)
const token: string = createJWTToken(1, 'test', 'user')

describe('Users handlers: ', () => {
  it('/users should return a user', () => {
    const data = {
      firstName: 'omar',
      lastName: 'hashem',
      userName: 'omar1',
      password: 'password',
    }
    request
      .post('/api/users')
      .send(data)
      .expect('Content-Type', 'application/json')
      .expect(201)
      .expect({
        id: 1,
        firstName: 'omar',
        lastName: 'hashem',
      })
  })

  it('/users should fail if required fields is not sent', () => {
    const data = {
      firstName: 'omar',
      password: 'password',
    }
    request
      .post('/api/users')
      .set('Authorization', `Bearer ${token}`)
      .send(data)
      .expect('Content-Type', 'application/json')
      .expect(400)
      .expect({
        error: 'Missing name or password',
      })
  })

  it('/users should fail if required password is not sent', () => {
    const data = {
      firstName: 'omar',
      lastName: 'hashem',
    }
    request
      .post('/api/users')
      .set('Authorization', `Bearer ${token}`)
      .send(data)
      .expect('Content-Type', 'application/json')
      .expect(400)
      .expect({
        error: 'Missing name or password',
      })
  })

  it('/users should return all users', () => {
    request
      .get('/api/users')
      .set('Authorization', `Bearer ${token}`)
      .expect(200)
      .expect('Content-Type', 'application/json')
      .expect([
        {
          id: 1,
          firstName: 'omar',
          lastName: 'hashem',
        },
      ])
  })

  it('/users/:id should show a user', () => {
    request
      .get('/api/users/1')
      .set('Authorization', `Bearer ${token}`)
      .expect('Content-Type', 'application/json')
      .expect(200)
      .expect({
        id: 1,
        firstName: 'omar',
        lastName: 'hashem',
      })
  })

  it('/users/:id should update a user', () => {
    const data = {
      firstName: 'omar',
      lastName: 'mohamed',
    }
    request
      .put('/api/users/1')
      .set('Authorization', `Bearer ${token}`)
      .send(data)
      .expect('Content-Type', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect({
        id: 1,
        firstName: 'omar',
        lastName: 'hashem',
      })
  })

  it('/users/:id should delete a user', () => {
    request.delete('/api/users/1').expect(200).expect({
      message: 'Deleted user 1',
    })
  })
})