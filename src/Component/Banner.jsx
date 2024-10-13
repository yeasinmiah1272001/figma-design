import img from "../assets/download.png";
import Header from "./Header";

const Banner = () => {
  return (
    <div className="bg-primaryColor  py-10">
      <Header className="" />
      <div className="container sm:mt-16 mx-auto lg:mt-20 flex flex-col md:flex-row justify-between items-center px-4 md:px-8">
        {/* Left side */}
        <div className="space-y-6 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-light">
            Johan <span className="font-bold text-black">Smith</span>
          </h1>
          <p className="text-xl">Product Designer | Entrepreneur</p>
          <button className="mt-4 w-40 h-12 bg-btnColor text-white shadow-md hover:shadow-lg transition-shadow duration-300">
            Hire Me
          </button>
        </div>

        {/* Right side */}
        <div
          style={{
            clipPath:
              "polygon(76% 0, 100% 51%, 75% 100%, 25% 100%, 0 55%, 21% 0)",
          }}
          className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-btnColor"
        >
          <img
            className="w-full h-full object-cover p-8 rounded-lg mt-8"
            src={img}
            alt="Johan Smith"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
