import { Emit } from "@/utils/constants";

export interface ColorProps {
  name: string;
  isChecked: boolean;
  color: {
    id: number;
    title: string;
    code: string;
  };
  [key: string]: any;
}

export interface ColorEmit {
  (e: Emit["UPDATE_VALUE"], value: string | number): void;
}