export interface Item {
  id: string;
  name: string;
  price: number;
  type: "Shoes" | "Cap" | "Hoodie" | "Shirt" | "Coat" | "Trousers";
  quantity: number;
  sex?: string | undefined | null;
  rate: number;
  sizes: number[];
  url_image: string[];
}

export interface Filters {
  search: string;
  type: string;
  price: number;
}

export interface Commentaries {
  id: string;
  commentary: string;
  rating: number;
  clientId: string;
  itemId: string;
  client?: Client | undefined | null;
}

export interface Client {
  id: string;
  name: string;
  email: string;
  avatar: string | null | undefined;
  createdAt: string | Date;
  phone: string;
}

export interface SelectedItem {
  id: string;
  name: string;
  price: number;
  type: "Shoes" | "Cap" | "Hoodie" | "Shirt" | "Coat" | "Trousers";
  quantity: number;
  sex?: string | undefined | null;
  rate: number;
  sizes: number[];
  url_image: string[];
  commentaries?: Commentaries[] | undefined | null;
}

export interface Reasons {
  id: number;
  title: string;
  description: string;
  icon: React.JSX.Element;
}

export interface CartItem {
  id: string | undefined;
  name: string | undefined;
  price: number;
  type: "Shoes" | "Cap" | "Hoodie" | "Shirt" | "Coat" | "Trousers" | undefined;
  quantity: number;
  image: string | undefined;
  size: number;
  sex: string;
}
