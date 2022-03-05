// STEP 1 - Include Dependencies
// Include react
import React from 'react';
import ReactDOM from 'react-dom';

// Include the react-fusioncharts component
import ReactFC from 'react-fusioncharts';

// Include the fusioncharts library
import FusionCharts from 'fusioncharts';

// Include the chart type
import Column2D from 'fusioncharts/fusioncharts.charts';

// Include the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

// STEP 2 - Chart Data

// STEP 3 - Creating the JSON object to store the chart configurations
const ExampleChart = ({ data }) => {
  const chartConfigs = {
    type: 'column3d', // The chart type
    width: '100%', // Width of the chart
    height: '400', // Height of the chart
    dataFormat: 'json', // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        //Set the chart caption
        caption: 'Most Popular',
        //Set the chart subcaption
        decimals: 0,
        pieRadius: '40%',
        // paletteColors: '#f0db4f',
        // subCaption: 'In MMbbl = One Million barrels',
        //Set the x-axis name
        xAxisName: 'Repos',
        xAxisNameFontSize: '16px',
        //Set the y-axis name
        yAxisName: 'Stars',
        уAxisNameFontSize: '16px',
        numberSuffix: ' stars',
        //Set the theme for your chart
        theme: 'fusion',
      },
      // Chart Data
      data,
    },
  };

  return <ReactFC {...chartConfigs} />;
};
export default ExampleChart;
