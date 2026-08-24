"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface BookModalContextType {
  isOpen: boolean;
  openBookModal: () => void;
  closeBookModal: () => void;
}

const BookModalContext = createContext<BookModalContextType | undefined>(undefined);

export function BookModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openBookModal = () => setIsOpen(true);
  const closeBookModal = () => setIsOpen(false);

  return (
    <BookModalContext.Provider value={{ isOpen, openBookModal, closeBookModal }}>
      {children}
    </BookModalContext.Provider>
  );
}

export function useBookModal() {
  const context = useContext(BookModalContext);
  if (!context) {
    throw new Error("useBookModal must be used within a BookModalProvider");
  }
  return context;
}
