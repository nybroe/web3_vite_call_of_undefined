import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { isOwner } from "./services/utils";

function Header() {
  const [top, setTop] = useState(true);
  const [isOwnerBool, setIsOwner] = useState(false);

  useEffect(() => {
    setIsOwner(isOwner());
  }, []);

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top && "bg-white backdrop-blur-sm shadow-lg"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            <Link to="/" className="block" aria-label="Cruip">
              <svg
                version="1.2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 500 500"
                className="w-8 h-8"
              >
                <title>logo</title>
                <style></style>
                <use id="Lag 1" href="#img1" x="10" y="11" />
              </svg>
            </Link>
          </div>
        <h1>Vite App</h1>
        </div>
      </div>
      <hr className="bg-brand-600 h-1/2 mb-4" />
    </header>
  );
}

export default Header;
