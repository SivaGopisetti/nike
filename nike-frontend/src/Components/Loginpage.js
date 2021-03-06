/*
 *importing the react
 *impporting the link from react-route-dom module
 * importin the axios from axios for fetching the data to backend
 *importing the useForm from react-hook-form
 *import the yup module from from yup
*importing the react
*importing the link from react-route-dom module
*/
import React from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


const newschema = yup.object().shape({
  showEmail: yup.boolean(),
  email: yup.string().email().required(" valid email shoud be enter"),
  password: yup
    .string()
    .required("valid password should be entered")
    .matches(/^(?=.[A-Za-z])(?=.\d)(?=.[@$!%#?&])[A-Za-z\d@$!%*#?&]{8,}$,/),
});

/**
 * @description: Here the login page is responsble for the authenticating the user details with details given in the database
 * @returns JSX elements
 */


function Loginpage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(newschema),
  });
  const submitdata = (data) => {
    console.log(data);
    reset();
  };

  /**
   * @description: Here the data is stored by validating the page by id.
   */




  function datagiven() {
    let emaildata = document.getElementById("email_id").value;
    let passworddata = document.getElementById("password").value;

    //using the axios to connect the api 
    axios
      .post("http://localhost:1109/help", {
        email: emaildata,
        password: passworddata,
      })

      .then((res) => {             // sending the data
        console.log(res.data);
      })
      .catch((error) => {         //  showing the to the invalid details
        console.log(error);
      });
  }

  return (
    <div class="form_wrapper">
      <div class="form_container">
        <div class="title_container">
          <img
            src="https://s3.nikecdn.com/unite/app/908/images/swoosh_black_2x.png"
            alt="logo"
          />
          <h2> Login Here</h2>
        </div>
        <div class="row clearfix">
          <div class="">
            <form onSubmit={handleSubmit(submitdata)}>
              <div class="input_field">
                {" "}
                <span>
                  <i aria-hidden="true" class="fa fa-envelope"></i>
                </span>
                <input
                  type="email"
                  id="email_id"
                  name="email"
                  placeholder="Email"
                  {...register("email")}
                />
                <p className="errormessage"> {errors.email?.message} </p>
              </div>
              <div class="input_field">
                {" "}
                <span>
                  <i aria-hidden="true" class="fa fa-lock"></i>
                </span>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  {...register("password")}
                />
              </div>

              <div class="input_field checkbox_option">
                <input type="checkbox" id="cb1" />
                <label for="cb1">Keep me signed in</label>
              </div>
              <div class="f-password-signup">
                <a href="/" rel="forgotpassword">
                  ForgetPassword
                </a>
              </div>

              <input
                class="button"
                type="submit"
                value="Login"
                onClick={datagiven}
              />
              <Link to="/Signup">
                {" "}
                <input class="button" type="submit" value="SignUp" />
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loginpage;   //exporting default Loginpage for production use
