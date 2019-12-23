const request = require('supertest');
const env = require('dotenv').config();
const api = request(process.env.baseUrl);
const getSingleResource = (id) => api.get(`/api/unknown/${id}`);
const getListResource = () => api.get('/api/unkonwn');

module.exports = {
  getSingleResource, getListResource,
  };