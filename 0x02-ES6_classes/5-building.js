export default class Building {
  constructor(sqft) {
    // eslint-disable-next-line
    if (!(typeof (sqft) === 'number')) {
      throw new TypeError('Sqft must be number');
    }
    this._sqft = sqft;

    if (!(Reflect.ownKeys(Reflect.getPrototypeOf(this)).includes('evacuationWarningMessage'))) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  // sqft getter and setter
  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    // eslint-disable-next-line
    if (!(typeof (value) === 'number')) {
      throw new TypeError('Sqft must be number');
    }
    this._sqft = value;
  }

  // check if the children had override the evacuationWarningMessage
  // eslint-disable-next-line
  evacuationWarningMessage() {
    // override on children classes
  }
}
