import React from "react";
import styles from "../styles/LastBlock.module.css";

interface LastBlockProps {
  number: number;
  content: string;
}

const LastBlockComponent: React.FC<LastBlockProps> = ({
  number,
  content,
  children,
}) => {
  return (
    <div className="max-w-screen-md">
      <div
        className={`${styles.numberBg} text-white flex justify-center items-center text-sm`}
      >
        {number}
      </div>
      <h3 className="font-bold text-white mt-4">{content}</h3>
      {children}
    </div>
  );
};

export default LastBlockComponent;
