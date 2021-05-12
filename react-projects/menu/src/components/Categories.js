export default function Categories({ filterItems }) {
	return (
		<div className='btn-container'>
			<button className='filter-btn' onClick={() => filterItems('breakfast')}>
				Breakfast
			</button>
		</div>
	)
}
