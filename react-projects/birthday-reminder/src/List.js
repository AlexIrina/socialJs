import React from 'react'

export default function List({ people }) {
	return (
		<>
			{people.map(({ image, name, age, id }) => (
				<article key={id} className='person'>
					<img src={image} alt={id} />
					<div>
						<h4>{name}</h4>
						<p>{age} years</p>
					</div>
				</article>
			))}
		</>
	)
}
