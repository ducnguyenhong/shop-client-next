import { atom } from 'recoil';

export const cartDeleteAtom = atom<{ show: boolean; id?: string }>({
  key: 'CART_DELETE_ATOM',
  default: { show: false, id: undefined }
});
