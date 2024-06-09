import { User } from '../scripts/utils.js';

$(document).ready( () => {
    
    console.log("loaded");
    document.getElementById("displayImage").style.backgroundImage =
     `url(${JSON.parse(localStorage.getItem("currentLoggedUser")).profilePicture})`;

});