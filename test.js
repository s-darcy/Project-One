//variables
let $firstname = $('#firstname').val();
let $lastname = $('#lastname').val();
let $email = $('#email').val();
let $phone = $('#phone').val();
let $company = $('#company').val();
//Create a Loop to loop over var's





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