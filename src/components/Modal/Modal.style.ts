import styled from "styled-components";

export const Container = styled.div<{ onHide?: boolean }>`
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: ${({ onHide }) => (onHide ? "block" : "none")};
`;

export const ContainerContent = styled.div`
  display: flex;
  width: 50%;
  height: 60vh;
  top: 50%;
  left: 50%;
  position: absolute;
  background-color: #fff;
  align-items: center;
  padding: 1.5rem 2.5rem;
  border-radius: 1rem;
  justify-content: center;
  transform: translate(-50%, -50%);
  box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.2);
`;

export const CloseIconButton = styled.button`
  top: 2rem;
  right: 2rem;
  border: none;
  outline: none;
  background: none;
  position: absolute;
  cursor: pointer;
`;

export const ModalFooter = styled.div``;
