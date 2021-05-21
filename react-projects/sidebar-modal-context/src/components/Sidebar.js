import logo from '../logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from '../data/linksData'
//!todo map over social, links and show the data
export default function Sidebar() {
	return (
		// add the .show-sidebar to see the sidebar
		<aside className={`sidebar `}>
			<div className='sidebar-header'>
				<img src={logo} className='logo' alt='react logo' />
				<button className='close-btn'>
					<FaTimes />
				</button>
			</div>
			<ul className='links'>
				{links.map(({ id, url, text, icon }) => (
					<li key={id}>
						<a href={url}>
							{icon}
							{text}
						</a>
					</li>
				))}
			</ul>
			<ul className='social-icons'>
				{social.map(({ id, url, icon }) => (
					<li key={id}>
						<a href={url}>{icon}</a>
					</li>
				))}
			</ul>
		</aside>
	)
}
/*
links
		id: 1,
		url: '/',
		text: 'home',
		icon: <FaHome />,
*/

/*
social 
    {
      id: 1,
      url: 'https://www.twitter.com',
      icon: <FaFacebook />,
    },
*/
