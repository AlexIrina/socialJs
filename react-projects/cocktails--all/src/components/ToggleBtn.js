import { useState, useEffect } from 'react'
import Icon from '@mdi/react'
import { mdiWhiteBalanceSunny } from '@mdi/js'
import { mdiWeatherNight } from '@mdi/js'

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
			<button className='btn btn-theme' onClick={toggleTheme}>
				{/* {theme === 'dark-theme' ? 'Light' : 'Dark'} */}
				<Icon
					className='theme-svg'
					path={theme === 'dark-theme' ? mdiWhiteBalanceSunny : mdiWeatherNight}
					size={0.7}
					horizontal
					vertical
					rotate={70}
				/>
			</button>
		</div>
	)
}
