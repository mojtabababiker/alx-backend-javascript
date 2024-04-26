export default class HolbertonCourse {
  constructor(name, length, students) {
    // validate attributes
    HolbertonCourse.validate(name, 'string', 'Name must be a string');
    HolbertonCourse.validate(length, 'number', 'Length must be a number');
    HolbertonCourse.validate(students, 'array', 'Students must be an array');

    this._name = name;
    this._length = length;
    this._students = students;
  }

  // validate function
  static validate(attr, type, msg) {
    if (Array.isArray(attr)) {
      for (const student of attr) {
        // eslint-disable-next-line
        if (!(typeof (student) === 'string')) {
          throw new TypeError('Students must be an array of strings');
        }
      }
      // eslint-disable-next-line
    } else if (!(typeof (attr) === type)) {
      throw new TypeError(msg);
    }
  }

  // name getter and setter
  get name() {
    return this._name;
  }

  set name(value) {
    HolbertonCourse.validate(value, 'string', 'Name must be a string');
    this._name = value;
  }

  // length getter and setter
  get length() {
    return this._length;
  }

  set length(value) {
    HolbertonCourse.validate(value, 'integer', 'Length must be a number');
    this._length = value;
  }

  // students getter and setter
  get students() {
    return this._students;
  }

  set students(value) {
    HolbertonCourse.validate(value, 'array', 'Students must be an array');
    this._students = value;
  }
}
