import React, { useContext, useReducer, useEffect } from 'react'
import cartItems from './data/itemsData'
import reducer from './reducer'

// id, title, price, img
const url = 'https://course-api.com/react-useReducer-cart-project'

const initialState = {
	loading: false,
	cart: cartItems,
	total: 0,
	amount: 0,
}

const AppContext = React.createContext()
const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState)
	// clear cart
	const clearCart = () => {
		dispatch({ type: 'CLEAR_CART' })
	}
	// remove
	const removeItem = id => {
		dispatch({ type: 'REMOVE_ITEM', payload: id })
	}
	//  increase
	const increaseAmount = id => {
		dispatch({ type: 'INCREASE_AMOUNT', payload: id })
	}
	//  decrease
	const decreaseAmount = id => {
		dispatch({ type: 'DECREASE_AMOUNT', payload: id })
	}
	// fetch cart items from API
	const fetchData = async () => {
		dispatch({ type: 'LOADING' })
		try {
			const response = await fetch(url)
			const cart = await response.json()
			dispatch({ type: 'DISPLAY_ITEMS', payload: cart })
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		// fetch data from the api
		fetchData()
	}, [])

	useEffect(() => {
		// console.log('value changed in the cart')
		dispatch({ type: 'GET_TOTALS' })
	}, [state.cart])

	return (
		<AppContext.Provider
			value={{
				// cartItems
				...state,
				clearCart,
				removeItem,
				increaseAmount,
				decreaseAmount,
			}}
		>
			{children}
		</AppContext.Provider>
	)
}

export const useGlobalContext = () => {
	return useContext(AppContext)
}
export { AppContext, AppProvider }
