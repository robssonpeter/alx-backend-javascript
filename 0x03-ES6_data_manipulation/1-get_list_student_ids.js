function getListStudentIds(lst) {
  // const students = getListStudents();
  if (typeof (lst) !== 'object' || (typeof (lst) === 'object' && !lst.length)) {
    return [];
  }
  const mapped = lst.map((stu) => {
    if (stu.id) {
      return stu.id;
    }
    return undefined;
  });

  return mapped.filter((el) => el !== undefined);
}

module.exports = getListStudentIds;
