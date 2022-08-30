import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./views/home/home";
import {AnimePage} from "./views/anime/anime";

/**
 * Example of another route
 * <Route path="blogs" element={<Blogss />} />
 *
 * To go to one of those pages use:
 * <Link to="/blogs">
 */
export const ROUTES = {
  animePage: `/anime/:id`
}

export const ROUTETO = {
  routeToAnime: (id:string) => `${ROUTES.animePage}`.replace(':id',id)
}


const App: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path={ROUTES.animePage} element={<AnimePage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
