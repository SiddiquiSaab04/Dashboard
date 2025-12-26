import Template from "../components/layout/Template";
import PageTitle from "../components/title/PageTitle";

const Overview: React.FC = () => {
  return (
    <>
      <Template>
        <PageTitle
          title="Overview"
          description="Welcome to your dashboard overview"
        />
      </Template>
    </>
  );
};

export default Overview;
