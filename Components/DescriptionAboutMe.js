import React from "react";

export default function DescriptionAboutMe({ title, style }) {
  return (
    <p
      className={`tracking-widest opacity-50  text-[0.8rem] md:text-lg ${style} `}
    >
      {title}
    </p>
  );
}
