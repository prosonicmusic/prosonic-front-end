import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { parseCookies } from "nookies";

import routerPush from "@/src/utils/routerPush";
import { useRouter } from "next/router";

const initialUserProfileValues = {
  signinEmail: "",
  signinPassword: "",
};

export default function UserProfile({ userData }) {
  const [selectedFile, setSelectedFile] = useState();
  const [fileIsValid, setFileIsValid] = useState(false);

  const { accessToken } = parseCookies();
  const router = useRouter();

  const mb = selectedFile?.size / 1000000;
  const filetype = selectedFile?.type;

  const chooseFileHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const fileChangeHandler = async () => {
    if (mb <= 1 && filetype === "image/jpeg") {
      setFileIsValid(true);

      try {
        if (fileIsValid && accessToken) {
          const formData = new FormData();
          formData.append("avatar", selectedFile);

          const response = await axios.put(
            `${process.env.NEXT_PUBLIC_BASE_API_URL}/user/avatar`,
            formData,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "multipart/form-data",
              },
            }
          );

          routerPush(router);

          toast.success("Successfully your avatar changed");
        }
      } catch (error) {
        setFileIsValid(false);

        toast.error("Something went wrong, please try again later!");
      }
    } else {
      toast.error("Only files in jpg format and a maximum of 1MB are allowed");
    }
  };

  return (
    <>
      <h3 className="font-semibold text-[#707688] text-lg py-4 px-6">User Profile</h3>
      <hr className="h-[2px] w-[] bg-[#000000] border-none" />

      <div>
        {/* Avatar */}
        <div className="flex items-center p-6">
          {userData?.avatar ? (
            <img
              className="rounded-full"
              src={`${process.env.NEXT_PUBLIC_BASE_API_URL}${userData?.avatar}`}
              width={100}
              alt="avatar"
            />
          ) : (
            <img className="rounded-full" src="/images/avatar.png" width={100} alt="avatar" />
          )}

          <p className="p-4 text-lg font-semibold">Hello {userData?.user?.first_name}!</p>
        </div>

        <div className="bg-[#2e303880] p-3 m-4 rounded-lg">
          <div className="flex items-center relative">
            <h5 className="mr-6">Change Avatar</h5>
            <input
              type="file"
              name="file"
              onChange={chooseFileHandler}
              className="w-[300px] bg-[#2e3038c7] px-3 py-2 rounded-lg text-xs text-[#696969] cursor-pointer"
            />

            <button
              onClick={fileChangeHandler}
              className="bg-[#2e3038c7] w-[100px] ml-3 text-sm cursor-pointer rounded-lg transition-all duration-300 p-1 hover:bg-[#3f424dc7] hover:text-white disabled:bg-gray-500 disabled:cursor-not-allowed"
              disabled={selectedFile ? false : true}
            >
              Change
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
