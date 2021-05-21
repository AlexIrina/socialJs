import ReactDOM from 'react-dom'
import './App.css'
import App from './App'
import { AppContextProvider } from './context/appContext'
ReactDOM.render(
	<AppContextProvider>
		<App />
	</AppContextProvider>,
	document.getElementById('root')
)
