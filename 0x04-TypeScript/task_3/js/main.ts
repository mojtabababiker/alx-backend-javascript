/// <reference types="./crud.d.ts"/>
import { RowID, RowElement } from './interface';
import * as CRUDE from './crud';

const row: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva',
};
const newRowID: RowID = CRUDE.insertRow(row);
const updatedRow: RowElement = {
    ...row,
    age: 23,
};
const updatedID:RowID = CRUDE.updateRow(newRowID, updatedRow);
CRUDE.deleteRow(updatedID);
