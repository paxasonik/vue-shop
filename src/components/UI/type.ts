import { Emit } from "@/utils/constants";

export interface InputProps {
  modelValue: string | number;
  label: string;
  type: string;
  name: string;
  placeholder: string;
  dataMaska: string;
  dataMaskaTokens: string;
  [key: string]: any;
}

export interface InputEmit {
  (e: Emit["UPDATE_VALUE"], value: string | number): void;
}

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