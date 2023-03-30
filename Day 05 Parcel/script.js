import  { createRoot } from "react-dom/client";

console.log("first")
const container = <h1>Hello Parcel</h1>;

const root = createRoot(document.getElementById('root'))

root.render(container)