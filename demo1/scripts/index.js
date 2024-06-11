import { User } from '../scripts/utils.js';

$(document).ready( () => {
    
    let loggedUser = JSON.parse(localStorage.getItem("currentLoggedUser"));
    console.log("loaded");
    document.getElementById("displayImage").style.backgroundImage =
     `url(${loggedUser.profilePicture})`;
    
    $("#usernameDisplay").html(`${loggedUser.username}`);
    $("#emailDisplay").html(`${loggedUser.email}`);

});