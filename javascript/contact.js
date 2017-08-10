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
            if(!firstnameRegExp.test($firstname)){
               alert(`"${$('#firstname').val()}" is not a valid first name. Please insert alphabet characters only.`);
                $('#firstname').focus();
            }
            return true;
            console.log($firstname);
        };
        firstNameValidation();
  
//Last Name Validator Function
        function lastNameValidation(){
            let $lastname = $('#lastname').val();
            var lastnameRegExp = new RegExp("^[a-zA-Z]+$");
            if(!lastnameRegExp.test($lastname)){
                alert(`"${$('#lastname').val()}" is not a valid last name. Please insert alphabet characters only.`);
               $('#lastname').focus(); 
            }
            return true;
            console.log($lastname);
        };
        lastNameValidation();  

//Email - Make the email validate - contains "@" symbol and ".extension"
        function emailValidation(){
            let $email = $('#email').val();
            var emailRegExp = new RegExp('^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$');
            if (!emailRegExp.test($email)){
                alert(`"${$('#email').val()}" is not a valid email address. Please insert alphabet characters only.`);
                $('#email').focus();
            } else {
               return true;
            }
            console.log($email);
        };
        emailValidation();
        
//Phone - Make sure phone is only numeric characters and has at least 10 digits
        function phoneValidation(){
            let $phone = $('#phone').val();
            var phoneRegExp = new RegExp(/^\d{10}?$/);
            console.log(phoneRegExp.test($phone));
            if (!phoneRegExp.test($phone)){
                alert(`"${$('#phone').val()}" is not a valid phone number. Please insert 10 numeric characters only.`);
                $('#phone').focus();
            } else {
                return true;
                console.log($phone);
            }
        };
        phoneValidation();

//Company Validator funchtion   
        function companyValidation(){
            let $company = $('#company').val();
            var companyRegExp = new RegExp("^[a-zA-Z]+$");
            if (!companyRegExp.test($company)){
               alert(`"${$('#company').val()}" is not a valid company name. Please insert alphabet characters only.`);
                $('#company').focus();
            }
            return true;
            console.log($company);
        };
        companyValidation();
        
});//end document.ready 
