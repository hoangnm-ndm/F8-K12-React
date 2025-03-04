import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
	<>
		<React.StrictMode>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</React.StrictMode>
	</>
);

/**
 * Bước 1: cài đặt react-router-dom
 * Bước 2: Bọc App bởi BrowserRouter
 * Bước 3: Trong App, return Routes
 * Bước 4: Điều hướng trong ứng dụng thì dùng NavLink và Link (to)
 *
 * - Notfound: path="*"
 */
