import React from 'react'
import { ChartComponent, LineSeries, Inject, DateTime, Legend, Tooltip, SeriesCollectionDirective, SeriesDirective } from '@syncfusion/ej2-react-charts'
import { lineCustomSeries, LinePrimaryYAxis, LinePrimaryXAxis } from '../../data/dummy'

const LineChart = () => {
  return (
    <ChartComponent>
      <Inject services={[LineSeries, DateTime, Legend, Tooltip]}/>
      <SeriesCollectionDirective>
        {lineCustomSeries.map((item, index) => 
        <SeriesDirective key={index} {...item}/>
        )}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default LineChart