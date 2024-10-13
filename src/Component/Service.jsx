import { useState } from "react";
import { FaCode } from "react-icons/fa";
import { LiaWarehouseSolid } from "react-icons/lia";
import { BsJournalCode, BsPencilSquare, BsBookmarkCheck } from "react-icons/bs";
import { TbSpeakerphone } from "react-icons/tb";
import { GoArrowUpRight } from "react-icons/go";

const Service = () => {
  // Set the first card (index 0) as the default active card
  const [activeCard, setActiveCard] = useState(0);

  const services = [
    {
      title: "UI/UX Design",
      description: "Creating visually appealing designs for apps and websites.",
      icon: <LiaWarehouseSolid size={50} />,
    },
    {
      title: "Web Development",
      description: "Building responsive and functional web applications.",
      icon: <BsJournalCode size={50} />,
    },
    {
      title: "SEO Optimization",
      description: "Improving site visibility and search engine ranking.",
      icon: <TbSpeakerphone size={50} />,
    },
    {
      title: "Content Writing",
      description: "Producing high-quality content for various platforms.",
      icon: <BsPencilSquare size={50} />,
    },
    {
      title: "Warehouse Management",
      description: "Efficiently managing inventory and logistics.",
      icon: <LiaWarehouseSolid size={50} />,
    },
    {
      title: "Bookmarking & Organizing",
      description: "Helping you keep track of important resources.",
      icon: <BsBookmarkCheck size={50} />,
    },
  ];

  return (
    <div className="bg-white py-10">
      <h1 className="text-center text-3xl font-bold text-gray-400 mb-8">
        𝕄𝕪 𝕊𝕖𝕣𝕧𝕚𝕔𝕖𝕤
      </h1>
      <div className="flex flex-wrap justify-center gap-8 px-4">
        {services.map((service, index) => (
          <div
            key={index}
            onClick={() => setActiveCard(index)}
            className={`border-2 p-6 text-center w-[370px] h-[342px] rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer ${
              activeCard === index ? "bg-btnColor" : "border-gray-200"
            }`}
          >
            <div className="text-xl mt-5 space-y-2 font-semibold mb-4 flex flex-col justify-center items-center">
              <span className="text-gray-500">{service.icon}</span>
              <h1 className="mt-2"> {service.title}</h1>
            </div>
            <p className="text-gray-700 mb-4 lg:mt-6">{service.description}</p>
            <p className="text-black hover:underline flex justify-center items-center cursor-pointer">
              Explore <GoArrowUpRight size={20} className="ml-2" />
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
