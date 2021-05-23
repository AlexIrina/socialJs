import logo from '../images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from '../context/appContext'

export default function Navbar() {
	const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext()
	const displaySubmenu = e => {
		//get text of the link
		const page = e.target.textContent
		// get location of the link
		const menuBtn = e.target.getBoundingClientRect()
		// console.log(menuBtn)
		// get the center and botton of the links button ...---> left + right / 2 = middle
		const centerOfBtn = (menuBtn.left + menuBtn.right) / 2
		// bottom of the button plus lifting submenu by + 3 px
		const bottomOfBtn = menuBtn.bottom - 3
		// pass page so i know which links to get
		openSubmenu(page, { centerOfBtn, bottomOfBtn })
	}

	const hideSubmenu = e => {
		if (!e.target.classList.contains('link-btn')) {
			closeSubmenu()
		}
	}

	return (
		<nav className='nav' onMouseOver={hideSubmenu}>
			<div className='nav-center'>
				<div className='nav-header'>
					<img src={logo} alt='stripe' className='nav-logo' />
					<button className='btn toggle-btn' onClick={openSidebar}>
						<FaBars />
					</button>
				</div>
				<ul className='nav-links'>
					<li>
						<button className='link-btn' onMouseOver={displaySubmenu}>
							products
						</button>
					</li>
					<li>
						<button className='link-btn' onMouseOver={displaySubmenu}>
							developers
						</button>
					</li>
					<li>
						<button className='link-btn' onMouseOver={displaySubmenu}>
							company
						</button>
					</li>
				</ul>
				<button className='btn signIn-btn'>Sign in</button>
			</div>
		</nav>
	)
}
