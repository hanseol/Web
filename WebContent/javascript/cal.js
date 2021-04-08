function createCal() {
    let today = new Date();
    let thisYear = today.getFullYear();
    let thisMonth = today.getMonth();
    let thisDate = today.getDate();
    let thisDay = today.getDay();

    let firstDate = new Date(thisYear, thisMonth, 1);
    let day = firstDate.getDay();
    console.log(day); //4:금요일

    let lastDate = new Date(thisYear, thisMonth + 1, 0); //이번달 마지막 날   
    let last = lastDate.getDate();
    console.log(last);

    let dayTitle = ['일', '월', '화', '수', '목', '금', '토'];
    let str = "<table border = '1'><tr>";

    for (var i = 0; i < dayTitle.length; i++) {
        str += "<th id='title'>" + dayTitle[i] + "</th>";
    }

    str += "</tr><tr>";
    for (var j = 0; j < day; j++) {
        str += "<td></td>";
    }
    for (var j = 1; j <= last; j++) {
        str += "<td id='date'>" + j + "</td>";
        day++;
        if (7 - day == 0) {
            str += "</tr><tr>";
            day = 0;
        }
    }
    if (day != 0) {
        for (var i = 0; i < 7 - day; i++) {
            str += "<td id='blank'></td>";
        }
    }
    str += "</tr>";

    document.write(str);
}