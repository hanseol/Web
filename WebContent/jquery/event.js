$(function () {
    let table = [];
    table.push('<ul>');
    table.push('<li>Apple</li>');
    table.push('<li>Banana</li>');
    table.push('<li>Cherry</li>');
    table.push('</ul>');
    let tag = table.join(''); //string 값으로 return
    console.log(table.join(''));
    $('body').html(tag);
})


// $(document).ready(function () {
//     $.ajax({
//         url: '../MOCK_DATA.json',
//         success: function (data) {
//             let tbl = [];
//             tbl.push('<table border="1"/>');
//             console.log(data);
//             let trTag, tdTag ;
//             for (let i = 0; i < data.length; i++) {
//                 trTag = $('<tr />')
//                 tdTag = $('<td />').html(data[i].id);
//                 trTag.append(tdTag);
//                 tdTag = $('<td />').html(data[i].first_name);
//                 trTag.append(tdTag);
//                 tdTag = $('<td />').html(data[i].last_name);
//                 trTag.append(tdTag);
//                 tdTag = $('<td />').html(data[i].email);
//                 trTag.append(tdTag);
//                 tdTag = $('<td />').html(data[i].gender);
//                 trTag.append(tdTag);
//                 tbl.append(trTag);
//                 $('body').append(tbl);
//             }
//             let tag = table.join('');
//         }
//     })
// })

$(document).ready(function () {
    $.ajax({
        url: '../MOCK_DATA.json',
        success: function (data) {
            let tbl = [];
            tbl.push('<table border="1">');
            console.log(data);
            let trTag, tdTag ;
            // for (let i = 0; i < data.length; i++) {
            //     tbl.push('<tr>');
            //         for(field in data[i]){
            //             tbl.push('<td>'+data[i][field]+ '</td>');
            //         }
            //     tbl.push('</tr>');
            // }
            for(d of data){
                tbl.push('<tr>');
                for(f in d){
                    tbl.push('<td>'+d[f]+'</td>');
                }
                tbl.push('</tr>');
            }
            tbl.push('</table>');
            let tag = tbl.join('');
            $('body').html(tag);
        }
    })
})


$.ajax({
    url: '../MOCK_DATA.json',
    type: 'get',
   // data: 'name=hong&age=20', //페이지에 전달되는 데이터
    dataType: 'json',
    success: function(data){
        let arry = data;
        let ulTag = $('<ul />');
        $(arry).each(function(idx,obj){
            //ulTag.append($('<li />').html('<a href="#">'+obj.first_name+'</a>'));
            ulTag.append($('<li />')
            .append($('<a />').html(obj.first_name)
            .attr('href','get.jsp?name='+obj.first_name))); //jsp파일은 톰캣에서..
            console.log(ulTag);
        });
        $('body').append(ulTag);
    },
    error: function(reject){
        console.error(reject.status, reject.statusText);
    }
});
