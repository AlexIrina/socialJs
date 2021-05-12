import React, { useState } from 'react'
import reviewsData from '../data/reviewsData'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

export default function Review() {
	const [index, setIndex] = useState(0)
	// accessing the person in the array by its index
	const { name, job, image, text } = reviewsData[index]

	// getting and error when index is greater than the length of the array ...3
	const checkNumber = number => {
		// if number is greater than the last number in the array return the first item in the array
		if (number > reviewsData.length - 1) return 0
		// if number is less than 0 then return the last item in the array
		if (number < 0) return reviewsData.length - 1
		return number
	}

	const viewPrevPerson = () => {
		setIndex(prevIndex => checkNumber(prevIndex - 1))
	}
	const viewNextPerson = () => {
		setIndex(prevIndex => checkNumber(prevIndex - 1))
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
