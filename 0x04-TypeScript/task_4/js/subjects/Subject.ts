/// <reference path='./Teacher.ts' />
// Base namespace that setup the shared attributes
// with all the Subject subClasses
namespace Subjects {
    export class Subject {
        teacher: Teacher;
        setTeacher(teacher_:Teacher): void {
            this.teacher = teacher_;
        }
    }
}