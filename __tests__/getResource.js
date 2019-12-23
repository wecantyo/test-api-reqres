const endpoint = require('../endpoint/getResource');
const schema = require('../schemaValidator/getResource');
const body = require('../bodyValidator/getResource');
const matchers = require('jest-json-schema').matchers;

expect.extend(matchers);

describe('Get Single Resource Scenario', () => {
    test('Get Single Resource', async () => {
    const response = await endpoint.getSingleResource(2);
    expect(response.status).toEqual(200);
    expect(response.body).toMatchSchema(schema.schemaSingleResource);
    expect(response.body).toEqual(body.bodySingleResource);
    });    

    test('Get Single Resource Not Found', async () => {
    const response = await endpoint.getSingleResource(32);
    expect(response.status).toEqual(404);
    });    

    test('Get List Resource', async()  => {
    const response = await endpoint.getListResource();
    expect(response.status).toEqual(200);
    expect(response.body).toMatchSchema(schema.schemaListResource);
    expect(response.body).toEqual(body.bodyListResource);
    });
});
