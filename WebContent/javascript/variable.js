// let num2 = 30;

let numbers = [1,2,3,4,5];
document.write('<h1>Number</h1>');
document.write('<ul>');
let sum =0;
for(let i=0;i<numbers.length;i++){
    
    document.write('<li>'+numbers[i]+'</li>');
    sum += numbers[i];
}

document.write('</ul>');
document.write('합 = ' + sum);