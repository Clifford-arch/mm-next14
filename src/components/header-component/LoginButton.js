import React, { useState, useEffect } from "react";

const LoginButton = ({ imgUrl, isLogin }) => {
  const [isMobile, setIsMobile] = useState(false);

  const loginRedirect = () => {
    console.log("EQ");
  };

  useEffect(() => {
    // Check initial viewport size
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Common breakpoint for mobile devices
    };

    checkMobile();

    // Add resize listener
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  //   if (!isLoginLoaded) {
  //     return null;
  //   }

  if (isMobile) {
    return (
      <li className="user-login user-login-mobile">
        <button
          type="button"
          onClick={loginRedirect}
          className="px-btn px-4 theme"
        >
          Login
        </button>
      </li>
    );
  }

  return (
    <li className="user-login user-login-web">
      <div className="dropdown">
        <button
          type="button"
          className="px-btn px-4 theme"
          onClick={loginRedirect}
        >
          Login
        </button>
      </div>
    </li>
  );
};

export default LoginButton;
