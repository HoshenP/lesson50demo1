import { User } from '../scripts/utils.js';

$(document).ready( () => {
    
    $("#registerBtn").click(()=> {
        // console.log($("#username").val());
        // console.log($("#profilePicture").prop('files')[0]);

        if ($("#username").val() == "" || $("#password").val() == "" || !$("#profilePicture").prop('files')[0]){
            console.log("some info is missing..");
        }
        else{
            console.log("all is filled");
        }



    });


});