
export interface IProduct {
  id: number
  title: string;
  price: number;
  imageUrl: string;
  count: number;
  color: {
    id: number;
    title: string;
    code: string;
    [key: string]: any;
  };
  [key: string]: any;
}
export interface ProductProps {
  product: IProduct,
}