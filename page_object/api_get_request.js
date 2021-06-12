const supertest = require('supertest');
require('dotenv').config({ path:'/Users/mac/Project/atlas/learn-api-test-js/environment.env'});
const api = supertest(process.env.BASE_URL);

const path = '/users';

function getUserList() {
    return api.get(path)
      .query({ page: 1 })
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json');
  }

  function getUser(id) {
    return api.get(`${path}/${id}`)
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json');
  }


module.exports = {
    getUserList,getUser
}

// npm run tests -- --grep '@beforetest|@getschema' --parallel