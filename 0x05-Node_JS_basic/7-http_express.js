// building simple app server with express.js
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.end('Hello Holberton School!');
});

app.get('/students', (req, res) => {
    res.write('This is the list of our students');
    const path = process.argv[2];
    res.write('This is the list of our students');
    fs.readFile(path, 'utf-8', (error, data) => {
        if (error) {
            res.end('\nCannot load the database');
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
        res.write(`\nNumber of students: ${studentNum}`);
        for (const field in fieldStudent) {
            if (Object.prototype.hasOwnProperty.call(fieldStudent, field)) {
                const students = fieldStudent[field];
                res.write(`\nNumber of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
            }
        }
        res.end();
    });
})

app.listen(1245);

module.exports = app;
