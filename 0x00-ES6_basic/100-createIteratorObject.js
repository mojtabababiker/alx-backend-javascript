export default function createIteratorObject(report) {
  const iteratorObj = {
    [Symbol.iterator]() {
      let allEmps = [];
      for (const depEmps of Object.values(report.allEmployees)) {
        allEmps = allEmps.concat(depEmps);
      }
      let i = -1;
      return {
        next() {
          i += 1;
          if (i >= allEmps.length) {
            return { value: undefined, done: true };
          }
          return { value: allEmps[i], done: false };
        },
      };
    },
  };
  return iteratorObj;
}
