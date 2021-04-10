import './App.css';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Main from './Main/Main';

const App = () => {
	return (
		<div className="App">
			<Header link1="Главная" link2="Новости" />
			<Sidebar />
			<Main />
		</div>
	);
}

export default App;
