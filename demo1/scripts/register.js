import { User } from '../scripts/utils.js';

$(document).ready( () => {
    
    $("#registerBtn").click(()=> {
        console.log($("#profilePicture").prop('files')[0]);

        if ($("#username").val() == "" || $("#password").val() == "" || !$("#profilePicture").prop('files')[0]){
            console.log("some info is missing..");
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
                        image);
        
                    tempUsers.push(newUser);
                    localStorage.setItem("myUsers", JSON.stringify(tempUsers));

                } else {
                    let tempUsers= [];
                    let newUser = new User(
                        $("#username").val(),
                        $("#password").val(),
                        image);
        
                    tempUsers.push(newUser);
                    localStorage.setItem("myUsers", JSON.stringify(tempUsers));
                }
                
            };

            fileReader.readAsDataURL($('#profilePicture').prop('files')[0]);

            // get image from localStorage and display test
            document.getElementById("displayImage").style.backgroundImage = `url(${JSON.parse(localStorage.getItem("myUsers"))[0].profilePicture})`;


            






        }
    });

        // how to use file reader :)
        // $('#profilePicture').on('change', function () {
        //     console.log("change detected");

        //     let fileReader = new FileReader();
        //     fileReader.onload = function () {
        //       let data = fileReader.result;  // data <-- in this var you have the file data in Base64 format
        //       document.getElementById("displayImage").style.backgroundImage = `url(${data})`;
        //     };
        //     fileReader.readAsDataURL($('#profilePicture').prop('files')[0]);

        //     console.log("changes should be made..");
        // });
        


});