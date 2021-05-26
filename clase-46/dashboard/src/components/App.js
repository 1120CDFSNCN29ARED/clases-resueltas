import React from "react";
import SideBar from "./SideBar";
import ContentWrapper from "./ContentWrapper";

import { BrowserRouter } from "react-router-dom";

function App() {
    return (
        <div id="wrapper">
            <BrowserRouter>
                <SideBar />
                <ContentWrapper />
            </BrowserRouter>
        </div>
    );
}

export default App;
