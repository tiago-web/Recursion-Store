export default interface IAddress {
  address: string;
  country: string;
  state: string;
  city: string;
  postalCode: string;
  main?: boolean | undefined;
}
