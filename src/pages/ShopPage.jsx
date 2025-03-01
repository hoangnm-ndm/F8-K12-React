import React from "react";

const ShopPage = ({ products }) => {
	console.log(products);
	return (
		<div>
			<h1>Trang san pham</h1>
			{products.map((item) => (
				<div key={item.id}>
					<h2>{item.title}</h2>
				</div>
			))}
		</div>
	);
};

export default ShopPage;
