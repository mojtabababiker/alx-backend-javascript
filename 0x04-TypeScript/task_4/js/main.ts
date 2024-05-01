/// <reference path='./subjects/Cpp.ts' />
/// <reference path='./subjects/Java.ts' />
/// <reference path='./subjects/React.ts' />

// creating subjects instance
export const cpp = new Subjects.Cpp();
export const java = new Subjects.Java();
export const react = new Subjects.React();

// creating subjects teacher

export const cTeacher:Subjects.Teacher = {
    firstName: 'Jahn',
    lastName: 'Doe',
    experienceTeachingC: 10,
};

// runngin some tests
console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements);
console.log(cpp.getAvailableTeacher);

console.log('Java');
java.setTeacher(cTeacher);
console.log(java.getRequirements);
console.log(java.getAvailableTeacher);

console.log('React');
react.setTeacher(cTeacher);
console.log(react.getRequirements);
console.log(react.getAvailableTeacher);

