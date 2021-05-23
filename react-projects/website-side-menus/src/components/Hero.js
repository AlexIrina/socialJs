import React from 'react'
import phoneImg from '../images/phone.svg'
import { useGlobalContext } from '../context/appContext'
export default function Hero() {
	console.log(useGlobalContext())
	return <h2>Hero component</h2>
}
