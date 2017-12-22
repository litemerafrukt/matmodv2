import React from "react";
import { Sidebar } from "./Sidebar.js";

export const Page = ({ children }) => (
    <div className="app">
        <Sidebar />
        <main>
            <div className="container">{children}</div>
        </main>
    </div>
);
