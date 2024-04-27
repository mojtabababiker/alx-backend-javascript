import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  // range getter and setter
  get range() {
    return this._range;
  }

  set range(value) {
    this._range = value;
  }

  // override cloneCar super method
  // eslint-disable-next-line
  cloneCar() {
    return new Car();
  }
}
