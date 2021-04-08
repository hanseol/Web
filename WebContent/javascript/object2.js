let obj = {}; //new Object();
obj.color = 'white';
obj.price = 1000000;
obj.info = function() {
    return obj.color + ' ' + obj.price;
}
// console.log(obj.color);
// console.log(obj.price);
// console.log(obj.info());

function getTime(){
let time = new Date();
let year = time.getFullYear();
let month = time.getMonth();
let date = time.getDate();
let hh = time.getHours();
let mm = time.getMinutes();
let ss = time.getSeconds();

show.innerHTML = year + '년' + (month+1) + '월 ' + date + '일' + hh + ':' + mm + ':' + ss;
}
// setInterval(function(){getTime()},1000);

var today = new Date();
console.log(today);
var nowYear = today.getFullYear();
var nowMonth = today.getMonth();
var nowDate = today.getDate();

var theDate = new Date(nowYear,nowMonth,nowDate,12,50);
console.log(theDate);
var diffDate = theDate.getTime()-today.getTime();

console.log(diffDate);
var mm = Math.ceil(diffDate / (1000*60));
var hh = parseInt(mm/60);
mm = mm-(hh*60);

document.write("<h1>점심시간</h1>" + hh + "시간" + mm +" 분 남았습니다.");

Math.abs(-100);
console.log(Math.round(3.2)); //round:반올림, ceil:올림, floor:내림
for(let i=0; i<10; i++)
    console.log(Math.floor(Math.random()*45) + 1);
console.log('max: '+Math.max(2,4,6,1,-1));