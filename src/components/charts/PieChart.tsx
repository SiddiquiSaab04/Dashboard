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
        backgroundColor: ["#22c55e", "#f59e0b", "#ef4444"],
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
