
import * as yup from "yup";

export const connections = yup.object().shape({
    email: yup.string().email().required("email should be valid"),
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
    tnc: yup.bool().oneOf([true], "Accept Ts & Cs is required"),
});
  