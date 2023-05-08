import {createRoot} from "react-dom/client";
import Container from "./Container.jsx";

const root = createRoot(document.querySelector("#root"));
root.render(<Container/>);