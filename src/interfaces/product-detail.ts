import { IPrices } from './prices';

interface IAuthor {
  name: string;
  lastname: string;
}

interface ICategory {
  id: string;
  name: string;
}

interface IProduct {
  id: string;
  title: string;
  category: ICategory;
  price: IPrices;
  picture: string;
  condition: 'new' | 'not_specified' | 'used';
  free_shipping: boolean;
  sold_quantity: number;
  description: string;
}

export interface IProductDetail {
  author: IAuthor;
  item: IProduct;
}
