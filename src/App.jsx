import "./App.css";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import HomePage from "./pages/HomePage";

function App() {
	return (
		<>
			<Header />
			<HomePage />
			<p className="desc">Tôi thử CSS</p>
			<Footer />
		</>
	);
}

export default App;
