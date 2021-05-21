import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from '../context/appContext'

export default function Home() {
	const appData = useGlobalContext()
	return (
		<main>
			<button className='sidebar-toggle'>
				<FaBars />
			</button>
			<button className='btn'>Show Modal</button>
		</main>
	)
}
