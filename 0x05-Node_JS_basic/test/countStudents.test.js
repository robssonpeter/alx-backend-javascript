const { assert } = require('chai');
const countStudents = require('../2-read_file.js');
const response = 'Number of students: 10\n'+
'Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie\n'+
'Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy'

countStudents('database.csv')
//assert.strictEqual(countStudents('database.csv'), response, 'checking equality');