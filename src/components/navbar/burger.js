"use client";

import { useState } from "react";

import PhoneNav from "./phoneNav";

export default function Burger({ data, error, isLoading }) {
  const [status, setStatus] = useState(false);

  const burgerList = `w-[1.8rem] h-[0.2rem] bg-[#7e8893] rounded-[10px] burgerList ${
    status ? "open" : ""
  }`;
  return (
    <>
      <div
        className="w-[2rem] h-[1.2rem] fixed top-[27px] right-[25px] flex justify-between burger cursor-pointer z-20 min-[900px]:hidden max-[900px]:mt-[-5px]"
        role="button"
        onClick={() => setStatus(!status)}
      >
        <i className={burgerList}></i>
        <i className={burgerList}></i>
        <i className={burgerList}></i>
      </div>

      <PhoneNav
        status={status}
        setStatus={setStatus}
        data={data}
        error={error}
        isLoading={isLoading}
      />
    </>
  );
}
