import React from "react";
import Details from "./Details";

export default function LineYear({ year, sup }) {
  return (
    <div className="flex flex-col items-center w-20">
      <div className="rounded-full  border border-black text-center p-2 font-bold">
        {year} <sup>{sup}</sup>
        <div>Year</div>
      </div>
    </div>
  );
}
