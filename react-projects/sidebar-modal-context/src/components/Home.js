import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from '../context/appContext'

export default function Home() {
	// pass isSidebarOpen and isModalOpen to Sidebar and Modal for the below buttons to work
	const { openModal, openSidebar } = useGlobalContext()
	return (
		<main>
			<button className='sidebar-toggle' onClick={openSidebar}>
				<FaBars />
			</button>
			<button className='btn' onClick={openModal}>
				Show Modal
			</button>
		</main>
	)
}
