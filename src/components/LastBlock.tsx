import React from "react";
import videoGame from "../assets/images/img-4.png";
import LastBlockComponent from "./LastBlockComponent";
import placeOrder from "../assets/images/place-order.png";
import tick from "../assets/icons/tick.png";
import styles from "../styles/LastBlock.module.css";

const LastBlock: React.FC = () => {
  return (
    <div className="bg-blue-50 md:relative">
      <div
        className={`absolute text-5xl bottom-0 text-red-600 ${styles.btnMix} hidden md:block`}
      >
        <button className="rounded-full bg-gray-1000 p-4 mr-4"></button>
        <button className="rounded-full bg-blue-1002 p-4"></button>
      </div>
      <section
        className={`px-10 last py-16 flex flex-col justify-center items-center m-auto ${styles.lastBlockBg}`}
      >
        <h5 className="text-gray-1001">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr
        </h5>
        <h1 className="mt-6 mb-20 text-white font-bold text-3xl">
          Lorem ipsum dolor sit amet
        </h1>

        <LastBlockComponent
          number={1}
          content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et !"
        >
          <div className="bg-gray-1002 flex justify-between items-center rounded-md mt-6 mb-20">
            <img
              src={videoGame}
              alt="video-game"
              style={{
                height: "100px",
                marginLeft: "2em",
              }}
            />
            <div>
              <button className="bg-blue-1000 px-2 md:px-6 mr-6 md:mr-16 rounded-md py-2 text-white">
                Add to cart
              </button>
            </div>
          </div>
        </LastBlockComponent>

        <LastBlockComponent
          number={2}
          content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et !"
        >
          <div className="bg-white rounded-md mt-6 mb-20 p-6 w-3/4">
            <img src={placeOrder} alt="place-order" />
          </div>
        </LastBlockComponent>

        <LastBlockComponent
          number={3}
          content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et !"
        >
          <div className="flex items-center bg-white rounded-md mt-10 w-2/3">
            <img
              src={videoGame}
              alt="video-game"
              style={{
                height: "200px",
                marginLeft: "2em",
              }}
            />
            <div>
              <img src={tick} alt="tick-icon" />
            </div>
          </div>
        </LastBlockComponent>
      </section>
    </div>
  );
};

export default LastBlock;
