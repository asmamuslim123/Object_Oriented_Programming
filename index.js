const inquirer = require('inquirer');
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class Person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
const persons = new Person();
const programstart = async (persons) => {
    console.log("Welcome!");
    const ans = await inquirer.prompt({
        name: "select",
        type: "list",
        message: "Whom woult you like to interact with?",
        choices: ["staff", "student", "exit"]
    });
    if (ans.select == "staff") {
        console.log("you approach the staff room. please feel free to ask any question.");
    }
    else if (ans.select == "student") {
        const ans = await inquirer.prompt({
            name: "student",
            type: "list",
            message: "Enter the student's name you wish to engage with:"
        });
        const student = persons.students.find(val => val.name == ans.student);
        if (!student) {
            const name = new Student(ans.student);
            persons.addStudent(name);
            console.log(`Hello i am ${name.name} Nice to meet you!`);
            console.log("New student added");
            console.log("Current student list:");
            console.log(persons.students);
        }
        else {
            console.log(`Hello i am ${Student.name} Nice to see you again!`);
            console.log("Existing student list:");
            console.log(persons.students);
        }
    }
    else if (ans.select == "exit") {
        console.log("Exitting the program...");
    }
};
programstart(persons);
export {};
