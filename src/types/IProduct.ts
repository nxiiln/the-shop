export interface IProduct {
  id: number;
  name: string;
  category: string;
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
