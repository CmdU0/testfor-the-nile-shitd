import { MenuPackage, Addon } from '../types';

export const menuPackages: MenuPackage[] = [
  {
    id: 'premium',
    name: 'LE PETIT CHEF & FRIENDS PREMIUM',
    price: 3500,
    currency: 'EGP',
    items: [
      {
        name: 'Buffalo Tomato Salad',
        description: 'Creamy buffalo cheese | toasted almonds | fresh rocket oil infused with romesco sauce | heritage tomato salad | sweet balsamic glaze | fragrant basil oil'
      },
      {
        name: 'Mushroom Pasta Ravioli',
        description: 'Black truffle-infused mushrooms | fresh egg pasta coloured with arugula | chard | basil | rich cream Alfredo sauce | pan-seared enoki and button mushroom | aged Parmesan shavings'
      },
      {
        name: 'Beef Fillet & Shrimp',
        description: 'Pan-seared beef fillet with Chef\'s roasted potato | seasonal root vegetable purée | charred leeks and glazed asparagus served with grilled jumbo shrimp with tuscan creamy sauce | French fries | Bearnaise sauce'
      },
      {
        name: 'Japanese Mont Blanc',
        description: 'Milk chocolate mousse filled with caramel ganache, biscuit crumb, dark chocolate and medley of mixed nuts, topped with green cream'
      }
    ]
  },
  {
    id: 'classic',
    name: 'LE PETIT CHEF & FRIENDS CLASSIC',
    price: 2500,
    currency: 'EGP',
    items: [
      {
        name: 'Buffalo Tomato Salad',
        description: 'Creamy buffalo cheese | toasted almonds | fresh rocket oil infused with romesco sauce | heritage tomato salad | sweet balsamic glaze and fragrant basil oil'
      },
      {
        name: 'Mushroom Pasta Alfredo',
        description: 'Black truffle-infused mushrooms | fresh egg pasta coloured with arugula | chard | basil | rich cream Alfredo sauce | pan-seared enoki and button mushroom | crisp beef bacon with aged Parmesan shavings'
      },
      {
        name: 'Beef Fillet & Vegetables',
        description: 'Pan-seared beef fillet with Chef\'s roasted potato | seasonal root vegetable purée | charred leeks and glazed asparagus served with pan jus | French fries | Bearnaise sauce'
      },
      {
        name: 'Japanese Mont Blanc',
        description: 'Milk chocolate mousse filled with caramel ganache, biscuit crumb, dark chocolate and medley of mixed nuts topped with green cream'
      }
    ]
  },
  {
    id: 'vegetarian',
    name: 'LE PETIT CHEF & FRIENDS VEGETARIAN',
    price: 2500,
    currency: 'EGP',
    items: [
      {
        name: 'Buffalo Tomato Salad',
        description: 'Creamy buffalo cheese | toasted almonds | fresh rocket oil infused with romesco sauce | heritage tomato salad | sweet balsamic glaze and fragrant basil oil'
      },
      {
        name: 'Mushroom Pasta Alfredo',
        description: 'Black truffle-infused mushrooms | fresh egg pasta coloured with arugula | chard | basil | rich cream Alfredo sauce | pan-seared enoki and button mushrooms and aged Parmesan shavings'
      },
      {
        name: 'Vegetable & Nut Wellington',
        description: 'A flaky vegetable wellington with Chef\'s roasted potato | seasonal root vegetable purée | charred leeks and glazed asparagus served with pan jus | French fries | Bearnaise sauce'
      },
      {
        name: 'Japanese Mont Blanc',
        description: 'Milk chocolate mousse filled with caramel ganache, biscuit crumb, dark chocolate and medley of mixed nuts topped with green cream'
      }
    ]
  },
  {
    id: 'junior',
    name: 'LE PETIT CHEF & FRIENDS JUNIOR (KIDS MENU)',
    price: 1250,
    currency: 'EGP',
    isKidsMenu: true,
    items: [
      {
        name: 'Buffalo Tomato Salad',
        description: 'Kid-friendly portion of our signature salad'
      },
      {
        name: 'Pasta Red Sauce',
        description: 'Classic pasta with rich tomato sauce'
      },
      {
        name: 'Chicken Strips & Fries',
        description: 'Crispy chicken strips served with golden fries'
      },
      {
        name: 'Ice Cream',
        description: 'Selection of Ice Cream'
      }
    ]
  }
];

export const addons: Addon[] = [
  {
    id: 'celebration-cake',
    name: 'Celebration Cake',
    price: 1000,
    currency: 'EGP',
    description: 'Perfect for special occasions and celebrations'
  }
];