const { expect } = require('chai');
const api = require('../page_object/api_post_request');



describe('@postdata user data', () => {
    context('when user success post data', async() => {
      it(`@postdata it success post data`, async () => {
        const response = await api.postUser(api.postDataBody);
        expect(response.status).to.equal(201);
      });
    })
  });