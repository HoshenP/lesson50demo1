import { User } from '../scripts/utils.js';

$(document).ready( () => {
    
    $("#registerBtn").click(()=> {
        console.log($("#profilePicture").prop('files')[0]);

        if ($("#username").val() == "" || $("#password").val() == "" || $("#email").val() == "" || !$("#profilePicture").prop('files')[0]){
            alert("Some data is missing..");
            console.log("Missing user data");
        }
        else{
            console.log("all is filled");

             // picture must be below 5MB in order to save in local storage
            let fileReader = new FileReader();
            fileReader.onload = function () {
                let image = fileReader.result;  

                if (JSON.parse(localStorage.getItem("myUsers"))) {
                    let tempUsers = JSON.parse(localStorage.getItem("myUsers"));
                    let newUser = new User(
                        $("#username").val(),
                        $("#password").val(),
                        $("#email").val(),
                        image);
        
                    tempUsers.push(newUser);
                    localStorage.setItem("myUsers", JSON.stringify(tempUsers));

                } else {
                    let tempUsers= [];
                    let newUser = new User(
                        $("#username").val(),
                        $("#password").val(),
                        $("#email").val(),
                        image);
        
                    tempUsers.push(newUser);
                    localStorage.setItem("myUsers", JSON.stringify(tempUsers));
                }
                
            };

            fileReader.readAsDataURL($('#profilePicture').prop('files')[0]);
            window.location.href = "login.html";

            // get image from localStorage and display test
            // document.getElementById("displayImage").style.backgroundImage = `url(${JSON.parse(localStorage.getItem("myUsers"))[0].profilePicture})`;

        }
    });
        
    $("#ownAccountBtn").click( () => {
        window.location.href = "login.html";
    });
    
    

});