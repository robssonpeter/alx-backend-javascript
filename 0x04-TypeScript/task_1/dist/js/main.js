;
var printTeacher = function (firstName, lastName) {
    return "".concat(firstName[0].toUpperCase(), ". ").concat(lastName);
};
var teacher = {
    firstName: "Samwel",
    lastName: "Fleksicon",
    fullTimeEmployee: true,
    yearsOfExperience: 10,
    location: "Boko",
};
var director = {
    firstName: "Seraphia",
    lastName: "Mgembe",
    fullTimeEmployee: true,
    yearsOfExperience: 5,
    location: "Dodoma",
    numberOfReports: 6,
};
teacher.contract = false;
console.log(teacher);
console.log(director);
console.log(printTeacher('peter', 'Mgembe'));
//# sourceMappingURL=main.js.map