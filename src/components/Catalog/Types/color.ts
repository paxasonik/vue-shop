export interface ColorProps {
  productId: number;
  color: {
    id: number;
    title: string;
    code: string;
  };
  [key: string]: any;
}