import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
	<>
		<App />
	</>
);

/**
 * JSX: JavaScript XML
 * - JSX là một phần mở rộng của JavaScript, nó cho phép chúng ta viết cú pháp HTML trong JavaScript.
 * - render chỉ nhận 1 thẻ duy nhất, nếu muốn render nhiều thẻ thì phải bọc trong 1 thẻ cha. (nên sử dụng fragment)
 * - Nhúng biểu thức JS trong JSX cần {}.
 * - Component luôn viết theo PascalCase.
 * - props = properties / Những thuộc tính.
 */
