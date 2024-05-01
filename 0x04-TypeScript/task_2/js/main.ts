// interfaces part
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
};

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
};

// type part
type Subjects = 'Math' | 'History';

// class part
class Director implements DirectorInterface {
  workFromHome() {
    return 'Working from home';
  }

  getCoffeeBreak() {
    return 'Getting a coffee break';
  }

  workDirectorTasks() {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome() {
    return 'Cannot working from home';
  }

  getCoffeeBreak() {
    return 'Cannot have a break';
  }

  workTeacherTasks() {
    return 'Getting to work';
  }
}

// function part
function createEmployee(salary:number | string): Director|Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

function isDirectory(employee:any): employee is Director {
  return employee instanceof Director;
}

function executeWork(employee: Director|Teacher): string {
  if (isDirectory(employee)) {
    return employee.workDirectorTasks();
  }
  return employee.workTeacherTasks();
}

function teachClass(todayClass: Subjects): string {
  return `Teaching ${todayClass}`;
}
