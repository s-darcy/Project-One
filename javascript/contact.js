$(".submit").click(function(e) { 
    e.preventDefault();

//--------------All Inputs Field Checker------------------------//     
    //.filter() creates a new array will all elements that pass the test implemented by the provided function        
        var filledInputs = $(this).parent().find("input").filter(function(e){
            return this.value === "";
        });
        if(filledInputs.length) {
            return alert('Please make sure that all fields are complete before clicking submit.');
            e.preventDefault(); 
        } else {
            return $('#p2').text('Thank you for filling out the contact page.');
        };
});//end document.ready 

$(".submit").click(function(e) { 
    e.preventDefault();

//First Name Validator Function
        function firstNameValidation(){
            let $firstname = $('#firstname').val();
            var firstnameRegExp = new RegExp("^[a-zA-Z]+$");
            if(firstnameRegExp.test($firstname)){
                return true; 
            } else {
               return alert(`" ${$('#firstname').val()}" is not a valid first name. Please insert alphabet characters only.`);
                $('#firstname').focus();
            }
            console.log($firstname);
        };
        firstNameValidation();
  
//Last Name Validator Function
        function lastNameValidation(){
            let $lastname = $('#lastname').val();
            var lastnameRegExp = new RegExp("^[a-zA-Z]+$");
            if(lastnameRegExp.test($lastname)){
                return true;
            } else {
               return alert(`" ${$('#lastname').val()}" is not a valid last name. Please insert alphabet characters only.`);
               $('#lastname').focus(); 
            }
            console.log($lastname);
        };
        lastNameValidation();  

//Email - Make the email validate - contains "@" symbol and ".extension"
        function emailValidation(){
            let $email = $('#email').val();
            var emailRegExp = new RegExp('^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$');
            if(emailRegExp.test($email)){
                return true;
            } else {
               return alert(`" ${$('#email').val()}" is not a valid email address. Please insert alphabet characters only.`);
                $('#email').focus();
            }
            console.log($email);
        };
        emailValidation();
        
//Phone - Make sure phone is only numeric characters and has at least 10 digits
        function phoneValidation(){
            let $phone = $('#phone').val();
            var phoneRegExp = new RegExp(/[0-9-()+]{3,20}/);
            if ($phone.length !== 10){
                return alert("Please make sure that your phone number is 10 digits long.");
            } else if (phoneRegExp.test(!$phone)){
                return alert(`" ${$('#phone').val()}" is not a valid phone number. Please insert 10 numberic characters only.`);
                $('#phone').focus();
            } else {
                return true;
            }
            console.log($phone);
        };
        phoneValidation();

//Company Validator funchtion   
        function companyValidation(){
            let $company = $('#company').val();
            var companyRegExp = new RegExp("^[a-zA-Z]+$");
            if (companyRegExp.test($company)){
                return true;
            } else {
               return alert(`" ${$('#company').val()}" is not a valid company name. Please insert alphabet characters only.`);
                $('#company').focus();
            }
            console.log($company);
        };
        companyValidation();
        
});//end document.ready 


////--------------EXPERIMENTAL Submit Opacity function--------------------//      
////        $('input').on("keydown", function() {
////            var inputValues = {
////                $firstname : $('#firstname').val(),
////                $lastname : $('#lastname').val(),
////                $email : $('#email').val(),
////                $phone : $('#phone').val(),
////                $company : $('#company').val()
////            }
////            console.log('inputValues');
////            
////            for(var prop in inputValues) {
////                console.log('inputValues');
////                
////                if(inputValues.prop !==""){
////                    
////                    //Submit button changes opacity when all 5 fields have inputs filled out
////                    $('.submit').css('opactity', '1');
////                    
////                }
////            };     
////        });
//            