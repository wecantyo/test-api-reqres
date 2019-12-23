const request = require('supertest');
const env = require('dotenv').config();
const api = request(process.env.baseUrl);

const postRegister = async (body) => {
    return api.post('/api/register')
    .set('Content-Type','application/json')
    .set('Accept', 'application/json')
    .send(body)
};

module.exports = {
    postRegister,
}