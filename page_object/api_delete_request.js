const supertest = require('supertest');
require('dotenv').config({ path:'/Users/mac/Project/atlas/learn-api-test-js/environment.env'});
const api = supertest(process.env.BASE_URL);

const path = '/users';

  function deleteUser(){
    return api.delete(path + '/1')
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json')
    .send();
  }

  module.exports = {
    deleteUser
  }