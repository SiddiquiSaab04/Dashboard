import Template from "../components/layout/Template";
import PageTitle from "../components/title/PageTitle";
import { StatsCard } from "../components/cards/StatsCard";
import { stats } from "../utils/Stats";
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
      </Template>
    </>
  );
};

export default Overview;
