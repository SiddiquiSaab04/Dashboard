import Template from "../components/layout/Template";
import PageTitle from "../components/title/PageTitle";
import { StatsCard } from "../components/cards/StatsCard";
import { stats } from "../utils/Stats";
import LineChart from "../components/charts/LineChart";
import PieChart from "../components/charts/PieChart";
import BarChart from "../components/charts/BarChart";
const Overview: React.FC = () => {
  return (
    <>
      <Template>
        <PageTitle
          title="Overview"
          titleStyleClass="text-3xl font-semibold my-3"
        />
        <div className="grid grid-cols-4 gap-4">
          {stats.map((stat) => (
            <StatsCard
              key={stat.title}
              title={stat.title}
              value={stat.value}
              icon={stat.icon}
              description={stat.description}
            />
          ))}
        </div>
        <div className="grid grid-cols-4 gap-4 my-14">
          <div className="col-span-3">
            <div className="">
            <LineChart />
            </div>
          </div>
          <div className="col-span-1 justify-center items-center">
            <PieChart />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-3">
            <div className="">
            <BarChart />
            </div>
          </div> 
          <div className="col-span-1 justify-center items-center">
            <PieChart />
          </div>
        </div>
      </Template>
    </>
  );
};

export default Overview;
