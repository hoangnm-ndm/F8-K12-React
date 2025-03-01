import React from "react";
import "./Button.css";

const Button = (props) => {
	console.log(props);
	const variant = props.variant ? `btn-${props.variant}` : "";
	//btn-primary

	const size = props.size ? `btn-${props.size}` : "";
	return <button className={`btn ${variant} ${size}`}>{props.children}</button>;
};

export default Button;
