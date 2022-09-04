import {IProduct} from './IProduct';

export interface IOrder {
  id: number;
  date: string;
  address: string;
  products: IProduct[];
};
