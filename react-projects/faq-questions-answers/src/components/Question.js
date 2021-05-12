import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

export default function Question({ title, info }) {
	const [readMore, setReadMore] = useState(false)

	return (
		<article className='question'>
			<h4>{title}</h4>
			<header>
				<p>{readMore ? info : `${info.substring(0, 0)}...`}</p>
				<button onClick={() => setReadMore(!readMore)}>
					{readMore ? <AiOutlineMinus /> : <AiOutlinePlus />}
				</button>
			</header>
		</article>
	)
}
