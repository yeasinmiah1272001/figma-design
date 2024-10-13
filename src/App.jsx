import React from "react";
import Banner from "./Component/Banner";
import UiSection from "./Component/UiSection";
import About from "./Component/About";
import Counter from "./Component/Counter";
import Service from "./Component/Service";
import Footer from "./Component/Footer";
import Review from "./Component/Review";
import Portfolio from "./Component/Portfolio";
import Spoty from "./Component/Spoty";
import Blog from "./Component/Blog";
import Contact from "./Component/Contact";

const App = () => {
  return (
    <div className=" font-bodyFont overflow-hidden">
      <Banner />
      <UiSection />
      <About />
      <Counter />
      <Service />
      <Portfolio />
      <Review />
      <Spoty />
      <Blog />
      <Contact />

      <Footer />
    </div>
  );
};

export default App;
