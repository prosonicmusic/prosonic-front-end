import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { toast } from "react-hot-toast";
import { parseCookies } from "nookies";
import { useFormik } from "formik";
import * as Yup from "yup";

import routerPush from "@/src/utils/routerPush";
import { useAuth, useAuthActions } from "@/src/context/AuthContext";
import InputComponent from "../common/FormInput";

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

export default function Password({ userData }) {
  const [timer, setTimer] = useState(600);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [showResendButton, setShowResendButton] = useState(false);

  const { accessToken } = parseCookies();
  const router = useRouter();
  const dispatch = useAuthActions();
  const { user, otp } = useAuth();

  const onSubmitPassword = async (values) => {
    const { newPassword, otp } = values;
    const API_URL = `${process.env.NEXT_PUBLIC_BASE_API_URL}/user/password/update`;

    const signupValues = {
      email: userData?.user?.email,
      password: newPassword,
      otp,
    };

    try {
      if (accessToken) {
        const response = await axios.put(API_URL, signupValues, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        window.location.href = "/dashboard/password";
        toast.success("Successfully your password changed");
      } else {
        toast.error("Login first");
      }
    } catch (error) {
      toast.error("Something went wrong, please try again later!");
    }

    // fetch data
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
    setTimer(600);
    setShowResendButton(false);

    const body = {
      email: userData?.user?.email,
      type: "password",
    };

    await dispatch({ type: "SET_OTP", payload: body });

    passwordFormik.handleSubmit();
  };

  return (
    <>
      <h3 className="font-semibold text-[#9ba3bb] text-lg py-4 px-6">Password</h3>
      <hr className="h-[2px] w-[] bg-[#000000] border-none" />

      <form
        className="bg-[#2e303880] p-3 m-4 rounded-lg"
        onSubmit={passwordFormik.handleSubmit}
      >
        {/* New Password */}
        <div className="flex items-center ml-16 mt-4">
          <h6 className="p-4 whitespace-nowrap mb-5 w-[200px] font-medium text-[#707688] text-right">
            New Password
          </h6>
          <InputComponent
            name="newPassword"
            formik={passwordFormik}
            placeholder="New Password"
            type="password"
            className={"w-full"}
          />
        </div>

        {/* New Password */}
        <div className="flex items-center ml-16">
          <h6 className="p-4 whitespace-nowrap mb-5 w-[200px] font-medium text-[#707688] text-right">
            Confirmation
          </h6>
          <InputComponent
            name="confirmNewPassword"
            formik={passwordFormik}
            placeholder="Password Confirmation"
            type="password"
            className={"w-full"}
          />
        </div>

        {/* verification code */}
        {otp && (
          <div className="flex items-center ml-5">
            <h6 className="p-4 whitespace-nowrap mb-5 w-[200px] font-medium text-[#707688] text-right">
              Verification
            </h6>
            <InputComponent
              name="otp"
              formik={passwordFormik}
              placeholder="Verification Code"
              type="number"
              className={""}
            />
            <div className="p-4">
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
        {otp ? (
          <button
            className="bg-[#ca1854e7] my-4 w-full cursor-pointer rounded-lg transition-all duration-300 p-1 hover:bg-[#e91c60f8] hover:text-white disabled:bg-gray-500 disabled:cursor-not-allowed"
            type="submit"
            disabled={!passwordFormik.isValid}
          >
            Save
          </button>
        ) : (
          <button
            className="bg-[#ca1854e7] my-4 w-full cursor-pointer rounded-lg transition-all duration-300 p-1 hover:bg-[#e91c60f8] hover:text-white disabled:bg-gray-500 disabled:cursor-not-allowed"
            onClick={verifyHandler}
          >
            Verify
          </button>
        )}
      </form>
    </>
  );
}
