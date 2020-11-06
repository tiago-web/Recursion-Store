import IAddress from "@shared/dtos/IAddressDTO";

interface ICreateOrderProduct {
  productId: string;
  productPrice: number;
  items: Array<{
    color: string;
    sizeTag: string;
    quantity: number;
  }>;
}

interface ICreateOrderDTO {
  userId: string;
  products: ICreateOrderProduct[];
  total: number;
  subTotal: number;
  shippingPrice: number;
  shippingAddress: IAddress;
  billingAddress: IAddress;
}

export default ICreateOrderDTO;
