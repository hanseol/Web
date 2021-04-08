let str = 'Hello Thank you good luck to you'; //new String();
        
let t = str.charAt(16) + "<br/>" 
        +str.indexOf("you") + "<br/>" 
        +str.indexOf("you",16) + "<br/>"
        +str.lastIndexOf("you") + "<br/>"
        +str.lastIndexOf("you",25) + "<br/>"
        +str.match("luck") + "<br/>"
        +str.search("you") + "<br/>"
        +str.substr(21,8) + "<br/>"
        +str.substring(6,12) + "<br/>"
        +str.replace("you","me") + "<br/>"
        +str.toLowerCase() + "<br/>"
        +str.toUpperCase() + "<br/>"
        +str.length + "<br/>";

var s = str.split(" ");
t = t + s[0]  + "<br/>"
    + s[4] + "<br/>";

var r = "A";
t = t + r.charCodeAt(0) + "<br/>"
    + String.fromCharCode(65) + "<br/>";

document.write(t);

/*110 page*/
    // var userEmail = prompt("당신의 이메일 주소는?","");
    var userEmail = "gkstjf22@naver.com";
    var arrUrl =[".co.kr",".com",".net",".or.kr",".go.kr"];
    
    var check1 = false;
    var check2 = false;

    if(userEmail.indexOf("@")>0) {check1 = true;}

    for(var i=0; i<arrUrl.length;i++){
        if(userEmail.indexOf(arrUrl[i])>0){
            check2 = true;
        }
    }

    if(check1 && check2){
        document.write(userEmail);
    }else {
        alert("이메일 형식이 잘못되었습니다.");
    }

console.log(str.charAt(0));
console.log(str.indexOf('o')); //찾는 문자가 없으면 -1 return.


console.log(this);