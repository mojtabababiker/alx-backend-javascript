export default function getListStudentIds(objectsArray) {
  if (!(Array.isArray(objectsArray))) {
    return [];
  }
  const idsArray = objectsArray.map((obj) => obj.id);

  return idsArray;
}
