export interface MenuItem {
  name: string;
  description: string;
}

export interface MenuPackage {
  id: string;
  name: string;
  price: number;
  currency: string;
  items: MenuItem[];
  isKidsMenu?: boolean;
}

export interface Addon {
  id: string;
  name: string;
  price: number;
  currency: string;
  description?: string;
}