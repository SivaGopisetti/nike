/*
 *importing the react
 *impporting the link from react-route-dom module
 */
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const newschema = yup.object().shape({
  showEmail: yup.boolean(),
  email: yup.string().email().required("email should be valid"),
  password: yup
    .string()
    .required("password should be valid")
    .matches(/^(?=.[A-Za-z])(?=.\d)(?=.[@$!%#?&])[A-Za-z\d@$!%*#?&]{8,}$,/),
});

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

  function datagiven() {
    let emaildata = document.getElementById("email_id").value;
    let passworddata = document.getElementById("password").value;

    //using the axios to
    axios
      .post("http://localhost:1109/help", {
        email: emaildata,
        password: passworddata,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
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

export default Loginpage;
