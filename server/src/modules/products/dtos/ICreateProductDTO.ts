import { IItem } from '../infra/mongoose/models/Product';

interface ICreateProductDTO {
  name: string;
  type: string;
  categories: string[];
  price: number;
  description: String;
  items: IItem[];
}

export default ICreateProductDTO;
