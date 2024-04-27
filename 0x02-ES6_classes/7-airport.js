export default class Airport {
  constructor(name, code) {
    Airport.validate(name, 'Name');
    Airport.validate(code, 'Code');

    // set instance attributes
    this._name = name;
    this._code = code;
  }

  // static methods
  // validation method
  static validate(attr, name) {
    if (typeof (attr) !== 'string') {
      throw new TypeError(`${name} must be a string`);
    }
  }

  // name setter and getter
  get name() {
    return this._name;
  }

  set name(value) {
    Airport.validate(value, 'Name');
    this._name = value;
  }

  // code setter and getter
  get code() {
    return this._code;
  }

  set code(value) {
    Airport.validate(value, 'Code');
    this._code = value;
  }

  // string representaion
  get [Symbol.toStringTag]() {
    return `${this._code}`;
  }
}
