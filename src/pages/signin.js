import React, { useState } from "react";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import InputComponent from "../components/FormInput";

const initialSignInValues = {
  email: "",
  password: "",
};

const initialSignUpValues = {
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
  terms: false,
};

// validation schema
const validationSchema = Yup.object({
  email: Yup.string()
    .required("Enter your email")
    .email("The email is invalid"),
  password: Yup.string()
    .required("Enter Your Password")
    .min(8, "Password must be at least six characters long"),
});

const signUpvalidationSchema = Yup.object({
  name: Yup.string()
    .required("Enter your full name")
    .min(6, "Your name must contain at least 6 characters"),
  email: Yup.string()
    .required("Enter your email")
    .email("The email is invalid"),
  phoneNumber: Yup.string()
    .required("Enter your Phone number")
    .matches(/^[0-9]{11}$/, "Mobile number must be 11 digits")
    .nullable(),
  password: Yup.string()
    .required("Enter a Password")
    .min(8, "Password must contain at least 8 characters")
    .matches(/[0-9]/, "Password requires a number")
    .matches(/[a-z]/, "Password requires a lowercase letter")
    .matches(/[A-Z]/, "Password requires an uppercase letter"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Re-enter the password")
    .required("The password does not match"),
  terms: Yup.bool()
    .required("The terms and conditions must be accepted.")
    .oneOf([true], "The terms and conditions must be accepted."),
});

export default function Login() {
  const [move, setMove] = useState(false);

  const onSubmitSignIn = (values) => {
    const { email, password } = values;
  };
  const onSubmitSignUp = (values) => {
    const { name, email, phoneNumber, password } = values;
  };

  const signInFormik = useFormik({
    initialValues: initialSignInValues,
    onSubmit: onSubmitSignIn,
    validationSchema,
    validateOnMount: true,
  });

  const signUpFormik = useFormik({
    initialValues: initialSignUpValues,
    onSubmit: onSubmitSignUp,
    validationSchema: signUpvalidationSchema,
    validateOnMount: true,
  });

  return (
    <main className="bg-signin bg-center bg-no-repeat bg-cover relative h-[50vh] mb-[410px] before:content-[''] before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-hero_before">
      <div className="flex justify-center items-center min-h-[100vh] transition-all duration-300 relative z-40 max-[900px]:max-w-[500px] max-[900px]:h-[650px] max-[900px]:flex max-[900px]:items-center max-[900px]:justify-center max-[900px]:mt-[-40px]">
        <div className="relative w-[800px] h-[500px] m-[20px]">
          <div
            className={`absolute top-[40px] w-full h-[420px] flex rounded-[15px] justify-center items-center bg-[#0e253080] transition-all duration-500 shadow-[0_15px_45px_#ffffff1f] ${
              move && "bg-[#33101080]"
            }`}
          >
            <div className="relative w-[50%] h-full flex justify-center items-center flex-col max-[900px]:absolute max-[900px]:w-full max-[900px]:h-[150px] max-[900px]:bottom-0">
              <h2 className="text-[1.2em] font-medium mb-[12px]">
                Already Have an Account ?
              </h2>
              <button
                className="px-[10px] py-1 bg-[#bebebeda] text-gray-800 font-semibold rounded-md transition-all duration-300 hover:bg-[#e6e6e6da]"
                onClick={() => setMove(!move)}
              >
                Sign in
              </button>
            </div>
            <div className="relative w-[50%] h-full flex justify-center items-center flex-col max-[900px]:absolute max-[900px]:w-full max-[900px]:h-[150px] max-[900px]:bottom-0">
              <h2 className="text-[1.2em] font-medium mb-[12px]">
                Don't Have an Account ?
              </h2>
              <button
                className="px-[10px] py-1 bg-[#bebebeda] text-gray-800 font-semibold rounded-md transition-all duration-300 hover:bg-[#e6e6e6da]"
                onClick={() => setMove(!move)}
              >
                Sign up
              </button>
            </div>
          </div>

          <div
            className={`absolute top-0 left-0 w-[50%] ${
              move ? "h-[600px]" : "h-full"
            } bg-[#1a1a1a] z-50 flex justify-center items-center shadow-[0_4px_45px_#ffffff1a] transition-all duration-[0.4s] overflow-hidden rounded-[15px] ${
              move && "left-[50%]"
            }`}
          >
            {/* Signin */}
            <section className={`z-50 delay-[0s] ${move && "left-0"}`}>
              <form
                className={`absolute top-20 w-full p-[50px] transition-all duration-[.35s] flex flex-col ${
                  !move ? "right-0" : "right-[100%]"
                }`}
                onSubmit={signInFormik.handleSubmit}
              >
                <h3 className="text-[1.5em] font-medium mb-6">Sign In</h3>
                <InputComponent
                  name="email"
                  formik={signInFormik}
                  placeholder="Email"
                />
                <InputComponent
                  name="password"
                  type="password"
                  formik={signInFormik}
                  placeholder="Password"
                />
                <button
                  className="bg-[#1aa2d8d3] w-[100px] cursor-pointer rounded-lg transition-all duration-300 p-1 hover:bg-[#1cafe9f1] hover:text-white disabled:bg-gray-500 disabled:cursor-not-allowed"
                  type="submit"
                  disabled={!signInFormik.isValid}
                >
                  Login
                </button>
                <Link href="/" className="underline text-sm mt-2">
                  Forgot Password
                </Link>
              </form>
            </section>

            {/* sign up */}
            <section className="delay-[0s] ">
              <form
                className={`absolute  top-0 w-full p-[50px] transition-all duration-[.45s] flex flex-col ${
                  move ? "left-0" : "left-[100%]"
                }`}
              >
                <h3 className="text-[1.5em] font-medium mb-6">Sign Up</h3>
                <div className="formGroup">
                  <InputComponent
                    name="name"
                    formik={signUpFormik}
                    placeholder="Full Name"
                  />
                  <InputComponent
                    name="email"
                    formik={signUpFormik}
                    placeholder="Email"
                    type="email"
                  />
                  <InputComponent
                    name="phoneNumber"
                    formik={signUpFormik}
                    placeholder="Phone Number"
                    type="tel"
                  />
                  <InputComponent
                    name="password"
                    formik={signUpFormik}
                    placeholder="Password"
                    type="password"
                  />
                  <InputComponent
                    name="confirmPassword"
                    formik={signUpFormik}
                    placeholder="Confirm Password"
                    type="password"
                  />

                  <div className="flex items-center mb-5">
                    <label className="text-sm">
                      I accept terms of
                      <Link
                        href="/terms"
                        className="underline transition-all duration-300 hover:text-[#e91c60f8] mx-1"
                      >
                        Privacy Policy
                      </Link>
                    </label>
                    <input
                      className="ml-3 w-5 h-5 border border-white appearance-none rounded cursor-pointer checked:bg-[#1aa2d8d3] checked:rounded-full"
                      type="checkbox"
                      id="terms"
                      name="terms"
                      value={true}
                      onChange={signUpFormik.handleChange}
                      checked={signUpFormik.values.terms}
                    />
                  </div>
                  {signUpFormik.errors.terms && signUpFormik.touched.terms && (
                    <div className="mb-1 ml-2 text-rose-500 text-left text-xs">
                      {signUpFormik.errors.terms}
                    </div>
                  )}

                  <button
                    className="bg-[#ca1854e7] w-[100px] cursor-pointer rounded-lg transition-all duration-300 p-1 hover:bg-[#e91c60f8] hover:text-white disabled:bg-gray-500 disabled:cursor-not-allowed"
                    type="submit"
                    disabled={!signUpFormik.isValid}
                  >
                    Register
                  </button>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}