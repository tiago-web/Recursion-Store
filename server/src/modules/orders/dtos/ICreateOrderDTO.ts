import IAddress from "@shared/dtos/IAddressDTO";

interface ICreateOrderProduct {
  productId: string;
  items: {
    color: string;
    sizeTag: string;
    quantity: number;
  }
}

interface ICreateOrderDTO {
  userId: string;
  products: ICreateOrderProduct[];
  shippingAddress: IAddress;
  billingAddress: IAddress;
}

export default ICreateOrderDTO;
