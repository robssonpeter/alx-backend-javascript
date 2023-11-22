const countStudents = require('./countStudents');

// Mocking the fs module
jest.mock('fs', () => ({
  promises: {
    readFile: jest.fn(),
  },
}));

describe('countStudents function', () => {
  it('should count and display the number of students in each course', async () => {
    const mockFileContent = 'John,Doe,john.doe@example.com,Math\nJane,Doe,jane.doe@example.com,Physics';

    // Set up the mocked fs.promises.readFile
    require('fs').promises.readFile.mockResolvedValue(mockFileContent);

    // Mock console.log to capture the output
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    // Call the function
    await countStudents('fake/path/to/database.csv');

    // Assertions
    expect(consoleSpy).toHaveBeenCalledWith('Number of students: 2');
    expect(consoleSpy).toHaveBeenCalledWith('Number of students in Math: 1. List: John');
    expect(consoleSpy).toHaveBeenCalledWith('Number of students in Physics: 1. List: Jane');

    // Clean up
    consoleSpy.mockRestore();
  });

  // Add more test cases for different scenarios as needed
});
