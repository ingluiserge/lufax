import app from '../app';
import request  from 'supertest';




describe('GET /cliente', () => {
    test('responds with json', async ()=> {
      const response = await request(app)
        .get('/cliente').send();
      expect(response.status).toBe(200);
    });
  });


// describe("Get User ", () => {

// test("should response with 200", async () => {

//     const response = await request(app).get("/cliente").send();
//     console.log(response);

// });

// });