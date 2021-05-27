import { useGlobalContext } from './context'
import Navbar from './components/Navbar'
import CartContainer from './components/CartContainer'
// items

export default function App() {
	const { loading } = useGlobalContext()
	if (loading) {
		return <div className='loading'></div>
	}
	return (
		<main>
			<Navbar />
			<CartContainer />
		</main>
	)
}
