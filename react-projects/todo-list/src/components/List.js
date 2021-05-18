import { FaEdit, FaTrash } from 'react-icons/fa'

export default function List({ items, editBtn, deleteBtn }) {
	return (
		<div className='grocery-list'>
			{items.map(({ id, title }) => {
				return (
					<article className='grocery-item' key={id}>
						<p className='title'>{title}</p>
						<div className='btn-container'>
							<button className='edit-btn' onClick={() => editBtn()}>
								<FaEdit />
							</button>
							<button className='delete-btn' onClick={() => deleteBtn()}>
								<FaTrash />
							</button>
						</div>
					</article>
				)
			})}
		</div>
	)
}
