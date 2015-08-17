var server = require('../server/server.js'),
    should = require('should'),
    request = require('supertest');


describe('get request', function() {
    it('should respond with not allowed', function(done) {
        request(server)
        .get('/')
        .expect(405)
        .end(function(err, res) {
            res.status.should.equal(405);
            done();
        });
    });
});
describe('POST request', function () {
    it('should respond with ok', function (done) {
        request(server)
            .post('/')
            .end(function (err, res) {
                res.status.should.be.equal(200);
                done();
            });
    });
});
