import React, { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/ebay.png";
import { accountIcon, barsIcon, cartIcon, closeIcon } from "../assets/icons";
import CheckOut from "../pages/CheckOut";

const Navbar = () => {
	const [openMenu, setOpenMenu] = useState(false);
	const [openCart, setOpenCart] = useState(false);

	return (
		<nav className="m-0 py-4">
			{openCart ? <CheckOut open={openCart} setOpen={setOpenCart} /> : ""}
			<div className="overflow-hidden w-screen md:max-w-screen-lg md:mx-auto px-5 flex justify-between items-center">
				<Link to="/">
					<img width={50} src={Logo} alt="Logo" />
				</Link>

				<div className="hidden md:flex gap-14 font-oswald">
					<button
						onClick={() => setOpenCart(true)}
						className="flex gap-2 justify-center items-center hover:scale-90 transition-all hover:text-blue-400"
					>
						<div>{cartIcon("w-8 h-8")}</div>
						<span className="text-md">Cart</span>
					</button>
					<button className="flex gap-2 justify-center items-center hover:scale-90 transition-all hover:text-blue-400">
						<div>{accountIcon("w-8 h-8")}</div>
						<span className="text-md">Account</span>
					</button>
				</div>

				{/* MOBILE */}
				<button
					type="button"
					className="md:hidden text-blue-600 transition-all"
					onClick={() => setOpenMenu(true)}
				>
					{barsIcon("w-8 w-8")}
				</button>
				<div
					className={`absolute ${
						openMenu ? "right-0 top-0" : "-right-full -top-full rounded-es-full"
					} h-screen w-screen md:hidden py-10 px-10 z-10 bg-blue-400 transition-all duration-700 ease-in-out`}
				>
					<div className="w-full text-end">
						<button type="button" onClick={() => setOpenMenu(false)}>
							{closeIcon("w-8 w-8")}
						</button>
					</div>
					<div className="absolute right-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-12 font-oswald">
						<button
							onClick={() => setOpenCart(true)}
							className="w-full flex gap-6 justify-center text-white"
						>
							<div>{cartIcon("w-8 h-8")}</div>
							<span className="text-2xl">Cart</span>
						</button>
						<button className="w-full flex gap-6 justify-center text-white">
							<div>{accountIcon("w-8 h-8")}</div>
							<span className="text-2xl">Account</span>
						</button>
					</div>
				</div>
				{/* </-- MOBILE --> */}
			</div>
		</nav>
	);
};

export default Navbar;
