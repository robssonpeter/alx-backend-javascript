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
var table = document.createElement('table');
var th = document.createElement('th');
var h_name = document.createElement('td');
h_name.textContent = "firstName";
var h_location = document.createElement('td');
h_location.textContent = "location";
th.appendChild(h_name);
th.appendChild(h_location);
table.appendChild(th);
var current_name;
var current_location;
var current_row;
studentsList.forEach(function (element) {
    current_row = document.createElement('tr');
    current_name = document.createElement('td');
    current_name.textContent = element.firstName;
    current_location.textContent = element.location;
    current_row.appendChild(current_name);
    current_row.appendChild(current_location);
});
//# sourceMappingURL=main.js.map