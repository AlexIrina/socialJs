import { useRef, useEffect } from 'react'
import { useGlobalContext } from '../context'

export default function SearchForm() {
	const { setSearchTerm } = useGlobalContext()
	const searchValues = useRef('')

	// !every time the user types something in the search. setSearchTerm will fire
	const searchCocktail = () => {
		setSearchTerm(searchValues.current.value)
	}
	const handleSubmit = e => {
		e.preventDefault()
	}

	//! set focus on the input when the app renders
	useEffect(() => {
		searchValues.current.focus()
	}, [])
	return (
		<section className='section search'>
			<form className='search-form' onSubmit={handleSubmit}>
				<div className='form-control'>
					<label htmlFor='name'>Search your favorite cocktail</label>
					<input
						type='text'
						id='name'
						ref={searchValues}
						onChange={searchCocktail}
					/>
				</div>
			</form>
		</section>
	)
}
