$(document).ready(function(){
   $('#formSubmission').submit(function(e){
     e.preventDefault();
       console.log(e);
       
       //Variables
        var $firstname = $('#firstname').val();
        var $lastname = $('#lastname').val();
        var $email = $('#email').val();
        var $phone = $('#phone').val();
        var $company = $('#company').val();
        var $phoneValidator = /[0-9-()+]{3,20}/;
        var $emailValidator = '^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$';
        var $namesValidator = '/^[a-z0-9_-]{3,16}$/';
       debugger;

        //All - Make sure all form inputs (not textarea) have at least 1 character before populating the "Submit" button

        //First Name Validator Function
        function firstNameValidation(){
            if ($firstname.match($namesValidator)===true){
                alert("This works!");
            } else {
               alert("Please make sure to include Alpha-numeric character only."); 
            };
        };
        console.log($firstname);

        //Last Name Validator Function
        function lastNameValidation(){
            if ($lastname.match($namesValidator)===true){
                alert("This works!");
            } else {
               alert("Please make sure to include Alpha-numeric character only."); 
            };
        };
        console.log($lastname);

        //Email - Make the email validate - contains "@" symbol and ".extension"
        function emailValidation(){
            if ($email.match($emailValidator)===true){
                alert("This works!");
            } else {
               alert("Please make sure to include Alpha-numeric character only."); 
            };
        };

        //Phone - Make sure phone has at least 10 digits
        function nameValidation(){
            if ($phone.match($phoneValidator)===true){
                alert("This works!");
            } else {
               alert("Please make sure to include Alpha-numeric character only."); 
            };
        };
    $('.submit').attr("disabled", true);
    return true;   
  }); 
});

 

//Submit - Make the submit button's opactity become 100% with jQuery once all requirements are met



