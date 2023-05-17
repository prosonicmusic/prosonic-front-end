import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { parseCookies } from "nookies";
import { useFormik } from "formik";
import * as Yup from "yup";

import { BiCheck } from "react-icons/bi";

import { useAuth, useAuthActions } from "@/src/context/AuthContext";
import InputComponent from "../common/FormInput";

const initialEmailValues = {
  newEmail: "",
  emailPassword: "",
  otp: "",
};

const emailValidationSchema = Yup.object({
  newEmail: Yup.string().required("Enter your email").email("The email is invalid"),
  emailPassword: Yup.string()
    .required("Enter Your Password")
    .min(8, "Password must be at least six characters long"),
  otp: Yup.number()
    .required("Enter the code sent to the email")
    .min(5, "Enter the code correctly"),
});

export default function Email({ userData }) {
  const [timer, setTimer] = useState(300);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [showResendButton, setShowResendButton] = useState(false);

  const { accessToken } = parseCookies();
  const dispatch = useAuthActions();
  const { otp } = useAuth();

  const onSubmitEmail = async (values) => {
    const { newEmail, otp } = values;
    const API_URL = `${process.env.NEXT_PUBLIC_BASE_API_URL}/user/email/update`;

    const emailValues = {
      email: newEmail,
      otp,
    };

    try {
      if (accessToken) {
        const response = await axios.put(API_URL, emailValues, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        window.location.href = "/dashboard/email";
        toast.success("Successfully your email changed");
      } else {
        toast.error("Login first");
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.message && error?.response?.data?.message == "invalid otp"
          ? "Invalid verification code or password"
          : "Invalid data"
      );
    }
  };

  const emailFormik = useFormik({
    initialValues: initialEmailValues,
    onSubmit: onSubmitEmail,
    validationSchema: emailValidationSchema,
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
    setTimer(300);
    setShowResendButton(false);

    const API_URL = `${process.env.NEXT_PUBLIC_BASE_API_URL}/user/verification/email/send`;

    const body = {
      email: emailFormik.values.newEmail,
      password: emailFormik.values.emailPassword,
    };

    try {
      if (accessToken) {
        const response = await axios.post(API_URL, body, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        toast.success(`Verification code sent to ${emailFormik.values.newEmail}`);
        await dispatch({ type: "OTP_SUCCESS" });
      } else {
        toast.error("Login first");
      }
    } catch (error) {
      const errorMessage = error?.response?.data?.message?.email;
      toast.error(
        errorMessage
          ? errorMessage
          : error?.response?.data?.message || "Something went wrong, please try again later!"
      );
    }
  };

  return (
    <>
      <h3 className="font-semibold text-[#9ba3bb] text-lg py-4 px-6">Email</h3>
      <hr className="h-[2px] w-[] bg-[#000000] border-none" />

      {/* Your email */}
      <div className="bg-[#2e303880] p-3 m-4 rounded-lg flex items-center max-[900px]:block">
        <h5 className="p-3 max-[900px]:mb-2">Your Email:</h5>
        <div className="flex items-center mb-3">
          <span className="ml-3 font-semibold text-white bg-[#2e3038bd] p-3 rounded-lg">
            {userData?.user?.email}
          </span>
          <BiCheck size={30} className="ml-1 fill-green-600" />
        </div>
      </div>

      <form className="bg-[#2e303880] p-3 m-4 rounded-lg" onSubmit={emailFormik.handleSubmit}>
        {/* New Email */}
        <div className="flex items-center ml-16 mt-4 max-[900px]:block max-[900px]:ml-0">
          <h6 className="p-4 whitespace-nowrap mb-5 w-[200px] font-medium text-[#707688] text-right max-[900px]:text-left max-[900px]:mb-3 max-[900px]:ml-1 max-[900px]:p-0">
            Change Email
          </h6>
          <InputComponent
            name="newEmail"
            formik={emailFormik}
            placeholder="Enter your new email"
            type="email"
            className={"w-full"}
          />

          <h6 className="p-4 whitespace-nowrap mb-5 w-[200px] font-medium text-[#707688] text-right max-[900px]:text-left max-[900px]:mb-3 max-[900px]:ml-1 max-[900px]:p-0">
            Your Password
          </h6>
          <InputComponent
            name="emailPassword"
            formik={emailFormik}
            placeholder="Enter your password"
            type="password"
            className={"w-full"}
          />
        </div>

        {/* verification code */}
        {otp && (
          <div className="flex items-center ml-5 max-[900px]:block max-[900px]:ml-0">
            <h6 className="p-4 whitespace-nowrap mb-5 w-[200px] font-medium text-[#707688] text-right max-[900px]:text-left max-[900px]:mb-3 max-[900px]:ml-1 max-[900px]:p-0">
              Verification
            </h6>
            <InputComponent
              name="otp"
              formik={emailFormik}
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
        {otp ? (
          <button
            className="bg-[#ca1854e7] my-4 w-full cursor-pointer rounded-lg transition-all duration-300 p-1 hover:bg-[#e91c60f8] hover:text-white disabled:bg-gray-500 disabled:cursor-not-allowed"
            type="submit"
            disabled={!emailFormik.isValid}
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
