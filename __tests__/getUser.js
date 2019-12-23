const endpoint  = require('../endpoint/getUser');
const schemaValidator = require ('../schemaValidator/getUser');
const bodyValidator = require ('../bodyValidator/getUser');
const matchers  = require('jest-json-schema').matchers;
expect.extend(matchers);


describe('Get User Scenario', () => {
    test('Get Single user', async () => {
    const response = await endpoint.getUser(2);
    expect(response.status).toEqual(200);
    expect(response.body).toMatchSchema(schemaValidator.schemaSingleUser);
    expect(response.body).toEqual(bodyValidator.bodySingleUser);
    });
   
    test('Get Single User Not Found', async () => {
    const response = await endpoint.getUser(23);
    expect(response.status).toEqual(404);
    });

    test('Get List User', async()  => {
    const response = await endpoint.getListUser(2);
    expect(response.status).toEqual(200);
    expect(response.body).toMatchSchema(schemaValidator.schemaListUser);
    expect(response.body).toEqual(bodyValidator.bodyListUser);
    });

});
