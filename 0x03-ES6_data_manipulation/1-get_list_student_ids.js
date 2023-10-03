const getListStudents = require('./0-get_list_students');

function getListStudentIds(lst){
    //const students = getListStudents();
    if(typeof(lst) === 'string'){
        return [];
    }
    return lst.map((stu) => {
        return stu.id;
    })
}

module.exports = getListStudentIds