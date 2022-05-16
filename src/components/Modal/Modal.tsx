import React from "react";
import { BsXLg } from "react-icons/bs";

import { ModalProps } from "./Modal.interface";

import { Container, CloseIconButton, ContainerContent } from "./Modal.style";

export const Modal: React.FC<ModalProps> = ({
  children,
  onHide,
  onClickHide,
}) => {
  return (
    <Container onHide={onHide}>
      <ContainerContent>
        <CloseIconButton onClick={onClickHide}>
          <BsXLg />
        </CloseIconButton>
        {children}
      </ContainerContent>
    </Container>
  );
};
