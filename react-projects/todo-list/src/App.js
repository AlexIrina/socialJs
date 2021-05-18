import { useState } from 'react'
import List from './components/List'
import Alert from './components/Alert'

export default function App() {
	//form values
	const [name, setName] = useState('')
	// my list of todos
	const [list, setList] = useState([])
	// is editing or not
	const [isEditing, setIsEditing] = useState(false)
	// edit ID..which item im editing
	const [editID, setEditID] = useState(null)
	// alert..for different alerts
	const [alert, setAlert] = useState({ show: false, msg: '', type: '' })

	// handle submit for the form
	const handleSubmit = e => {
		e.preventDefault()
		console.log('form submitted')
	}

	return (
		<section className='section-center'>
			<form className='grocery-form ' onSubmit={handleSubmit}>
				{/* show different alerts to the user */}
				{alert.show && <Alert />}
				<h3>Todo List</h3>
				<div className='form-control'>
					<input
						className='grocery'
						type='text'
						placeholder='e.g. eggs'
						value={name}
						onChange={e => setName(e.target.value)}
					/>
					<button type='submit' className='submit-btn'>
						{/* show edit or submit btn */}
						{isEditing ? 'edit' : 'submit'}
					</button>
				</div>
			</form>
			<div className='grocery-container'>
				<List />
				<button className='clear-btn' onClick={() => setList([])}>
					Clear Items
				</button>
			</div>
		</section>
	)
}
// using local storage
