        //hoisting 기술 지원.
        let result = square('f'); 
        function square(num){
           if(num==null){
               return 0;
           } else if(isNaN(num)){
               return 0;
           }
           return num*num;
       }
       
       console.log("square(3):"+result);

       //표현식 : hoisting 기술 지원 x 
       let fnc = function(num){
        if(num==null){
               return 0;
           } else if(isNaN(num)){
               return 0;
           }
           return num*num;
       }
       console.log("fnc(3):" + fnc(3));

       //
       let count = 0;
       function myFnc(){
           let cnt = 0;
           count++;
           cnt++;
           document.write(count+'<br>');
       }
       myFnc();
       let theFnc = function(){
           let cnt =0;
           count++;
           cnt++;
           document.write('익명함수:'+ cnt +'<br>');
       }
       theFnc(); theFnc(); theFnc(); theFnc(); 


       /*getElementsByTagName('body') 이해하기 */
       let colors = ['yellow', 'red', 'blue', 'aqua'];
        let i=0;

        function changeColor(){
            let bdy = document.getElementsByTagName('body');
            console.log(bdy);
            console.log(bdy[0]);
            bdy[0].style.backgroundColor=colors[i%4];
            i++;
        }

        //함수의 매개값으로 함수가 올 수 있음을 이해하기.
        function map(func, ary){
            let result=[];
            for(let i=0; i<ary.length;i++){
                result[i]=func(ary[i]);
            }
            return result;
        }
        let fun = function(x){
            return x*x;
        }
        let arr = [0,1,2,3];
        let result = map(fun,arr);
        console.log(result);


        //arguments
        function callFunc() {
            let sum = 0;
            for (let i = 0; i < arguments.length; i++) {
                sum += arguments[i];
            }
            return sum;
        }
        console.log(callFunc(2, 3, 4, 5, 6, 7));

        function callArySum(arr) {
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                sum += arr[i];
            }
            return sum;
        }
        let aryy = [1, 2, 3, 4, 5];
        console.log(callArySum(aryy));

        //재귀함수.
        let factorial = function fac(num) {
            return num < 2 ? 1 : num * fac(num - 1);
        }
        result = factorial(3);
        console.log("재귀함수:" + result);
        //함수 이름을 지정하지 않고도 사용이 가능.
        let test = function (num) {
            return num <2 ? 1 : num * test(num - 1);
        }
        result = test(2);
        console.log("test:" + result);

        //함수 정의 구문을 return 해 줄 수 도 있다.
        function outside(x){
            function inside(y){
                return x + y ;
            }
            //console.log(inside);
            return inside;
        }
        let fn_inside = outside(2);
        let res = fn_inside(3);    //outside(2)(3)
        console.log(res);


        res = outside(2)(3); console.log(res);