import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./views/home/home";
import { AnimePage } from "./views/anime/anime";
import { RecommendedPage } from "./views/recommendedPage/recommendedPage";

export const ROUTES = {
    home: "/",
    animePage: `/anime/:id`,
    recommended: "/recommended",
    watchlist: "/watchlist"
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
                <Route path={ROUTES.recommended} element={<RecommendedPage /> } />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
