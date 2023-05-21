export interface ProductProps {
  product: {
    id: number;
    title: string;
    price: number;
    imageUrl: string;
    count: number;
    color: [Record<string, unknown>];
    [key: string]: any;
  };
}