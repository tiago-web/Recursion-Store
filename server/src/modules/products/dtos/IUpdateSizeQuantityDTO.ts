interface IUpdateSizeQuantityDTO {
  productId: string,
  color: string,
  sizeTag: string,
  quantity: number,
  operator: 'add' | 'sub',
}

export default IUpdateSizeQuantityDTO;
