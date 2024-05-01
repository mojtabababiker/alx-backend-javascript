/// <reference path='./Subject.ts' />
// extending the Subject namespace to include the C++ Subject
namespace Subjects {
    export interface Teacher {
        experienceTeachingC?: number;   
    }

    export class Cpp extends Subject {
        getRequirements(): string {
            return 'Here is the list of requirements for Cpp';
        }

        getAvailableTeacher(): string {
            // check if this teacher has experience in C langauge
            if (this.teacher.experienceTeachingC > 0) {
                return `Available Teacher: ${this.teacher.firstName}`;
            }
            return 'No available teacher';
        }
    }
}
