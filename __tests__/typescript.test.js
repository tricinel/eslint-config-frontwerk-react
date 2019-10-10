test('We can require all the rules without throwing', () => {
  expect(() => {
    require('../typescript'); // eslint-disable-line global-require
  }).not.toThrow();
});
