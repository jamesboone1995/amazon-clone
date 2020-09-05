export const initialState = {
	basket: [],
	user: null,
};

export const getBasketTotal = (basket) =>
	basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
	console.log(action);
	switch (action.type) {
		case "SET_USER":
			return {
				...state,
				user: action.user
			}
		case "ADD_TO_BASKET":
			// logic for adding item to basket
			return {
				...state,
				basket: [...state.basket, action.item],
			};
		case "REMOVE_FROM_BASKET":
			// logic for removing item from basket
			// clones basket
			let newBasket = [...state.basket];
			// finds the index of the item based on the id
			const index = state.basket.findIndex(
				(basketItem) => basketItem.id === action.id
			);
			// if found, cut out that item
			if (index >= 0) {
				// if item is in the basket, remove it
				newBasket.splice(index, 1);
				// this runs if the id isnt found, which shouldnt ever happen
			} else {
				console.warn(
					// eslint-disable-next-line 
					"cant remove product (id: ${action.id}) as its not in the basket"
				);
			}
			// this returns the state, but changes the baskets state to the clones value
			return { ...state, basket: newBasket };
		default:
			return state;
	}
};

export default reducer;
