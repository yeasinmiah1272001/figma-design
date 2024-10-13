import { GiStarShuriken } from "react-icons/gi";

const UiSection = () => {
  return (
    <div className="bg-btnColor dark:bg-btnColor dark:text-black py-6 lg:mt-4">
      <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-4">
        {/* Service Items */}
        {[
          "UI/UX Design",
          "Branding Design",
          "Tech Entrepreneur",
          "Art Directors",
        ].map((service, index) => (
          <div
            key={index}
            className="flex items-center space-x-2 md:space-x-3 lg:space-x-20 text-lg md:text-xl text-black"
          >
            <h3 className="font-semibold text-center md:text-left">
              {service}
            </h3>
            {index !== 3 && (
              <span className="text-xl md:text-2xl">
                <GiStarShuriken />
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UiSection;
