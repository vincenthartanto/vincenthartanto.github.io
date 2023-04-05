import React from "react";

export default function MinimalistButton({ title }) {
  return (
    <button className="tracking-widest border border-black py-2 px-8 text-sm font-thin transition-all hover:bg-black hover:text-white hover:font-bold">
      {title}
    </button>
  );
}
