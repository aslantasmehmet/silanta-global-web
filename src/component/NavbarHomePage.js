// Navbar.js
import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-4 ">
        <div className="w-48 h-40 ml-16 -translate-y-12 ">
          <img
            className="top-0"
            src="https://res.cloudinary.com/dd4d48hwn/image/upload/v1703327073/SILANTA_2_ljmahp.png"
          />
        </div>
        <div className="col-span-2 flex flex-row pt-8 mt-2">
          <div className="flex flex-col">
            <div className="text-white font-semibold ml-16">Silanta Global</div>
            <div className="divide-b bg-orange-600 w-28 h-1 ml-16"></div>
          </div>

          <div className="text-white font-semibold ml-16">Hizmetlerimiz</div>
          <div className="text-white font-semibold ml-16">İş Ortaklarımız</div>
          <div className="text-white font-semibold ml-16">İletişim</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
