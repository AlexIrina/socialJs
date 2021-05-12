import { useState } from 'react'
import Menu from './components/Menu'
import Categories from './components/Categories'
import menuData from './data/menuData'

export default function App() {
	const [menuItems, setMenuItems] = useState(menuData)
	const [categories, setCategories] = useState([])

	return (
		<main>
			<section className='menu section'>
				<div className='title'>
					<h2>Our Menu</h2>
					<div className='underline'></div>
				</div>
				<Categories categories={categories} />
				<Menu items={menuItems} />
			</section>
		</main>
	)
}
