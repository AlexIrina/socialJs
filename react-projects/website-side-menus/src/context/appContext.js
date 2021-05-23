import React, { useState, useContext } from 'react'
import sublinks from '../data/sublinksData'

const AppContext = React.createContext()

export const AppContextProvider = ({ children }) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false)
	const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)
	const [page, setPage] = useState({ page: '', links: [] })

	const [location, setLocation] = useState({})

	const openSidebar = () => {
		setIsSidebarOpen(true)
	}
	const closeSidebar = () => {
		setIsSidebarOpen(false)
	}
	// text(developers,company, products) of the link and coordinates are center and bottom position of the link btn
	const openSubmenu = (text, coordinates) => {
		// find page that matches the page coming from the button
		const page = sublinks.find(link => link.page === text)
		// store the hovered data in state
		setPage(page)
		setLocation(coordinates)
		setIsSubmenuOpen(true)
	}
	const closeSubmenu = () => {
		setIsSubmenuOpen(false)
	}

	return (
		<AppContext.Provider
			value={{
				isSidebarOpen,
				isSubmenuOpen,
				openSidebar,
				closeSidebar,
				openSubmenu,
				closeSubmenu,
				location,
				page,
			}}
		>
			{children}
		</AppContext.Provider>
	)
}
// global context
export const useGlobalContext = () => {
	return useContext(AppContext)
}
