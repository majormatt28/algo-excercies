let inputA = ['{"studentId": 7530, "name": "Robert Lee", "graduating": true}','{"name": "Carlin B.", "graduating": true}','{"studentId": 6679, "name": "Jacqui Ostermann", "graduating": true}','{"studentId": 1256, "name": "Dhiraj Ostermann", "graduating": false}'];

function formatRecords( studentsRecordDetails ) {
  	return studentsRecordDetails
  .map(function(student) {
    console.log('Map: ', student);
  		return JSON.parse(student);
  })
	.filter(function(student) {
	    console.log('Filter: ', student.graduating);
   		return student.graduating && student.studentId;
  })
  .reduce(function (accumulator, currentValue, index) {
	    console.log('Reduce: ', accumulator);
	    console.log('currentValue: ', currentValue);
	    console.log("What is the index:",index);
  		return (accumulator ? accumulator + ', ' : accumulator) + currentValue.name;
  }, ""); 
  return;
}


let result = formatRecords(inputA);
console.log("Result: ",result);