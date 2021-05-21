import React from 'react'
import { FaTimes } from 'react-icons/fa'
export default function Modal() {
	return (
		// add show-modal class -- to show modal
		<div className={`modal-overlay `}>
			<div className='modal-container'>
				<h3>Modal Content</h3>
				<button className='close-modal-btn'>
					<FaTimes />
				</button>
			</div>
		</div>
	)
}
