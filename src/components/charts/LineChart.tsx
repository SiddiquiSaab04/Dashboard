import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
);

const LineChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Users",
        data: [5, 15, 25, 35, 50],
        borderColor: "#ddf45b",
        tension: 0.10,
        fill: false,
      },
    ],
  };

  return <Line data={data} width={500} height={380}   options={{responsive: true, maintainAspectRatio: false}} />;
};

export default LineChart;
