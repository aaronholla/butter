const hello = require('./hello')

it('returns hello world', () => {
  expect(hello()).toBe("Hello world!")
});