function updateStudentGradeByCity(students, city, grades) {
  return students.filter((item) => item.location === city).map((item) => {
    const grade = grades.find((g) => g.studentId === item.id);
    let gr = 'N/A';
    if (grade) {
      gr = grade.grade;
    }

    return {
      id: item.id,
      firstName: item.firstName,
      location: item.location,
      grade: gr,
    };
  });
}

module.exports = updateStudentGradeByCity;
