import React from "react";
import clsx from "clsx";
import type { CardProps } from "../interface/Card";

export const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div
      className={clsx(
        className
      )}
    >
      {children}
    </div>
  );
};
