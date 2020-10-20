import { IItem } from '../infra/mongoose/models/Product';

export default interface ICreateProductDTO {
  name: string;
  type: string;
  categories: string[];
  price: number;
  description: String;
  items: IItem[];
}
