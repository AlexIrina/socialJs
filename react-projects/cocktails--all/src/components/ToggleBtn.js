import { useState, useEffect } from 'react'
import Icon from '@mdi/react'
import { mdiWhiteBalanceSunny } from '@mdi/js'
import { mdiWeatherNight } from '@mdi/js'
import { Howl, Howler } from 'howler'
import clickSound from '../on.wav'

export default function ToggleBtn() {
	const [theme, setTheme] = useState('light-theme')
	// Setup the new Howl.
	const sound = new Howl({
		src: [clickSound],
	})
	// Change global volume.
	Howler.volume(0.1)
	const toggleTheme = () => {
		if (theme === 'light-theme') {
			setTheme('dark-theme')
			// Play the sound.
			sound.play()
		} else {
			setTheme('light-theme')
			sound.play()
		}
	}

	useEffect(() => {
		// access the html element and add the className when the page loads
		document.documentElement.className = theme
	}, [theme])

	return (
		<div>
			<button className='btn btn-theme' onClick={toggleTheme}>
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
