import ReactDOM, { createRoot } from "react-dom/client";

import App from "./App.jsx";
import "./index.css";
import { StrictMode } from "react";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
// createRoot(document.getElementById('root')).render(
//     <StrictMode>
//         <App />
//     </StrictMode>
// )
