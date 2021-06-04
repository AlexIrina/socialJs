import React, { useState, useContext, useEffect, useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
	const [loading, setLoading] = useState(true)
	// !for the form. to get different cocktails..searchForm component
	const [searchTerm, setSearchTerm] = useState('a')
	// !cocktailList component
	const [cocktails, setCocktails] = useState([])
	// fetch data
	const fetchDrinks = useCallback(async () => {
		// every time i type something in the input loading will show
		setLoading(true)
		try {
			const response = await fetch(`${url}${searchTerm}`)
			const data = await response.json()
			const { drinks } = data
			if (drinks) {
				// map over the cocktails array
				const newCocktails = drinks.map(item => {
					const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
						item
					return {
						// rename properties
						id: idDrink,
						name: strDrink,
						image: strDrinkThumb,
						info: strAlcoholic,
						glass: strGlass,
					}
				})
				setCocktails(newCocktails)
			} else {
				// if no drinks match the search
				setCocktails([])
			}
			setLoading(false)
		} catch (error) {
			console.log(error)
			setLoading(false)
		}
	}, [searchTerm])

	useEffect(() => {
		fetchDrinks()
	}, [searchTerm, fetchDrinks])

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
