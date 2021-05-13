import React from 'react'

export default function Button({ jobs, setValue, value }) {
	return (
		<div className='btn-container'>
			{jobs.map(({ id, company, index }) => (
				<button
					key={id}
					onClick={() => setValue(index)}
					className={`job-btn ${index === value && 'active-btn'}`}
				>
					{company}
				</button>
			))}
		</div>
	)
}
