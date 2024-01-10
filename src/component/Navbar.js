// Navbar.js
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full h-24 bg-blue-950 fixed top-0 z-30 transition-all duration-700 shadow-xl ${
        isScrolled ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="grid grid-cols-3 gap-4 mt-2">
        <div className="..."></div>
        <div className="col-span-2 flex flex-row pt-8">
          <div className="flex flex-col">
            <div className="text-white font-semibold ml-16">Silanta Global</div>
            <div className="divide-b bg-orange-600 w-28 h-1 ml-16"></div>
          </div>

          <div className="text-white font-semibold ml-16">Hizmetlerimiz</div>
          <div className="text-white font-semibold ml-16">İş Ortaklarımız</div>
          <div className="text-white font-semibold ml-16 ">İletişim</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
