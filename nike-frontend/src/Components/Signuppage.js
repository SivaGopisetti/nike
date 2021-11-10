/**
 * importing necessary required npm modules
 * using react hooks for validation form
 * intializing schema to store data with respect to backend schema
 *
 */

import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const newschema = yup.object().shape( {
  email: yup.string().email().required( "email should be valid" ),
  password: yup.string().required( "password should be valid" ).min( 4 ).max( 8 ),
  password_confirmation: yup
    .string()
    .required( "password confirmation should be valid" )
    .oneOf( [yup.ref( "password" ), null] ),
  firstname: yup.string().max( 15 ).required( "firstname is mandatory" ),
  lastname: yup.string().max( 15 ).required( "lastname is mandatory" ),
  tnc: yup.bool().oneOf( [true], "Accept Ts & Cs is required" ),
} );

function Signuppage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm( {
    resolver: yupResolver( newschema ),
  } );

  const submitdata = ( data ) => {
    console.log( data );
    reset();
  };

  //post data
  function userData() {
    let emaildata = document.getElementById( "email_address" ).value;
    let passworddata = document.getElementById( "password" ).value;
    let confirmpassworddata = document.getElementById(
      "password-confirmation"
    ).value;
    let firstnamedata = document.getElementById( "firstname" ).value;
    let lastnamedata = document.getElementById( "lastname" ).value;

    // eslint-disable-next-line
    let str,
      element = document.getElementById( 'cal_preview' );
    if ( element != null ) {
      str = element.value;
    }
    else {
      str = null;
    }

    axios
      .post( "http://localhost:1109/help", {
        email: emaildata,
        password: passworddata,
        password_confirmation: confirmpassworddata,
        firstname: firstnamedata,
        lastname: lastnamedata,
      } )
      .then( ( res ) => {
        console.log( res.data );
      } )
      .catch( ( error ) => {
        console.log( error );
      } );
  }

  return (
    <div className="form_wrapper">
      <div className="form_container">
        <div className="title_container">
          <img
            src="https://s3.nikecdn.com/unite/app/908/images/swoosh_black_2x.png"
            alt="logo"
          />
          <h2> YOUR ACCOUNT FOR EVERYTHING NIKE</h2>
        </div>
        <div class="row clearfix">
          <div className="">
            <form onSubmit={handleSubmit( submitdata )}>
              <div className="input_field">
                {" "}
                <span>
                  <i aria-hidden="true" class="fa fa-envelope"></i>
                </span>
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  id="email_id"
                  title="Email"
                  placeholder="Email"
                  className="input-text"
                  data-validate="{required:true, 'validate-email':true}"
                  aria-required="true"
                  {...register( "email" )}
                />
                <p className="errormessage"> {errors.email?.message} </p>
              </div>
              <div className="input_field">
                {" "}
                <span>
                  <i aria-hidden="true" className="fa fa-lock"></i>
                </span>
                <input
                  type="password"
                  name="password"
                  id="password"
                  title="Password"
                  placeholder="Password"
                  className="input-text"
                  data-password-min-length="8"
                  data-password-min-character-sets="3"
                  data-validate="{required:true, 'validate-customer-password':true}"
                  autoComplete="off"
                  aria-required="true"
                  {...register( "password" )}
                />
                <p className="errormessage"> {errors.password?.message} </p>
              </div>
              <div className="input_field">
                {" "}
                <span>
                  <i aria-hidden="true" className="fa fa-lock"></i>
                </span>
                <input
                  type="password"
                  name="password_confirmation"
                  title="Confirm Password"
                  id="password-confirmation"
                  placeholder="Re-Type Password"
                  className="input-text"
                  data-validate="{required:true, equalTo:'#password'}"
                  autoComplete="off"
                  aria-required="true"
                  {...register( "password_confirmation" )}
                />
                <p className="errormessage" style={{ fontSize: "12px" }}>
                  {" "}
                  {errors.confirmpassword && "passwords should match!"}
                </p>
              </div>
              <div className="row clearfix">
                <div className="col_half">
                  <div className="input_field">
                    {" "}
                    <span>
                      <i aria-hidden="true" className="fa fa-user"></i>
                    </span>
                    <input
                      type="text"
                      id="firstname"
                      name="firstname"
                      title="First Name"
                      placeholder="First Name"
                      className="htmlFor-control  validate-alpha input-text "
                      autoComplete="off"
                      aria-required="true"
                      {...register( "firstname" )}
                    />
                    <p className="errormessage" style={{ fontSize: "12px" }}>
                      {" "}
                      {errors.firstname?.message}{" "}
                    </p>
                  </div>
                </div>
                <div className="col_half">
                  <div className="input_field">
                    {" "}
                    <span>
                      <i aria-hidden="true" className="fa fa-user"></i>
                    </span>
                    <input
                      type="text"
                      id="lastname"
                      name="lastname"
                      title="Last Name"
                      placeholder="Last Name"
                      className="htmlFor-control validate-alpha  input-text "
                      autoComplete="off"
                      aria-required="true"
                      {...register( "lastname" )}
                    />
                    <p className="errormessage" style={{ fontSize: "12px" }}>
                      {" "}
                      {errors.lastname?.message}{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="input_field radio_option">
                <input type="radio" name="radiogroup1" id="rd1" />
                <label for="rd1">Male</label>
                <input type="radio" name="radiogroup1" id="rd2" />
                <label for="rd2">Female</label>
              </div>
              <div className="input_field select_option">
                <select>
                  <option>Select a country</option>
                  <option value="91IN">India (+91)</option>
                  <option value="93AF">Afghanistan (+93)</option>
                  <option value="213DZ">Algeria (+213)</option>
                  <option value="61AU">Australia (+61)</option>
                  <option value="43AT">Austria (+43)</option>
                  <option value="880BD">Bangladesh (+880)</option>
                  <option value="1CA">Canada (+1)</option>
                  <option value="1US">United Status (+1)</option>

                  <option value="91IN">India (+91)</option>
                  <option value="93AF">Afghanistan (+93)</option>
                  <option value="213DZ">Algeria (+213)</option>
                  <option value="61AU">Australia (+61)</option>
                  <option value="43AT">Austria (+43)</option>
                  <option value="880BD">Bangladesh (+880)</option>
                  <option value="1CA">Canada (+1)</option>
                  <option value="1US">United Status (+1)</option>

                  <option value="91IN">India (+91)</option>
                  <option value="93AF">Afghanistan (+93)</option>
                  <option value="213DZ">Algeria (+213)</option>
                  <option value="61AU">Australia (+61)</option>
                  <option value="43AT">Austria (+43)</option>
                  <option value="880BD">Bangladesh (+880)</option>
                  <option value="1CA">Canada (+1)</option>
                  <option value="1US">United Status (+1)</option>
                </select>
                <div className="select_arrow"></div>
              </div>
              <div className="input_field checkbox_option">
                <input
                  type="checkbox"
                  id="cb1"
                  name="tnc"
                  value=""
                  {...register( "tnc" )}
                  required
                />
                <label for="cb1">I agree with terms and conditions</label>
                <p className="errormessage">
                  {errors.tnc && "Agree terms and condition"}
                </p>
              </div>

              <input
                className="button"
                type="submit"
                value="Join Us"
                onClick={userData}
              />
              <Link to="/">
                {" "}
                <input className="button" type="submit" value="Sign In" />
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signuppage;