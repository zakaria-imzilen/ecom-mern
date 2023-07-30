import React from "react";

const Hero = () => {
	return (
		<header className="bg-cover bg-center flex">
			<div className="m-auto max-w-5xl">
				<h1 className="font-oswald text-6xl text-white">
					Grab up to 50% off On Selected Headphone
				</h1>
				<button className="mt-8 px-6 py-3 rounded-2xl bg-orange-500 text-white font-rem uppercase hover:scale-95 transition-all">
					Buy Now
				</button>
			</div>
		</header>
	);
};

export default Hero;
