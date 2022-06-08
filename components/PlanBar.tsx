import React from "react";

type Props = {
  name?: string;
};

const PlanBar = ({ name }: Props) => {
  return (
    <>
      <div className="bg-btnYellow md:w-full sm:w-[765px] w-[700px] h-40 flex md:justify-evenly items-center mt-20 md:flex-nowrap flex-wrap md:pl-0 pl-10">
        <h2 className="text-white font-monts font-bold">
          PLANIFIQUE SU CAMPAÑA
        </h2>
        <button className="w-56 h-12 bg-black text-white flex hover:border-2 border-black hover:bg-transparent duration-300 hover:text-black justify-start items-center pl-8 font-monts">
          MEDIA KIT
        </button>
      </div>
    </>
  );
};

export default PlanBar;
