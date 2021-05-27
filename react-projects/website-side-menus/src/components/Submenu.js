import { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from '../context/appContext'

export default function Submenu() {
	const {
		isSubmenuOpen,
		location,
		page: { page, links },
	} = useGlobalContext()
	// change the width of the container based on how many links there are inside
	const [columns, setColumns] = useState('col-2')

	// to access the submenu container
	const refContainer = useRef(null)
	// every time location changes(change is users hovering over link buttons) run useEffect
	useEffect(() => {
		setColumns('col-2')
		// get the node
		const submenu = refContainer.current
		const { centerOfBtn, bottomOfBtn } = location
		// aligning the container to be centered to the bottom of the node
		submenu.style.left = `${centerOfBtn}px`
		submenu.style.top = `${bottomOfBtn}px`
		// change the width of the container based on how many links there are inside
		if (links.length === 3) {
			setColumns('col-3')
		}
		if (links.length > 3) {
			setColumns('col-4')
		}
	}, [location, links])

	return (
		<aside
			className={isSubmenuOpen ? 'submenu show' : 'submenu'}
			ref={refContainer}
		>
			<h4>{page}</h4>
			<div className={`submenu-center ${columns}`}>
				{links.map(({ label, icon, url }, index) => {
					return (
						<a key={index} href={url}>
							{icon}
							{label}
						</a>
					)
				})}
			</div>
		</aside>
	)
}

