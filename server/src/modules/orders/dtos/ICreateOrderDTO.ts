import IAddress from "@shared/dtos/IAddressDTO";

interface ICreateOrderDTO {
  userId: string;
  products: string[];
  shippingAddress: IAddress;
  billingAddress: IAddress;
}

export default ICreateOrderDTO;
