const { expect } = require('chai');
const api = require('../page_object/api_put_request');


describe('@put user data', () => {
    context('when user success put data', async() => {
      it(`@put it success post data`, async () => {
        const response = await api.putUser(api.putDataBody);
        console.log(response.body)
        expect(response.status).to.equal(200);
      });
    })
  });
