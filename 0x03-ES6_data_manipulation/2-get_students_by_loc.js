function getStudentsByLocation(students, location) {
  return students.filter((el) => el.location === location);
}
module.exports = getStudentsByLocation;
