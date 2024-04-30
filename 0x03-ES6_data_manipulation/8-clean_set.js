export default function cleanSet(set, startString) {
  const result = [];

  if (startString.length === 0 || !(set instanceof Set)) {
    return '';
  }

  set.forEach((val) => {
    if (val.startsWith(startString)) {
      result.push(val.slice(startString.length));
    }
  });

  if (result.length === 0) {
    return '';
  }
  return result.reduce((sum, current, idx) => {
    if (current === undefined || current.length === 0) {
      return sum;
    }
    if (idx >= result.length) {
      return sum;
    }
    if (sum.length === 0) {
      return current;
    }
    return `${sum}-${current}`;
  }, '');
}
