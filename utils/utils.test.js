const expect = require('expect');
const utils = require('./utils');


it('should add two numbers', () => {
  var result = utils.add(33, 11);
  expect(result).toBeA('number').toBe(44);
});

it('should get square input', () => {
  var res = utils.square(5);
  expect(res).toBeA('number').toBe(25);
});

// should verify first and last names are set.
it('should set firstName and lastName', () => {
  var user = ({ location: 'Edmond', age: 20 });
  var res = utils.setName(user, 'Brenna Cosby');
  // expect(user.firstName).toBe('Brenna');
  // expect(user.lastName).toBe('Cosby');
  expect(res).toInclude({
    firstName: 'Brenna',
    lastName: 'Cosby'
  });
});

// it('should expect some values', () => {
//   // expect(12).toNotBe(13);
//   // expect({ name: 'Jeffery' }).toEqual({ name: 'Jeffery' });
//   // expect([2,3,4]).toInclude(3);
//   // expect([2,3,4]).toExclude(5);
//   expect({
//     name: 'Brenna',
//     age: 20,
//     location: 'Edmond'
//   }).toInclude({
//     age: 20
//   })
// });



