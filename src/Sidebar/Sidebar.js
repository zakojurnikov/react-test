import './Sidebar.css';

const Sidebar = () => {
	return (
		<nav className="sidebar">
			<div className="sidebar__container">
				<ul className="sidebar__list">
					<li className="sidebar__li">
						<a href="#" className="sidebar__link">
							Главная
						</a>
					</li>
					<li className="sidebar__li">
						<a href="#" className="sidebar__link">
							Новости
						</a>
					</li>
					<li className="sidebar__li">
						<a href="#" className="sidebar__link">
							Сообщения
						</a>
					</li>
					<li className="sidebar__li">
						<a href="#" className="sidebar__link">
							Магазин
						</a>
					</li>
					<li className="sidebar__li">
						<a href="#" className="sidebar__link">
							Настройки
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Sidebar;

