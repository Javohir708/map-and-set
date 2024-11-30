// 1. Student klassi
export class Student {
    constructor(lname, fname, tel, adress) {
        this.lname = lname;
        this.fname = fname;
        this.tel = tel;
        this.adress = adress;
    }

    get fullName() {
        return `${this.lname} ${this.fname}`;
    }

    set fullName(name) {
        const [lname, fname] = name.split(' ');
        this.lname = lname;
        this.fname = fname;
    }

    info() {
        return `Ismi va familyasi: ${this.lname} ${this.fname}, telefon raqami: ${this.tel}, manzili: ${this.adress}`;
    }
}

// 2. Teacher klassi
export class Teacher {
    constructor(lname, fname, adress, salary, level) {
        this.lname = lname;
        this.fname = fname;
        this.adress = adress;
        this.salary = salary;
        this.level = level;
    }

    get fullInfo() {
        return `Ism va familiya: ${this.lname} ${this.fname}, manzil: ${this.adress}, maosh: ${this.salary}, level: ${this.level}`;
    }

    set updateSalary(newSalary) {
        this.salary = newSalary;
    }
}

// 3. Group klassi
export class Group {
    constructor(name, room, level, studentCounts, teacher) {
        this.name = name;
        this.room = room;
        this.level = level;
        this.studentCounts = studentCounts;
        this.teacher = teacher;
    }

    get groupName() {
        return this.name;
    }

    set groupName(newName) {
        return this.name = newName
    }

    fullInformation() {
        return `Guruh nomi: ${this.name}, xona: ${this.room}, level: ${this.level}, o'qiyotganlar soni: ${this.studentCounts}, Guruh ustozi: ${this.teacher}`;
    }
}

// 4. Payment klassi
export class Payment {
    constructor(from, to, amount, date, status) {
        this.from = from;
        this.to = to;
        this.amount = amount;
        this.date = date;
        this.status = status;
    }

    get statusInfo() {
        return `From: ${this.from}, to: ${this.to}, amount: ${this.amount}, date: ${this.date}, status: ${this.status}`;
    }

    set updateStatus(newStatus) {
        this.status = newStatus;
    }
}

// 5. Salary klassi
export class Salary {
    constructor(to, amount, type, date, status) {
        this.to = to;
        this.amount = amount;
        this.type = type;
        this.date = date;
        this.status = status;
    }

    get salaryInfo() {
        return `to: ${this.to}, amount: ${this.amount}, type: ${this.type}, date: ${this.date}, status: ${this.status}`;
    }

    set updateSalaryAmount(newAmount) {
        this.amount = newAmount;
    }
}

// 6. Organization klassi
export class Organization {
    constructor(name, founder, address, employeeCount) {
        this.name = name;
        this.founder = founder;
        this.address = address;
        this.employeeCount = employeeCount;
    }

    get organizationInfo() {
        return `name: ${this.name}, founder: ${this.founder}, address: ${this.address}, employeeCount: ${this.employeeCount}`;
    }

    set updateEmployeeCount(newCount) {
        this.employeeCount = newCount;
    }
}
