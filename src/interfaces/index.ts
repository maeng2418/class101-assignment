export interface IProductType {
  id: string;
  title: string;
  coverImage: string;
  price: number;
  score: number;
  availableCoupon?: boolean;
  count: number;
}

export interface ICartProductType extends IProductType {
  onCheck: (checked: boolean, id: string) => void;
  checked: boolean;
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

export interface ISectionType {
  title: string;
}

export interface IStateType {
  [key: string]: any;
}

export interface IActiontype {
  type: string;
  id?: string;
  item?: IProductType;
  count?: number;
}

export type ContextType = [IStateType, React.Dispatch<IActiontype>];

export interface IProviderType {
  reducer: (state: IStateType, action: IActiontype) => IStateType;
  initialState: IStateType;
}

export interface ICartSelectBtn {
  onCheck: (checked: boolean) => void;
  onDelete: () => void;
}

export interface ICouponSelect {
  url: string;
}
