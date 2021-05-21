import React, { useState, useRef, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { links, social } from '../data/linksData'
import logo from '../logo.svg'
export default function Navbar() {
	// toggles button
	const [showLinks, setShowLinks] = useState(false)
	// refs
	const linksContainer_Ref = useRef(null)
	const links_Ref = useRef(null)
	// every time the button is clicked run useEffect
	useEffect(() => {
		/* checks the height for the links..to add extra/less space to the 
		linksContainer div depending on how many links there are
		*/
		const linksHeight = links_Ref.current.getBoundingClientRect().height
		if (showLinks) {
			linksContainer_Ref.current.style.height = `${linksHeight}px`
		} else {
			linksContainer_Ref.current.style.height = `0px`
		}
	}, [showLinks])

	return (
		<nav>
			<div className='nav-center'>
				<div className='nav-header'>
					<img src={logo} alt='logo' />
					<button
						className='nav-toggle'
						// ! gets the opposite value for toggle to work
						onClick={() => setShowLinks(!showLinks)}
					>
						<FaBars />
					</button>
				</div>
				<div className='links-container' ref={linksContainer_Ref}>
					<ul className='links' ref={links_Ref}>
						{links.map(({ id, url, text }) => (
							<li key={id}>
								<a href={url}>{text}</a>
							</li>
						))}
					</ul>
				</div>

				<ul className='social-icons'>
					{social.map(({ id, url, icon }) => (
						<li key={id}>
							<a href={url}>{icon}</a>
						</li>
					))}
				</ul>
			</div>
		</nav>
	)
}
