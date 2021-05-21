import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from '../data/linksData'
import logo from '../logo.svg'
export default function Navbar() {
	// toggles links container
	const [showLinks, setShowLinks] = useState(false)

	// slows down the way links container toggles open
	useEffect(() => {
		setTimeout(() => {
			setShowLinks()
		}, 3000)
	}, [])

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
				{/* {showLinks && ( */}
				<div className='links-container show-container'>
					<ul className='links'>
						{links.map(({ id, url, text }) => (
							<li key={id}>
								<a href={url}>{text}</a>
							</li>
						))}
					</ul>
				</div>
				{/* )} */}

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
