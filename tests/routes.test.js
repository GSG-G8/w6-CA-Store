const request = require('supertest');

const app = require('../src/app');

test('test main route /',(done)=>{
  request(app)
  .get('/')
  .expect(200)
  .expect('Content-Type', /html/)
  .end((err,res)=>{
      if(err) return done(err)
      else done();
  })
})

