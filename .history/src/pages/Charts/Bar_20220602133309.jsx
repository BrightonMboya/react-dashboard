import React from "react";
import {
  ChartComponent,
  ColumnSeries,
  Inject,
  DateTime,
  DataLabel,
  Tooltip,
  Legend,
  Category,
  SeriesCollectionDirective,
  SeriesDirective,
} from "@syncfusion/ej2-react-charts";

import { Header } from "../../Components";
import {
  barPrimaryYAxis,
  barPrimaryXAxis,
  barChartData,
} from "../../data/dummy";
import { useStateContext } from "../../Contexts/ContextProvider";

const Bar = () => {
  const { currentMode } = useStateContext();
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Area" title="January - March Sales" />
      <ChartComponent
        id="area-chart"
        height="420px"
        primaryXAxis={barPrimaryXAxis}
        primaryYAxis={barPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        background={currentMode === "Dark" ? "#33373E" : "#fff"}
      >
        <Inject services={[BarSeries, DateTime, Legend, DataLabel, Tooltip, Category]} />
        <SeriesCollectionDirective>
          {barChartData.map((item, index) => (
            <SeriesDirective key={index} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default Bar;
