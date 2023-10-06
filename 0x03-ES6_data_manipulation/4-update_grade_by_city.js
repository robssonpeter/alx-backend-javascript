function updateStudentGradeByCity(students, city, grades){
    return students.filter(item => item.location === city).map((item) => {
        const grade = grades.find(g => g.studentId === item.id);
        if (grade){
            item.grade = grade.grade;
        }else{
            item.grade = 'N/A';
        }
        return item;
    })
}

module.exports = updateStudentGradeByCity;