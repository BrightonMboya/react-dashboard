import React from "react";
import {
  ChartComponent,
  SplineAreaSeries,
  Inject,
  DateTime,
  Legend,
  SeriesCollectionDirective,
  SeriesDirective,
} from "@syncfusion/ej2-react-charts";

import { Header } from "../../Components";
import {
  areaCustomSeries,
  AreaPrimaryYAxis,
  AreaPrimaryXAxis,
} from "../../data/dummy";
import { useStateContext } from "../../Contexts/ContextProvider";

const Area = () => {
  const { currentMode } = useStateContext();
  return (
    <div>
      <Header
      category="Chart"
      title="January - March Sales"
      />
      <ChartComponent
        id="line-chart"
        height="420px"
        primaryXAxis={AreaPrimaryXAxis}
        primaryYAxis={AreaPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        background={currentMode === "Dark" ? "#33373E" : "#fff"}
      >
        <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
        <SeriesCollectionDirective>
          {areaCustomSeries.map((item, index) => (
            <SeriesDirective key={index} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default Area;
