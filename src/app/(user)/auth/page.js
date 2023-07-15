"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { parseCookies } from "nookies";

import SigninForm from "./SigninForm";
import SignupForm from "./SignupForm";

export default function AuthPage() {
  const [move, setMove] = useState(false);
  const [otp, setOtp] = useState("");

  const { accessToken } = parseCookies();

  const router = useRouter();

  useEffect(() => {
    if (accessToken) router.push("/");
  }, [accessToken]);

  return (
    <main className="bg-signin bg-center bg-no-repeat bg-cover relative h-[50vh] mb-[480px] before:content-[''] before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-hero_before max-[900px]:mb-[590px]">
      <div className="flex justify-center items-center min-h-[100vh] transition-all duration-300 relative z-40 max-[900px]:max-w-[500px] max-[900px]:h-[650px] max-[900px]:flex max-[900px]:items-center max-[900px]:justify-center max-[900px]:mt-[-40px]">
        <div className="relative w-[800px] h-[500px] m-[20px]">
          <div
            className={`absolute top-[40px] w-full h-[420px] max-[900px]:h-[600px] flex rounded-[15px] justify-center items-center bg-[#0e253080] transition-all duration-500 shadow-[0_15px_45px_#ffffff1f] ${
              move && "bg-[#33101080]"
            }`}
          >
            <div className="relative w-[50%] h-full flex justify-center items-center flex-col max-[900px]:absolute max-[900px]:w-full max-[900px]:h-[150px] max-[900px]:top-0 ">
              <h2 className="text-[1.2em] font-medium mb-[12px]">Already Have an Account ?</h2>
              <button
                className="px-[10px] py-1 bg-[#bebebeda] text-gray-800 font-semibold rounded-md transition-all duration-300 hover:bg-[#e6e6e6da]"
                onClick={() => setMove(!move)}
              >
                Sign in
              </button>
            </div>
            <div className="relative w-[50%] h-full flex justify-center items-center flex-col max-[900px]:absolute max-[900px]:w-full max-[900px]:h-[150px] max-[900px]:bottom-0">
              <h2 className="text-[1.2em] font-medium mb-[12px]">Don't Have an Account ?</h2>
              <button
                className="px-[10px] py-1 bg-[#bebebeda] text-gray-800 font-semibold rounded-md transition-all duration-300 hover:bg-[#e6e6e6da]"
                onClick={() => setMove(!move)}
              >
                Sign up
              </button>
            </div>
          </div>

          <div
            className={`absolute top-0 left-0 w-[50%] max-[900px]:w-full ${
              move ? "h-[650px]" : "h-full"
            } ${otp == "forgot_password" && "h-[530px]"} ${
              otp == "signup" && "h-[740px]"
            } bg-[#1a1a1a] z-50 flex justify-center items-center shadow-[0_4px_45px_#ffffff1a] transition-all duration-[0.4s] overflow-hidden rounded-[15px] ${
              move && "left-[50%] max-[900px]:top-[35%] max-[900px]:left-0"
            }`}
          >
            {/* Signin */}
            <SigninForm move={move} otp={otp} setOtp={setOtp} />

            {/* sign up */}
            <SignupForm move={move} otp={otp} setOtp={setOtp} />
          </div>
        </div>
      </div>
    </main>
  );
}
