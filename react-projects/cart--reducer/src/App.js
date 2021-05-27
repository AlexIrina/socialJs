import { useGlobalContext } from './context'
import Navbar from './components/Navbar'
import CartContainer from './components/CartContainer'
// items

export default function App() {
	// if (loading) {
	//   return (
	//     <div className='loading'>
	//       <h1>Loading...</h1>
	//     </div>
	//   )
	// }
	return (
		<main>
			<Navbar />
			<CartContainer />
		</main>
	)
}
