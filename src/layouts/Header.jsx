import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
	return (
		<header>
			<NavLink className="menu-logo" to="/">
				LOGO
			</NavLink>
			<nav>
				<ul>
					<li>
						<NavLink to="/">Home</NavLink>
					</li>
					<li>
						<NavLink to="/shop">Shop</NavLink>
					</li>
					<li>
						<NavLink to="/about">About</NavLink>
					</li>
					<li>
						<NavLink to="/contact">Contact</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
