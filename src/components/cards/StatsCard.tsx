import type { StatsCardProps } from "../interface/StatsCard";
import { Card } from "../cards/Card";
export const StatsCard = ({
  title,
  value,
  icon,
  description,
}: StatsCardProps) => {
  return (
    <Card className="flex justify-between border border-primary rounded-lg px-4 py-8 bg-gradient-to-tr from-base/20 to-accent/20 backdrop-blur-xl shadow-lg">
      <div className="flex flex-col items-start">
        {title && <span className="text-2xl font-bold">{title}</span>}
        {value && <span className="text-xl font-normal">{value}</span>}
        {description && (
          <span className="text-sm text-primary font-light">{description}</span>
        )}
      </div>
      <div className="flex items-center">
        {icon && <span className=" text-primary">{icon}</span>}
      </div>
    </Card>
  );
};
