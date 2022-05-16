import { ReactNode } from "react";

export type ModalProps = {
  onHide: boolean;
  onClickHide: () => void;
  children: ReactNode;
};
