import React from "react";
import styles from "../styles/LoremIpsumNow.module.css";
import LoremIpsumNowComponent from "./LoremIpsumNowComponent";
import rocket from "../assets/icons/rocket-outline.svg";
import hat from "../assets/icons/color-fill-outline.svg";
import terminal from "../assets/icons/terminal-outline.svg";

const LoremIpsumNow: React.FC = () => {
  return (
    <section className="py-16 min-h-full">
      <h2 className={`font-bold text-center text-3xl ${styles.title} mb-8`}>
        Lorem Ipsum now?
      </h2>
      <div className="text-center">
        <div className="md:grid grid-cols-3 gap-3 max-w-6xl m-auto">
          <LoremIpsumNowComponent
            title="Lorem ipsum"
            content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut"
            icon={rocket}
          />
          <LoremIpsumNowComponent
            title="Lorem ipsum"
            content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut"
            icon={hat}
          />
          <LoremIpsumNowComponent
            title="Lorem ipsum"
            content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut"
            icon={terminal}
          />
        </div>
      </div>
    </section>
  );
};

export default LoremIpsumNow;
