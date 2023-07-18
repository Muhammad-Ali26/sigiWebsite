// @ts-nocheck
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import "../../../App.css";
import ServicesDropDownMenu from "./ServicesDropDownMenu";
import CompanyDropDownMenu from "./CompanyDropDownMenu";

export default function Navbar() {
  const location = useLocation();
  const [showCanvas, setShowCanvas] = useState(false);
  return (
    <>
      <header className="relative">
        <nav className="w-full absolute top-0 left-0 z-20">
          <div className="flex justify-between items-center w-[90%] mx-auto">
            {location.pathname === "/" ? (
              <Link to="/" className="py-6">
                <img
                  src="images/logo-white.webp"
                  alt="logo1"
                  className="w-[80px] h-[35px] md:w-[120px] md:h-[50px]"
                />
              </Link>
            ) : (
              <Link to="/" className="py-6">
                <img
                  src="images/logo.webp"
                  alt="logo2"
                  className="w-[80px] h-[35px] md:w-[120px] md:h-[50px]"
                />
              </Link>
            )}

            <button
              onClick={() => {
                setShowCanvas(true);
              }}
            >
              {location.pathname === "/" ? (
                <GiHamburgerMenu className="text-white text-2xl md:text-4xl cursor-pointer" />
              ) : (
                <GiHamburgerMenu className="text-2xl md:text-4xl cursor-pointer" />
              )}
            </button>
          </div>
        </nav>
        {showCanvas === false ? (
          ""
        ) : (
          <div className="bg-cover bg-no-repeat bg-center w-full h-[980px] absolute top-0 left-0 z-30 before:content-[''] before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-[#004AEA] before:z-40">
            <div className="w-[90%] m-auto relative z-[50]">
              <div className="flex justify-between items-center">
                <Link to="/" className="py-6">
                  <img
                    src="images/logo-white.webp"
                    alt="logo3"
                    className="w-[80px] h-[35px] md:w-[120px] md:h-[50px]"
                  />
                </Link>
                <div className="flex gap-5 md:gap-10 items-center">
                  <div>
                    <button className="text-xl font-[Sailec-Regular] text-white border-2 border-white bg-transparent px-4 py-2 md:px-10 md:py-3 rounded hover:bg-white hover:text-[#004AEA] duration-150">
                      Let’s Talk
                    </button>
                  </div>
                  <button
                    onClick={() => {
                      setShowCanvas(false);
                    }}
                    className="text-white text-2xl relative z-[50]"
                  >
                    <RxCross1 />
                  </button>
                </div>
              </div>
            </div>

            <div className="w-[85%] lg:w-[75%] 2xl:w-[65%] m-auto pt-10 2xl:pt-20 relative z-[50]">
              <ul className="space-y-20 w-fit">
                <li className="text-white cursor-pointer text-4xl lg:text-5xl font-switzer font-medium dropdown">
                  Company
                  <CompanyDropDownMenu />
                </li>
                <li className="text-white text-4xl lg:text-5xl font-switzer font-medium cursor-pointer dropdown">
                  Services
                  <ServicesDropDownMenu />
                </li>
                <li className="text-white text-4xl lg:text-5xl font-switzer font-medium cursor-pointer">
                  <Link to="/case_studies">Case Studies</Link>
                </li>
                <li className="text-white text-4xl lg:text-5xl font-switzer font-medium cursor-pointer">
                  Expertise
                </li>
                <li className="text-white text-4xl lg:text-5xl font-switzer font-medium cursor-pointer">
                  Contact
                </li>
              </ul>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
