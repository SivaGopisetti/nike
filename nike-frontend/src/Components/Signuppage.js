/**
 * importing necessary required npm modules
 * using react hooks for validation form
 * intializing schema to store data with respect to backend schema
 *
 */

<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

/*using yup to validate the form
*/
const newschema = yup.object().shape( {
  email: yup.string().email().required( "email should be valid" ),
  password: yup.string()
    .required("Please Enter your password")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),

  password_confirmation: yup.string().test(
    "passwords-match",
    "Passwords must match",
    function (value) {
      return this.parent.password === value;
    }
  ),

  firstname: yup.string().max(15).required("firstname is mandatory").matches(/^[a-zA-Z]*$/g, "firstname should be valid"),
  lastname: yup.string().max(15).required("lastname is mandatory").matches(/^[a-zA-Z]*$/g, "firstname should be valid"),
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
    let emaildata = document.getElementById( "email_id" ).value;
    let passworddata = document.getElementById( "password" ).value;
    let confirmpassworddata = document.getElementById(
      "password-confirmation"
    ).value;
    let firstnamedata = document.getElementById( "firstname" ).value;
    let lastnamedata = document.getElementById( "lastname" ).value;

 
    //using the axios 
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
=======
 import React from "react";
 import { Link } from "react-router-dom";
 import axios from "axios";
 import { useForm } from "react-hook-form";
 import { yupResolver } from "@hookform/resolvers/yup";
 import * as yup from "yup";
 
 // Giving schema to frontend to store data with respect to backend by using YUP
 const newschema = yup.object().shape({
	 showEmail: yup.boolean(),
	email: yup.string().email().required("email should be valid"),
	// password: yup.string().required("password should be valid").min(6).max(10),
	 password: yup.string()
		 .required("Please Enter your password")
		 .matches(
			 /^(?=.[A-Za-z])(?=.\d)(?=.[@$!%#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
			 "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
		 ),
	// password_confirmation: yup
	//   .string()
	//   .required("password confirmation should be valid")
	//   .oneOf([yup.ref("password"), null]),
	 password_confirmation: yup.string().test(
		 "passwords-match",
		 "Passwords must match",
		 function (value) {
			 return this.parent.password === value;
		 }
	 ),
	firstname: yup.string().max(15).required("firstname is mandatory").matches(''),
	lastname: yup.string().max(15).required("lastname is mandatory").matches(''),
	tnc: yup.bool().oneOf([true], "Accept Ts & Cs is required"),
 });
 
 function Signuppage() {
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
 
	//posting data to database  axios api to store in mongodb database
	function dataneed() {
	  const email_given = document.getElementById("email_id").value;
	  const password_id = document.getElementById("password_given").value;
	  const confirmpassworddata = document.getElementById(
		 "password-confirmation"
	  ).value;
	  const firstnamedata = document.getElementById("firstname").value;
	  const lastnamedata = document.getElementById("lastname").value;
 
	//importing the axios from 
	  axios
		 .post("http://localhost:1109/help", {
			email: email_given,
			password: password_id,
			confirm_password: confirmpassworddata,
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
				 <form onSubmit={handleSubmit(submitdata)}>
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
						 {...register("email")}
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
						 id="password_given"
						 title="Password"
						 placeholder="Password"
						 className="input-text"
						 data-password-min-length="8"
						 data-password-min-character-sets="3"
						 data-validate="{required:true, 'validate-customer-password':true}"
						 autoComplete="off"
						 aria-required="true"
						 {...register("password")}
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
						 name="confirm_password"
						 title="Confirm Password"
						 id="password-confirmation"
						 placeholder="Re-Type Password"
						 className="input-text"
						 data-validate="{required:true, equalTo:'#password'}"
						 autoComplete="off"
						 aria-required="true"
						 {...register("password_confirmation")}
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
							  {...register("firstname")}
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
							  {...register("lastname")}
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
						 {...register("tnc")}
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
					  onClick={dataneed}
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
>>>>>>> 1e9620ea40915068434592fb1855c8735244add3
