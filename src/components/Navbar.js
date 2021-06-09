import React from 'react';
import { ImUser } from 'react-icons/im';
import { FaMedium, FaMaxcdn, FaPortrait } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarTogglerDemo01"
					aria-controls="navbarTogglerDemo01"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarTogglerDemo01">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">
								<ImUser size="1.3em" /> <FaMaxcdn size="0.9em" />ohammed <FaMaxcdn size="0.9em" />obark
								CV
							</a>
						</li>

						<li className="nav-item">
							<NavLink className="nav-link active" aria-current="page" to="/">
								Home
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link active" aria-current="page" to="/exprience">
								Experiences
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link active" aria-current="page" to="/skills">
								Skills
							</NavLink>
						</li>
					</ul>

					<a
						target="_blank"
						href="https://drive.google.com/file/d/1dmDf9OfTP_LLCAKmiQIngizqW78Lo7GT/view?usp=sharing"
						class="btn btn-outline-success"
					>
						Download CV
					</a>
				</div>
			</div>
		</nav>
	);
}
