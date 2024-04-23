export default function appendToEachArrayValue(array, appendString) {
  const arr = array;
  for (const item of arr) {
    const idx = arr.indexOf(item);
    arr[idx] = appendString + item;
  }
  return arr;
}
