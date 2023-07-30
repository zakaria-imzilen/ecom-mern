import CheckOut from "../pages/CheckOut";
import Home from "../pages/Home";
import Product from "../pages/Product";

export const routes = {
	public: [
		{
			id: 1,
			path: "/",
			element: Home,
		},
		{
			id: 2,
			path: "/product/:id",
			element: Product,
		},
	],
	private: [
		{
			id: 1,
			path: "/checkout",
			element: CheckOut,
		},
	],
};
