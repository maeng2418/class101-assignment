import React, { createContext, useReducer } from 'react';
import { IProviderType, ContextType } from '../interfaces';

export const StateContext = createContext<ContextType>([undefined, undefined]);

const StateProvider: React.FC<IProviderType> = ({ reducer, initialState, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
