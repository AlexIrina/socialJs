import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Loading from '../components/Loading'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='
// after details button is clicked
export default function SingleCocktail() {
	// !get the id of the cocktail
	const { id } = useParams()
	const [cocktail, setCocktail] = useState(null)
	// console.log(cocktail)
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
					// looking for the first item..changing the confusing naming
					const {
						strDrink: name,
						strDrinkThumb: image,
						strAlcoholic: info,
						strCategory: category,
						strGlass: glass,
						strInstructions: instructions,
						strIngredient1: ingredient1,
						strIngredient2: ingredient2,
						strIngredient3: ingredient3,
						strIngredient4: ingredient4,
						strIngredient5: ingredient5,
					} = drinks[0]
					// storing cocktail ingredients with updated properties in this array
					const ingredients = [
						ingredient1,
						ingredient2,
						ingredient3,
						ingredient4,
						ingredient5,
					]
					// cocktail with all the properties that i want to display
					const newCocktail = {
						name,
						image,
						info,
						category,
						instructions,
						glass,
						// array
						ingredients,
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
		return <h2 className='section-title'>No cocktail to display</h2>
	}

	// get the properties that im going to be displaying
	const { name, image, info, category, instructions, glass, ingredients } =
		cocktail
	return (
		<section className='section cocktail-section'>
			<Link to={'/'} className='btn btn-primary'>
				Back Home
			</Link>
			<h2 className='section-title'>{name}</h2>
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
							<span className='drink-data'>info:</span>
							{info}
						</p>
						<p>
							<span className='drink-data'>glass type:</span>
							{glass}
						</p>
						<p>
							<span className='drink-data'>ingredients:</span>
							{/* some of the ingredients are null and i don't want to display them */}
							{ingredients.map((item, index) => {
								return item ? <span key={index}>{item}</span> : null
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
