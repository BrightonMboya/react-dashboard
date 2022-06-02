import React from "react";
import {
  ChartComponent,
  HiloSeries,
  Zoom,
  Tooltip,
  Crosshair,
  Inject,
  DateTime,
  Legend,
  SeriesCollectionDirective,
  SeriesDirective,
  Category,
} from "@syncfusion/ej2-react-charts";

import { Header } from "../../Components";
import {
  financialChartData,
  FinancialPrimaryYAxis,
  FinancialPrimaryXAxis,
} from "../../data/dummy";
import { useStateContext } from "../../Contexts/ContextProvider";

const Financial = () => {
  const { currentMode } = useStateContext();
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category="Financial" title="January - March Sales" />
      <ChartComponent
        id="area-chart"
        height="420px"
        primaryXAxis={FinancialPrimaryXAxis}
        primaryYAxis={FinancialPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        background={currentMode === "Dark" ? "#33373E" : "#fff"}
        legendSettings={{visible: false}}
      >
        <Inject services={[HiloSeries, Tooltip, Category, Zoom, DateTime, Legend]} />
        <SeriesCollectionDirective>
          {financialChartData.map((item, index) => (
            <SeriesDirective key={index} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default Financial;
