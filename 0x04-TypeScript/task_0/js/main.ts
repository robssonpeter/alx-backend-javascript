interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string,
}

let student1: Student = {
    firstName: "Peter",
    lastName: "Mgembe",
    age: 29,
    location: "Dar es Salaam",
};

let student2: Student = {
    firstName: "Noel",
    lastName: "Banzi",
    age: 36,
    location: "Madale",
};

let studentsList: Student[] = [student1, student2];

let table = document.createElement('table');
let th = document.createElement('th');
let h_name = document.createElement('td');
h_name.textContent = "firstName";
let h_location = document.createElement('td');
h_location.textContent = "location";
th.appendChild(h_name);
th.appendChild(h_location);
table.appendChild(th);

let current_name: any;
let current_location: any;
let current_row;
studentsList.forEach(element => {
    current_row = document.createElement('tr');
    current_name = document.createElement('td');
    current_name.textContent = element.firstName;
    current_location.textContent = element.location;
    current_row.appendChild(current_name);
    current_row.appendChild(current_location);
});