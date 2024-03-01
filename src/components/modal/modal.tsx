"use client";
import React from "react";
import { Layout, Overlay } from "./modal.style";

interface ModalProps {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}

export const Modal = ({ modal, setModal, children }: ModalProps) => {
  const modalClose = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const ClickOut = (e: MouseEvent) => {
      if (!modalClose.current?.contains(e.target as Node)) {
        setModal(false);
      }
    };
    window.addEventListener("mousedown", ClickOut);
    return () => {
      window.removeEventListener("mousedown", ClickOut);
    };
  }, []);

  React.useEffect(() => {
    const PressOut = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setModal(false);
      }
    };
    window.addEventListener("keydown", PressOut);

    return () => {
      window.removeEventListener("keydown", PressOut);
    };
  }, []);
  return modal ? (
    <Overlay>
      <Layout ref={modalClose}>{children}</Layout>
    </Overlay>
  ) : null;
};
