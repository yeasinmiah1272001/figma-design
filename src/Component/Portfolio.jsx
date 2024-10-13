import React, { useState } from "react";
import img1 from "../assets/portfolio/download (4).png";
import img2 from "../assets/portfolio/download (5).png";
import img3 from "../assets/portfolio/download (6).png";
import img4 from "../assets/portfolio/download (7).png";
import img5 from "../assets/portfolio/download (8).png";
import img6 from "../assets/portfolio/download (9).png";

// Portfolio data
const portfolioData = [
  { id: 1, category: "Art Dimper", title: "Art Dimper", img: img1 },
  { id: 2, category: "Marketing", title: "Marketing Campaign", img: img2 },
  { id: 3, category: "Web Design", title: "Web Design Project", img: img3 },
  { id: 4, category: "Development", title: "Development Task", img: img4 },
  { id: 5, category: "Web Design", title: "UI/UX Design", img: img5 },
  { id: 6, category: "Art Dimper", title: "Art Showcase", img: img6 },
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Function to filter portfolio items based on selected category
  const filteredPortfolio =
    selectedCategory === "All"
      ? portfolioData
      : portfolioData.filter((item) => item.category === selectedCategory);

  return (
    <div className="py-20 bg-[#FFFBF4]">
      <h1 className="text-center text-4xl font-bold text-gray-400">
        𝕄𝕪 ℙ𝕠𝕣𝕥𝕗𝕠𝕝𝕚𝕠
      </h1>

      {/* Tabs */}
      <div className="flex justify-center mt-8 gap-6">
        {["All", "Web Design", "Development", "Marketing"].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg text-lg font-semibold transition-all ${
              selectedCategory === category
                ? "bg-btnColor text-white"
                : "bg-white text-[#333] border border-[#333]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Portfolio items */}
      <div className="max-w-[1200px] mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredPortfolio.map((item) => (
          <div
            key={item.id}
            className="w-full h-[400px] bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-[250px] object-cover"
            />
            <div className="p-5 text-start">
              <h2 className="text-xl font-semibold text-[#333]">
                {item.title}
              </h2>
              <p className="text-[#666] mt-2">
                Once we have a better description
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
