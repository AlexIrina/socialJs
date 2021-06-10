import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

export default function CocktailList() {
	const { cocktails, loading } = useGlobalContext()

	if (loading) {
		return <Loading />
	}

	//! if search term doesn't match any of the cocktails
	if (cocktails.length < 1) {
		return (
			<h2 className='section-title alert'>
				no cocktails matched your search criteria
			</h2>
		)
	} else {
		return (
			<section className='section'>
				<h2 className='section-title'>Cocktails</h2>
				<div className='title-underline'></div>
				<div className='cocktails-center'>
					{cocktails.map(drink => {
						return <Cocktail key={drink.id} {...drink} />
					})}
				</div>
			</section>
		)
	}
}
// 	category: "Ordinary Drink"
// glass: "Cocktail glass"
// id: "17187"
// image: "https://www.thecocktaildb.com/images/media/drink/52weey1606772672.jpg"
// info: "Alcoholic"
// name: "Derby"
