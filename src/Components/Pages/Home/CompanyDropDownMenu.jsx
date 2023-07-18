import React from "react";
import { Link } from "react-router-dom";

export default function CompanyDropDownMenu() {
  return (
    <div className="dropdown-menu">
      <ul className="bg-white absolute top-20 left-60 rounded-md p-4 space-y-5">
        <Link to="/about_us">
          <li className="hover:bg-[#F4F4F4] p-2">
            <h2 className="text-black text-xl font-switzer font-medium">
              About
            </h2>
            <p className="text-paraText text-base font-switzer max-w-xs font-normal">
              Work with our outstanding engineers and integrate them into your
              processes.
            </p>
          </li>
        </Link>

        <Link to="/team">
          <li className="hover:bg-[#F4F4F4] p-2">
            <h2 className="text-black text-xl font-switzer font-medium">
              Meet the Team
            </h2>
            <p className="text-paraText text-base font-switzer max-w-xs font-normal">
              Work with our outstanding engineers and integrate them into your
              processes.
            </p>
          </li>
        </Link>

        <Link to="/careers">
          <li className="hover:bg-[#F4F4F4] p-2">
            <h2 className="text-black text-xl font-switzer font-medium">
              Careers
            </h2>
            <p className="text-paraText text-base font-switzer max-w-xs font-normal">
              Work with our outstanding engineers and integrate them into your
              processes.
            </p>
          </li>
        </Link>
        <Link to="/contact_us">
          <li className="hover:bg-[#F4F4F4] p-2">
            <h2 className="text-black text-xl font-switzer font-medium">
              Contact
            </h2>
            <p className="text-paraText text-base font-switzer max-w-xs font-normal">
              Work with our outstanding engineers and integrate them into your
              processes.
            </p>
          </li>
        </Link>
      </ul>
    </div>
  );
}
