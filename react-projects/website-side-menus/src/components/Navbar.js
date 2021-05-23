import logo from '../images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from '../context/appContext'

export default function Navbar() {
	const { openSidebar, closeSidebar, openSubmenu, closeSubmenu } =
		useGlobalContext()

	return (
		<nav className='nav'>
			<div className='nav-center'>
				<div className='nav-header'>
					<img src={logo} alt='stripe' className='nav-logo' />
					<button className='btn toggle-btn' onClick={openSidebar}>
						<FaBars />
					</button>
				</div>
				<ul className='nav-links'>
					<li>
						<button className='link-btn'>products</button>
					</li>
					<li>
						<button className='link-btn'>developers</button>
					</li>
					<li>
						<button className='link-btn'>company</button>
					</li>
				</ul>
				<button className='btn signIn-btn'>Sign in</button>
			</div>
		</nav>
	)
}
