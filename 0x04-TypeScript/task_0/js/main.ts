interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student ={
    firstName: 'Moj',
    lastName: 'Mo',
    age: 26,
    location: 'Earth',
};

const student2: Student = {
    firstName: 'Ba',
    age: 56,
    lastName: 'Be',
    location: 'Mars',
};

const studentsList: Student[] = [student1, student2];

// creating students table
function createTable(students: Student[]): HTMLTableElement {
    const table = document.createElement('table') as HTMLTableElement;
    const thead = table.createTHead();
    const tbody = table.createTBody();
    // adding table headers
    const headers: string[] = ['First Name', 'Location'];
    const hRow = thead.insertRow();
    headers.forEach((header) => {
        const th = document.createElement('th');
        th.textContent = header;
        hRow.appendChild(th);
    });
    thead.appendChild(hRow);

    // adding table body
    for (const student of students) {
        const row = tbody.insertRow();
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        td1.textContent = student.firstName;
        td2.textContent = student.location;
        tr.appendChild(td1);
        tr.appendChild(td2);
        row.appendChild(tr);
    }
    return table
}
document.onload = () => {
    document.body.appendChild(createTable(studentsList));
}
