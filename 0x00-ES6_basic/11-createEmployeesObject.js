export default function createEmployeesObject(departmentName, employees) {
  const empsObject = {
    [departmentName]: employees,
  };
  return empsObject;
}
