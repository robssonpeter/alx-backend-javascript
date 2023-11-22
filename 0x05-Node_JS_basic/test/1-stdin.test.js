const { exec } = require('child_process');
const { expect } = require('chai');

describe('Interactive Script', () => {
  it('should display the initial question and user name', (done) => {
    const question = 'Welcome to Holberton School, what is your name?';
    const exitMessage = 'This important software is now closing';

    const childProcess = exec('node interactiveScript.js', (error, stdout, stderr) => {
      if (error) {
        done(error);
        return;
      }

      // Ensure that the output includes the initial question
      expect(stdout).to.include(question);

      // Simulate user input
      const simulatedName = 'John\n';
      const expectedOutput = `Your name is: ${simulatedName.trim()}\n${exitMessage}\n`;

      // Ensure that the output matches the expected output
      expect(stdout).to.equal(expectedOutput);

      done();
    });

    // Handle potential errors during execution
    childProcess.on('error', (error) => {
      done(error);
    });

    // Close the stdin stream to end the script
    childProcess.stdin.end();
  }).timeout(10000); // Set a timeout for the test (e.g., 10 seconds)
});
