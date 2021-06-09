import { Link } from 'react-router-dom'

export default function Error() {
	return (
		<section className='warning-page section'>
			<div className='warning-container'>
				<h1>Ops! It's a dead end</h1>
				<Link to='/' className='btn btn-primary'>
					Back home
				</Link>
			</div>
		</section>
	)
}
