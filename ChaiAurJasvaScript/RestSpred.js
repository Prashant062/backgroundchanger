//Simple Function
// function addSum(a,b,c){
//     console.log(a+b+c);
// }
// addSum(5,9,7)

//Rest Oprator    ==>   in rest element of Array are combined
/*function addSum(a,b,c,...other){
    // console.log(other);    //print All nummber 
    // console.log(other[1]);             // print individual num from array
    console.log(arguments);             // This is ES5
   return a+b+c
}
const res = addSum(5,9,7,8,6)
console.log(res);*/




//  Spred Oprator   ==>   in Spred element of Array which combined is seperated bu spred oprator

// const coding  = ['java', 'python', 'javascript', 'ruby'];

// function getCode(code1,code2,code3,code4,){
//     console.log(code1,code2,code3,code4,);
// }
// getCode(coding[0],coding[1],coding[2],coding[3],)    //instead of this Use 
// getCode(...coding)    // this spred oprator
// getCode(coding)


// Operator for Objects

let employee ={
    name: 'Stark',
    age: 24,
    skill:['js','react', 'node','express','mongodb']
}
// const Age = employee.age       //1st way 
// const {age,name} = employee       //object destructuring
// console.log(name);
// console.log(age);

// const {...rest} = employee       // Rest Operator
// console.log(rest);
// console.log(age);


//Spred Operator
let newEmployee ={
 ...employee,
 age:'25'
}
console.log(newEmployee);