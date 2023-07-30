import React from "react";
import Navbar from "../components/Navbar";
import { starIcon } from "../assets/icons";

const Product = () => {
	return (
		<>
			<Navbar />

			<main className="py-10">
				<section className="max-w-5xl mx-auto flex flex-wrap md:flex-nowrap gap-14">
					<div className="md:w-1/2 max-h-96">
						<img
							src="https://img.freepik.com/free-photo/modern-white-podium-pedestal-product-display-stand-background-3d-rendering_56104-1377.jpg?w=1380&t=st=1690719590~exp=1690720190~hmac=bc4f2c8155ef1e56490405af90982a9e2ad632a10c112be7cd9d29cc5e7c8a56"
							alt=""
							className="h-full w-full object-cover"
						/>
					</div>
					<div className="px-4 md:px-0 flex flex-col gap-y-6 md:w-1/2">
						<h1 className="text-6xl font-oswald">Airpods Max</h1>
						<p className="text-gray-400 font-rem">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
							similique eum saepe unde! Ullam quisquam voluptate dolores
							asperiores. Excepturi maiores vel repellendus.
						</p>

						<div className="flex items-center">
							{starIcon("w-4 h-4 text-yellow-400")}
							{starIcon("w-4 h-4 text-yellow-400")}
							{starIcon("w-4 h-4 text-yellow-400")} (121)
						</div>

						<hr />

						<h2 className="text-2xl font-oswald">Choose a color</h2>

						<div className="flex gap-2">
							<button className="h-10 w-10 rounded-full bg-red-300 outline-dashed outline-2 outline-slate-500"></button>
							<button className="h-10 w-10 rounded-full bg-green-300"></button>
							<button className="h-10 w-10 rounded-full bg-slate-300"></button>
							<button className="h-10 w-10 rounded-full bg-purple-300"></button>
						</div>

						<hr />

						<div className="px-4 py-2 bg-slate-200 w-40 flex justify-around rounded-md text-xl">
							<button className="h-full">-</button>
							<span>1</span>
							<button className="h-full">+</button>
						</div>

						<div className="flex gap-4 font-rem">
							<button className="w-1/2 px-6 py-4 rounded-3xl bg-yellow-400 text-white uppercase">
								Buy Now
							</button>
							<button className="w-1/2 px-6 py-4 rounded-3xl border-yellow-400 text-slate-700 border uppercase">
								Add to Cart
							</button>
						</div>
					</div>
				</section>
			</main>
		</>
	);
};

export default Product;
