import React, { useState } from 'react'
import reviewsData from '../data/reviewsData'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

export default function Review() {
	const [index, setIndex] = useState(0)
	// accessing the person in the array by its index
	const { name, job, image, text } = reviewsData[index]

	const viewPrevPerson = () => {
		setIndex(prevIndex => prevIndex + 1)
	}
	const viewNextPerson = () => {
		setIndex(prevIndex => prevIndex - 1)
	}
	const viewRandomPerson = () => {
		const random = Math.floor(Math.random() * reviewsData.length)
		setIndex(random)
	}

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
				<button className='prev-btn' onClick={viewPrevPerson}>
					<FaChevronLeft />
				</button>
				<button className='next-btn' onClick={viewNextPerson}>
					<FaChevronRight />
				</button>
			</div>
			<button className='random-btn' onClick={viewRandomPerson}>
				Surprise me
			</button>
		</article>
	)
}
