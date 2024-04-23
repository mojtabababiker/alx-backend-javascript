export default function createReportObject(employeesList) {
  const reportObject = {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments(employeesList) {
      const numberOfDeps = Object.keys(employeesList).length;
      return numberOfDeps;
    },
  };
  return reportObject;
}
