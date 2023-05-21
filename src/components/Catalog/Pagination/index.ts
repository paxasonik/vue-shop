import { Emit } from "@/utils/constants";
export interface PaginationProps {
  page: number;
  count: number;
  perPage: number;
  maxDisplayedPages: number;
  [key: string]: any;
}

export interface PaginationEmit {
  (e: Emit["UPDATE_PAGE"], value: number): void;
}