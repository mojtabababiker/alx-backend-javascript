export default class HolbertonClass {
  constructor(size, location) {
    // validate instance attributes
    if (!(Number.isInteger(size))) {
      throw new TypeError('Size must be a number');
    }
    if (typeof (location) !== 'string') {
      throw new TypeError('Location must be a string');
    }

    // setting instance attributes
    this._size = size;
    this._location = location;
  }

  // size getter and setter
  get size() {
    return this._size;
  }

  set size(value) {
    if (!(Number.isInteger(value))) {
      throw new TypeError('Size must be a number');
    }
    this._size = value;
  }

  // location getter and setter
  get location() {
    return this._location;
  }

  set location(value) {
    if (typeof (value) !== 'string') {
      throw new TypeError('Location must be a string');
    }
    this._location = value;
  }

  // customize primitive casting values
  // eslint-disable-next-line
  [Symbol.toPrimitive](type) {
    if (type === 'number') {
      return this._size;
    }
    if (type === 'string') {
      return this._location;
    }
  }
}
