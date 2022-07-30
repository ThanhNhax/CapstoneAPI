import { users } from "../models/users.js";



document.querySelector("#btn_Submit").onclick = () => {
    var arrInput = document.querySelectorAll('#frm .iplay');
    let us = new users();
    for (let input of arrInput) { // for of
        let { id, value } = input; // destruring object
        us[id] = value;  //dynamic key
    }
    console.log("us", us);
}