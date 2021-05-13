import { useState, useEffect } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { FaQuoteRight } from 'react-icons/fa'
import peopleData from './data/peopleData'

export default function App() {
	const [people, setPeople] = useState(peopleData)
	const [index, setIndex] = useState(0)

	return (
		<section className='section'>
			{/*  */}
			<div className='title'>
				<h2>
					<span>/</span>reviews
				</h2>
			</div>
			{/*  */}
			<div className='section-center'>
				{people.map(({ id, image, name, title, quote, personIndex }) => (
					<article key={id}>
						<img src={image} alt={name} className='person-img' />
						<h4 className='title'>{name}</h4>
						<p className='title'>{title}</p>
						<p className='text'>{quote}</p>
						<FaQuoteRight className='icon' />
					</article>
				))}
				{/*  */}
				<button className='prev'>
					<FiChevronLeft />
				</button>
				<button className='next'>
					<FiChevronRight />
				</button>
			</div>
		</section>
	)
}
/*
 	id: 
  image:
  name: 
  title: 
  quote:
  */
