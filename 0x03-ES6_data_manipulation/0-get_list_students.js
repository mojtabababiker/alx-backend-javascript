export default function getListStudents() {
  const objects = [
    ['Guillaume', 1, 'San Francisco'],
    ['James', 2, 'Columbia'],
    ['Serena', 5, 'San Francisco'],
  ];
  const arr = [];
  for (const obj of objects) {
    const [firstName, id, location] = obj;
    arr.push({ id, firstName, location });
  }
  return arr;
}
