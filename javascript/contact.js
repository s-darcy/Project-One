$(".submit").click(function(e) { 
    e.preventDefault();

    //Variables
    let $firstname, $lastname, $email, $phone, $company;
    var regex = new RegExp("^[a-zA-Z]+$");
    var phoneregex = new RegExp(/[0-9-()+]{3,20}/);
    var emailregex = new RegExp('^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$');
    
//Input Values  
        $firstname = $('#firstname').val();
        $lastname = $('#lastname').val();
        $email = $('#email').val();
        $phone = $('#phone').val();
        $company = $('#company').val();

    console.log($firstname);
    

//--------------All Inputs Field Checker------------------------//     
    //.filter() creates a new array will all elements that pass the test implemented by the provided function        
        var filledInputs = $(this).parent().find("input").filter(function(e){
            return this.value === "";
        });
        if(filledInputs.length) {
            alert('Please make sure that all fields are complete before clicking submit.');
            e.preventDefault(); 
        } else {
            return $('#p2').text('Thank you for filling out the contact page.');
        };
   
    
//First Name Validator Function
        function firstNameValidation(){
            if(regex.test($firstname.length)){
                return true;
                $('#firstname').focus();
            } else {
               return alert(`Your description: " ${$('#firstname').val()}" is not a good description. Please insert alphabet characters only.`); 
            }
        };
        firstNameValidation();
        console.log($firstname);

//Last Name Validator Function
        function lastNameValidation($lastname){
            if(regex.test($lastname)){
                return true;
            } else {
               return alert(`Your description: " ${$('#lastname').val()}" is not a good description. Please insert alphabet characters only.`);
                $('#lastname').focus();
            };
        };
        lastNameValidation();
        console.log($lastname);

//Email - Make the email validate - contains "@" symbol and ".extension"
        function emailValidation($email){
            if(emailregex.test($email)){
                return true;
            } else {
               return alert(`Your description: " ${$('#email').val()}" is not a good description. Please insert alphabet characters only.`);
                $('#email').focus();
            };  
        };
        console.log($email);
        emailValidation();
        
//Phone - Make sure phone is only numeric characters and has at least 10 digits
        function phoneValidation($phone){
            if (phoneregex.test($phone)){
                return true;
//            } else if ($phone.length < 10){
//                $('#phoneAlert').innerText = "Please make sure that your phone number is 10 digits long.";
                $('#phone').focus();
            } else {
               return alert(`Your description: " ${$('#phone').val()}" is not a good description. Please insert alphabet characters only.`);
                $('#phone').focus();
            };
        };
        phoneValidation();
        console.log($phone); 

//Company Validator funchtion   
        function companyValidation($company){
            if (regex.test($company)){
                return true;
            } else {
               return alert(`Your description: " ${$('#company').val()}" is not a good description. Please insert alphabet characters only.`);
                $('#company').focus();
            };
        };
        companyValidation();
        console.log($company);
    
});//end document.ready 


//
//
//
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