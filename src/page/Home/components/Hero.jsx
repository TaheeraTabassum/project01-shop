import React from "react";
import { Link } from "react-router";
import Btn from "../../../shared/Btn";

const Hero = () => {
  return (
    <div className="container mx-auto my-10 relative">
      {/* Image */}
      <img
        className=" rounded-md md:w-full w-fit "
        src="https://i.ibb.co.com/xVPxCRt/excited-girl-scream-joy-making-fist-pump-holding-shopping-bag-rejoicing-standing-dress-ove.jpg"
        alt=""
      />

      {/* Text Section */}
      <div
        className={` flex flex-col gap-3 absolute top-1 left-6  px-4 md:absolute md:top-1/2 md:left-40  md:-translate-y-1/2  md:text-left md:items-start `}
      >
        <h3 className="cp text-lg sm:text-xl md:text-2xl font-semibold text-[#5CAF90]">
          70% Off For This Winter
        </h3>

        <h1 className="text-xl sm:text-4xl md:text-5xl font-semibold ct">
          Biggest Sale For Winter
          <br /> Man & Woman
        </h1>

        <Link to="/shop">
          <Btn text="Shop now" />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
