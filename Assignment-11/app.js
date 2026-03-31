let students = [
    { id: 1, name: "Ali", age: 18, marks: 85, isPresent: true },
    { id: 2, name: "Ahmad", age: 20, marks: 45, isPresent: false },
    { id: 3, name: "Zubair", age: 19, marks: 72, isPresent: true },
    { id: 4, name: "Sara", age: 21, marks: 95, isPresent: true },
    { id: 5, name: "Hina", age: 17, marks: 55, isPresent: false }
];

// Part 1: map() Questions

// Q1: Get All Student Names 

let allStudentNames = students.map(n => n.name);

console.log(allStudentNames);

// Q2: Get All Student Marks

let allStudentMarks = students.map(m => m.marks)

console.log(allStudentMarks);

// Q3: Add Pass/Fail Result

let allStudentResults = students.map(function (e) {
    let result = "";
    if (e.marks >= 50) {
        result = "Pass";
    }
    else {
        result = "Fail";
    }
    return {
        id: e.id,
        name: e.name,
        marks: e.marks,
        result: result
    }
})

console.log(allStudentResults);

// Q4: Convert Names to Uppercase

let UppercaseName = students.map(u => u.name.toUpperCase())

console.log(UppercaseName);


// Part 2: filter() Questions

// Q5: Get Only Present Students

let presentStudends = students.filter(p => p.isPresent === true)

console.log("Present Studnets:", presentStudends);


// Q6: Get Only Passed Students

let passedStudents = students.filter(p => p.marks >= 50)

console.log("Passed Students:", passedStudents);


// Q7: Get Only Failed Students

let failStudents = students.filter(p => p.marks < 50)

console.log("Fail Studnets:", failStudents);

// Q8: Students Older Than 18

let olderStudents = students.filter(o => o.age > 18)

console.log("Older Students:", olderStudents);


// Part 3: map() + filter() Combined

// Q9: Get Names of Passed Students

passedStudents = students.filter(p => p.marks >= 50).map(p => p.name)

console.log("Passed Students Name:", passedStudents);

// Q10: Get Names of Absent Students in Uppercase

let absentStudents = students.filter(a => a.isPresent !== true).map(a => a.name.toUpperCase())

console.log("Absent Students Name:", absentStudents);

// Q11: Get IDs of Present Students

let presentStudendsID = students.filter(p => p.isPresent === true).map(p => p.id)

console.log("ID Of Present Student:", presentStudendsID);

// Conceptual Questions (Write Answers)

// Q12: Difference Between map() and filter()

// map() ka use tab hota hai jab hume array ke har element par koi change ya operation apply karna ho aur new array same length ka milta hai.
// filter() ka use tab hota hai jab condition laga kar sirf required elements select karne ho, isliye iska array chhota bhi ho sakta hai.

// Q13: Why does map() always return an array?

// map() existing array ko transform krta he isko input mai bhi array milti he aur ye ouput bhi array mai deta or ye he har element ko modify krta he








