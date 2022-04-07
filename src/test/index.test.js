import app from '../app'
import request  from 'supertest';





describe('GET/user',  () => {

    test('should response 200', async ()=> {
      const respon = await request(app).get('/cliente').send();
        expect(respon.status).toBe(200);
        
    });

    test('should responds with an array', async ()=> {
      const respon = await request(app).get('/cliente').send();
        expect(respon.body).toBeInstanceOf(Array);
        
    });

  });

  describe('POST/user',()=>{


    it('should response 200 post', async ()=> {
     const response= await request(app).post('/user').send({ nombre_user :"lkiux",correo: "ingklkssss@gmail.com", password : "ksjjs"});
     expect(response.headers["Content-Type"])
     expect(response.statusCode).toEqual(200);
    });

    
  });

// describe("Get User ", () => {

// test("should response with 200", async () => {

//     const response = await request(app).get("/cliente").send(); 
//     console.log(response);

// });

// });