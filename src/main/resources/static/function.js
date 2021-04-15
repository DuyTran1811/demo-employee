function showList() {
    $.ajax({
        url: `/employee/all`,
        type: "GET",
        success: function (data) {
            console.log(data);
            let epTable = '';
            $.each(data, function (key, value) {
                epTable += '<tr border="1">';
                epTable += '<td>' + value.name +'</td>';
                epTable += '<td>' + value.email +'</td>';
                epTable += '<td>' + value.jobTitle +'</td>';
                epTable += '<td>' + value.phone +'</td>';
                epTable += '<td>' + value.imageUrl +'</td>';
                epTable += '<td>' + value.employeeCode +'</td>';
                epTable += '</tr>';
            });
            $('#emp').append(epTable);
        }
    });
}
