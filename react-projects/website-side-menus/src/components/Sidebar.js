import { FaTimes } from 'react-icons/fa'
import sublinks from '../data/sublinksData'
import { useGlobalContext } from '../context/appContext'

export default function Sidebar() {
	// access the links in sublinksData

	const { isSidebarOpen, closeSidebar } = useGlobalContext()
	return (
		<aside
			className={isSidebarOpen ? 'sidebar-wrapper show' : 'sidebar-wrapper'}
		>
			<div className='sidebar'>
				<button className='close-btn' onClick={closeSidebar}>
					<FaTimes />
				</button>

				<div className='sidebar-links'>
					{sublinks.map((item, index) => {
						const { page, links } = item
						return (
							<article key={index}>
								<h4>{page}</h4>
								{/* links is an array */}
								<div className='sidebar-sublinks'>
									{links.map((link, index) => {
										const { label, icon, url } = link
										return (
											<a key={index} href={url}>
												{icon}
												{label}
											</a>
										)
									})}
								</div>
							</article>
						)
					})}
				</div>
			</div>
		</aside>
	)
}

// 	/* need to double iterate data because the data is nested  */

// {
// 	/* item is the object so i can destructure links and page right away */
// }
