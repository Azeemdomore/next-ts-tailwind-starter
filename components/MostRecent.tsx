import React from "react";
import Slider from "../components/Slider";

type Props = {
  heading?: string;
  subHeading?: string;
};

const MostRecent = ({ heading, subHeading }: Props) => {
  return (
    <>
      <div className="flex justify-center 2xl:ml-36 xl:ml-28 ml-0 h-full md:w-full sm:w-[765px] w-[700px]">
        <div className="2xl:w-[72%] xl:w-4/5 w-11/12 space-y-28 mt-20">
          <div className="space-y-5">
            <p className="uppercase text-yellow-300">MANTENTE AL DÍA</p>
            <h1 className="uppercase font-monts font-bold">LO MÁS RECIENTE</h1>
          </div>
          <div className="h-[65%]">
            <Slider />
          </div>
        </div>
      </div>
    </>
  );
};

export default MostRecent;
