import { Emit } from "@/utils/constants";

export interface SelectProps {
  modelValue: string | number;
  name: string;
  options: {
    id: number;
    title: string;
    [key: string]: any;
  };
  [key: string]: any;
}

export interface SelectEmit {
  (e: Emit["UPDATE_VALUE"], value: string | number): void;
}