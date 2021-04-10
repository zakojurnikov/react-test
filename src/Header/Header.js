import s from './Header.module.css';

const Header = (props) => {
	return (
		<header className={s.header}>
			<div className={s.container}>
				<div className={s.logo}></div>
				<nav className={s.nav}>
					<ul className={s.list}>
						<li className={s.li}>
							<a className={s.link} href="#">
								{props.link1}
							</a>
						</li>
						<li className={s.li}>
							<a className={s.link} href="#">
								{props.link2}
							</a>
						</li>
						<li className={s.li}>
							<a className={s.link} href="#">
								О нас
							</a>
						</li>
						<li className={s.li}>
							<a className={s.link} href="#">
								Проекты
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Header;