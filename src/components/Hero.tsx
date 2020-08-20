import React from "react";
import Menu from "./Menu";
import Carousel from "./Carousel";
import Button from "./LoremIpsumButton";

const Hero = () => {
  return (
    <div className="min-h-screen py-10 bg-teal-1000 bg-opacity-25">
      <Menu isBtnDisabled={false} />
      <Carousel />
      <section className="flex flex-col justify-center items-center m-auto max-w-sm md:max-w-2xl lg:max-w-6xl">
        <h3 className="text-gray-1000 text-2xl font-bold tracking-tight text-center">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy
        </h3>
        <h1 className="mt-6 font-bold text-2xl md:text-5xl text-center leading-tight">
          Lorem ipsum dolor sit amet, consetetur
        </h1>
        <h2 className="font-light text-3xl">Lorem ipsum now</h2>
        <h4 className="text-center max-w-2xl mt-10 mb-10">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </h4>
        <Button />
      </section>
    </div>
  );
};

export default Hero;
