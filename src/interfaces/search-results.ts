import { IPrices } from './prices';

export interface IItems {
  id: string;
  title: string;
  location: string;
  price: IPrices;
  picture: string;
  condition: string;
  free_shipping: boolean;
}

export interface ISearchResults {
  author: {
    name: string;
    lastname: string;
  };
  category: string;
  items: IItems;
}
