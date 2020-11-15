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
