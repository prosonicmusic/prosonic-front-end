"use client";

import { useEffect, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";

import InputComponent from "@/common/FormInput";
import { useGetUser } from "@/hooks/useAuth";
import { changePassword, registerOTP } from "@/services/authServices";
import checkErrors from "@/utils/errorHandler";
import Loading from "@/common/Loading";

const initialPasswordValues = {
  newPassword: "",
  confirmNewPassword: "",
  otp: "",
};

const passwordValidationSchema = Yup.object({
  newPassword: Yup.string()
    .required("Enter a Password")
    .min(8, "Password must contain at least 8 characters")
    .matches(/[0-9]/, "Password requires a number")
    .matches(/[a-z]/, "Password requires a lowercase letter")
    .matches(/[A-Z]/, "Password requires an uppercase letter")
    .matches(/[!@#$%^&()_+]/, "At least one special character (!@#$%^&()_+)")
    .matches(/^\S*$/, "No whitespace"),
  confirmNewPassword: Yup.string()
    .oneOf([Yup.ref("newPassword"), null], "Re-enter the password")
    .required("The password does not match"),
  otp: Yup.number()
    .required("Enter the code sent to the email")
    .min(5, "Enter the code correctly"),
});

export default function Password() {
  const buttonStyles =
    "bg-[#ca1854e7] flex justify-center my-4 w-full cursor-pointer rounded-lg transition-all duration-300 p-1 hover:bg-[#e91c60f8] hover:text-white disabled:bg-gray-500 disabled:cursor-not-allowed";
  const inputStyles =
    "p-4 whitespace-nowrap mb-5 w-[200px] font-medium text-[#707688] text-right max-[900px]:text-left max-[900px]:mb-3 max-[900px]:ml-1 max-[900px]:p-0";
  const settingStyles =
    "bg-[#2e303880] rounded-[10px] w-full m-[15px] min-h-[500px] max-[900px]:mb-[10px]";

  const [timer, setTimer] = useState(300);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [otpStatus, setOtpStatus] = useState(false);
  const [showResendButton, setShowResendButton] = useState(false);

  const { data: userData } = useGetUser();

  const { isLoading: passOtpLoading, mutateAsync: mutatePassOTP } = useMutation({
    mutationFn: registerOTP,
  });

  const { isLoading: changePasswordLoading, mutateAsync: mutateChangePassword } = useMutation({
    mutationFn: changePassword,
  });

  const onSubmitPassword = async (values) => {
    const { newPassword, otp } = values;

    const body = {
      email: userData?.user?.email,
      password: newPassword,
      otp,
    };

    try {
      if (userData) {
        const { data } = await mutateChangePassword(body);
        window.location.reload();
        toast.success("Successfully your password changed");
      } else {
        toast.error("Login first");
      }
    } catch (error) {
      const errors = error?.response?.data?.detail;

      error?.response?.data?.detail
        ? checkErrors(errors)
        : toast.error(error?.response?.data?.message || "Something went wrong!");
    }
  };

  const passwordFormik = useFormik({
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

  const verifyHandler = async () => {
    const body = {
      email: userData?.user?.email,
      type: "password",
    };

    try {
      const { data } = await mutatePassOTP(body);
      setTimer(300);
      setShowResendButton(false);
      setOtpStatus(true);

      toast.success(data?.detail);
    } catch (error) {
      const errors = error?.response?.data?.detail;

      if (errors == "Check your email") {
        setTimer(300);
        setShowResendButton(false);
        setOtpStatus(true);

        toast.error(errors);
      } else {
        const errors = error?.response?.data?.detail;
        setOtpStatus(false);

        error ? checkErrors(errors) : toast.error("Something went wrong!");
      }
    }

    passwordFormik.handleSubmit();
  };

  return (
    <div className={settingStyles}>
      <h3 className="font-semibold text-[#9ba3bb] text-lg py-4 px-6">Password</h3>
      <hr className="h-[2px] w-[] bg-[#000000] border-none" />
      <form
        className="bg-[#2e303880] p-3 m-4 rounded-lg"
        onSubmit={passwordFormik.handleSubmit}
      >
        {/* New Password */}
        <div className="flex items-center ml-16 mt-4 max-[900px]:block max-[900px]:ml-0">
          <h6 className={inputStyles}>New Password</h6>
          <InputComponent
            name="newPassword"
            formik={passwordFormik}
            placeholder="New Password"
            type="password"
            className={"w-full"}
          />
        </div>

        {/* New Password */}
        <div className="flex items-center ml-16 max-[900px]:block max-[900px]:ml-0">
          <h6 className={inputStyles}>Confirmation</h6>
          <InputComponent
            name="confirmNewPassword"
            formik={passwordFormik}
            placeholder="Password Confirmation"
            type="password"
            className={"w-full"}
          />
        </div>

        {/* verification code */}
        {otpStatus && (
          <div className="flex items-center ml-5 max-[900px]:block max-[900px]:ml-0">
            <h6 className={inputStyles}>Verification</h6>
            <InputComponent
              name="otp"
              formik={passwordFormik}
              placeholder="Verification Code"
              type="number"
              className={""}
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
        {otpStatus ? (
          <button className={buttonStyles} type="submit" disabled={!passwordFormik.isValid}>
            {changePasswordLoading ? <Loading w={24} h={20} /> : "Save"}
          </button>
        ) : (
          <button className={buttonStyles} onClick={verifyHandler}>
            {passOtpLoading ? <Loading w={24} h={20} /> : "Verify"}
          </button>
        )}
      </form>
    </div>
  );
}
