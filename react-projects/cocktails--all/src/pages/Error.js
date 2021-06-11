import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { Howl, Howler } from 'howler'
import leo from '../images/leo2.gif'
import clickSound from '../welcome-back.wav'
export default function Error() {
	useEffect(() => {
		const sound = new Howl({
			src: [clickSound],
		})
		// Change global volume.
		Howler.volume(0.5)
		sound.play()
	}, [])

	return (
		<section className='warning-page section'>
			<div className='warning-container'>
				<h1 className='alert'>Ops! It's a dead end</h1>
				<img src={leo} alt='go home' />
				<Link to='/' className='btn btn-primary'>
					Back home
				</Link>
			</div>
		</section>
	)
}
