var fruit = 'Cherry';
fruit = ['Cherry', 'Strawberry', 'Melon'];
document.write('<h1>hello</h1>');
document.write('<ul>');
document.write('<li>Apple</li>');
document.write('<li>Banana</li>');
for(var i=0;i<fruit.length;i++){
    document.write('<li>' + fruit[i] + '</li>');
}
document.write('</ul>');

function turn_on() {
    bulbon = 'hello';
    console.log(bulbon);
    var bulbon = document.getElementById('bulb');
    console.log(bulbon);
    bulbon.setAttribute('src', 'https://www.w3schools.com/js/pic_bulbon.gif');
    console.log(bulbon);
    bulbon = 'bye';
    console.log(bulbon);
}

function turn_off() {
    var bulboff = document.getElementById('bulb');
    bulboff.setAttribute('src', 'https://www.w3schools.com/js/pic_bulboff.gif');
}

