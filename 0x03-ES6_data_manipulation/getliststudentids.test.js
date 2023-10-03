const getListStudentIds = require('./1-get_list_student_ids');

test('passing a string to see if returns empty array', () => {
    expect(getListStudentIds('peter')).toStrictEqual([]);
});

test('passing a simple object', () => {
    const test_list = [
        {id: 15},
    ];
    expect(getListStudentIds(test_list)).toStrictEqual([15])
});

test('Passing an array of empty object', () => {
    const arr = [
        {}
    ];
    expect(getListStudentIds(arr)).toStrictEqual([]);
})
