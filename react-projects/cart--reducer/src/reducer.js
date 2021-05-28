// I deal with dispatch actions here
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
			})
			.filter(cartItem => cartItem.amount !== 0)
		return {
			...state,
			cart: tempCart,
		}
	}
	// get the totals for cart total amount and cart price  amount
	if (action.type === 'GET_TOTALS') {
		let { total, amount } = state.cart.reduce(
			(cartTotal, cartItem) => {
				const { price, amount } = cartItem
				const itemTotal = price * amount
				//! total amount of items in the cart (NAV)
				cartTotal.amount += amount
				//! total cost amount of all the items(Footer)
				cartTotal.total += itemTotal

				return cartTotal
			},
			{
				total: 0,
				amount: 0,
			}
		)
		total = parseFloat(total.toFixed(2))
		return { ...state, total, amount }
	}

	// show loading spinner
	if (action.type === 'LOADING') {
		return {
			...state,
			loading: true,
		}
	}

	// display the items from the API
	if (action.type === 'DISPLAY_ITEMS') {
		return {
			...state,
			// payload: cart
			cart: action.payload,
			loading: false,
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
