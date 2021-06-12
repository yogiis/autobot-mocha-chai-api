const { expect } = require('chai');
const api = require('../page_object/api_get_request');
const chai = require('chai');
chai.use(require('chai-json-schema'));

const schema = require('../schema/user_list_schema.json');

describe('@get user list', () => {
      it(`@geter it success get user list data`, async () => {
        const response = await api.getUserList();
        console.log(response.body)
        expect(response.status).to.equal(200);
      });
      it(`@getest it success get user list data`, async () => {
        const response = await api.getUserList();
        console.log(response.body)
        expect(response.status).to.equal(200);
      });
      it(`@getschema it success get user list data`, async () => {
        const response = await api.getUserList();
        console.log(response.body)
        expect(response.body.data[0].last_name).to.equal('Bluth')
        expect(response.status).to.equal(200);
        expect(response.body).to.be.jsonSchema(schema);
      });
  });


describe('@get user single data', () => {
  it(`@get it success get user single data`, async () => {
    const response = await api.getUser();
    console.log(response.body)
    // expect(response.body.total).to.equal(12)
    expect(response.status).to.equal(200);
  });
});

