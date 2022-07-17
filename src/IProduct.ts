export interface IProduct {
  id: number;
  image: string;
  name: string;
  price: number;
  triangle?: string;
  color: string;
  size: string;
  quantity: number;
  smallDescription: string;
  description: string;
  additionalInfo: string;
  tags: string[];
}
