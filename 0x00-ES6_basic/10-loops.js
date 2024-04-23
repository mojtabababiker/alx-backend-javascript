export default function appendToEachArrayValue(array, appendString) {
  for (const item of array) {
    // eslint-disable-next-line
    array[array.indexOf(item)] = appendString + item;
  }
  return array;
}
