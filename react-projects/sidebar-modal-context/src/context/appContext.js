import React, { useState, useContext } from 'react'
// create show and hide modal state here..then wrap the whole App in app.js
const AppContext = React.createContext()

// create the ContextProvider component that im going to wrap the App with
function AppContextProvider({ children }) {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [isSidebarOpen, setIsSidebarOpen] = useState(false)

	// open/close modal
	const openModal = () => {
		setIsModalOpen(true)
	}
	const closeModal = () => {
		setIsModalOpen(false)
	}

	// open/close sidebar
	const openSidebar = () => {
		setIsSidebarOpen(true)
	}
	const closeSidebar = () => {
		setIsSidebarOpen(false)
	}

	return (
		<AppContext.Provider
			value={{
				openModal,
				closeModal,
				openSidebar,
				closeSidebar,
				isSidebarOpen,
				isModalOpen,
			}}
		>
			{children}
		</AppContext.Provider>
	)
}

// todo ..custom hook that allows me to import context into any child component that needs it
export const useGlobalContext = () => {
	return useContext(AppContext)
}
export { AppContextProvider, AppContext }
