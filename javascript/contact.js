//Variables
var $firstname = $('#firstname').val();
var $lastname = $('#lastname').val();
var $email = $('#lastname').val();
var $phone = $('#phone').val();
var $company = $('#company').val();


var $phoneValidator = /[0-9-()+]{3,20}/;
var $emailValidator = '^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$';
var $namesValidator = '/^[a-z0-9_-]{3,16}$/';



//All - Make sure all form inputs (not textarea) have at least 1 character before populating the "Submit" button
function nameValidation(){
    preventDefault;
    if ($firstname.match($namesValidator)){
    alert("This works!");
    } else {
       alert("Please make sure to include Alpha-numeric character only."); 
    };
};



//Email - Make the email validate - contains "@" symbol and ".extension"
function emailValidation(){
    preventDefault;
    if ($email.match($emailValidator)){
        alert("This works!");
    } else {
       alert("Please make sure to include Alpha-numeric character only."); 
    };
};




//Phone - Make sure phone has at least 10 digits
function nameValidation(){
    preventDefault;
    if ($phone.match($phoneValidator)){
        alert("This works!");
    } else {
       alert("Please make sure to include Alpha-numeric character only."); 
    };
};


 

//Submit - Make the submit button's opactity become 100% with jQuery once all requirements are met



