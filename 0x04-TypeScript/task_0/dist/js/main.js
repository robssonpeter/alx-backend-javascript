var student1 = {
    firstName: "Peter",
    lastName: "Mgembe",
    age: 29,
    location: "Dar es Salaam",
};
var student2 = {
    firstName: "Noel",
    lastName: "Banzi",
    age: 36,
    location: "Madale",
};
var studentsList = [student1, student2];
var table = document.getElementById('students-table');
var current_name;
var current_location;
var current_row;
studentsList.forEach(function (element) {
    current_row = document.createElement('tr');
    current_name = document.createElement('td');
    current_location = document.createElement('td');
    current_name.textContent = element.firstName;
    current_location.textContent = element.location;
    current_row.appendChild(current_name);
    current_row.appendChild(current_location);
    table.appendChild(current_row);
});
//# sourceMappingURL=main.js.map