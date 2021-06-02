import { Link } from 'react-router-dom'

export default function Error() {
	return (
		<div>
			<h2>error page</h2>
			<Link to='/' className='btn'>
				Back to home
			</Link>
		</div>
	)
}
