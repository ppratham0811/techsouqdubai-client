import React from "react";

const Heading = ({ title }) => {
  return (
    <>
      <div className="liner-container my-5 flex justify-center border-b-2 border-[rgba(119,119,119,.17)]">
        <h1 className="mb-[-2px] inline-block border-b-2 border-primary pb-3 text-2xl font-bold uppercase">
          {title}
        </h1>
      </div>
    </>
  );
};

export default Heading;
