"use client";

import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

import InputComponent from "@/common/FormInput";
import { changePassword } from "@/services/authServices";

const initialPasswordValues = {
  email: "",
  password: "",
  confirmPassword: "",
  otp: "",
};

const passwordValidationSchema = Yup.object({
  password: Yup.string()
    .required("Enter a Password")
    .min(8, "Password must contain at least 8 characters")
    .matches(/[0-9]/, "Password requires a number")
    .matches(/[a-z]/, "Password requires a lowercase letter")
    .matches(/[A-Z]/, "Password requires an uppercase letter")
    .matches(/[!@#$%^&()_+]/, "At least one special character (!@#$%^&()_+)")
    .matches(/^\S*$/, "No whitespace"),
  email: Yup.string().required("Enter your email").email("The email is invalid"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Re-enter the password")
    .required("The password does not match"),
  otp: Yup.number()
    .required("Enter the code sent to the email")
    .min(5, "Enter the code correctly"),
});

export default function ForgotPassword({
  move,
  setShowForgetPassword,
  showForgetPassword,
  otp,
  setOtp,
}) {
  const [timer, setTimer] = useState(300);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [showResendButton, setShowResendButton] = useState(false);

  const {
    data,
    error,
    isLoading,
    mutateAsync: mutateForgotPassword,
  } = useMutation({ mutationFn: changePassword });

  const onSubmitPassword = async (values) => {
    const { password, otp, email } = values;
    const API_URL = `${process.env.NEXT_PUBLIC_BASE_API_URL}/user/password/update`;

    const body = {
      email,
      password,
      otp,
    };

    try {
      const response = await axios.put(API_URL, body, {});
      toast.success("Successfully your password changed");
      window.location.href = "/signin";
    } catch (error) {
      toast.error(
        error?.response?.data?.message
          ? error?.response?.data?.message
          : "Something went wrong, please try again later!"
      );
    }
  };

  const forgotPasswordFormik = useFormik({
    initialValues: initialPasswordValues,
    onSubmit: onSubmitPassword,
    validationSchema: passwordValidationSchema,
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

  const passwordVerifyHandler = async () => {
    setTimer(300);
    setShowResendButton(false);

    const body = {
      email: forgotPasswordFormik.values.email,
      type: "password",
    };

    console.log(body);

    if (forgotPasswordFormik.values.email) {
      try {
        const { data } = await mutateForgotPassword(body);
        console.log(data);
      } catch (error) {
        console.log(error);
        toast.error(error?.response?.data?.message);
      }
    } else {
      toast.error("Enter your email");
    }

    forgotPasswordFormik.handleSubmit();
  };

  return (
    <form
      className={`absolute top-0 w-full p-[50px] transition-all duration-[.35s] flex flex-col ${
        !move ? "right-0" : "right-[100%]"
      }`}
      onSubmit={forgotPasswordFormik.handleSubmit}
    >
      <h3 className="text-[1.2em] font-medium mb-6">Reset password</h3>
      <InputComponent
        name="email"
        type="email"
        formik={forgotPasswordFormik}
        placeholder="Your Email"
      />
      <InputComponent
        name="password"
        type="password"
        formik={forgotPasswordFormik}
        placeholder="New Password"
      />
      <InputComponent
        name="confirmPassword"
        type="password"
        formik={forgotPasswordFormik}
        placeholder="Confirm Password"
      />

      {/* verification code */}
      {otp == "forgot_password" && (
        <div className="flex items-center max-[900px]:block max-[900px]:ml-0">
          <InputComponent
            name="otp"
            formik={forgotPasswordFormik}
            placeholder="Verification Code"
            type="number"
          />
          <div className="p-4 max-[900px]:p-0">
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
        </div>
      )}

      {/* buttons */}
      {otp == "forgot_password" ? (
        <button
          className="bg-[#ca1854e7] my-4 w-full cursor-pointer rounded-lg transition-all duration-300 p-1 hover:bg-[#e91c60f8] hover:text-white disabled:bg-gray-500 disabled:cursor-not-allowed"
          type="submit"
          disabled={!forgotPasswordFormik.isValid}
        >
          Save
        </button>
      ) : (
        <div
          className="bg-[#ca1854e7] my-4 w-full text-center cursor-pointer rounded-lg transition-all duration-300 p-1 hover:bg-[#e91c60f8] hover:text-white disabled:bg-gray-500 disabled:cursor-not-allowed"
          onClick={passwordVerifyHandler}
        >
          Verify
        </div>
      )}

      <div
        onClick={() => setShowForgetPassword(!showForgetPassword)}
        className="underline mt-3 hover:text-white transition duration-200 cursor-pointer"
      >
        Login
      </div>
    </form>
  );
}
