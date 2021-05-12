import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

export default function Question() {
	return (
		<div className='question'>
			<header>
				<h4>text</h4>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
				</p>
			</header>
			<button className='btn'>
				<AiOutlineMinus />
			</button>
			<button className='btn'>
				<AiOutlinePlus />
			</button>
		</div>
	)
}
/*
    id: 1,
		title: 'Do I have to allow the use of cookies?',
		info: 'Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.',
*/
