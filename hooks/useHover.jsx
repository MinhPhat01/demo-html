import { useState } from "react";

export default function useHover() {
  const [hover, setHover] = useState(false);
  const handleShow = () => {
    setHover(true);
  };
  const handleHide = () => {
    setHover(false);
  };
  return {
    hover,
    handleShow,
    handleHide,
  };
}
