import { atom, selector } from 'recoil';

export const DEFAULT_IMG_URL = 'http://localhost:3333/files/empty_bg_img.jpg';

export type TProduct = {
  name: string;
  type: string;
  categories: string[];
  price: number;
  description: string;
  discountPercentage?: number;
};

export const productState = atom<TProduct>({
  key: 'productState',
  default: {} as TProduct,
});

export type TImg = {
  image: string | null;
};

export type TSize = {
  sizeTag: string;
  quantity: number;
};

export type TItem = {
  color: string;
  imageColor: string;
  productImages: TImg[];
  sizes: TSize[];
};

export const itemsState = atom<TItem[]>({
  key: 'itemsState',
  default: [] as TItem[],
});
