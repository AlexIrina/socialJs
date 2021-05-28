const reducer = (state, action) => {
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

	// increase amount
	if (action.type === 'INCREASE_AMOUNT') {
		let tempCart = state.cart.map(cartItem => {
			if (cartItem.id === action.payload) {
				return {
					...cartItem,
					amount: cartItem.amount + 1,
				}
			}
			return cartItem
		})

		return {
			...state,
			cart: tempCart,
		}
	}
	// decrease amount
	if (action.type === 'DECREASE_AMOUNT') {
		const tempCart = state.cart
			.map(cartItem => {
				if (cartItem.id === action.payload) {
					return {
						...cartItem,
						amount: cartItem.amount - 1,
					}
				}
				return cartItem
				// if cartItem.amount <= 0 then remove item from the list
			})
			// todo: if less than one then remove the item from the cart
			.filter(cartItem => cartItem.amount !== 0)
		return {
			...state,
			cart: tempCart,
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

// id: 2,
// title: 'google pixel ',
// price: 499.99,
// img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1583371867/phone-1_gvesln.png',
// amount: 1,
