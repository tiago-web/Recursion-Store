import IAddress from "@shared/dtos/IAddressDTO";

export default interface ICreateOrderDTO {
  userId: string;
  status: string;
  products: string[];
  shippingAddress: IAddress;
  billingAddress: IAddress;
}
