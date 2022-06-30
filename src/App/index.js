// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { AppUI } from "./AppUI";
import { TodoProvider } from "../TodoContext";

function App() {
    return (
        <TodoProvider>
            <AppUI />
        </TodoProvider>
    );
}

export default App;