// reading a file synchronously
const fs = require('fs');

function countStudents(path) {
  /* read the database and print number of students per field
     and their last names.
     if the database can't be reach an error will be throw

     args:
     ------
     path: string represent the path to the database
  */
  let studentNum = 0;
  const fieldStudent = {};
  let data = null;
  try {
    data = fs.readFileSync(path, 'utf-8');
  } catch (error) {
    console.log(error);
    throw new Error('Cannot load the database');
  }
  for (const line of data.split('\n').slice(1)) {
    if (line.length) {
      const temp = line.split(',');
      const firstName = temp[0];
      const field = temp[3];
      if (field in fieldStudent) {
        fieldStudent[field].push(firstName);
      } else {
        fieldStudent[field] = [firstName];
      }
      studentNum += 1;
    }
  }
  console.log(`Number of students: ${studentNum}`);
  for (const field in fieldStudent) {
    if (Object.prototype.hasOwnProperty.call(fieldStudent, field)) {
      const students = fieldStudent[field];
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }
  }
}

module.exports = countStudents;
