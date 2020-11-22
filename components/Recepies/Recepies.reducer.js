// import { ADD_RECEPT } from "../actionTypes";

const initialState = {
    mealTypes: [
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


    ],
    recipes: [
        {
          name: "Omlet",
          id: 1,
          ingredients: [
            {
              id: 1,
              name: "milk",
              quantity: 200,
              measument: "ml",
            },
            {
              id: 2,
              name: "eggs",
              quantity: 3,
              measument: "item",
            },
          ],
          description: "Put eggs and milk together - ready",
          number_of_persons: 2,
          meal_type: {
            id: 1,
            name: "breakfast",
          },
          picture: 'https://previews.123rf.com/images/suchi187/suchi1871409/suchi187140900035/31628935-fries-egg-omlet-on-plate-in-thai-style.jpg'
        },
        {
          name: "Lasagne",
          id: 2,
          ingredients: [
            {
              id: 1,
              name: "milk",
              quantity: 200,
              measument: "ml",
            },
            {
              id: 2,
              name: "eggs",
              quantity: 3,
              measument: "item",
            },
            {
              id: 3,
              name: "flour",
              quantity: 500,
              measument: "gr",
            },
          ],
          description: "Put all ingredients together - ready",
          number_of_persons: 2,
          meal_type: {
            id: 1,
            name: "breakfast",
          },
          picture: 'https://previews.123rf.com/images/suchi187/suchi1871409/suchi187140900035/31628935-fries-egg-omlet-on-plate-in-thai-style.jpg'
        }
      ]
}
    

const recepies = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_RECEPT": {
      return action.payload.recepie;
    }
    default: {
      return state;
    }
  }
};

export default recepies;
