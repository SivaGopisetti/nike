import React from 'react';
import {Link} from "react-router-dom";

function Loginpage() {
   
    return (
        <div class="form_wrapper">
        <div class="form_container">
            <div class="title_container">
            <img
      src="https://s3.nikecdn.com/unite/app/908/images/swoosh_black_2x.png"
      alt="logo" />

                <h2> Login Here</h2>
            </div>
            <div class="row clearfix">
                <div class="">
                    <form >
                        <div class="input_field"> <span><i aria-hidden="true" class="fa fa-envelope"></i></span>
                            <input type="email" name="email" placeholder="Email" required/>
                        </div>
                        <div class="input_field"> <span><i aria-hidden="true" class="fa fa-lock"></i></span>
                            <input type="password" name="password" placeholder="Password" required />
                        </div>
                       
                        <div class="input_field checkbox_option">
                            <input type="checkbox" id="cb1" />
                            <label for="cb1">Keep me signed in</label>
                        </div>
                        <div class="f-password-signup">
                            <a href ="/" rel="forgotpassword">ForgetPassword</a>
                        </div>
                        
                        <input class="button" type="submit" value="Login" />
                        <Link to="/Signup"> <input class="button" type="submit" value="SignUp" /></Link>
                       
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
}
export default Loginpage;
