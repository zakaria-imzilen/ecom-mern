import React from "react";
import { Link } from "react-router-dom";
import { starIcon } from "../assets/icons";

const ProductCard = () => {
	return (
		<article className="grid grid-cols-4 grid-rows-6 w-80 md:w-72 font-rem transition-all cursor-pointer">
			<div className="col-span-4 row-span-4 w-full">
				<img
					src="https://img.freepik.com/free-photo/botanical-product-backdrop-monstera-leaves_53876-147835.jpg?w=826&t=st=1690715306~exp=1690715906~hmac=d48cb0d94aa422a25c9e43d252142c378d99e471f3705ac3d4daa31bc20f7cfb"
					alt=""
					className="h-full w-full object-cover"
				/>
			</div>

			<div className="py-3 px-2 col-span-3 row-span-2">
				<h4 className="text-base">Lorem ipsum dolor sit amet</h4>
				<p className="my-2 text-gray-400 text-sm">
					Obcaecati quo soluta rem cumque incidunt.
				</p>

				<div className="flex">
					{starIcon("w-4 h-4 text-yellow-400")}
					{starIcon("w-4 h-4 text-yellow-400")}
					{starIcon("w-4 h-4 text-yellow-400")}
				</div>

				<div className="mt-6 flex gap-1 w-full">
					<button className="border border-yellow-300 hover:bg-yellow-300 hover:text-white px-4 py-2 uppercase text-xs text-black transition-all">
						Add to Cart
					</button>
					<Link to={"/product/1"}>
						<button className="border bg-yellow-300 px-4 py-2 uppercase text-xs text-black transition-all">
							View
						</button>
					</Link>
				</div>
			</div>
			<div className="py-3 px-1">
				<p className="text-sm font-bold text-gray-700">$39.43</p>
			</div>
		</article>
	);
};

export default ProductCard;
