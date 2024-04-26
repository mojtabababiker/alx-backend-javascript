import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    if (!(Number.isInteger(floors))) {
      throw new TypeError('Floors must be a number');
    }
    this._floors = floors;
  }

  // floors getter and setter
  get floors() {
    return this._floors;
  }

  set floors(value) {
    if (!(Number.isInteger(value))) {
      throw new TypeError('Floors must be a number');
    }
    this._floors = value;
  }

  // override parent's method
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
