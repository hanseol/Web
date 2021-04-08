var num1; //undefined
num1=10; //number
num1='hello'; //string
num1=false; //boolean
num1=null; //object

console.log(typeof num1);

num1=[];
num1[0]=10;
num1[1]=20;
num1[2]='hello';

num1 = function(){
    //window.alert('hi');
}
console.log(num1());

var num1;
num1 = 10;

let num2;
num2 =10;

{
    let num2;
    num2=20;
    console.log('num2: ' + num2);
}
num2 = 15;
console.log('num2: ' + num2);

const num3 = 88;
// num3 = 18;