import React, { useState } from 'react'
import reviewsData from '../data/reviewsData'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

export default function Review() {
	const [index, setIndex] = useState(0)
	// accessing the person in the array by its index
	const { name, job, image, text } = reviewsData[index]

	const viewPrevPerson = () => {}
	const viewNextPerson = () => {}
	const viewRandomPerson = () => {}

	return (
		<article className='review'>
			<div className='img-container'>
				<img className='person-img' src={image} alt={name} />
				<span className='quote-icon'>
					<FaQuoteRight />
				</span>
			</div>
			<h4 className='author'>{name}</h4>
			<p className='job'>{job}</p>
			<p className='info'>{text}</p>
			<div className='button-container'>
				<button className='prev-btn'>
					<FaChevronLeft />
				</button>
				<button className='next-btn'>
					<FaChevronRight />
				</button>
			</div>
			<button className='random-btn'>Surprise me</button>
		</article>
	)
}
