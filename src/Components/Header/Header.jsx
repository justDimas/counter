import {Link} from  "react-router-dom"
import './header.css'

function Header(){
	return (
		<header className="header">
			<nav className="header__nav">
				<ul className="header__list">
					<li className="header__item"><Link className="header__link" to='/'>Login</Link></li>
					<li className="header__item"><Link className="header__link" to='/comments'>Comments</Link></li>
					<li className="header__item"><Link className="header__link" to='/country'>Country</Link></li>
					<li className="header__item"><Link className="header__link" to='/counter'>Counter</Link></li>
				</ul>
			</nav>
		</header>
	)
}

export default Header