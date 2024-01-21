
export class Employee {
    id: number = 0;
    firstName: string;
    lastName: string;
    emailId: string;
    constructor(firstName: string, lastName: string, emailId: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailId = emailId;
    }
}
