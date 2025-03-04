import { Route, Routes } from "react-router-dom";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import { useEffect, useState } from "react";

function App() {
	const [products, setProducts] = useState([]);

	async function fetchProducts() {
		try {
			const res = await fetch("http://localhost:3000/products");
			const data = await res.json();
			setProducts(data);
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		fetchProducts();
	}, []);

	return (
		<>
			<Header />
			<Routes>
				<Route index element={<HomePage products={products} />} />
				<Route path="/shop" element={<ShopPage />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/contact" element={<ContactPage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;

/**
 * 1. Không truyền dependencies: cách dùng sai -> như không dùng useEffect.
 * 2. Có dependencies là []: component re-render 1 lần sau khi mount.
 * 3. Có dependencies: component re-render mỗi khi có 1 trong số các dependencies bị thay đổi.
 */
