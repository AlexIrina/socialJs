import React from 'react'
import { useEffect } from 'react'

export default function Alert({ type, msg, removeAlert, list }) {
	useEffect(() => {
		const timeout = setTimeout(() => {
			removeAlert()
			// cleanup func
			return () => clearTimeout(timeout)
		}, 3000)
	}, [removeAlert, list])

	return <div className={`alert alert-${type}`}>{msg}</div>
}

// todo: when edit button is clicked show an alert message
// todo: when delete button is clicked show an alert message
// todo: when save button is clicked show an alert message
