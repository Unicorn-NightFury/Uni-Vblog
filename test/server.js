/**
 * @description 测试 server
 * @author Uni
 */

 const request = require('supertest');
 const server = require('../src/app').callback();

 module.exports = request(server)