import { Student, Teacher, Group, Payment, Salary, Organization } from './main.js';

// Student
let me = new Student("Jo'rayev", 'Javohir', 998335568060, 'Chilonzor');
console.log(me.fullName); 
me.fullName = 'Aliyev Bobur';
console.log(me.fullName); 
console.log(me.info()); 

// Teacher
let teacher = new Teacher("Rosulov", "Boburmirzo", "Chilonzor", 12_000_000, "Senior");
console.log(teacher.fullInfo); 
teacher.updateSalary = 14_000_000; 
console.log(teacher.fullInfo); 

// Group
let group = new Group("N83", "Slace", "beginner", 16, 'Boburmirzo');
console.log(group.groupName); 
group.groupName = 'N90'; 
console.log(group.groupName); 
console.log(group.fullInformation()); 

// Payment
let hozirgi = new Date();
let kun = hozirgi.getDate();
let oy = hozirgi.getMonth() + 1;
let yil = hozirgi.getFullYear();
let kunOyYil = `${kun}.${oy}.${yil}`;

let payment = new Payment("John", 'Javohir', 200_000, kunOyYil, true);
console.log(payment.statusInfo); 
payment.updateStatus = false; 
console.log(payment.statusInfo); 

// Salary
let salary = new Salary('Mike', 150, 'USD', kunOyYil, false);
console.log(salary.salaryInfo); 
salary.updateSalaryAmount = 200; 
console.log(salary.salaryInfo); 

// Organization
let organization = new Organization("Najot ta'lim", 'Temurbek Adhamov', "Chilonzor 9-mavze, 13/1", 400);
console.log(organization.organizationInfo); 
organization.updateEmployeeCount = 500; 
console.log(organization.organizationInfo); 
