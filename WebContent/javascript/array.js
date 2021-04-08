let names = [] // new Array();
names[0] = '세조';
names.push('중종');
names.push('선조');
names.push('광해군');
names.push('숙종');
names.push('영조');
names.unshift('세종');

delete names[0]; //배열의 값만 제거.
names.pop(); //제일 뒤쪽 요소부터 제거.
names.shift(); //제일 앞쪽 요소부터 제거.

for(let i=0; i<names.length;i++){
    console.log(i, names[i]);
}

let ns = names.join('-');
console.log(ns);

ns=names.reverse(); //새로운 배열을 생성 & 원본 배열도 변경.
console.log(ns); 
console.log(names);

names = names.reverse();
console.log(names);
console.log(ns);

ns = names.slice(1,3); //(포함,안포함) //slice : 원본 변경 x , splice: 원본 잘라냄. 
console.log(ns);
console.log(names); 
