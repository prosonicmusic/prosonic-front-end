import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import { validate } from "./validate";

// Components
import Navbar from "../../components/Navbar";

function LoginPage() {
   const [move, setMove] = useState(false);

   const [data, setData] = useState({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      isAccepted: false,
   });

   const [errors, setErrors] = useState({});

   useEffect(() => {
      setErrors(validate(data));
      console.log(errors)
   }, [data]);

   const { name, email, password, confirmPassword, isAccepted } = data;

   const onChange = (event) => {
      if (event.target.name === "isAccepted") {
         setData({ ...data, [event.target.name]: event.target.checked });
      } else {
         setData({ ...data, [event.target.name]: event.target.value });
      }
   };

   const onSubmit = (e) => {
      e.preventDefault();

      if (password !== confirmPassword) {
         toast.error("Passwords do not match");
      }
   };
   return (
      <>
         <Navbar />
         <section id="loginPageHeader">
            <div id="loginSec">
               <div className="loginContainer">
                  <div id="bgOne" className={`oneBgColor ${move ? "active" : ""}`}>
                     <div className="loginBox signin">
                        <h2>Already Have an Account ?</h2>
                        <button className="loginBtn" onClick={() => setMove(!move)}>
                           Sign in
                        </button>
                     </div>
                     <div className="loginBox signup">
                        <h2>Don't Have an Account ?</h2>
                        <button className="signupBtn" onClick={() => setMove(!move)}>
                           Sign up
                        </button>
                     </div>
                  </div>

                  <div className={`hide ${move ? "active" : ""}`} id="formBx">
                     <div className="form signinForm">
                        <form>
                           <h3>Sign In</h3>
                           <input
                              type="email"
                              placeholder="Email"
                              id="login-email"
                              name="email"
                              value={email}
                              onChange={onChange}
                              required
                           />
                           <input
                              type="password"
                              placeholder="Password"
                              id="login-password"
                              name="password"
                              value={password}
                              onChange={onChange}
                              required
                           />
                           <button type="submit">Login</button>
                           <Link to="/" className="forgot">
                              Forgot Password
                           </Link>
                        </form>
                     </div>

                     {/* sign up */}
                     <div className="form signupForm">
                        <form onSubmit={onSubmit}>
                           <h3>Sign Up</h3>
                           <div className="formGroup">
                              <input
                                 type="text"
                                 placeholder="Name"
                                 id="name"
                                 name="name"
                                 value={name}
                                 onChange={onChange}
                                 required
                              />
                              <input
                                 type="email"
                                 placeholder="Email Address"
                                 id="email"
                                 name="email"
                                 value={email}
                                 onChange={onChange}
                                 required
                              />
                              <input
                                 type="password"
                                 placeholder="Password"
                                 id="password"
                                 name="password"
                                 value={password}
                                 onChange={onChange}
                                 required
                              />
                              <input
                                 type="password"
                                 placeholder="Confirm Password"
                                 id="password2"
                                 name="confirmPassword"
                                 value={confirmPassword}
                                 onChange={onChange}
                                 required
                              />

                              <div className="accept-terms">
                                 <label className="I-accept">
                                    I accept terms of
                                    <Link to="/terms" className="privacyLink">
                                       {" "}
                                       Privacy Policy
                                    </Link>
                                 </label>
                                 <input
                                    type="checkbox"
                                    name="isAccepted"
                                    value={isAccepted}
                                    onChange={onChange}
                                 />
                              </div>

                              <button type="submit">Register</button>
                              {/* <input type="submit" value="Register" /> */}
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
}

export default LoginPage;
