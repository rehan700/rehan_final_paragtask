$(document).ready(function () {
    $.getJSON("pricing.json",
        function (data) {
            var student = '';
            student += '<tr><td>';
            if (data.Basic.features.feature1.available == "Yes") {
                student += '<i class="fa-solid fa-check check"></i>';
            }
            else student += '<i class="fa-solid fa-xmark nocheck"></i>';
            student += '</td>';
            student += '<td>' + data.Basic.features.feature1.value + '</td></tr><br><br>';

            student += '<tr><td>';
            if (data.Basic.features.feature2.available == "Yes") {
                student += '<i class="fa-solid fa-check check"></i>';
            }
            else student += '<i class="fa-solid fa-xmark nocheck"></i>';
            student += '</td>';
            student += '<td>' + data.Basic.features.feature2.value + '</td></tr><br>';

            student += '<tr><td>';
            if (data.Basic.features.feature3.available == "Yes") {
                student += '<i class="fa-solid fa-check check"></i>';
            }
            else student += '<i class="fa-solid fa-xmark nocheck"></i>';
            student += '</td>';
            student += '<td>' + data.Basic.features.feature3.value + '</td></tr><br>';

            student += '<tr><td>';
            if (data.Basic.features.feature4.available == "Yes") {
                student += '<i class="fa-solid fa-check check"></i>';
            }
            else student += '<i class="fa-solid fa-xmark nocheck"></i>';
            student += '</td>';
            student += '<td>' + data.Basic.features.feature4.value + '</td></tr><br>';

            $('#table1').append(student);
            var price_a = '';
            price_a += data.Basic.price;
            $('#price_1').append(price_a);


            var student_1 = '';
            student_1 += '<tr><td>';
            if (data.Standard.features.feature1.available == "Yes") {
                student_1 += '<i class="fa-solid fa-check check"></i>';
            }
            else student_1 += '<i class="fa-solid fa-xmark nocheck"></i>';
            student_1 += '</td>';
            student_1 += '<td>' + data.Standard.features.feature1.value + '</td></tr><br><br>';

            student_1 += '<tr><td>';
            if (data.Standard.features.feature2.available == "Yes") {
                student_1 += '<i class="fa-solid fa-check check"></i>';
            }
            else student_1 += '<i class="fa-solid fa-xmark nocheck"></i>';
            student_1 += '</td>';
            student_1 += '<td>' + data.Standard.features.feature2.value + '</td></tr><br>';

            student_1 += '<tr><td>';
            if (data.Standard.features.feature3.available == "Yes") {
                student_1 += '<i class="fa-solid fa-check check"></i>';
            }
            else student_1 += '<i class="fa-solid fa-xmark nocheck"></i>';
            student_1 += '</td>';
            student_1 += '<td>' + data.Standard.features.feature3.value + '</td></tr><br>';

            student_1 += '<tr><td>';
            if (data.Standard.features.feature4.available == "Yes") {
                student_1 += '<i class="fa-solid fa-check check"></i>';
            }
            else student_1 += '<i class="fa-solid fa-xmark nocheck"></i>';
            student_1 += '</td>';
            student_1 += '<td>' + data.Standard.features.feature4.value + '</td></tr><br>';

            $('#table2').append(student_1);
            var price_b = '';
            price_b += data.Standard.price;
            $('#price_2').append(price_b);

            var student_2 = '';
            student_2 += '<tr><td>';
            if (data.Premium.features.feature1.available == "Yes") {
                student_2 += '<i class="fa-solid fa-check check"></i>';
            }
            else student_2 += '<i class="fa-solid fa-xmark nocheck"></i>';
            student_2 += '</td>';
            student_2 += '<td>' + data.Premium.features.feature1.value + '</td></tr><br><br>';

            student_2 += '<tr><td>';
            if (data.Premium.features.feature2.available == "Yes") {
                student_2 += '<i class="fa-solid fa-check check"></i>';
            }
            else student_2 += '<i class="fa-solid fa-xmark nocheck"></i>';
            student_2 += '</td>';
            student_2 += '<td>' + data.Premium.features.feature2.value + '</td></tr><br>';

            student_2 += '<tr><td>';
            if (data.Premium.features.feature3.available == "Yes") {
                student_2 += '<i class="fa-solid fa-check check"></i>';
            }
            else student_2 += '<i class="fa-solid fa-xmark nocheck"></i>';
            student_2 += '</td>';
            student_2 += '<td>' + data.Premium.features.feature3.value + '</td></tr><br>';

            student_2 += '<tr><td>';
            if (data.Premium.features.feature4.available == "Yes") {
                student_2 += '<i class="fa-solid fa-check check"></i>';
            }
            else student_2 += '<i class="fa-solid fa-xmark nocheck"></i>';
            student_2 += '</td>';
            student_2 += '<td>' + data.Premium.features.feature4.value + '</td></tr><br>';

            $('#table3').append(student_2);
            var price_c = '';
            price_c += data.Premium.price;
            $('#price_3').append(price_c);
        });
});

function check() {
    var memail = document.forms.myform.myemail.value;
    var pass = document.forms.myform.mypass.value;
    if (memail.length < 2) {
        alert("email can't be of 1 or less letters");
        memail.focus();
        return false;
        
    }
    if (pass.length<8) {
        alert("Password should be of more than or equal to 8 characters");
        return false;
    }
    return true;
}