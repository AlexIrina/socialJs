import { useGlobalContext } from '../context/appContext'
import { FaTimes } from 'react-icons/fa'
export default function Modal() {
	const { isModalOpen, closeModal } = useGlobalContext()
	return (
		// add show-modal class -- to show modal
		<div
			className={isModalOpen ? `modal-overlay show-modal` : `modal-overlay `}
		>
			<div className='modal-container'>
				<h3>Modal Content</h3>
				<button className='close-modal-btn' onClick={closeModal}>
					<FaTimes />
				</button>
			</div>
		</div>
	)
}
