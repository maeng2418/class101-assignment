export interface IProductType {
  id: string;
  title: string;
  coverImage: string;
  price: number;
  score: number;
  availableCoupon?: boolean;
}

export interface IProductListType {
  products: Array<IProductType>;
}

export interface IPageType {
  url: string;
  start: number;
  end: number;
  count: number;
  order: 'ASC' | 'DESC';
  orderKey: string;
}

export interface IProductSectionType extends IPageType {
  title: string;
}

export interface IStateType {
  cart: Array<IProductType | undefined>;
}

export interface IActiontype {
  type: string;
  id?: string;
  item?: IProductType;
}

export type ContextType = [IStateType | undefined, React.Dispatch<IActiontype> | undefined];

export interface IProviderType {
  reducer: (state: IStateType, action: IActiontype) => IStateType;
  initialState: IStateType;
}
