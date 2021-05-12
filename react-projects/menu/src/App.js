import { useState } from 'react'
import Menu from './components/Menu'
import Categories from './components/Categories'
import menuData from './data/menuData'

export default function App() {
	const [menuItems, setMenuItems] = useState(menuData)
	const [categories, setCategories] = useState([])
	// get categories from menuData and store it in state
	const filterItems = category => {
		const newItems = menuData.filter(item => item.category === category)
		setMenuItems(newItems)
	}

	return (
		<main>
			<section className='menu section'>
				<div className='title'>
					<h2>Our Menu</h2>
					<div className='underline'></div>
				</div>
				<Categories filterItems={filterItems} />
				<Menu items={menuItems} />
			</section>
		</main>
	)
}
