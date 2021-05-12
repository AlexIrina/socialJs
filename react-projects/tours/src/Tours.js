import React from 'react'
import Tour from './Tour'
export default function Tours({ tours, removeTour }) {
	return (
		<section>
			<div className='title'>
				<h2>our tours</h2>
				<div className='underline'></div>
			</div>
			<div>
				{tours.map(tour => (
					<Tour key={tours.id} {...tour} removeTour={removeTour} />
				))}
			</div>
		</section>
	)
}
