import { LocalCartItem } from '@/types/cart.type';
import { atom } from 'recoil';

const LS_CART = 'ls_shop_cart';

export const cartAtom = atom<LocalCartItem[]>({
  key: 'CART_ATOM',
  default: [],
  effects: [
    ({ onSet, setSelf }) => {
      if (typeof window !== 'undefined') {
        const localCart = localStorage.getItem(LS_CART);
        try {
          if (typeof localCart === 'string') {
            setSelf(JSON.parse(localCart) || []);
          }
        } catch (error) {}

        onSet((newData) => {
          if (newData) {
            localStorage.setItem(LS_CART, JSON.stringify(newData));
          } else {
            localStorage.removeItem(LS_CART);
          }
        });
      }
    }
  ]
});

export const userInfoAtom = atom<any>({
  key: 'USER_INFO_ATOM',
  default: undefined
});
