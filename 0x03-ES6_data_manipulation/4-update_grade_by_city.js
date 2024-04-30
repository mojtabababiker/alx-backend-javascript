export default function updateStudentGradeByCity(objectsArray, city, newGrades) {
  if (!(Array.isArray(objectsArray))) {
    return [];
  }
  const updatedObjects = objectsArray.map((obj) => {
    const grade = newGrades.filter((grades) => grades.studentId === obj.id);
    // eslint-disable-next-line
    obj.grade = grade.length > 0 ? grade[0].grade : 'N/A';
    return obj;
  }).filter((obj) => obj.location === city);

  return updatedObjects;
}
