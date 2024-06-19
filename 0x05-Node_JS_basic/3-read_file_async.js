// read file async using nodejs fs module
const fs = require('fs');

function countStudents(path) {
  /* Read the file on 'path' if avaliable, and return a promis that
     print information about the file

     args:
     -----
     path: the path of the file to open

     return:
     -------
     A promise the read the file content and print information about it
  */
  const promise = new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
        return;
      }
      let studentNum = 0;
      const fieldStudent = {};

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
      resolve();
    });
  });
  return promise;
}

module.exports = countStudents;
