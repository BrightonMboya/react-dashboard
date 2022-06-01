import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { earningData, sparklineArea, ecomPieChartDat } from "../data/dummy";
import { useStateContext } from "../Contexts/ContextProvider";
import { Button } from "../Components";

const Ecommerce = () => {
  return (
    <div className="mt-12">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="bg-white dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Earnings</p>
              <p className="text-2xl">$63,448,778</p>
            </div>
          </div>

          <div className="mt-6">
            <Button
              color="white"
              bgColor="blue"
              text="Download"
              size="md"
              borderRadius="10px"
            />
          </div>
        </div>

        <div className="flex m-3 flex-wrap justify-center items-center gap-1">
          {earningData.map((item) => (
            <div
              key={item.title}
              className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl"
            >
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p><span className="text-lg font-semibold">{item.amount}</span></p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
