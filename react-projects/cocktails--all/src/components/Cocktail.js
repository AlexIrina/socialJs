import { Link } from 'react-router-dom'
export default function Cocktail({ id, name, image, info, glass }) {
	function getClassByType(info) {
		if (info === 'Alcoholic') {
			return 'red'
		} else if (info === 'Non alcoholic') {
			return 'green'
		} else if (info === 'Optional alcohol') {
			return 'grey'
		} else {
			return 'pink'
		}
	}
	return (
		<article className='cocktail'>
			<div className='img-container'>
				<img src={image} alt={name} />
			</div>
			{/* className={`${getClassByType(info)}`} */}
			<div className='cocktail-footer'>
				<h3>{name}</h3>
				<h4>{glass}</h4>
				<p style={{ color: `${getClassByType(info)}` }}>{info}</p>
				<Link to={`/cocktail/${id}`} className='btn btn-primary'>
					Details
				</Link>
			</div>
		</article>
	)
}
