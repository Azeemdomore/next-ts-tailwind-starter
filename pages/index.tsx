import type { NextPage } from "next";
import Iniciatives from "../components/Iniciativas";
import PlanBar from "../components/PlanBar";
import Slider from "../components/MostRecent";
import MostRecent from "../components/MostRecent";

const Home: NextPage = () => {
  return (
    <>
      <Iniciatives />
      <PlanBar />
      <MostRecent />
    </>
  );
};

export default Home;
