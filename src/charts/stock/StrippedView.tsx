import { FC, useEffect, useState } from "react";
import HighCharts, { Options } from "highcharts/highstock";
import HighChartsReact from "highcharts-react-official";
import "highcharts/modules/accessibility";
import mockData from "./mock.json";
import { CandleStick } from "../../types/chart.types";

interface StrippedChartProps {
  data: CandleStick[];
}

const StrippedChart: FC<StrippedChartProps> = ({ data }) => {
  const [options, setOptions] = useState<Options>({
    chart: {},
    tooltip: {
      enabled: false
    },
    xAxis: {
      visible: false
    },
    yAxis: {
      visible: false
    },
    rangeSelector: {
      enabled: false
    },
    scrollbar: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    navigator: {
      enabled: false
    }
  });
  useEffect(() => {
    if (data) {
      setOptions(opt => ({
        ...opt,
        series: [
          {
            type: "candlestick",
            name: "chart",
            data
          }
        ]
      }));
    }
  }, [data]);
  return (
    <div>
      <HighChartsReact
        highcharts={HighCharts}
        constructorType={"stockChart"}
        options={options}
      />
    </div>
  );
};

export default StrippedChart;
