import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data/itemsData'
import reducer from './reducer'

const initialState = {
	loading: false,
	cart: cartItems,
	total: 0,
	amount: 0,
}

// id, title, price, img
const url = ''
const AppContext = React.createContext()
const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState)

	const clearCart = () => {
		dispatch({ type: 'CLEAR_CART' })
	}

	const removeItem = id => {
		dispatch({ type: 'REMOVE_ITEM', payload: id })
	}

	const increaseAmount = id => {
		dispatch({ type: 'INCREASE_AMOUNT', payload: id })
	}

	const decreaseAmount = id => {
		dispatch({ type: 'DECREASE_AMOUNT', payload: id })
	}

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
