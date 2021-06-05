import { useRef, useEffect } from 'react'
import { useGlobalContext } from '../context'
import leftCocktail from '../images/cocktail_left.png'
import rightCocktail from '../images/cocktail_right.png'

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
			<img src={leftCocktail} alt='left-cocktail' />
			<form className='search-form' onSubmit={handleSubmit}>
				<div className='form-control'>
					<label htmlFor='name' className='form-label'>
						Search any cocktail
					</label>
					<input
						type='text'
						id='name'
						ref={searchValues}
						onChange={searchCocktail}
						placeholder='Bloody Mary...'
					/>
				</div>
			</form>
			<img src={rightCocktail} alt='left-cocktail' />
		</section>
	)
}
