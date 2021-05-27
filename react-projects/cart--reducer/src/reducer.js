const reducer = (state, action) => {
	const newItems = [...state.cart, action.payload]
	if (action.type === 'CLEAR_CART') {
		return {
			...state,
			cart: [],
		}
	}

	if (action.type === 'REMOVE_ITEM') {
		const newItems = state.cart.filter(
			cartItem => cartItem.id !== action.payload
		)
		return {
			...state,
			cart: newItems,
		}
	}
	return state
}
export default reducer
// const initialState = {
// 	loading: false,
// 	cart: cartItems,
// 	total: 0,
// 	amount: 0,
// }
