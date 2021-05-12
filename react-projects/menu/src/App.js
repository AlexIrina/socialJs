import { useState } from 'react'
import Menu from './components/Menu'
import Categories from './components/Categories'
import menuData from './data/menuData'

// map over menuData to return all categories [ "breakfast", "lunch", "shakes"]..get only unique values add 'all' to the beginning pr the array
const allCategories = ['all', ...new Set(menuData.map(item => item.category))]

export default function App() {
	const [menuItems, setMenuItems] = useState(menuData)
	const [categories, setCategories] = useState(allCategories)
	// console.log(categories)

	const filterItems = category => {
		if (category === 'all') {
			setMenuItems(menuData)
			return
		}

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
				<Categories categories={categories} filterItems={filterItems} />
				<Menu items={menuItems} />
			</section>
		</main>
	)
}
