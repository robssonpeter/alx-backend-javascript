const fs = require('fs');

function countStudents(path) {
  try {
    const file = fs.readFileSync(path, { encoding: 'utf-8' });
    const rows = file.split('\n');
    const fields = {};
    let keys = [];
    let row = [];
    console.log(`Number of students: ${rows.length - 1}`);
    rows.forEach((element) => {
      row = element.split(',');
      keys = Object.keys(fields);
      if (keys.indexOf(row[3]) < 0) {
        fields[row[3]] = { count: 1, students: [row[0]] };
      } else {
        fields[row[3]].count += 1;
        fields[row[3]].students.push(row[0]);
      }
    });
    keys.forEach((key) => {
      const students = fields[key].students.join(', ');
      const { count } = fields[key];
      const msg = `Number of students in ${key}: ${count}. List: ${students}`;
      console.log(msg);
    });
  } catch (exception) {
    // console.log(exception)
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
