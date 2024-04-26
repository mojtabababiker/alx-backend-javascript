import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (!(typeof (amount) === 'number')) {
      throw new TypeError('Amount must be a number');
    }
    if (!(currency instanceof Currency)) {
      throw new TypeError('Currency must be a Currency object');
    }

    // set instance attributes
    this._amount = amount;
    this._currency = currency;
  }

  // amunt getter and setter
  get amount() {
    return this._amount;
  }

  set amount(value) {
    if (!(typeof (value) === 'number')) {
      throw new TypeError('Amount must be a number');
    }
    this._amount = value;
  }

  // curency getter and setter
  get currency() {
    return this._currency;
  }

  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('Currency must be a Currency object');
    }
    this._currency = value;
  }

  // static methods
  // price converation method
  static convertPrice(amount, conversionRate) {
    if (!(typeof (conversionRate) === 'number')) {
      throw new TypeError('Conversion rate must be a number');
    }
    if (!(typeof (amount) === 'number')) {
      throw new TypeError('Amount must be a number');
    }
    return amount * conversionRate;
  }

  // full price format method
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }
}
