import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";

const Home = () => {
	return (
		<>
			<Navbar />
			<Hero />

			<main className="py-10">
				<section className="max-w-5xl mx-auto">
					<h2 className="mb-8 pl-5 md:pl-0 text-3xl font-oswald">
						Headphones for you
					</h2>

					<div className="flex gap-x-6 gap-y-10 md:gap-y-5 flex-wrap md:justify-start justify-center">
						<ProductCard />
						<ProductCard />
						<ProductCard />
						<ProductCard />
						<ProductCard />
						<ProductCard />
						<ProductCard />
						<ProductCard />
						<ProductCard />
						<ProductCard />
					</div>
				</section>
			</main>
		</>
	);
};

export default Home;
