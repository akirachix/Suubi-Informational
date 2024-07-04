import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import './index.css'
import logo from '../Assets/logo.jpg'

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<div className="logo">
				<img src={logo} alt="Logo"/>
			</div>
			<nav ref={navRef}>
				<a href="/#">Home</a>
				<a href="/#">Products</a>
				<a href="/#">The Team</a>
				<a href="/#">About Us</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars className="bars"/>
			</button>
		</header>
	);
}

export default Navbar;