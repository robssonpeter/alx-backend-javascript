function getStudentIdsSum(students) {
  return students.reduce((total, num) => total + num.id, 0);
}

module.exports = getStudentIdsSum;
