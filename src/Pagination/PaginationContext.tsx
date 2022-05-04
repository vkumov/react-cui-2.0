import React, { ReactNode } from "react";

type IPaginationContext = {
  active: number;
  beginAt: number;
  changePage: (e, position: number) => void;
  firstAndLast: boolean;
  icons: boolean;
  next: ReactNode;
  perPage: number;
  position: number;
  prev: ReactNode;
  total: number;
};

export const PaginationContext = React.createContext<IPaginationContext>(null);
