import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

export default function CocktailList() {
	const { cocktails, loading } = useGlobalContext()
	console.log(cocktails)
	if (loading) {
		return <Loading />
	}
	//! if search term doesn't match any of the cocktails
	if (cocktails.length < 1) {
		return (
			<h2 className='section-title'>
				no cocktails matched your search criteria
			</h2>
		)
	}
	return (
		<div>
			<Cocktail {...cocktails} />
		</div>
	)
}
