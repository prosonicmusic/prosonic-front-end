import { useEffect, useState } from "react";
import Link from "next/link";

import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { parseCookies } from "nookies";
import { useFormik } from "formik";
import * as Yup from "yup";

import { register, registerOTP } from "@/services/authServices";
import InputComponent from "@/common/FormInput";
import Loading from "@/common/Loading";
import checkErrors from "@/utils/errorHandler";

const initialSignUpValues = {
  name: "",
  username: "",
  signupEmail: "",
  phoneNumber: "",
  signupPassword: "",
  confirmPassword: "",
  otp: "",
  terms: false,
};

// validation schema
const signUpvalidationSchema = Yup.object({
  name: Yup.string()
    .required("Enter your full name")
    .min(6, "Your name must contain at least 6 characters"),
  signupEmail: Yup.string().required("Enter your email").email("The email is invalid"),
  username: Yup.string()
    .matches(/[a-z]/, "Password requires a lowercase letter")
    .required("Enter a username")
    .min(4, "Password must contain at least 4 characters"),
  phoneNumber: Yup.string()
    .required("Enter your Phone number")
    .matches(
      /^\+\d{6,14}$/,
      "The mobile number must be 15 digits long and have a + sign with the country code"
    )
    .nullable(),
  signupPassword: Yup.string()
    .required("Enter a Password")
    .min(8, "Password must contain at least 8 characters")
    .matches(/[0-9]/, "Password requires a number")
    .matches(/[a-z]/, "Password requires a lowercase letter")
    .matches(/[A-Z]/, "Password requires an uppercase letter")
    .matches(/[!@#$%^&()_+]/, "At least one special character (!@#$%^&()_+)")
    .matches(/^\S*$/, "No whitespace"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("signupPassword"), null], "Re-enter the password")
    .required("The password does not match"),
  otp: Yup.number()
    .required("Enter the code sent to the email")
    .min(5, "Enter the code correctly"),
  terms: Yup.bool()
    .required("The terms and conditions must be accepted.")
    .oneOf([true], "The terms and conditions must be accepted."),
});

export default function SignupForm({ move, otp, setOtp }) {
  const [timer, setTimer] = useState(300);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [emailEntered, setEmailEntered] = useState(false);
  const [showResendButton, setShowResendButton] = useState(false);

  const { accessToken } = parseCookies();

  const { isLoading: otpLoading, mutateAsync: mutateSignupOTP } = useMutation({
    mutationFn: registerOTP,
  });

  const { isLoading: RegisterLoading, mutateAsync: mutateRegister } = useMutation({
    mutationFn: register,
  });

  const onSubmitSignUp = async (values) => {
    const { name, username, signupEmail, phoneNumber, signupPassword, otp } = values;
    const signupValues = {
      username,
      email: signupEmail,
      name,
      password: signupPassword,
      phone_number: phoneNumber,
      otp,
    };

    if (accessToken) {
      toast.error("You are logged in, log out to register");
    } else {
      try {
        const { data } = await mutateRegister(signupValues);
        toast.success("You have successfully registered");
        window.location.href = "/auth";
      } catch (error) {
        const errors = error.response?.data?.detail;

        if (error) {
          checkErrors(errors);
        } else {
          toast.error("Something went wrong!");
        }
      }
    }
  };

  const signUpFormik = useFormik({
    initialValues: initialSignUpValues,
    onSubmit: onSubmitSignUp,
    validationSchema: signUpvalidationSchema,
    validateOnMount: true,
  });

  useEffect(() => {
    let interval = null;
    if (timer > -1) {
      interval = setInterval(() => {
        const seconds = timer % 60;
        const minutes = Math.floor(timer / 60);
        setSeconds(seconds);
        setMinutes(minutes);
        setTimer((timer) => timer - 1);
      }, 1000);
    } else {
      clearInterval(interval);
      setShowResendButton(true);
    }
    return () => clearInterval(interval);
  }, [timer]);

  useEffect(() => {
    if (signUpFormik.values.signupEmail) {
      setEmailEntered(true);
    } else {
      setEmailEntered(false);
    }
  }, [signUpFormik]);

  const verifyHandler = async () => {
    setTimer(300);
    setShowResendButton(false);

    const body = {
      email: signUpFormik.values?.signupEmail,
      type: "register",
    };

    if (signUpFormik.values.signupEmail) {
      try {
        const { data } = await mutateSignupOTP(body);

        toast.success("Verification code sent");

        setOtp("signup");
        setTimer(300);
        setShowResendButton(false);
      } catch (error) {
        const errors = error.response?.data?.detail;

        if (errors == "Check your email") {
          setOtp("signup");
          setTimer(300);
          setShowResendButton(false);

          toast.error(errors);
        } else {
          setOtp("");
          checkErrors(errors);
        }
      }
    } else {
      toast.error("Enter your email");
    }

    signUpFormik.handleSubmit();
  };

  useEffect(() => {
    setOtp("");
  }, [signUpFormik.values.signupEmail]);

  return (
    <section className="delay-[0s]">
      <form
        className={`absolute top-0 w-full p-[50px] transition-all duration-[.45s] flex flex-col ${
          move ? "left-0" : "left-[100%]"
        }`}
        onSubmit={signUpFormik.handleSubmit}
      >
        <h3 className="text-[1.5em] font-medium mb-6">Sign Up</h3>
        <div className="formGroup">
          <InputComponent name="username" formik={signUpFormik} placeholder="username" />
          <InputComponent name="name" formik={signUpFormik} placeholder="Full Name" />
          <InputComponent
            name="signupEmail"
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
            name="signupPassword"
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

          {/* policy */}
          {signUpFormik.errors.terms && signUpFormik.touched.terms && (
            <div className="mb-1 ml-1 text-rose-500 text-left text-xs">
              {signUpFormik.errors.terms}
            </div>
          )}
          <div className="flex items-center mb-6 ml-1">
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

          {/* verification code */}
          {otp && (
            <div className="flex items-center">
              <InputComponent
                name="otp"
                formik={signUpFormik}
                placeholder="Verification Code"
                type="number"
              />

              {seconds > 0 || minutes > 0 ? (
                <p className="ml-3">
                  {minutes < 10 ? `0${minutes}` : minutes}:
                  {seconds < 10 ? `0${seconds}` : seconds}
                </p>
              ) : showResendButton ? (
                <button className="ml-3" onClick={verifyHandler}>
                  Resend
                </button>
              ) : (
                <p className="ml-3">Waiting for OTP...</p>
              )}
            </div>
          )}

          {/* buttons */}
          {otp ? (
            <button
              className="bg-[#ca1854e7] flex justify-center w-[100px] cursor-pointer rounded-lg transition-all duration-300 p-1 hover:bg-[#e91c60f8] hover:text-white disabled:bg-gray-500 disabled:cursor-not-allowed"
              type="submit"
              disabled={!signUpFormik.isValid}
            >
              {RegisterLoading ? <Loading w={24} h={20} /> : "Register"}
            </button>
          ) : (
            <button
              className="bg-[#ca1854e7] flex justify-center w-[100px] cursor-pointer rounded-lg transition-all duration-300 p-1 hover:bg-[#e91c60f8] hover:text-white disabled:bg-gray-500 disabled:cursor-not-allowed"
              onClick={verifyHandler}
              disabled={!emailEntered}
            >
              {otpLoading ? <Loading w={24} h={20} /> : "Verify"}
            </button>
          )}
        </div>
      </form>
    </section>
  );
}
