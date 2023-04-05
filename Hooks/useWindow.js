import React from "react";
import { useState, useEffect } from "react";
export default function useWindow() {
  const [width, setWidth] = useState();

  useEffect(() => {
    function handleWidth() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleWidth);
    handleWidth();
    return () => window.removeEventListener("resize", handleWidth);
  }, []);
  return width;
}
