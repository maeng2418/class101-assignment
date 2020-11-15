import { IStateType, IActiontype } from '../interfaces';

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
      const index = state.cart.findIndex((cartItem) => cartItem?.id === action.id);
      const newCart = [...state.cart];
      if (index >= 0) {
        newCart.splice(index, 1); // 해당 인덱스 빼내기 -> arr에 해당 인덱스에 해당하는 값이 하나 빠진다.
      } else {
        console.warn(`${action.id}가 장바구니에 존재하지 않습니다!`);
      }
      return {
        ...state,
        cart: newCart,
      };
    case 'EMPTY_Cart':
      return {
        ...state,
        cart: [],
      };

    default:
      return state;
  }
};

export default reducer;
