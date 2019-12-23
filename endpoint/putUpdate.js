const request = require('supertest');
const env = require('dotenv').config();
const api = request(process.env.baseUrl);

const putUpdate = async (id,body) => {
     return api.put(`/api/users/${id}`)
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
    .send(body)
    };

module.exports = {
    putUpdate,
}