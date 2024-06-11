import { User } from '../scripts/utils.js';

$(document).ready( () => {
    
    $("#loginBtn").click(()=> {

        if ($("#loginUsername").val() == "" || $("#loginPassword").val() == ""){
            alert("Some data is missing..");
            console.log("Missing user data");
        }
        else{
            if (JSON.parse(localStorage.getItem("myUsers"))) {
                let foundUser = false;
                let myUsers = JSON.parse(localStorage.getItem("myUsers"));
                for (let x in myUsers) {
                    if (myUsers[x].email == $("#loginEmail").val() && myUsers[x].password == $("#loginPassword").val()) {
                        localStorage.setItem("currentLoggedUser", JSON.stringify(myUsers[x]));
                        foundUser = true;
                        window.location.href = "index.html";
                    }
                }
                if (!foundUser){
                    alert("Wrong email or password");
                }
            }

        }
    });

    $("#ownAccountBtn").click( () => {
        window.location.href = "register.html";
    });


});