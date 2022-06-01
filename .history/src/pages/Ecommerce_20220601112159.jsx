import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { earningData, sparklineArea, ecomPieChartDat } from "../data/dummy";
import { useStateContext } from "../Contexts/ContextProvider";

const Ecommerce = () => {
  return (
    <div className="mt-12">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="bg-white dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
              <div>
                <p className="font-bold text-gray-400">Earnings</p>
                <p>$63, 448, 778</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
