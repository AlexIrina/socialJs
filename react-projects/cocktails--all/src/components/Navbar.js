import { Link } from 'react-router-dom'
import logo from '../images/cocktail_logo.png'
import ToggleBtn from './ToggleBtn'

export default function Navbar() {
	return (
		<nav className='navbar'>
			<div className='nav-center'>
				<Link to='/'>
					<img src={logo} alt='logo' className='logo' />
				</Link>

				<ul className='nav-links'>
					<li className='home'>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/about'>About</Link>
					</li>
					<li>
						<ToggleBtn />
					</li>
				</ul>
			</div>
		</nav>
	)
}
