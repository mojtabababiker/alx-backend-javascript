/// <reference path='./Subject.ts' />
// extending the Subject namespace to include the React Subject
namespace Subjects {
    export interface Teacher {
        experienceTeachingReact?: number;
    }

    export class React extends Subject {
        getRequirements(): string {
            return 'Here is the list of requirements for React';
        }

        getAvailableTeacher(): string {
            if (this.teacher.experienceTeachingReact > 0) {
                return `Availabe Teacher: ${this.teacher.firstName}`;
            }
            return 'No available teacher';
        }
    }
}
