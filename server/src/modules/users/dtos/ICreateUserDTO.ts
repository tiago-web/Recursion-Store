export default interface ICreateUserDTO {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  shippingAddresses: [{
    address: string;
    country: string;
    province: string;
    city: string;
    main?: boolean;
  }];
}
