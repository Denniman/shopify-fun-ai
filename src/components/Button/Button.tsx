import React from "react";

import { ButtonProps } from "./Button.interface";
import { Container } from "./Button.style";

export const Button: React.FC<ButtonProps> = ({
  isLoading,
  children,
  ...props
}) => {
  return (
    <Container disabled={isLoading} {...(props as any)}>
      {isLoading ? "Loading..." : children}
    </Container>
  );
};
