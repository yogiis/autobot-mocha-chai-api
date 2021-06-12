const supertest = require('supertest');
require('dotenv').config({ path:'/Users/mac/Project/atlas/learn-api-test-js/environment.env'});
const api = supertest(process.env.BASE_URL);

const path = '/users';

const putDataBody = {
    "name": "yogi",
    "job": "lead"
  }

function putUser(putBody){
    return api.put(path + '/1')
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json')
    .send(putBody);
  }

  module.exports = {
    putUser,putDataBody
  }