import HolbertonCourse from "../2-hbtn_course.js";
import assert from 'assert';

const c1 = new HolbertonCourse("ES6", 1, ["Bob", "Jane"])
console.log(c1.name);
c1.name = "Python 101";
console.log(c1);

/*try {
    c1.name = 12;
} 
catch(err) {
    console.log(err);
}

try {
    const c2 = new HolbertonCourse("ES6", "1", ["Bob", "Jane"]);
}
catch({name, msg}) {
    console.log(msg);
}*/
try {
  const c3 = new HolbertonCourse("ES6", 1, ["Bob", "Jane"]);
  c3.name = 'PHP2';
  c3.length = 10;
  c3.students = ['Thomas', 'moj', 'ali'];

  assert(c3.name === 'PHP2');
  assert(c3.length === 10);
  assert(c3.students.toString() === ['Thomas', 'moj', 'ali'].toString());
} catch(err) {
  console.log(err.message);
}
