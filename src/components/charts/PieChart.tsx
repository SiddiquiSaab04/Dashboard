import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
//   
} from "chart.js";

ChartJS.register(ArcElement, Tooltip,);

const DoughnutChart = () => {
  const data = {
    labels: ["Completed", "Pending", "Failed"],
    datasets: [
      {
        data: [60, 25, 15],
        backgroundColor: ["#B688F7", "#B688F7", "#eadcf7"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: "70%",
  };

  return <Doughnut data={data} options={options} />;
};

export default DoughnutChart;
