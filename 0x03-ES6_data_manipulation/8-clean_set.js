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
  return result.join('-');
}
