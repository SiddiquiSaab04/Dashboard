import React from "react";
import { BackButton } from "../buttons/BackButton";
import type { PageTitleProps } from "../interface/PageTitle";

export const PageTitle: React.FC<PageTitleProps> = ({
  title,
  description,
  backButton,
}: PageTitleProps) => {
  return (
    <div className="flex justify-start items-center gap-x-4 w-full">
      {backButton && <BackButton />}
      <div className="flex flex-col">
        <h1 className="text-[24px] font-semibold text-primary">{title}</h1>
        <span className="text-[14px] font-normal text-secondary">
          {description}
        </span>
      </div>
    </div>
  );
};

export default PageTitle;
