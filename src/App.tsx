import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./views/home/home";

/**
 * Example of another route
 * <Route path="blogs" element={<Blogss />} />
 *
 * To go to one of those pages use:
 * <Link to="/blogs">
 */


const App: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
