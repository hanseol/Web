let trTag, tdTag, thTag;
let xhtp = new XMLHttpRequest();

xhtp.onreadystatechange = function () {
    // console.log(xhtp.readyState, xhtp.status); 
    // (xhtp.readyState- 1:서버와 연결을 준비하는 단계, 2:서버가 요청을 받았다는 상태, 3:파일을 처리하는 중, 4:처리가 완료되었음.)
    // (0:초기화값, 200:서버상태(정상/404:not found error, 403:page error))
    if (xhtp.readyState == 4 && xhtp.status == 200) {
        //console.log(xhtp.readyState, xhtp.status);
        //console.log(xhtp.responseText);
        let data = JSON.parse(xhtp.responseText);
        // console.log(data);

        for (obj of data) {
            trTag = document.createElement('tr');
            for (field in obj) {
                tdTag = document.createElement('td');
                tdTag.appendChild(document.createTextNode(obj[field]));
                trTag.appendChild(tdTag);
                let tbl = document.getElementById('tbl');
                tbl.appendChild(trTag);

            }
        }
    }
}//end of function

xhtp.open('get', 'MOCK_DATA.json'); //서버에 있는 파일을 읽음.
xhtp.send();