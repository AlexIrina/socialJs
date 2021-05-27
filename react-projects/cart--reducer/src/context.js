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
	const [state, dispath] = useReducer(reducer, initialState)

	return (
		<AppContext.Provider
			value={{
				// cartItems
				...state,
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
