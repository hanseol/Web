class Student {
    constructor(sno, name){
        this.sno = sno;
        this.name = name;
    }
    set setName(name){
        this.name = name;
    }
    get getName(){
        return this.name;
    }
    showInfo(){
        return this.sno + ' ' + this.name + '차이가 뭐죠..';
    }
    static toShow(){
        return '정적 메소드는 클래스 이름을 이용';
    }
}

let s1 = new Student('1111','Hongkildong');
console.log(s1.getName);
console.log(s1.showInfo());
console.log(Student.toShow());