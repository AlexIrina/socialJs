import React, { useState, useContext, useEffect, useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
	const [loading, setLoading] = useState(true)
	// !for the form.to get different cocktails..searchForm component
	const [searchTerm, setSearchTerm] = useState('a')
	// !cocktailList component
	const [cocktails, setCocktails] = useState([])

	return (
		<AppContext.Provider
			value={{
				loading,
				setSearchTerm,
				cocktails,
			}}
		>
			{children}
		</AppContext.Provider>
	)
}
// make sure use
export const useGlobalContext = () => {
	return useContext(AppContext)
}

export { AppContext, AppProvider }
