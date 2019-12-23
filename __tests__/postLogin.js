const endpoint = require('../endpoint/postLogin');
const dataRequest = require('../dataRequest/postLogin');
const schema = require('../schemaValidator/postLogin');
const body = require('../bodyValidator/postLogin');
const matcher = require('jest-json-schema').matchers;
expect.extend(matcher);

describe('Login User', () => {
    test('Login Successful', async ()=> {
        const response = await endpoint.postLogin(dataRequest.dataLoginSuccessful);
        expect(response.status).toEqual(200);
        expect(response.body).toMatchSchema(schema.schemaLoginSuccessful);
        expect(response.body).toEqual(body.bodyLoginSuccessful);
    });

    test('Login Unsuccessful', async ()=> {
        const response = await endpoint.postLogin(dataRequest.dataLoginUnsuccessful);
        expect(response.status).toEqual(400);
        expect(response.body).toMatchSchema(schema.schemaLoginUnsuccessful);
        expect(response.body).toEqual(body.bodyLoginUnsuccessful);
    });


});