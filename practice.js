let inputA = ['{"studentId": 7530, "name": "Robert Lee", "graduating": true}','{"name": "Carlin B.", "graduating": true}','{"studentId": 6679, "name": "Jacqui Ostermann", "graduating": true}','{"studentId": 1256, "name": "Dhiraj Ostermann", "graduating": false}'];

// function formatRecords( studentsRecordDetails ) {
//   	return studentsRecordDetails
//   .map(function(student) {
//     console.log('Map: ', student);
//   		return JSON.parse(student);
//   })
// 	.filter(function(student) {
// 	    console.log('Filter: ', student.graduating);
//    		return student.graduating && student.studentId;
//   })
//   .reduce(function (accumulator, currentValue, index) {
// 	    console.log('Reduce: ', accumulator);
// 	    console.log('currentValue: ', currentValue);
// 	    console.log("What is the index:",index);
//   		return (accumulator ? accumulator + ', ' : accumulator) + currentValue.name;
//   }, ""); 
//   return;
// }

function formatRecords (studentsRecordDetails) {
    let newArray = [];
    for(let i = 0; i < studentsRecordDetails.length; i++) {
        let student = JSON.parse(studentsRecordDetails[i]);
        newArray.push(student);
    }
    let filteredStudents = filterStudents(newArray);
    return concatenateStudents(filteredStudents);
}

function filterStudents (students) {
    let newArray = [];
    for(let i = 0; i < students.length; i++) {
        let student = students[i];
        if(student.graduating && student.studentId) {
            newArray.push(student);
        }
    }
    return newArray;
}

// function concatenateStudents (students) {
//     let newArray = [];
//     for(let i = 0; i < students.length; i++) {
//         let student = students[i];
//         newArray.push(student.name);
//     }
//     return newArray.join(", ");
// }


// alternate concatenateStudents 
function concatenateStudents (students){
    let accumulator = "";
    for(let i = 0; i < students.length; i++) {
        let student = students[i];
        accumulator = accumulator + student.name + ", ";
        console.log("this is the accumulator: ", accumulator)
    }
    return accumulator;
} 


let result = formatRecords(inputA);
console.log("Result: ",result);