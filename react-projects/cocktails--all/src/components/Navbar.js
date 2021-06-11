import { Link } from 'react-router-dom'
import logo from '../images/cocktail_logo.png'
import { Howl, Howler } from 'howler'
import clickSound from '../welcome.wav'
import clickSound2 from '../on2.wav'
import ThemeToggle from './ToggleBtn'

export default function Navbar() {
	const sound = new Howl({
		src: [clickSound],
	})
	const sound2 = new Howl({
		src: [clickSound2],
	})
	// Change global volume.
	Howler.volume(0.1)
	return (
		<nav className='navbar'>
			<div className='nav-center'>
				<Link to='/' onClick={() => sound2.play()}>
					<img src={logo} alt='logo' className='logo' />
				</Link>

				<ul className='nav-links'>
					<li className='home'>
						<Link to='/' onClick={() => sound2.play()}>
							Home
						</Link>
					</li>
					<li>
						<Link to='/about' onClick={() => sound.play()}>
							About
						</Link>
					</li>
					<li>
						<ThemeToggle />
					</li>
				</ul>
			</div>
		</nav>
	)
}
