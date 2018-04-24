const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App', () => {

  var db = {
    saveUser: expect.createSpy()
  };
  app.__set__('db', db);

  it('should call the spy correctly', () => {
    var spy = expect.createSpy();
    spy('Brenna', 20);
    expect(spy).toHaveBeenCalledWith('Brenna', 20);
  });

  // it('should call saveUser with user object', () => {
  //   var email = 'jcoz@coz.com';
  //   var password = 'abcd';

  //   app.handleSignup(email, password);

  //   expect(db.saveUser).toHaveBeenCalledWith({email, password});
  // });

});
