//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();

chai.use(chaiHttp);
//Our parent block
describe('Test Index', () => {
  /*
  * Test the /GET route
  */
  describe('/GET index', () => {
      it('it should GET index page', (done) => {
        chai.request(server)
            .get('/api/v1/users')
            .end((err, res) => {
                res.should.have.status(200);
              done();
            });
      });
  });

});