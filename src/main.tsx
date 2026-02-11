import {StrictMode} from "react";
import {createRoot} from 'react-dom/client'
import "./style/index.css";
import App from "./UserManual";
import {Analytics} from "@vercel/analytics/react";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App/>
        <Analytics/>
    </StrictMode>,
)
