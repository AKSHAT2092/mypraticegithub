let students = [
 {id:1, name:"A", mobileno:8978735498, address:"ABC", age:20},
 {id:2, name:"B", mobileno:7873547890, address:"BCD", age:25}
];


function addStudent(student){
    students.push(student);
}


function findStudent(id){
    return students.find(s => s.id === id);
}



function updateStudent(id, newData){
    let student = students.find(s => s.id === id);

    if(student){
        Object.assign(student, newData);
        console.log("Student Updated");
    } else {
        console.log("Student not found");
    }
}


function deleteStudent(id){
    students = students.filter(s => s.id !== id);
}
