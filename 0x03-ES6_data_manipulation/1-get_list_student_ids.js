const getListStudents = require('./0-get_list_students');

function getListStudentIds(lst){
    //const students = getListStudents();
    if(typeof(lst) === 'string'){
        return [];
    }
    const mapped = lst.map((stu) => {
        if(stu.id){
            return stu.id;
        }
    });

    return mapped.filter((el) => el !== undefined)
}

module.exports = getListStudentIds