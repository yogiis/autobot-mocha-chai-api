const { expect } = require('chai');
const api = require('../page_object/api_get_request');
const chai = require('chai');
chai.use(require('chai-json-schema'));

const schema = require('../schema/user_list_schema.json');

describe('@get user list', () => {
      let userId;
      before(`@getir it success get user list data`, async () => {
        const response = await api.getUserList();
        expect(response.status).to.equal(200);
        userId = response.body.data[1].id
      });

      it(`@beforetests it success get user single data`, async () => {
        const response = await api.getUser(userId);
        expect(response.status).to.equal(200);
        expect(response.body.data.id).to.equal(userId);
      });
      it(`@getschemas it success get user list data`, async () => {
        const response = await api.getUserList();
        expect(response.body.data[0].last_name).to.equal('Bluth')
        expect(response.status).to.equal(200);
        expect(response.body).to.be.jsonSchema(schema);
      });

  });
