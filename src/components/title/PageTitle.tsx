import React from "react";
import { BackButton } from "../buttons/BackButton";
import type { PageTitleProps } from "../interface/PageTitle";

export const PageTitle: React.FC<PageTitleProps> = ({
  title,
  description,
  backButton,
  titleStyleClass,
  descriptionStyleClass,
}: PageTitleProps) => {
  return (
    <div className="flex gap-x-4 w-full">
      {backButton && <BackButton />}
      <div className="flex flex-col">
        <h1 className={titleStyleClass}>{title}</h1>
        <span className={descriptionStyleClass}>{description}</span>
      </div>
    </div>
  );
};

export default PageTitle;
