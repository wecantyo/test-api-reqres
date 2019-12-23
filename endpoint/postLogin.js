const request = require('supertest');
const env = require('dotenv').config();
const api = request(process.env.baseUrl);

const postLogin = (body) => { 
    return api.post('/api/login')
    .set('Content-type','application/json')
    .set('Accept','application/json')
    .send(body)
};

module.exports = {
    postLogin,
};