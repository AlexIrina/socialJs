import { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'

import Loading from './Loading'
import Header from './components/Header'
import Footer from './components/Footer'

export default function App() {
	const url = 'https://course-api.com/react-tabs-project'
	const [isLoading, setIsLoading] = useState(true)
	const [jobs, setJobs] = useState([])
	const [value, setValue] = useState(0)

	const fetchJobs = async () => {
		try {
			setIsLoading(true)
			const response = await fetch(url)
			const newJobs = await response.json()
			setJobs(newJobs)
			setIsLoading(false)
		} catch (error) {
			setIsLoading(false)
			throw error
		}
	}
	useEffect(() => {
		fetchJobs()
	}, [])

	if (isLoading) return <Loading />
	const { company, duties, dates, title } = jobs[value]

	return (
		<section className='section'>
			<Header />
			<div className='jobs-center'>
				{/* btn container */}
				<div className='btn-container'>
					{jobs.map((item, index) => {
						return (
							<button
								key={item.id}
								onClick={() => setValue(index)}
								className={`job-btn ${index === value && 'active-btn'}`}
							>
								{item.company}
							</button>
						)
					})}
				</div>
				{/* job info */}
				<article className='job-info'>
					<h3>{title}</h3>
					<h4>{company}</h4>
					<p className='job-date'>{dates}</p>
					{duties.map((duty, index) => {
						return (
							<div key={index} className='job-desc'>
								<FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
								<p>{duty}</p>
							</div>
						)
					})}
				</article>
			</div>
			<Footer />
		</section>
	)
}
