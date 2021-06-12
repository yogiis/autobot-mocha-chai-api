const { expect } = require('chai');
const supertest = require('supertest');

const api = supertest('https://reqres.in/api');

const path = '/users';

const postDataBody = {
  "name": "rano",
  "job": "karno"
}

const putDataBody = {
  "name": "yogi",
  "job": "lead"
}

function getUserList() {
  return api.get(path).query({ page: 1 })
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json');
}

function getUser() {
  return api.get(path + '/2')
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json');
}

function postUser(postBody){
  return api.post(path)
  .set('Accept', 'application/json')
  .set('Content-Type', 'application/json')
  .send(postBody);
}

function putUser(putBody){
  return api.put(path + '/1')
  .set('Accept', 'application/json')
  .set('Content-Type', 'application/json')
  .send(putBody);
}

function deleteUser(){
  return api.delete(path + '/2')
  .set('Accept', 'application/json')
  .set('Content-Type', 'application/json')
  .send();
}

describe('@post user data', () => {
  context('when user success post data', async() => {
    it(`@post it success post data`, async () => {
      const response = await postUser(postDataBody);
      expect(response.status).to.equal(201);
    });
  })
});

describe('@get user list', () => {
  context('when user hit get user list', async() => {
    it(`@get it success get user list data`, async () => {
      const response = await getUserList();
      console.log(response.body.data.email)
      // expect(response.body.data[0]).to.equal('george.bluth@reqres.in')
      expect(response.body.total).to.equal(12)
      expect(response.status).to.equal(200);
    });
  })  
});

describe('@get user single data', () => {
  context('when user hit get user single', async() => {
    it(`@get it success get user single data`, async () => {
      const response = await getUser();
      console.log(response.body.data.email)
      // expect(response.body.data[0]).to.equal('george.bluth@reqres.in')
      expect(response.status).to.equal(400);
    });
  })  
});

describe('@put user data', () => {
  context('when user success put data', async() => {
    it(`@put it success put data`, async () => {
      const response = await putUser(putDataBody);
      expect(response.status).to.equal(200);
    });
  })
});

describe('@delete user data', () => {
  context('when user success delete data', async() => {
    it(`@delete it success delete data`, async () => {
      const response = await deleteUser();
      expect(response.status).to.equal(204);
    });
  })
});
