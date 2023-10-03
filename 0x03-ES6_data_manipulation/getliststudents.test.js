const getListStudents = require('./0-get_list_students');
test('check the first element name', ()=> {
    const students = getListStudents();
    expect(students[0].firstName).toBe('Guillaume');
});