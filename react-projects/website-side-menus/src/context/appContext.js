import React, { useState, useContext } from 'react'
import sublinks from '../data/sublinksData'

const AppContext = React.createContext()

export const AppContextProvider = ({ children }) => {
	const [links, setLinks] = useState(sublinks)
	const [isSidebarOpen, setIsSidebarOpen] = useState(false)
	const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)

	const openSidebar = () => {
		setIsSidebarOpen(true)
	}
	const closeSidebar = () => {
		setIsSidebarOpen(false)
	}

	const openSubmenu = () => {
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

export { AppContext }
