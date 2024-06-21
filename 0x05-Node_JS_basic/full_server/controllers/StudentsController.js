import readDatabase from '../utils';

export default class StudentsController {
  static getAllStudents(request, response) {
    response.write('This is the list of our students');
    readDatabase(process.argv[2])
      .then(result => {
        const sortedFields = Object.keys(result).sort(
          (a, b) => a.toLocaleLowerCase > b.toLocaleLowerCase
        )
        for (const field of sortedFields) {
          response.write(`\nNumber of students in ${field}: ${result[field].length}. `);
          response.write(`List: ${result[field].join(', ')}`);
        }
      })
      .catch(error => response.status(500).write('Cannot load the database'))
      .finally(() => response.end());
  }

  static getAllStudentsByMajor(request, response) {
    const allowedFields = ['CS', 'SWE'];
    const queryField = request.params.major;
    if (!allowedFields.includes(queryField)) {
      response.status(500).end('Major parameter must be CS or SWE');
      return;
    }
    readDatabase(process.argv[2])
      .then(result => {
        const students = result[queryField] || [];
        response.write(`List: ${students.join(', ')}`);
      })
      .catch(error => response.status(500).write('Cannot load the database'))
      .finally(() => response.end());
  }
}
