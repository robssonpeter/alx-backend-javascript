const assert = require('assert');
const displayMessage = require('../0-console.js');

const str = "Your expected string here";

test('printing information', () => {
    const consoleSpy = jest.spyOn(console, 'log');

    // Call the function inside the test
    displayMessage(str);

    expect(consoleSpy).toHaveBeenCalledWith(str);

    // Clean up the spy
    consoleSpy.mockRestore();
});