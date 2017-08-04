$(document).ready(function(){
   $('.submit').css("opacity", ".6");

    //Variables
    var $firstname, $lastname, $email, $phone, $company;
    var $phoneValidator = /[0-9-()+]{3,20}/;
    var $emailValidator = '^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$';
    var $namesValidator = '/^[a-z0-9_-]{3,16}$/';
    
    
    $(".submit").click(function(e) {  
        //.filter() creates a new array will all elements that pass the test implemented by the provided function        
        var filledInputs = $(this).parent().find("input").filter(function(e) {
            return this.value === "";
        });
            if(filledInputs.length) {
                alert('Please make sure that all fields are complete before clicking submit.');
                e.preventDefault(); 
            } else {
                alert('Thank you for filling out the contact page.');
            };
        });  
 });   

    
//  $(".next").click(function() {
//    var empty = $(this).parent().find("input").filter(function() {
//        return this.value === "";
//    });
//    if(empty.length) {
//        //At least one input is empty
//    }
//});
//    
//    //All - Make sure all form inputs (not textarea) have at least 1 character before populating the "Submit" button


//       
//First Name Validator Function
//        function firstNameValidation(){
//            if ($firstname.match($namesValidator)===true){
//                alert("This works!");
//            } else {
//               alert("Please make sure to include Alpha-numeric character only."); 
//            };
//        };
//        console.log($firstname);
//
//Last Name Validator Function
//        function lastNameValidation(){
//            if ($lastname.match($namesValidator)===true){
//                alert("This works!");
//            } else {
//               alert("Please make sure to include Alpha-numeric character only."); 
//            };
//        };
//        console.log($lastname);
//
//Email - Make the email validate - contains "@" symbol and ".extension"
//        function emailValidation(){
//            if ($email.match($emailValidator)===true){
//                alert("This works!");
//            } else {
//               alert("Please make sure to include Alpha-numeric character only."); 
//            };
//        };
//
//Phone - Make sure phone has at least 10 digits
//        function nameValidation(){
//            if ($phone.match($phoneValidator)===true){
//                alert("This works!");
//            } else {
//               alert("Please make sure to include Alpha-numeric character only."); 
//            };
//        };
//    $('.submit').attr("disabled", true);
//    return true;   
//  }); 
//});
//
// 
//
//Submit - Make the submit button's opactity become 100% with jQuery once all requirements are met
//
//
//
