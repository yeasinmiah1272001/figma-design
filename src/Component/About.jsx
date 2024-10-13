import img from "../assets/download.png";

const About = () => {
  return (
    <div className="py-10 bg-primaryColor">
      <div className="max-w-[1200px] w-full mx-auto flex flex-col lg:flex-row justify-between items-center gap-8 px-4">
        {/* Left Side - Image */}
        <div
          style={{
            clipPath:
              "polygon(76% 0, 100% 51%, 75% 100%, 25% 100%, 0 55%, 21% 0)",
          }}
          className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] bg-btnColor flex-shrink-0"
        >
          <img
            className="w-full h-full object-cover p-4 rounded-lg"
            src={img}
            alt="Johan Smith"
          />
        </div>

        {/* Right Side - About Information */}
        <div className="w-full lg:w-[486px] space-y-5">
          <h1 className="text-3xl sm:text-4xl font-bold border-b text-gray-400 border-gray-300 pb-2">
            𝔸𝕓𝕠𝕦𝕥 𝕄𝕖
          </h1>
          <p className="text-gray-600 border-b border-gray-300 pb-4">
            Redbeard Labs is a small design and development team based in
            Barrie, ON, with a passion for helping businesses grow through
            creative solutions.
          </p>
          <div className="space-y-2">
            <h3 className="font-semibold">
              <span className="text-gray-700">Name:</span> Muhammed Faisal
            </h3>
            <h3 className="font-semibold">
              <span className="text-gray-700">Profession:</span> Senior Product
              Designer
            </h3>
            <h3 className="font-semibold">
              <span className="text-gray-700">Phone:</span> +01254-25485 254
            </h3>
            <h3 className="font-semibold">
              <span className="text-gray-700">E-mail:</span>{" "}
              muhammedfaisal@gmail.com
            </h3>
            <h3 className="font-semibold">
              <span className="text-gray-700">Address:</span> Senpara Len,
              Banglabazar 145, India
            </h3>
          </div>
          <button className="mt-6 w-full sm:w-[200px] h-[50px] font-medium bg-black text-btnColor rounded-lg hover:bg-gray-800 transition-colors shadow-md">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
