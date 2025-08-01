import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const moveCursor = (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed top-0 left-0 w-6 h-6 rounded-full border-2 border-purple-500 mix-blend-difference z-[9999] transition-transform duration-300 ease-out"
      style={{ transform: "translate(-50%, -50%)" }}
    ></div>
  );
};

export default CustomCursor;
