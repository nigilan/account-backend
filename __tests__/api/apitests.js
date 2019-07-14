const frisby = require('frisby');
const serverUrl = 'http://localhost:3001/';


it("server's index page", function () {
  return frisby.get(serverUrl)
    .expect('status', 200);
});

it("server 404 test", function () {
    return frisby.get(serverUrl+'random')
      .expect('status', 404);
});

it("accounts index page test", function () {
    return frisby.get(serverUrl+'accounts')
      .expect('status', 404);
});

it("no data found when given wrong name", function () {
    return frisby.get(serverUrl+'accounts/1')
      .expect('status', 401);
});

it('data found when given right values', function () {
    return frisby.get(serverUrl+'accounts/nigilan')
      .then(function (res) {
        const bodyValues = JSON.parse(res._body);
        expect(res.status).toBe(200);
        expect(bodyValues.errMsg).toBe('');
        expect(bodyValues.data).toStrictEqual([1000223232,762183618236,962384672364]);
      });
});

it('case sensitive issue for users', function () {
  return frisby.get(serverUrl+'accounts/Nigilan')
  .then(function (res) {
    const bodyValues = JSON.parse(res._body);
    expect(res.status).toBe(200);
    expect(bodyValues.errMsg).toBe('');
    expect(bodyValues.data).toStrictEqual([1000223232,762183618236,962384672364]);
  });
});