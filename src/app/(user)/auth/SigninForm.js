import { useState } from "react";
import { useRouter } from "next/navigation";

import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useFormik } from "formik";
import * as Yup from "yup";

import { login } from "@/services/authServices";
import setTokens from "@/utils/setTokens";
import InputComponent from "@/common/FormInput";
import Loading from "@/common/Loading";
import ForgotPassword from "./ForgotPassword";
import checkErrors from "@/utils/errorHandler";

const initialSignInValues = {
  signinUsername: "",
  signinPassword: "",
};

const validationSchema = Yup.object({
  signinUsername: Yup.string().required("Enter your username"),
  signinPassword: Yup.string()
    .required("Enter Your Password")
    .min(8, "Password must be at least six characters long"),
});

export default function SigninForm({ move, otp, setOtp }) {
  const [showForgetPassword, setShowForgetPassword] = useState(false);
  const router = useRouter();

  const { isLoading, mutateAsync } = useMutation({ mutationFn: login });

  const onSubmitSignIn = async (values) => {
    const { signinUsername, signinPassword } = values;
    const signinValues = {
      username: signinUsername,
      password: signinPassword,
    };

    try {
      const { data } = await mutateAsync(signinValues);
      if (data?.verified) {
        setTokens(data?.access, data?.refresh);
        toast.success("You have successfully logged in");
        router.refresh("/");
      } else {
        failureAction("Your email address is not verified");
      }
    } catch (error) {
      const errors = error?.response?.data?.detail;

      error ? checkErrors(errors) : toast.error("Something went wrong!");
    }
  };

  const signInFormik = useFormik({
    initialValues: initialSignInValues,
    onSubmit: onSubmitSignIn,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <section className={`z-50 delay-[0s] ${move && "left-0"}`}>
      {showForgetPassword ? (
        <ForgotPassword
          move={move}
          showForgetPassword={showForgetPassword}
          setShowForgetPassword={setShowForgetPassword}
          otp={otp}
          setOtp={setOtp}
        />
      ) : (
        <form
          className={`absolute top-16 w-full p-[50px] transition-all duration-[.35s] flex flex-col ${
            !move ? "right-0" : "right-[100%]"
          }`}
          onSubmit={signInFormik.handleSubmit}
        >
          <div>
            <h3 className="text-[1.5em] font-medium mb-6">Sign In</h3>
            <InputComponent
              name="signinUsername"
              formik={signInFormik}
              placeholder="Username"
            />
            <InputComponent
              name="signinPassword"
              type="password"
              formik={signInFormik}
              placeholder="Password"
            />
            <button
              className="bg-[#1aa2d8d3] flex justify-center w-[100px] cursor-pointer rounded-lg transition-all duration-300 p-1 hover:bg-[#1cafe9f1] hover:text-white disabled:bg-gray-500 disabled:cursor-not-allowed"
              type="submit"
              disabled={!signInFormik.isValid}
            >
              {isLoading ? <Loading w={24} h={20} /> : "Login"}
            </button>
            <div
              onClick={() => setShowForgetPassword(!showForgetPassword)}
              className="underline text-sm mt-4 hover:text-white transition duration-200 cursor-pointer"
            >
              Forgot your password?
            </div>
          </div>
        </form>
      )}
    </section>
  );
}
