import React from "react";
import { motion } from "framer-motion";
import { closeIcon } from "../assets/icons";

const CheckOut = ({ open, setOpen }) => {
	return (
		<motion.nav
			initial={{ opacity: 0, scale: 0.5 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{
				duration: 0.3,
				ease: [0, 0.71, 0.2, 1.01],
				scale: {
					type: "spring",
					damping: 15,
					stiffness: 100,
					restDelta: 0.001,
				},
			}}
			className="w-screen h-screen absolute top-0 right-0 bottom-0 left-0 z-10 bg-yellow-400 bg-opacity-90 flex checkout_modal"
		>
			<div className="m-auto">
				<div className="text-end">
					<button onClick={() => setOpen(false)}>
						{closeIcon("w-8 h-8 text-white")}
					</button>
				</div>
				<div className="mt-8 flex flex-col gap-10">
					<div className="rounded-md px-12 py-8 bg-white font-rem uppercase text-black flex gap-6 justify-between h-36">
						<div className="w-1/4">
							<img
								src="https://images.pexels.com/photos/821651/pexels-photo-821651.jpeg?auto=compress&cs=tinysrgb&w=1600"
								alt=""
								className="w-full h-full object-cover"
							/>
						</div>
						<div className="w-2/4">
							<h4 className="text-2xl">Product Name</h4>
							<p className="text-sm lowercase first-letter:uppercase text-gray-500">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Eligendi, explicabo.
							</p>
						</div>
						<div className="w-1/4 text-end">
							<p className="text-slate-600">$32.12</p>
						</div>
					</div>
					<div className="rounded-md px-12 py-8 bg-white font-rem uppercase text-black flex gap-6 justify-between h-36">
						<div className="w-1/4">
							<img
								src="https://images.pexels.com/photos/821651/pexels-photo-821651.jpeg?auto=compress&cs=tinysrgb&w=1600"
								alt=""
								className="w-full h-full object-cover"
							/>
						</div>
						<div className="w-2/4">
							<h4 className="text-2xl">Product Name</h4>
							<p className="text-sm lowercase first-letter:uppercase text-gray-500">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Eligendi, explicabo.
							</p>
						</div>
						<div className="w-1/4 text-end">
							<p className="text-slate-600">$32.12</p>
						</div>
					</div>
					<div className="rounded-md px-12 py-8 bg-white font-rem uppercase text-black flex gap-6 justify-between h-36">
						<div className="w-1/4">
							<img
								src="https://images.pexels.com/photos/821651/pexels-photo-821651.jpeg?auto=compress&cs=tinysrgb&w=1600"
								alt=""
								className="w-full h-full object-cover"
							/>
						</div>
						<div className="w-2/4">
							<h4 className="text-2xl">Product Name</h4>
							<p className="text-sm lowercase first-letter:uppercase text-gray-500">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Eligendi, explicabo.
							</p>
						</div>
						<div className="w-1/4 text-end">
							<p className="text-slate-600">$32.12</p>
						</div>
					</div>
				</div>
			</div>
		</motion.nav>
	);
};

export default CheckOut;
