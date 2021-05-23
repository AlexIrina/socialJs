import { useState, useRef, useEffect } from 'react'
import linksData from '../data/sublinksData'
import { useGlobalContext } from '../context/appContext'
export default function Submenu() {
	// const { links, setLinks } = useState(linksData)
	const { isSubmenuOpen, location } = useGlobalContext()

	// to access the submenu container
	const refContainer = useRef(null)

	// every time location changes(change is users hovering over link buttons) run useEffect
	useEffect(() => {
		// get the node
		const submenu = refContainer.current
		const { centerOfBtn, bottomOfBtn } = location
		// aligning the container to be centered to the bottom of the node
		submenu.style.left = `${centerOfBtn}px`
		submenu.style.top = `${bottomOfBtn}px`
	}, [location])

	return (
		<aside
			className={isSubmenuOpen ? 'submenu show' : 'submenu'}
			ref={refContainer}
		>
			<div className='submenu-center'>
				<div className='submenu-center'>
					<h4></h4>
					<a href=''></a>
				</div>
			</div>
		</aside>
	)
}

// change the width of the submenu depending on how many links are in that submenu
// display submenu when user hover over the buttons
// close submenu when users mouse leaves the link
// display only the sublinks that belong to that page
// change the location of the submenu
// get position of the button to place the submenu right under the button
