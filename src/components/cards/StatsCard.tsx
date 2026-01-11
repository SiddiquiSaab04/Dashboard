import type { StatsCardProps } from "../interface/StatsCard";
import { Card } from "../cards/Card";
export const StatsCard = ({
  title,
  icon,
  description,
}: StatsCardProps) => {
  return (
    <Card className="flex justify-between border border-primary rounded-xl px-4 py-8 bg-gradient-to-tr from-base/20 to-pop/20 backdrop-blur-xl shadow-xl">
      <div className="flex flex-col items-start">
        {title && <span className="text-2xl font-bold">{title}</span>}
        {description && (
          <span className="text-sm text-text font-light">{description}</span>
        )}
      </div>
      <div className="flex items-center bg-pop p-4 rounded-full">
        {icon && <span className=" text-accent">{icon}</span>}
      </div>
    </Card>
  );
};
