interface Teacher {
    firstName: string,
    readonly fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    lastName: string,
    readonly location: string,
    [key: string]: any,
};

interface Directors extends Teacher {
    numberOfReports: number,
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName[0].toUpperCase()}. ${lastName}`;
}

class StudentCLass {
    firstName: string;
    lastName: string;

    contructor(firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(){
        return "Currently working";
    }

    displayName(){
        return this.firstName;
    }
}


const teacher: Teacher = {
    firstName: "Samwel",
    lastName: "Fleksicon",
    fullTimeEmployee: true,
    yearsOfExperience: 10,
    location: "Boko",
};

const director: Directors = {
    firstName: "Seraphia",
    lastName: "Mgembe",
    fullTimeEmployee: true,
    yearsOfExperience: 5,
    location: "Dodoma",
    numberOfReports: 6,
}

teacher.contract = false;

console.log(teacher);
console.log(director);
console.log(printTeacher('peter', 'Mgembe'));