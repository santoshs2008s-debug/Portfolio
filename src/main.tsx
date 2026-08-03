
import ReactDOM from "react-dom/client";

import { ThemeProvider } from "./context/Themecontext";
import "./index.css";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <App/>
</ThemeProvider>
);