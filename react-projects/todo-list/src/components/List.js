import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa'

export default function List({ items, editItem, removeItem }) {
	return (
		<div className='grocery-list'>
			{items.map(({ id, title }) => {
				return (
					<article className='grocery-item' key={id}>
						<p className='title'>{title}</p>
						<div className='btn-container'>
							<button className='edit-btn' onClick={() => editItem(id)}>
								<FaEdit />
							</button>
							<button className='delete-btn' onClick={() => removeItem(id)}>
								<FaTrash />
							</button>
						</div>
					</article>
				)
			})}
		</div>
	)
}
