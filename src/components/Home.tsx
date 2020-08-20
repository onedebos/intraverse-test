import React from "react";
import Hero from "./Hero";
import LoremIpsumNow from "./LoremIpsumNow";
import Problem from "./Problem";
import FAQ from "./FAQ";
import LastBlock from "./LastBlock";
import Footer from "./Footer";

const Home = () => {
  return (
    <React.Fragment>
      <Hero />
      <LoremIpsumNow />
      <Problem />
      <FAQ />
      <LastBlock />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
