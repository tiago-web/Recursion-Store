import { IAddress } from './IAddressDTO';

export default interface ICreateOrderDTO {
  userId: string;
  status: string;
  delivered: boolean;
  products: string[];
  shippingAddress: IAddress;
  billingAddress: IAddress;
}
