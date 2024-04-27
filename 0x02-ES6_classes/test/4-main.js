import Pricing from '../4-pricing.js';
import Currency from '../3-currency.js';

const p = new Pricing(100, new Currency("EUR", "Euro"))
console.log(p);
console.log(p.displayFullPrice());

console.log(Pricing.convertPrice(100, 46));

const p2 = new Pricing(100, []);
