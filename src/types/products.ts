export type Skus = {
  code: string;
  name: string;
};

export type Product = {
  id: number;
  brand: string;
  image: string;
  style: string;
  substyle: string;
  abv: string;
  origin: string;
  information: string;
  skus: Skus[];
};

export type StockPrice = {
  price: number;
  stock: number;
};
