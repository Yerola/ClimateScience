import { useEffect, useState } from "react";

export const useGetWindowDimension = () => {
  const [width, setWidth] = useState(1080);
  useEffect(() => {
    const extract = window.innerWidth;
    setWidth(extract);
  }, []);
  return {
    width,
  };
};
