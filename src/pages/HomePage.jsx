import style from "./HomePage.module.css";

function HomePage() {
	console.log(style);
	return (
		<div>
			<h1 style={{ backgroundColor: "red", color: "blue" }}>Home Page</h1>
			{/* style inline in React */}
			<p className={style.desc}>Day la trang chu của F8 </p>
			<p>Day la trang chu của F8 </p>
			<p>Day la trang chu của F8 </p>
			<p>Day la trang chu của F8 </p>
			<section id={style.heroSection}>abc</section>
			{/* không nên dùng cách này để style vì sai nguyên tắc về id */}
		</div>
	);
}

export default HomePage;
