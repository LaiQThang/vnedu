// Handle check user sign up?
$("#btn-login").click(function(){
    if(false){
        $("#error-login").addClass("d-block");
        $("#forgot-pass").addClass("d-none");
    }
  });
// Handle check phone number?
function checkPhoneNumber() {
    var flag = false;
    var phone = $('#username').val().trim();
    phone = phone.replace('(+84)', '0');
    phone = phone.replace('+84', '0');
    phone = phone.replace('0084', '0');
    phone = phone.replace(/ /g, '');
    if (phone != '') {
        var firstNumber = phone.substring(0, 2);
        if ((firstNumber == '09' || firstNumber == '08' || firstNumber == '03') && phone.length == 10) {
            if (phone.match(/^\d{10}/)) {
                flag = true;
            }
        } else if (firstNumber == '01' && phone.length == 11) {
            if (phone.match(/^\d{11}/)) {
                flag = true;
            }
        }
    }
    return flag;
}

$('#btn-login').click(function(){ 
    if (!checkPhoneNumber()) {
        $("#warning-login").addClass("d-block");
        $("#forgot-pass").addClass("d-none");
        $("#username").focus();
        $("#username").val('');
    }
});

// Handle check account
$("#btn-login").click(function(){
    if(true){
        $("#warning-login-account").addClass("d-block");
    }
});

$("#showpass").click(function(){
    $("#password")[0].type === "password" ? $("#password")[0].type = "text" : $("#password")[0].type = "password";
});