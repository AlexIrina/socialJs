import React from 'react'

export default function Menu() {
	return (
		<article className='menu'>
			<h2 className='title'>Our Menu</h2>
			<div className='underline'></div>
			<div className='btn-container'>
				<button className='filter-btn'>All</button>
				<button className='filter-btn'>breakfast</button>
				<button className='filter-btn'>lunch</button>
				<button className='filter-btn'>shakes</button>
			</div>
		</article>
	)
}
