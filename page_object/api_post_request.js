const supertest = require('supertest');
require('dotenv').config({ path:'/Users/mac/Project/atlas/learn-api-test-js/environment.env'});
const api = supertest(process.env.BASE_URL);
const postDataBody = require('../data/post_data.json')

const path = '/users';

// const postDataBody = {
//     "name": "rano",
//     "job": "karno"
//   }

function postUser(postBody){
    return api.post(path)
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json')
    .send(postBody);
  }

  module.exports = {
    postUser,postDataBody
  }