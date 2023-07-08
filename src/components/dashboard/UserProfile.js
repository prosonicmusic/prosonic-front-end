import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { parseCookies } from "nookies";
import { useFormik } from "formik";
import * as Yup from "yup";

import routerPush from "@/src/utils/routerPush";
import { useRouter } from "next/router";

import InputComponent from "../common/FormInput";
import Image from "next/image";

const initialUserProfileValues = {
  phoneNumber: "",
  bio: "",
  city: "",
  province: "",
  address: "",
  socialMediaDescription: "",
};

const profileInfoValidationSchema = Yup.object({
  phoneNumber: Yup.string()
    .required("Enter your Phone number")
    .matches(
      /^\+\d{6,14}$/,
      "The mobile number must be 15 digits long and have a + sign with the country code"
    )
    .nullable(),
  bio: Yup.string()
    .required("Enter your Biography")
    .min(8, "Bio must contain at least 8 characters"),
  city: Yup.string()
    .required("Enter your City")
    .min(3, "City must contain at least 3 characters"),
  province: Yup.string().min(3, "Province must contain at least 3 characters"),
  address: Yup.string().min(10, "Address must contain at least 10 characters"),
  socialMediaDescription: Yup.string()
    .required("Enter Your Telegram ID or social media phone number")
    .min(3, "Your ID must contain at least 3 characters"),
});

