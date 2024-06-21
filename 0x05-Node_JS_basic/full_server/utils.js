// utilities used by the application
import * as fs from 'fs';

async function readDatabase(filePath) {
  const dbObject = {};
  let fileContent = await fs.promises.readFile(filePath, 'utf-8');
  // get the record line by line from the database
  fileContent = fileContent.split('\n').slice(1);
  // go through all the line and extract the firstName and the field
  for (const record of fileContent) {
    if (record.length > 0) {
      const recordData = record.split(',');
      const firstName = recordData[0];
      const field = recordData[3];
      // if we already have this field in our dbObject
      if (field in dbObject) {
        // then push the current student firstName into the field array
        dbObject[field].push(firstName);
      } else {
        // other-wise add the field into the dbObject with
        // the student [firstName] as value
        dbObject[field] = [firstName];
      }
    }
  }
  // console.log(dbObject);
  return dbObject;
}

// readDatabase(process.argv[2]);

export default readDatabase;
