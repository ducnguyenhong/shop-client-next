import { LocalCartItem } from '@/types/cart.type';
import { LS_JWT_TOKEN } from '@/utils/const';
import { atom, selector } from 'recoil';

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

const tokenAtom = atom<string | undefined>({
  key: 'TOKEN_ATOM',
  default: new Promise((resolve) => {
    if (typeof window === 'undefined') {
      resolve('');
      return;
    }
    const token = localStorage.getItem(LS_JWT_TOKEN) || '';
    // const token = Cookies.get(LS_JWT_TOKEN);
    resolve(token);
  })
});

export const tokenState = selector<any>({
  key: 'TOKEN_SELECTOR',
  get: ({ get }) => get(tokenAtom),
  set: ({ set }, newValue) => {
    set(tokenAtom, newValue);
    if (!newValue) {
      // Cookies.remove(LS_JWT_TOKEN);
      localStorage.removeItem(LS_JWT_TOKEN);
      return;
    }
    localStorage.setItem(LS_JWT_TOKEN, newValue);
    // Cookies.set(LS_JWT_TOKEN, newValue, { expires: 60, secure: true });
  }
});

export const userInfoAtom = atom<any>({
  key: 'USER_INFO_ATOM',
  default: undefined
});
