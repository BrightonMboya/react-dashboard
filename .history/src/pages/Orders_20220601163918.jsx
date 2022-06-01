import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  Resize,
  Sort,
  ContextMeny,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
  ColumnDirective,
} from "@syncfusion/ej2-react-grids";
import {ordersData, contextMenuItem, ordersGrid} from '../data/dummy'
import { Header } from "../Components";

const Orders = () => {
  return <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
    <Header category="Page" title="Orders"/>
    <GridComponent id="gridcomp"
    dataSource={ordersData}
    >
      <ColumnsDirective>
        {ordersGrid.map((item, index) => (
          <ColumnDirective key={index} {...item} />
        ))}
      </ColumnsDirective>
    </GridComponent>
  </div>
};

export default Orders;
