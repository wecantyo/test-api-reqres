const request = require('supertest');
const env = require('dotenv').config();
const api = request(process.env.baseUrl);

const postCreate = async (body) => {
     return api.post('/api/users')
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
    .send(body)
    };

module.exports = {
    postCreate,
};