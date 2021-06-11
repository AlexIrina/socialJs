import { Link } from 'react-router-dom'
import { Howl, Howler } from 'howler'
import clickSound from '../on2.wav'
// each cocktail card
export default function Cocktail({ id, name, image, info, glass, category }) {
	const sound = new Howl({
		src: [clickSound],
	})
	// Change global volume.
	Howler.volume(0.1)

	// styling info text color
	const getClassByType = info => {
		if (info === 'Alcoholic') return '#e2e0ff'
		if (info === 'Non alcoholic') return '#282566'
		if (info === 'Optional alcohol') return '#c1beff'
		return '#141233'
	}
	// for styling the footer color based on category of the cocktail
	const getClassByCategory = category => {
		if (category === 'Cocktail') return '#0f172a'
		if (category === 'Shot') return '#1e293b'
		if (category === 'Coffee / Tea ') return '#334155'
		if (category === 'Ordinary Drink') return '#475569'
		if (category === 'Other/Unknown') return '#64748b'
		return '#94a3b8'
	}

	return (
		<article className='cocktail'>
			<div className='img-container'>
				<img src={image} alt={name} />
			</div>
			<div
				className='cocktail-footer'
				style={{ background: `${getClassByCategory(category)}` }}
			>
				<h3>{name}</h3>
				<h4>{glass}</h4>
				<p style={{ color: `${getClassByType(info)}` }}>{info}</p>
				<Link
					to={`/cocktail/${id}`}
					className='btn btn-primary'
					onClick={() => sound.play()}
				>
					Details
				</Link>
			</div>
		</article>
	)
}
