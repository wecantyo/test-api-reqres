const endpoint = require('../endpoint/postRegister');
const schema = require('../schemaValidator/postRegister');
const dataRequest = require('../dataRequest/postRegister');
const body = require('../bodyValidator/postRegister');
const matcher = require('jest-json-schema').matchers;
expect.extend(matcher);

describe('Post Register Successful User', () => {
    test('Register Successful', async () => {
        const response = await endpoint.postRegister(dataRequest.dataRegisterSuccesful);
        expect(response.status).toEqual(200);
        expect(response.body).toEqual(body.bodyRegisterSuccessful);
        expect(response.body).toMatchSchema(schema.schemaRegisterSuccessful);
    })

    test('Register Unsuccessful', async () => {
        const response = await endpoint.postRegister(dataRequest.dataRegisterUnsuccessful);
        expect(response.status).toEqual(400);
        expect(response.body).toEqual(body.bodyRegisterUnsuccessful);
        expect(response.body).toMatchSchema(schema.schemaRegisterUnsuccessful);
    })
})