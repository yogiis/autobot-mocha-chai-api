const { expect } = require('chai');
const api = require('../page_object/api_delete_request');


describe('@delete user data', () => {
    context('when user success delete data', async() => {
      it(`@delete it success delete data`, async () => {
        const response = await api.deleteUser();
        console.log(response.body)
        expect(response.status).to.equal(204);
      });
    })
  });
