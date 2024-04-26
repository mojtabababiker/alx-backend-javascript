export default class Currency {
  constructor(code, name) {
    // validate attributes
    Currency.validate(code, 'string', 'Code must be a string');
    Currency.validate(name, 'string', 'Name must be a string');
    // set instance attributes
    this._code = code;
    this._name = name;
  }

  // validation function
  static validate(attr, type, msg) {
    // eslint-disable-next-line
    if (!(typeof (attr) === type)) {
      throw new TypeError(msg);
    }
  }

  // code setter and getter
  get code() {
    return this._code;
  }

  set code(value) {
    Currency.validate(value, 'string', 'Code must be a string');
    this._code = value;
  }

  // name setter and getter
  get name() {
    return this._name;
  }

  set name(value) {
    Currency.validate(value, 'string', 'Name must be a string');
    this._name = value;
  }

  // dispaly full currency format method
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
