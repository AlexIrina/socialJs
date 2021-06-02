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
	const fetchDrinks = async () => {
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
	}

	useEffect(() => {
		fetchDrinks()
	}, [searchTerm])

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

// ​​data
// idDrink: "15997"
// strAlcoholic: "Optional alcohol"
// strCategory: "Ordinary Drink"
// strDrink: "GG"
// strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/vyxwut1468875960.jpg"
// strGlass: "Collins Glass"
// strIngredient1: "Galliano"
// strIngredient2: "Ginger ale"
// strIngredient3: "Ice"
// strInstructions: "Pour the Galliano liqueur over ice. Fill the remainder of the glass with ginger ale and thats all there is to it. You now have a your very own GG."
// strInstructionsDE: "Den Galliano-Likör über Eis gießen. Füllen Sie den Rest des Glases mit Ginger Ale und das ist alles, was dazu gehört. Du hast jetzt ein eigenes GG."
// strInstructionsIT: "Versare il liquore Galliano su ghiaccio.\r\nRiempi il resto del bicchiere con ginger ale e questo è tutto.\r\nOra hai il tuo GG personale."
// ​​strMeasure1: "2 1/2 shots "
// ​​
