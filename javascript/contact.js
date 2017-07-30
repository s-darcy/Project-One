//$(document).ready(function(){
//   $('#formSubmission').submit(function(e){
//     e.preventDefault();
//       console.log(e);
//       
//Variables
        //var $allInputs = $(':input'); //the : before means "all" inputs
        var $firstname = $('#firstname').val();
        var $lastname = $('#lastname').val();
        var $email = $('#email').val();
        var $phone = $('#phone').val();
        var $company = $('#company').val();
        var $phoneValidator = /[0-9-()+]{3,20}/;
        var $emailValidator = '^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$';
        var $namesValidator = '/^[a-z0-9_-]{3,16}$/';
       
//Create function that loops over all the inputs looking for a value
    //.filter() creates a new array will all elements that pass the test implemented by the provided function
    //.trim() removes white space from both ends of a string
           var inputsEntered = $("input").filter(function() { 
              return $.trim($(this).val()).length === 0
           }).length == 0;

//All - Make sure all form inputs (not textarea) have at least 1 character before populating the "Submit" button
        $('.submit').click(function(){
           if ('inputsEntered' === true){
                alert('Thank you for filling out the contact page.');
               $('.submit').css("opacity", "1");
            } else {
                alert('Please make sure that all fields are complete before clicking submit.');
            };
        });
          
//Keeps inputs from disappearing
//        var sessionInputs = document.getElementsByClassName("formSubmission");
//        if (sessionStorage.getItem("autosave")){
//            sessionInputs.value = sessionStorage.getItem("autosave");
//        };
//        sessionInputs.addEventListener("change", function() {
//        sessionStorage.setItem("autosave", sessionInputs.value);
//        }); 
//       
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
