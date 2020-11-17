import { IStateType, IActiontype, IProductType } from '../interfaces';

export const initialState = {
  cart: [],
};

export const reducer = (state: IStateType, action: IActiontype): IStateType => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
    case 'REMOVE_FROM_CART':
      // 제일 처음에 나오는 인덱스 반환
      const rmIndex = state.cart.findIndex((cartItem: IProductType) => cartItem.id === action.id);
      const rmNewCart = [...state.cart];
      if (rmIndex >= 0) {
        rmNewCart.splice(rmIndex, 1); // 해당 인덱스 빼내기 -> arr에 해당 인덱스에 해당하는 값이 하나 빠진다.
      } else {
        console.warn(`${action.id}가 장바구니에 존재하지 않습니다!`);
      }
      return {
        ...state,
        cart: rmNewCart,
      };
    case 'COUNT_UP_FROM_CART':
      // 제일 처음에 나오는 인덱스 반환
      const upIndex = state.cart.findIndex((cartItem: IProductType) => cartItem.id === action.id);
      const upNewCart = [...state.cart];
      if (upIndex >= 0) {
        const upNewProduct = upNewCart[upIndex];
        const count = action.count || 0;
        upNewProduct.count = count + 1;
        upNewCart.splice(upIndex, 1, upNewProduct);
      } else {
        console.warn(`${action.id}가 장바구니에 존재하지 않습니다!`);
      }
      return {
        ...state,
        cart: upNewCart,
      };
    case 'COUNT_DOWN_FROM_CART':
      // 제일 처음에 나오는 인덱스 반환
      const downIndex = state.cart.findIndex((cartItem: IProductType) => cartItem.id === action.id);
      const downNewCart = [...state.cart];
      if (downIndex >= 0) {
        const downNewProduct = downNewCart[downIndex];
        const count = action.count || 0;
        downNewProduct.count = count - 1;
        downNewCart.splice(downIndex, 1, downNewProduct);
      } else {
        console.warn(`${action.id}가 장바구니에 존재하지 않습니다!`);
      }
      return {
        ...state,
        cart: downNewCart,
      };
    case 'EMPTY_CART':
      return {
        ...state,
        cart: [],
      };

    default:
      return state;
  }
};

export default reducer;
