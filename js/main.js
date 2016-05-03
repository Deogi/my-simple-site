// https://learn.jquery.com/using-jquery-core/document-ready/
$(document).ready(function(){
    
    $("#HOME").hover(
       function(){ // mouse-enter
       $("#HOME").css("background-color", "yellow");
       },
        function(){ // mouse-leave
       $("#HOME").css("background-color", "");            
       });
       
       
       $("#ABOUT").hover(
       function(){ // mouse-enter
       $("#ABOUT").css("background-color", "yellow");
       },
        function(){ // mouse-leave
       $("#ABOUT").css("background-color", "");
       });
       
       
       $("#LOC").hover(
       function(){ // mouse-enter
       $("#LOC").css("background-color", "yellow");
       },
        function(){ // mouse-leave
       $("#LOC").css("background-color", "");
       });
       
       
       $("#MENU").hover(
       function(){ // mouse-enter
       $("#MENU").css("background-color", "yellow");
       },
        function(){ // mouse-leave
       $("#MENU").css("background-color", "");
       });
       
       
       $("#SOCIAL").hover(
       function(){ // mouse-enter
       $("#SOCIAL").css("background-color", "yellow");
       },
        function(){ // mouse-leave
       $("#SOCIAL").css("background-color", "");
       });
       
       
       $("#SIGN").hover(
       function(){ // mouse-enter
       $("#SIGN").css("background-color", "yellow");
       },
        function(){ // mouse-leave
       $("#SIGN").css("background-color", "");
        });
       
       
       
       
        $("#email_form").validate({
        rules: {
            "email_1": {
                required: true,
                email: true
            },
            "email_2": {
                required: true,
                email: true,
                equalTo: "#email-1"
            },
            "full_name": {
                required: true
            },
            "address_1": {
                required: true
                
            },
            "city": {
                required: true
            },
            "phone": {
                required: true
                
            }

        },

        messages: {

            "email_1": {
                required: "Please enter a valid email address",
                email: "This is not a valid email address"
            },
            "email_2": {
                required: "Please match the email above.",
                equalTo: "Please match the email above."
            },
            "full_name": {
                required: "Please enter your name in the field above."
            },
            "address_1": {
                required: "Please enter at least one address."
            },
            "address_2": {
                
            },
            "city": {
                required: "Please enter your City."
            },
            "phone": {
                required: "Please enter your phone number."
            }


        }



    });
    $("#Submit").click(function(){
       
       alert("Thanks for signing up for the Donut Delights monthly newsletter!!")
        
    });
});

