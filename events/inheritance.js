class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    fullName() {
        return `${this.name} ${this.surname}`
    }
}


//var cristi= new Person("Cristiano","Ronaldo")


class Employee extends Person {
    constructor(name, surname, job, salary) {
        super(name, surname)
        this.job = job;
        this.salary = salary;
    }

    informations() {
        var fullName = this.fullName();
        var fullName = Object.getPrototypeOf(Employee.prototype).fullName.call(this);
    }
    getData() {
        return `${this.name} ${this.surname} ${this.salary}`
    }
    getSalary() {
        return parseInt(this.salary);
    }
    increaseSalary() {
        return parseInt(this.salary * 1.1);

    }
}
// Employee.prototype = Object.create(Person.prototype);
// Employee.prototype.constructor = Employee;

class Developer extends Employee {
    constructor(name, surname, job, salary, specialization) {
        super(name, surname, job, salary, specialization)
        this.specialization = specialization;
    }
}

// Developer.prototype = Object.create(Employee.prototype);
// Developer.prototype.constructor = Developer;


class Manager extends Developer {
    constructor(name, surname, job, salary, specialization, department) {
        super(name, surname, job, salary, specialization, department);
        this.department = department;


    }


    getDepartment() {
        console.log(this.department);
    }

    hangeDepartment(dept) {
        this.department = dept;
    }
}
// Manager.prototype = Object.create(Developer.prototype);
// Manager.prototype.constructor = Manager;


var dept = "Commercial"



var zika = new Person("Zika", "Sarenica");
console.log(zika)

var zikaNoob = new Employee("Zika", "Sarenica", "programator", 25000)
console.log(zikaNoob.fullName())

var zikaDev = new Developer("Zika", "Sarenica", "programator", 45000, "JavaScript")
console.log(zikaDev.getData())

var zikaMan = new Manager("Zika", "Sarenica", "programator", 45000, "JavaScript", dept)
console.log(zikaMan);
