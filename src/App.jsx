import "./App.css";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";

function App() {
	const products = [
		{ id: 1, title: "Product 1", price: 100 },
		{ id: 2, title: "Product 2", price: 200 },
		{ id: 3, title: "Product 3", price: 150 },
	];
	return (
		<>
			<Header />
			<HomePage products={products} />
			<ShopPage products={products} />

			{/* {[
				<div>
					<h2>Product 1</h2>
					<p>Price:100</p>
				</div>,
				<div>
					<h2>Product 2</h2>
					<p>Price: 200</p>
				</div>,
				<div>
					<h2>Product 3</h2>
					<p>Price: 150</p>
				</div>,
			]} */}

			<p className="desc">Tôi thử CSS</p>
			<Footer />
		</>
	);
}

export default App;
