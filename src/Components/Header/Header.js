import React from 'react';
import logo from '../../images/icons/logo-sm.png';
import search from '../../images/icons/search-icon-sm.png';
import cart from '../../images/icons/cart-sm.png';
import { header } from '../data';
const Header = () => {
	return (
		<div className="nav-wrapper fixed-top">
			<div className="container">
				<nav className="navbar navbar-toggleable-sm navbar-expand-md">
					<button
						className="navbar-toggler navbar-toggler-right"
						type="button"
						data-toggle="collapse"
						data-target=".navbar-collapse"
					>
						☰
					</button>
					<a className="navbar-brand mx-auto" href="#">
						<img src={logo} />
					</a>

					<div className="navbar-collapse collapse">
						<ul className="navbar-nav nav-justified w-100 nav-fill">
							{header.map((item, index) => {
								const { id, href, text } = item;
								return (
									<li class="nav-item" key={'nav' + index}>
										<a class="nav-link js-scroll-trigger" href={href}>
											{text}
										</a>
									</li>
								);
							})}
							<li className="nav-item">
								<a className="nav-link js-scroll-trigger" href="/search/">
									<img src={search} />
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link js-scroll-trigger" href="/cart/">
									<img src={cart} />
								</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</div>
	);
};

export default Header;
