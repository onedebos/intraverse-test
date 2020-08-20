import React from "react";

interface ProblemProps {
  title: string;
  content: string;
}

const ProblemComponent: React.FC<ProblemProps> = ({ title, content }) => {
  return (
    <div className="md:max-w-screen-md m-auto text-center mb-10">
      <h1 className={`text-4xl font-bold py-8`}>{title}</h1>
      <p>{content}</p>
    </div>
  );
};

export default ProblemComponent;
