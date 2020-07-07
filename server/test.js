const app = require('./index.js');
const supertest = require('supertest');
const request = supertest(app);

describe('proxy', () => {

  it('gets the /product endpoint', async () => {
    var response = await request.get('/product?itemID=100')
    expect(response.status).toBe(200);
  });
});
