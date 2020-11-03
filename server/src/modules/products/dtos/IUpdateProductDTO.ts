import { IItem } from '../infra/mongoose/models/Product';

interface IUpdateProductDTO {
  name?: string;
  type?: string;
  categories?: string[];
  price?: number;
  description?: String;
  items?: IItem[];
}

export default IUpdateProductDTO;
