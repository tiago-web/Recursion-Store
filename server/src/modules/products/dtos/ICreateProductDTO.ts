import { IItem } from '../infra/mongoose/models/Product';

interface ICreateProductDTO {
  createdBy: string;
  name: string;
  type: string;
  categories: string[];
  price: number;
  description: String;
}

export default ICreateProductDTO;
