import React, { useState, useContext } from 'react'
import sublinks from '../data/sublinksData'

const AppContext = React.createContext()

export const AppContextProvider = ({ children }) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false)
	const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)
	// used in submenu
	const [location, setLocation] = useState({})

	const openSidebar = () => {
		setIsSidebarOpen(true)
	}
	const closeSidebar = () => {
		setIsSidebarOpen(false)
	}
	// text of the link and coordinates are center and bottom position of the link btn
	const openSubmenu = (text, coordinates) => {
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
