import Button from "../components/common/Button";
import style from "./HomePage.module.css";

function HomePage() {
	return (
		<div>
			<Button variant="primary" size="small">
				Click me
			</Button>
			<Button variant="secondary" size="big">
				Show more
			</Button>
			<Button variant="link">Login</Button>
		</div>
	);
}

export default HomePage;
