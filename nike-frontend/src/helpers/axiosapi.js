
<<<<<<< HEAD
// importing the axios to sending the data
=======
// importing the  axios modules
>>>>>>> cb58d99dde6a1a927e8822d144359408f41db179
import axios from "axios";

//sending the data by useing the axiosapi to the dom elements and value
function axiosapi() {
  let emaildata = document.getElementById("email_id").value;
  let passworddata = document.getElementById("password").value;
  let confirmpassworddata = document.getElementById(
    "password-confirmation"
  ).value;
  let firstnamedata = document.getElementById("firstname").value;
  let lastnamedata = document.getElementById("lastname").value;

  //using the axios
  axios
    .post("http://localhost:1109/help", {
      email: emaildata,
      password: passworddata,
      password_confirmation: confirmpassworddata,
      firstname: firstnamedata,
      lastname: lastnamedata,
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
}
export default axiosapi; // exporting default modules to use in app.js
