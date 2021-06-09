import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Loading from '../components/Loading'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='
// after details button is clicked
export default function SingleCocktail() {
	// !get the id of the cocktail
	const { id } = useParams()
	const [cocktail, setCocktail] = useState(null)
	console.log(cocktail)
	const [loading, setLoading] = useState(false)
	//TODO: which cocktail i actually clicked on. that data will come back
	useEffect(() => {
		setLoading(true)
		async function getCocktail() {
			try {
				const response = await fetch(`${url}${id}`)
				const data = await response.json()
				const { drinks } = data

				if (drinks) {
					// console.log(drinks)
					// changing the confusing naming in the first item
					const {
						strDrink: name,
						strDrinkThumb: image,
						strAlcoholic: info,
						strCategory: category,
						strGlass: glass,
						// instructions
						strInstructions: instructions,
						strIngredient1: ingredient1,
						strIngredient2: ingredient2,
						strIngredient3: ingredient3,
						strIngredient4: ingredient4,
						strIngredient5: ingredient5,
						// measurements
						strMeasure1: measurement1,
						strMeasure2: measurement2,
						strMeasure3: measurement3,
						strMeasure4: measurement4,
						strMeasure5: measurement5,
					} = drinks[0]

					// storing cocktail ingredients with updated properties in this array
					const ingredients = [
						ingredient1,
						ingredient2,
						ingredient3,
						ingredient4,
						ingredient5,
					]
					// measurements
					const measurements = [
						measurement1,
						measurement2,
						measurement3,
						measurement4,
						measurement5,
					]

					// cocktail with all the properties that i want to display
					const newCocktail = {
						name,
						image,
						info,
						category,
						instructions,
						glass,
						// arrays
						ingredients,
						measurements,
					}
					setCocktail(newCocktail)
				} else {
					setCocktail(null)
				}
				setLoading(false)
			} catch (error) {
				console.log(error)
				setLoading(false)
			}
		}
		getCocktail()
	}, [id])

	if (loading) {
		return <Loading />
	}
	// if cocktail is null or does not exist
	if (!cocktail) {
		return <h2 className='section-title alert'>No cocktail to display</h2>
	}

	// get the properties that im going to be displaying
	const {
		name,
		image,
		info,
		category,
		instructions,
		glass,
		ingredients,
		measurements,
	} = cocktail

	return (
		<section className='section cocktail-section'>
			<Link to={'/'} className='btn btn-primary'>
				Back Home
			</Link>
			<h2 className='section-title'>{name}</h2>
			<div className='title-underline'></div>
			<div className='section-center'>
				<div className='drink'>
					<img src={image} alt={name} />
					<div className='drink-info'>
						<p>
							<span className='drink-data'>name:</span>
							{name}
						</p>
						<p>
							<span className='drink-data'>category:</span>
							{category}
						</p>
						<p>
							<span className={`drink-data`}>info:</span>
							{info}
						</p>
						<p>
							<span className='drink-data'>glass type:</span>
							{glass}
						</p>
						<p>
							<span className='drink-data'>ingredients:</span>
							{/* some of the ingredients are null and i don't want to display them */}
							{ingredients.map((ingredient, index) => {
								console.log(ingredient)
								if (ingredient) {
									return <span key={index}>{ingredient}</span>
								} else {
									return null
								}
							})}
						</p>
						<p>
							<span className='drink-data'>measurements:</span>
							{measurements.map((measurement, index) => {
								if (measurements) {
									const drinkMeasurements = ingredients.map(
										item => `${measurement} of ${item}, `
									)
									return <span key={index}>{drinkMeasurements}</span>
								} else {
									return null
								}
							})}
						</p>
						<p>
							<span className='drink-data'>instructions:</span>
							{instructions}
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}
