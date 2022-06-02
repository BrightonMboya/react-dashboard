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
  areaPrimaryYAxis,
  areaPrimaryXAxis,
} from "../../data/dummy";
import { useStateContext } from "../../Contexts/ContextProvider";

const Area = () => {
  const { currentMode } = useStateContext();
  return (
    <div>
      <Header category="Area" title="January - March Sales" />
      <ChartComponent
        id="area-chart"
        height="420px"
        primaryXAxis={areaPrimaryXAxis}
        primaryYAxis={areaPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        background={currentMode === "Dark" ? "#33373E" : "#fff"}
      >
        <Inject services={[SplineAreaSeries, DateTime, Legend]} />
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
