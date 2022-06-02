import React from 'react'
import { ChartComponent, LineSeries, Inject, DateTime, Legend, Tooltip, SeriesCollectiveDirective, SeriesDirective } from '@syncfusion/ej2-react-charts'
import { lineCustomSeries, LinePrimaryYAxis, LinePrimaryXAxis } from '../../data/dummy'

const LineChart = () => {
  return (
    <ChartComponent>
      <Inject services={[LineSeries, DateTime, Legend, Tooltip]}/>
    </ChartComponent>
  )
}

export default LineChart