export default function UserProfile({ userData }) {
  const [fileIsValid, setFileIsValid] = useState(false);
  const [loading, setLoading] = useState(false);

  const { accessToken } = parseCookies();
  const router = useRouter();

  const chooseFileHandler = async (event) => {
    const file = event.target.files[0];

    const mb = file?.size / 1000000;
    const filetype = file?.type;

    if (file) {
      if (mb <= 1 && filetype === "image/jpeg") {
        setFileIsValid(true);
        setLoading(true);

        try {
          if (accessToken) {
            const formData = new FormData();
            formData.append("avatar", file);

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

            setLoading(false);
            toast.success("Successfully changed your avatar");
          }
        } catch (error) {
          console.log(error);
          toast.error("Something went wrong, please try again later!");
        }
      } else {
        toast.error("Only files in jpg format and a maximum of 1MB are allowed");
      }
    }
  };

  const onSubmit = async (values) => {
    const { address, bio, city, phoneNumber, province, socialMediaDescription } = values;
    const API_URL = `${process.env.NEXT_PUBLIC_BASE_API_URL}/user/update`;

    const userProfileValues = {
      phone_number: phoneNumber,
      bio,
      city,
      province,
      address,
      social_media_description: socialMediaDescription,
    };
    try {
      if (accessToken) {
        const response = await axios.put(API_URL, userProfileValues, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        toast.success("Successfully your information changed");
      } else {
        toast.error("Login first");
      }
    } catch (error) {
      toast.error("Something went wrong, please try again later!");
    }
  };

  const userInfoFromik = useFormik({
    initialValues: initialUserProfileValues,
    onSubmit: onSubmit,
    validationSchema: profileInfoValidationSchema,
    validateOnMount: true,
  });

  return (
    <>
      <h3 className="font-semibold text-[#9ba3bb] text-lg py-4 px-6">User Profile</h3>
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

        {/* Change avatar */}
        <div className="flex items-center relative bg-[#2e303880] p-3 m-4 rounded-lg max-[900px]:block">
          <h5 className="mr-6 max-[900px]:mb-1 max-[900px]:p-3">Change Avatar</h5>
          <input
            type="file"
            name="file"
            onChange={chooseFileHandler}
            className="w-[300px] max-[500px]:w-full bg-[#2e3038c7] px-3 py-2 rounded-lg text-xs text-[#696969] cursor-pointer max-[900px]:p-6 max-[900px]:mb-4"
          />

          {loading && <Image className="ml-3" src="/loading.gif" width={60} height={60} />}
        </div>

        {/* Change user info */}
        <form
          onSubmit={userInfoFromik.handleSubmit}
          className="bg-[#2e303880] p-3 m-4 rounded-lg"
        >
          <h3 className="text-[#9ba3bb] text-lg font-extrabold py-5 px-3">Your info</h3>

          {/* Phone Number */}
          <div className="flex items-center ml-16 max-[900px]:block max-[900px]:ml-0">
            <h6 className="p-4 whitespace-nowrap mb-5 w-[200px] font-medium text-[#707688] text-right max-[900px]:text-left max-[900px]:mb-3 max-[900px]:ml-1 max-[900px]:p-0">
              Phone Number
            </h6>
            <InputComponent
              name="phoneNumber"
              formik={userInfoFromik}
              placeholder={userData?.phone_number ? userData?.phone_number : "Phone Number"}
              type="tel"
              className={"w-full"}
            />
          </div>

          {/* Bio */}
          <div className="flex items-center ml-16 max-[900px]:block max-[900px]:ml-0">
            <h6 className="p-4 whitespace-nowrap mb-5 w-[200px] font-medium text-[#707688] text-right max-[900px]:text-left max-[900px]:mb-3 max-[900px]:ml-1 max-[900px]:p-0">
              Biography
            </h6>
            <div className="w-full">
              {userInfoFromik.touched.bio && userInfoFromik.errors.bio ? (
                <div className="mb-1 ml-2 text-rose-500 text-left text-xs font-bold">
                  {userInfoFromik.errors.bio}
                </div>
              ) : null}

              <textarea
                value={userInfoFromik?.values?.bio}
                onBlur={userInfoFromik.handleBlur}
                id="bio"
                name="bio"
                placeholder={userData?.bio ? userData?.bio : "Biography"}
                onChange={userInfoFromik.handleChange}
                className="w-full mb-3 p-[10px] bg-[#121316] rounded-lg outline-none border-none h-40 max-h-[400px]"
              ></textarea>
            </div>
          </div>

          {/* City */}
          <div className="flex items-center ml-16 max-[900px]:block max-[900px]:ml-0">
            <h6 className="p-4 whitespace-nowrap mb-5 w-[200px] font-medium text-[#707688] text-right max-[900px]:text-left max-[900px]:mb-3 max-[900px]:ml-1 max-[900px]:p-0">
              City
            </h6>
            <InputComponent
              name="city"
              formik={userInfoFromik}
              placeholder={userData?.city ? userData?.city : "City"}
              type="text"
              className={"w-full"}
            />
          </div>

          {/* Province */}
          <div className="flex items-center ml-16 max-[900px]:block max-[900px]:ml-0">
            <h6 className="p-4 whitespace-nowrap mb-5 w-[200px] font-medium text-[#707688] text-right max-[900px]:text-left max-[900px]:mb-3 max-[900px]:ml-1 max-[900px]:p-0">
              Province
            </h6>
            <InputComponent
              name="province"
              formik={userInfoFromik}
              placeholder={userData?.province ? userData?.province : "Province"}
              type="text"
              className={"w-full"}
            />
          </div>

          {/* Address */}
          <div className="flex items-center ml-16 max-[900px]:block max-[900px]:ml-0">
            <h6 className="p-4 whitespace-nowrap mb-5 w-[200px] font-medium text-[#707688] text-right max-[900px]:text-left max-[900px]:mb-3 max-[900px]:ml-1 max-[900px]:p-0">
              Address
            </h6>
            <InputComponent
              name="address"
              formik={userInfoFromik}
              placeholder={userData?.address ? userData?.address : "Address"}
              type="text"
              className={"w-full"}
            />
          </div>

          {/* social Media Description */}
          <div className="flex items-center ml-16 max-[900px]:block max-[900px]:ml-0">
            <h6 className="p-4 whitespace-nowrap mb-5 w-[200px] font-medium text-[#707688] text-right max-[900px]:text-left max-[900px]:mb-3 max-[900px]:ml-1 max-[900px]:p-0">
              Social Media
            </h6>
            <InputComponent
              name="socialMediaDescription"
              formik={userInfoFromik}
              placeholder={
                userData?.social_media_description
                  ? userData?.social_media_description
                  : "Enter Your Telegram ID or social media phone number"
              }
              type="text"
              className={"w-full"}
            />
          </div>

          <button
            className="bg-[#ca1854e7] my-4 w-full cursor-pointer rounded-lg transition-all duration-300 p-1 hover:bg-[#e91c60f8] hover:text-white disabled:bg-gray-500 disabled:cursor-not-allowed"
            type="submit"
            disabled={!userInfoFromik.isValid}
          >
            Save
          </button>
        </form>
      </div>
    </>
  );
}
