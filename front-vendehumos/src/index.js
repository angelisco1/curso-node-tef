import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import SocketIO from 'socket.io-client';
import App from "./components/App";
import "./style.css";

export const socket = SocketIO('http://localhost:3000')

createRoot(document.getElementById("root")).render(<BrowserRouter><App /></BrowserRouter>);
