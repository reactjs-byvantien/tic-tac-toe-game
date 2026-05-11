import ReactDOM, { createRoot } from "react-dom/client";

import App from "./App.jsx";
import "./index.css";
import { StrictMode, createElement } from "react";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
// ReactDOM.createRoot(document.getElementById("root")).render(
//   createElement(StrictMode, null, createElement(App)),
// );
// createRoot(document.getElementById('root')).render(
//     <StrictMode>
//         <App />
//     </StrictMode>
// )
