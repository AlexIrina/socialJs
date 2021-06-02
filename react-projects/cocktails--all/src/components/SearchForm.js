import { useGlobalContext } from '../context'

export default function SearchForm() {
	const { setSearchTerm } = useGlobalContext()
	return <form onSubmit={setSearchTerm}></form>
}
