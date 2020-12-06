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

export type TSizes = {
  sizeTag: string;
  quantity: number;
};

export type TItem = {
  color: string;
  imageColor: string;
  productImages: TImg[];
  sizes: TSizes[];
};

export const itemsState = atom<TItem[]>({
  key: 'itemsState',
  default: [{}] as TItem[],
});

// export const imagesState = atom<TImagesState>({
//   key: 'imagesState',
//   default: {
//     img1: {
//       imageUrl: DEFAULT_IMG_URL,
//       image: DEFAULT_IMG_FILENAME,
//       isLocal: false,
//     },
//     img2: {
//       imageUrl: DEFAULT_IMG_URL,
//       image: DEFAULT_IMG_FILENAME,
//       isLocal: false,
//     },
//     img3: {
//       imageUrl: DEFAULT_IMG_URL,
//       image: DEFAULT_IMG_FILENAME,
//       isLocal: false,
//     },
//     img4: {
//       imageUrl: DEFAULT_IMG_URL,
//       image: DEFAULT_IMG_FILENAME,
//       isLocal: false,
//     },
//   },
// });
