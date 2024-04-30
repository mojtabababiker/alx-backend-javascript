export default function getStudentsByLocation(objectsArray, city) {
  if (!(Array.isArray(objectsArray))) {
    return [];
  }
  const filteredArray = objectsArray.filter((obj) => obj.location === city);
  return filteredArray;
}
