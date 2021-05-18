import { useState } from 'react'
import List from './components/List'

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

	return (
		<div>
			App
			<List />
		</div>
	)
}
// using local storage
