import React from 'react'

export default function Categories({ img, title, category, price, desc, id }) {
	return (
		<section className='section-center'>
			<div className='menu-item'>
				<div>
					<img className='photo' src={img} alt={title} />
					<div className='item-info'>
						<header>
							<h4>{title}</h4>
							<div className='price'>{price}</div>
						</header>
						<div className='item-text'>{desc}</div>
					</div>
				</div>
			</div>
		</section>
	)
}
// {
// 	id: 1,
// 	title: 'buttermilk pancakes',
// 	category: 'breakfast',
// 	price: 15.99,
// 	img: './images/item-1.jpeg',
// 	desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
// },
