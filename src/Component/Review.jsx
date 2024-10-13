import React from "react";
import { RiSingleQuotesL } from "react-icons/ri";
import img1 from "../assets/download (1).png";
import img2 from "../assets/download (2).png";
import img3 from "../assets/download (3).png";

const Review = () => {
  return (
    <div className="py-20 bg-[#EFEEFC]">
      <h1 className="text-center text-3xl font-bold text-gray-400">
        ℂ𝕝𝕚𝕖𝕟𝕥 ℝ𝕖𝕧𝕚𝕖𝕨𝕤
      </h1>
      <div className="max-w-[1205px] mx-auto lg:mt-8 flex flex-wrap  justify-center lg:justify-between items-center gap-8">
        {/* First Card */}
        <div
          style={{ borderRadius: "0% 100% 1% 99% / 79% 3% 97% 21%" }}
          className="w-full sm:w-[370px] border-2 p-8 bg-white border-btnColor h-[386px] rounded-[50px] flex flex-col items-center"
        >
          <h1 className="flex text-btnColor font-bold">
            <RiSingleQuotesL size={40} />
            <RiSingleQuotesL size={40} />
          </h1>
          <p className="text-center lg:mt-10">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </p>
          <h2 className="mt-4 text-black font-semibold">Johan Smith</h2>
          <img
            className="mt-6 h-12 w-12 rounded-full lg:mt-32 lg:ml-14"
            src={img1}
            alt="Johan Smith"
          />
        </div>
        <div
          style={{ borderRadius: "0% 100% 1% 99% / 79% 3% 97% 21%" }}
          className="w-full sm:w-[370px] border-2 p-8 bg-white border-btnColor h-[386px] rounded-[50px] flex flex-col items-center"
        >
          <h1 className="flex text-btnColor font-bold">
            <RiSingleQuotesL size={40} />
            <RiSingleQuotesL size={40} />
          </h1>
          <p className="text-center lg:mt-10">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </p>
          <h2 className="mt-4 text-black font-semibold">Johan Smith</h2>
          <img
            className="mt-6 h-12 w-12 rounded-full lg:mt-32 lg:ml-14"
            src={img2}
            alt="Johan Smith"
          />
        </div>
        <div
          style={{ borderRadius: "0% 100% 1% 99% / 79% 3% 97% 21%" }}
          className="w-full sm:w-[370px] border-2 p-8 bg-white border-btnColor h-[386px] rounded-[50px] flex flex-col items-center"
        >
          <h1 className="flex text-btnColor font-bold">
            <RiSingleQuotesL size={40} />
            <RiSingleQuotesL size={40} />
          </h1>
          <p className="text-center lg:mt-10">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </p>
          <h2 className="mt-4 text-black font-semibold">Johan Smith</h2>
          <img
            className="mt-6 h-12 w-12 rounded-full lg:mt-32 lg:ml-14"
            src={img3}
            alt="Johan Smith"
          />
        </div>
      </div>
    </div>
  );
};

export default Review;
