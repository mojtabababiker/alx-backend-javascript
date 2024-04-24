export default function iterateThroughObject(reportWithIterator) {
  const empsArray = [];

  for (const emp of reportWithIterator) {
    empsArray.push(emp);
  }
  return empsArray.join(' | ');
}
