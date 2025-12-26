import type { templateProps } from "../interface/template.ts";
const Template: React.FC<templateProps> = ({ children }) => {
  return <div className="xl:p-7">{children}</div>;
};

export default Template;
