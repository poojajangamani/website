console.log("hello world");  //printf
console.log("hello KLE GADAG");

//variables and data type
let name= "Alice";
let age= 29;
let isStudent= true;
console.log("Name:", name);


//Arithmatic opertors
let a=10;
let b=20;
console.log("Add:", a+b);
console.log("sub:", a-b);
console.log("product:", a*b);
console.log("Div:", a/b);

//if else
    let mark=15
if(mark>50){
    console.log("pass")
}else{
    console.log("fail")
}

//Switch Case
let day=3;
switch(day){
    case 1:console.log("Monday")
    break;
    case 1:console.log("tuesday")
    break;
    case 1:console.log("Wednesday")
    break;
    default: console.log("some otherday")
}

//loops (for,while)

for(let i=1;i<=5;i++){
    console.log("i=",i)
}

let count=1;
while(count<=3){
    console.log("count", count);
    count++;
}
 
//function
function greet(user){
    return "hello, " + user + "!"
}
console.log(greet("Jhon"));
console.log(greet("Amruta"));

//Arrays
let fruits=["apple", "banana", "chikku", "dragonfruit"];
console.log(fruits);
console.log(fruits[3]);

//objects
let student ={
    name: "pooja",
    rollno: 96,
    course: "BCA"
}
console.log(student.name);

