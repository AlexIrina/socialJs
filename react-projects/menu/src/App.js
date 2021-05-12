import { useState } from 'react'
import Menu from './components/Menu'
import Categories from './components/Categories'
import menuData from './data/menuData'

export default function App() {
	const [menu, setMenu] = useState(menuData)
	const { categories } = menu
	return (
		<main>
			<Menu category={categories} />

			<section className='container'>
				{menu.map(item => (
					<Categories key={item.id} {...item} />
				))}
			</section>
		</main>
	)
}

