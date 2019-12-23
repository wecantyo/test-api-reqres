const endpoint = require('../endpoint/postCreate');
const schema = require('../schemaValidator/postCreate');
const dataRequest = require('../dataRequest/postCreate');
const matcher = require('jest-json-schema').matchers;
expect.extend(matcher);

describe ('Post Create User', () => {
    test('Post Create', async () => {
        const response = await endpoint.postCreate(dataRequest.dataCreate);
        expect(response.status).toEqual(201);
        expect(response.body).toMatchSchema(schema.schemaCreate);
    });
});