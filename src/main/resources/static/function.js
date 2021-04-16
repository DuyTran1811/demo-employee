function successHandle() {
    $.ajax({
        url: `/employee/all`,
        type: "GET",
        success: function (data) {
            let epTable = '';
            $.each(data, function (key, value) {
                epTable += '<tr border="1">';
                epTable += '<td>' + value.name + '</td>';
                epTable += '<td>' + value.email + '</td>';
                epTable += '<td>' + value.jobTitle + '</td>';
                epTable += '<td>' + value.phone + '</td>';
                epTable += '<td>' + value.imageUrl + '</td>';
                epTable += '<td>' + value.employeeCode + '</td>';
                epTable += '</tr>';
            });
            document.getElementById("emp").innerHTML = epTable;
        }
    });
    event.preventDefault();
}

function addEmployee() {
    let name = $('#name').val();
    let email = $('#email').val();
    let jobTitle = $('#jobTitle').val();
    let phone = $('#phone').val();
    let imageUrl = $('#imageUrl').val();
    let newEmployee = {
        name: name, email: email,
        jobTitle: jobTitle, phone: phone,
        imageUrl: imageUrl,
    }
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        data: JSON.stringify(newEmployee),
        type: 'POST',
        url: `/employee/add`,
        success: successHandle
    });
    event.preventDefault();
}
