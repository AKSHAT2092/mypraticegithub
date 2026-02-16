let arr =[1,2,3,4,5,6];
let even = arr.filter(num=>num%2===0);
console.log(even);

let squarearr = [2,4,6];
let square = squarearr.map(n=> n*n);
console.log(square);

let name1 = [
{name:"Irfan", age:22},
{name:"Allen", age:15}
];

let findname = name1.map(username => username.name);
console.log(findname);
