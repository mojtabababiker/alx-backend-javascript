export default class Car {
  constructor(brand, motor, color) {
    // set instance attribute
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // brand getter and setter
  get brand() {
    return this._brand;
  }

  set brand(value) {
    this._brand = value;
  }

  // motor getter and setter
  get motor() {
    return this._motor;
  }

  set motor(value) {
    this._motor = value;
  }

  // color getter and setter
  get color() {
    return this._color;
  }

  set color(value) {
    this._color = value;
  }

  // creating new class instance method
  cloneCar() {
    const { constructor } = this;
    return new constructor();
  }
}
