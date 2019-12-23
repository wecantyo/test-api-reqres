const endpoint = require('../endpoint/putUpdate');
const dataRequest = require('../dataRequest/putUpdate');
const schema = require('../schemaValidator/putUpdate');
const matcher = require('jest-json-schema').matchers;
expect.extend(matcher);

describe ('Put Update User', () => {
    test('Put Update', async () => {
        const response = await endpoint.putUpdate(2,dataRequest.dataUpdate);
        expect(response.status).toEqual(200);
        expect(response.body).toMatchSchema(schema.schemaUpdate);
    });
});