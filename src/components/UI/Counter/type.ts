import { Emit } from "@/utils/constants";

export interface CounterProps {
  count: number;
  [key: string]: any;
}
export interface CounterEmit {
  (e: Emit["UPDATE_VALUE"], value: number): void;
}