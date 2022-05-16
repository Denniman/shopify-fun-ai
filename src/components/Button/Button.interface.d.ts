import React, { ReactNode } from "react";

export type ButtonProps = {
  isLoading?: boolean;
  children: ReactNode;
} & React.HTMLProps<HTMLButtonElement>;
