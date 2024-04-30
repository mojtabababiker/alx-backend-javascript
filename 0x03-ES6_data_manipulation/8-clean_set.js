export default function cleanSet(set, startString) {
  const result = [];

  if (startString.length <= 0) {
    return '';
  }
  set.forEach((val) => {
    if (val.startsWith(startString)) {
      result.push(val.slice(startString.length));
    }
  });
  return result.join('-');
}
