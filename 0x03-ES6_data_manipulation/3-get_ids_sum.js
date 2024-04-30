export default function getStudentIdsSum(objectsArray) {
  if (!(Array.isArray(objectsArray))) {
    return [];
  }
  const idSum = objectsArray.reduce((sum, obj) => sum + obj.id, 0);
  return idSum || 0;
}
