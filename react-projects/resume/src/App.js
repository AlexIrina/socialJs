import { useState, useEffect } from 'react'
import Loading from './Loading'
import Header from './components/Header'
import JobsInfo from './components/JobsInfo'
import Button from './components/Button'
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
		<section>
			<Header />

			<div className='jobs-center'>
				<Button jobs={jobs} value={value} setValue={setValue} />

				<JobsInfo
					company={company}
					duties={duties}
					dates={dates}
					title={title}
				/>
			</div>
			<Footer />
		</section>
	)
}
