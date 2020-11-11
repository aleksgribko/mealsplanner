export const recepies = [
  {
    id: 1,
    name: "lasagne",
    ingredients: [
      { id: 3, quantity: 200 },
      { id: 4, quantity: 1 },
      { id: 5, quantity: 1 },
    ],
    category_id: 1,
    image: null,
  },
  {
    id: 2,
    name: "pancakes",
    ingredients: [
      { id: 3, quantity: 200 },
      { id: 5, quantity: 1 },
    ],
    category_id: 2,
    image: null,
  },
];

export const time = [
  {
    id: 1,
    name: "Breakfast",
  },
  {
    id: 2,
    name: "Lunch",
  },
  {
    id: 3,
    name: "Dinner",
  },
];

export const categories = [
  {
    id: 1,
    name: "Breakfast",
    isExpanded: false,
  },
  {
    id: 2,
    name: "Lunch",
    isExpanded: false,
  },
  {
    id: 3,
    name: "Dinner",
    isExpanded: false,
  },
];

export const ingredients = [
  {
    id: 1,
    name: "pasta",
  },
  {
    id: 2,
    name: "eggs",
  },
  { id: 3, name: "red meat" },
  {
    id: 4,
    name: "pasta lasagnia",
  },
  {
    id: 5,
    name: "milk",
  },
  {
    id: 6,
    name: "flour",
  },
];

export const weekPlan = {
  m: {},
  t: {},
  w: {},
  th: {},
  f: {},
  sa: {},
  su: {},
};

export const shoppingList = [
  {
    ingredient: null,
    bought: false,
    quantity: null,
  },
];
