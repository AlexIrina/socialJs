import { useState, useEffect } from 'react'
import List from './components/List'
import Alert from './components/Alert'

//todo: local storage
const getLocalStorage = () => {
	let list = localStorage.getItem('list')
	// list exists?
	if (list) {
		return JSON.parse(localStorage.getItem('list'))
	} else {
		return []
	}
}
getLocalStorage()

export default function App() {
	//form values
	const [name, setName] = useState('')
	// my list of groceries
	const [list, setList] = useState(getLocalStorage())
	// is editing or not
	const [isEditing, setIsEditing] = useState(false)
	// edit ID..which item im editing
	const [editID, setEditID] = useState(null)
	// different alerts..success and danger
	const [alert, setAlert] = useState({
		show: false,
		type: '',
		msg: '',
	})
	// show alerts
	const showAlert = (show = false, type = '', msg = '') => {
		setAlert({ show, type, msg })
	}
	// clear the whole list
	const clearList = () => {
		showAlert(true, 'danger', 'empty list')
		setList([])
	}
	//remove items
	const removeItem = id => {
		showAlert(true, 'danger', 'item removed')
		const newItems = list.filter(item => item.id !== id)
		setList(newItems)
	}

	// edit items
	const editItem = id => {
		const specificItem = list.find(item => item.id === id)
		setIsEditing(true)
		// id that im passing in
		setEditID(id)
		setName(specificItem.title)
		showAlert(true, 'danger', 'please edit item')
	}

	//todo: store items in local storage
	useEffect(() => {
		// set
		localStorage.setItem('list', JSON.stringify(list))
		// // get
		// localStorage.getItem('list')
		// // remove
		// localStorage.removeItem('list')
	}, [list])
	// handle submit for the form
	const handleSubmit = e => {
		e.preventDefault()
		// todo: add items to the list only if were not editing or theres something typed into the input field
		if (!name) {
			//todo: display alerts
			showAlert(true, 'danger', 'Please enter a value')
			// if item is currently selected and being edited
		} else if (name && isEditing) {
			// editID has the selected items id stored in it
			// const itemBeingEdited = list.map(
			// 	item =>
			// 		item.id === editID && {
			// 			...item,
			// 			title: name,
			// 		}
			// )
			const itemBeingEdited = list.map(item => {
				if (item.id === editID) {
					return {
						...list,
						title: name,
					}
				}
				return item
			})
			setList(itemBeingEdited)
			setName('')
			setEditID(null)
			setIsEditing(false)
			showAlert(true, 'success', 'item changed')
		} else {
			//!todo show alert
			showAlert(true, 'success', 'item added to the list')
			//!todo create a new item that will be added to the list
			const newItem = {
				id: new Date().getTime().toString(),
				title: name,
			}
			setList([...list, newItem])
			setName('')
		}
	}

	return (
		<section className='section-center'>
			<form className='grocery-form' onSubmit={handleSubmit}>
				{/* show different alerts to the user */}
				{alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
				<h3>Grocery List</h3>
				<div className='form-control'>
					<input
						type='text'
						className='grocery'
						placeholder='e.g. chocolate-chip cookies'
						value={name}
						onChange={e => setName(e.target.value)}
					/>
					<button type='submit' className='submit-btn'>
						{/* show update or submit btn */}
						{isEditing ? 'edit' : 'submit'}
					</button>
				</div>
			</form>
			{/*only show the list and the button if the user has added an item to the list */}
			{list.length > 0 && (
				<div className='grocery-container'>
					<List items={list} removeItem={removeItem} editItem={editItem} />
					<button className='clear-btn' onClick={clearList}>
						clear items
					</button>
				</div>
			)}
		</section>
	)
}
