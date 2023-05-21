export interface ProductProps {
  product: {
    id: number;
    title: string;
    price: number;
    imageUrl: string;
    colors: [Record<string, unknown>];
    [key: string]: any;
  };
}