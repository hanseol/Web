var num1 = 10;
var num2 = 20;
console.log(typeof num1);
num1 = '10.05';
num2 = '20.45';
console.log(typeof num1);
var result = parseFloat(num1) + parseFloat(num2);
console.log(result);
console.log(typeof result);



var num3=null;
console.log(typeof num3);
num3 = {
    name: 'Hong',
    age:20
};
console.log(typeof num3);
console.log (num3.name);
console.log(num3.age);

num3 = true;
console.log(typeof num3);
num3 = ''; //null, '', 0 => false
if(num3){
    console.log('참입니다.');
}else {
    console.log('거짓입니다.');
}

numbers = [];
numbers[0] = 10;
numbers[1] = 20;
// numbers[2] = 'hello'; //가능하지만 사용 지양.
numbers[2] = 30;
result = 0;
for(var i=0; i<numbers.length; i++){
    console.log(numbers[i]);
    result += numbers[i];
}
console.log("합계:" +result);


var value = window.prompt('몇 단이 궁금해?: ');
document.write('<table border="1">');
 
for(var i=1; i<10; i++){
    document.write('<tr>');
    document.write('<td>');
    document.write(value + '*' + i);
    document.write('</td>');
    document.write('<td class="equals">');
    document.write('=');
    document.write('</td>');
    document.write('<td>');
    document.write(value*i);
    document.write('</td>');
    document.write('</tr>');
}

document.write('</table>');
