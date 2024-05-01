interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [name: string]: any;
};

interface Directors extends Teacher {
  numberOfReporst: number;
};

// function printTeacher interface
interface printTeacherFunction {
  (a:string, b: string): string;
};

// class StudentClass interface including its constructor
interface StudentClass {
  new(firstName: string, lastName: string): StudentClass;
};

interface Students extends StudentClass {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
};


let printTeacher: printTeacherFunction;
printTeacher = (firstName: string, lastName:string): string => {
  return `${firstName[0]}. ${lastName}`
}

// class StudentClass
class StudentClass implements Students{
  firstName: string;
  lastName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  workOnHomework(): string {
    return 'Currently working';
  }
  displayName(): string {
    return this.firstName;
  }
}


const student = new StudentClass('John', 'Doe');
console.log(student.workOnHomework());
console.log(student.displayName());