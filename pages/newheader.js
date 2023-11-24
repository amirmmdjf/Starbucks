import { useState, useEffect } from "react";

const NewHeader = () => {
  const [test, isTest] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleMediaQuery = (event) => {
        isTest(!event.matches);
      };

      const mediaQuery = window.matchMedia("(max-width: 700px)");
      mediaQuery.addEventListener("change", handleMediaQuery);

      // Call the handleMediaQuery function initially
      handleMediaQuery(mediaQuery);

      // Cleanup the event listener when the component unmounts
      return () => {
        mediaQuery.removeEventListener("change", handleMediaQuery);
      };
    }
  }, []);

  return <>{test ? "True" : "False"}</>;
};

export default NewHeader;