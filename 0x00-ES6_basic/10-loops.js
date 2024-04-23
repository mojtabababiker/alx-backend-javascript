export default function appendToEachArrayValue(array, appendString) {
  const arr = array;
  let idx = 0;
  for (const item of arr) {
    arr[idx] = appendString + item;
    idx += 1;
  }
  array = arr;
  return array;
}
