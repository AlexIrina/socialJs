import { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
export default function ToggleBtn() {
	const [theme, setTheme] = useState('light-theme')

	const toggleTheme = () => {
		if (theme === 'light-theme') {
			setTheme('dark-theme')
		} else {
			setTheme('light-theme')
		}
	}

	useEffect(() => {
		// access the html element and add the className when the page loads
		document.documentElement.className = theme
	}, [theme])

	return (
		<div>
			<button className='btn btn-toggle' onClick={toggleTheme}>
				{theme === 'dark-theme' ? 'Light' : 'Dark'}
			</button>
		</div>
	)
}
