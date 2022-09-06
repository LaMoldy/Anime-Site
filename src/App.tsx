import './App.css';

import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AnimePage } from './views/anime/anime';
import { Home } from './views/home/home';
import { RecommendationsPage } from './views/recommendationsPage/recommendationsPage';
import { RecommendedPage } from './views/recommendedPage/recommendedPage';
import { WatchlistPage } from './views/watchlist/watchlist';

export const ROUTES = {
    home: "/",
    animePage: `/anime/:id`,
    recommended: "/recommended",
    watchlist: "/watchlist",
    recommendations: "/recommendations/:id"
}

export const ROUTETO = {
    routeToAnime: (id:string) => `${ROUTES.animePage}`.replace(':id',id),
    routeToRecommendations: (id:string) => `${ROUTES.recommendations}`.replace(':id', id)
}


const App: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path={ROUTES.animePage} element={<AnimePage />} />
                <Route path={ROUTES.recommended} element={<RecommendedPage /> } />
                <Route path={ROUTES.recommendations} element={<RecommendationsPage />} />
                <Route path={ROUTES.watchlist} element={<WatchlistPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
