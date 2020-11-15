import { useContext } from 'react';
import { ContextType } from '../interfaces';
import { StateContext } from './StateProvider';
import { initialState as _initialState } from './reducer';

export { default as StateProvider } from './StateProvider';
export { default as reducer } from './reducer';
export const useStateValue = (): ContextType => useContext(StateContext);
export const initialState = _initialState;
