// displayMessage.test.js
const displayMessage = require('../0-console.js');

// Mock console.log to capture the output
let consoleSpy;

beforeEach(() => {
  consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
});

afterEach(() => {
  consoleSpy.mockRestore();
});

test('displayMessage prints the message', () => {
  const message = 'Test message';
  displayMessage(message);
  expect(consoleSpy).toHaveBeenCalledWith(message);
});
