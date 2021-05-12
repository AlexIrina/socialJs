import { useState } from 'react'
import data from './data/qaData'
import SingleQuestion from './components/Question'

export default function App() {
	const [questions, setQuestions] = useState(data)
	return (
		<main>
			<div className='container'>
				<h3>Frequently asked questions about login</h3>
				<section className='info'>
					{questions.map(question => (
						<SingleQuestion
							key={question.id}
							{...question}
							updateQuestions={setQuestions}
						/>
					))}
				</section>
			</div>
		</main>
	)
}
