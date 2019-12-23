const request = require('supertest');
const env = require('dotenv').config();
const api = request(process.env.baseUrl);
const getUser =  (id) => api.get(`/api/users/${id}`);
const getListUser =  (id) => api.get(`/api/users?page=${id}`);


// exports = getUser11;

module.exports = {
    getUser,getListUser,
  };