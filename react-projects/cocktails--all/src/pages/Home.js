import CocktailList from '../components/CocktailList'
import SearchForm from '../components/SearchForm'

export default function Home() {
	return (
		<main className='home'>
			<SearchForm />
			<CocktailList />
		</main>
	)
}
