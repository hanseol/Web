let car = {
    name: 'Sonata',
    model: 'Hybrid',
    weight: 1200,
    color: 'black',
    start: function () {
        console.log('출발~.');
    },
    stop: function () {
        console.log('멈춰!!');
    }
};
car.name = 'Sonata II';
car.model = 'Electronic';
car['weight'] = 2200; //object의 경우 필드이름으로 값을 지정 
car['color'] = 'blue';
car.start();
car.stop();

//object의 필드 for .. in
for (field in car) {
    console.log(field + '=>' + car[field]);
}


let fruits = ['Apple', 'Banana'];
fruits[0] = 'Cherry'; //배열의 경우 index로 값을 지정
//javascript 확장 for문 ( for .. of)
for (fruit of fruits) {
    console.log(fruit);
}

let elem = document.getElementById('list');
for (fruit of fruits) {
    let liTag = document.createElement('li');
    let text = document.createTextNode(fruit);
    liTag.appendChild(text);
    elem.appendChild(liTag);
}

let m1 = {
    name: 'Hong',
    score: 80
}
let m2 = {
    name: 'Hwang',
    score: 90
}
let m3 = {
    name: 'Park',
    score: 70
}
let members = [m1, m2, m3];

elem = document.getElementById('members');

let text = '';
let liTag = document.createElement('li');
let t = [];
let cnt = 0;
for (let member of members) {
    for (let field in member) {
        
        console.log(member[field]);
        
        
        liTag.appendChild(document.createTextNode(member[field]));
        //li태그에 hong 80 / 출력하기

    }

    elem.appendChild(liTag);
}