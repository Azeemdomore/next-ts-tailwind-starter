import React, { ReactNode } from "react";
import Cards from "../components/Cards";

type Props = {
  title?: string;
  subTitle?: string;
};

const Layout = ({ title, subTitle }: Props) => (
  <div className="lg:container mx-auto xl:w-[75%] w-4/5 space-y-8 mt-16">
    <div className="space-y-5  ml-20">
      <h1 className="uppercase font-bold font-monts">Iniciativas 2018</h1>
      <a
        href="#"
        className="uppercase text-btnYellow font-monts hover:underline"
      >
        foroforbes.com
      </a>
    </div>
    <div>
      <Cards />
    </div>
  </div>
);

export default Layout;
