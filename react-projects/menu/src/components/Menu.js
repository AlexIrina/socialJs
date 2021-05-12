export default function Menu({ items }) {
	return (
		<div className='section-center'>
			{items.map(({ img, title, desc, price, id }) => (
				<article key={id} className='menu-item'>
					<img className='photo' src={img} alt={title} />
					<div className='item-info'>
						<header>
							<h4>{title}</h4>
							<h4 className='price'>$ {price}</h4>
						</header>
						<p className='item-text'>{desc}</p>
					</div>
				</article>
			))}
		</div>
	)
}