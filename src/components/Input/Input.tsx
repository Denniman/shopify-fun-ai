import { InputProps } from "./Input.interface";

import { Container } from "./Input.style";

export const Input = ({
  placeholder = "Enter Prompt",
  ...props
}: InputProps) => {
  return <Container {...(props as any)} placeholder={placeholder} />;
};
