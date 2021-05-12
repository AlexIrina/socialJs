import { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import Loading from './Loading'

export default function App() {
	const url = 'https://course-api.com/react-tabs-project'
	const [isLoading, setIsLoading] = useState(false)
	const [jobs, setJobs] = useState([])
	// console.log(jobs)

	const fetchData = async () => {
		try {
			setIsLoading(true)
			const response = await fetch(url)
			const jobs = await response.json()
			setIsLoading(false)
			setJobs(jobs)
		} catch (error) {
			setIsLoading(false)
			console.log(error)
		}
	}
	useEffect(() => {
		fetchData()
	}, [])

	if (isLoading) {
		return <Loading />
	}

	return (
		<div>
			{jobs.map(({ id, order, title, dates, duties, company }) => (
				<main>
					<div className='container' key={id}>
						<h1>{title}</h1>
					</div>
				</main>
			))}
		</div>
	)
}
/**
 * id, order, title, dates, duties, company
 */
