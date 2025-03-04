import { useState } from "react";

const data = [
	{ id: 1, title: "Tieu de 1", image: "https://picsum.photos/200/300" },
	{ id: 1, title: "Tieu de 2", image: "https://picsum.photos/200/300" },
	{ id: 1, title: "Tieu de 3", image: "https://picsum.photos/200/300" },
];

const ShopPage = () => {
	const [count, setCount] = useState(0);

	const hanldeClick = () => {
		// setCount(count + 1);
		// setCount(count + 1);
		setCount((count) => count + 1);
		// setCount((count) => count + 1);
	};
	return (
		<div>
			<h1>Trang san pham</h1>
			<button onClick={hanldeClick}>Count: {count}</button>
		</div>
	);
};

export default ShopPage;

// function useState(initialState) {
// 	let state = initialState;

// 	function setState(newState) {
// 		state = newState;
// 	}

// 	// React re-render component chứa state bị thay đổi
// 	return [state, setState];
// }

// const [products, setProducts] = useState([]);

// function useEffect(callback, denpendencies) {}
