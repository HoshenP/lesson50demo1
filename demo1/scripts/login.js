import { User } from '../scripts/utils.js';

$(document).ready( () => {
    
    $("#loginBtn").click(()=> {

        if ($("#loginUsername").val() == "" || $("#loginPassword").val() == ""){
            console.log("Missing user data");
        }
        else{
            if (JSON.parse(localStorage.getItem("myUsers"))) {
                let myUsers = JSON.parse(localStorage.getItem("myUsers"));
                for (let x in myUsers) {
                    if (myUsers[x].email == $("#loginEmail").val() && myUsers[x].password == $("#loginPassword").val()) {
                        localStorage.setItem("currentLoggedUser", JSON.stringify(myUsers[x]));
                        window.location.href = "index.html";
                    }
                }
            }

    

        }
    });

    $("#ownAccountBtn").click( () => {
        window.location.href = "register.html";
    });


});