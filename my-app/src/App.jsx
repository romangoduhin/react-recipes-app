import './App.scss';
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import CurrentRecipe from "./pages/CurrentRecipe/CurrentRecipe";
import SearchedRecipes from "./pages/SearchedRecipes/SearchedRecipes";
import SecondNavBar from "./components/SecondNavBar/SecondNavBar";
import PopularRecipes from "./pages/PopularRecipes/PopularRecipes";
import Auth from "./pages/Auth/Auth";
import {withAuthRedirect} from "./hoc/withAuthRedirect";


function App() {
    const {pathname} = useLocation();

    return (
        <div className="App">
            {pathname !== '/auth' ? pathname !== '/' ? <SecondNavBar/> : <NavBar/> : undefined}
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/auth" element={<Auth/>}/>
                <Route path="/recipes/popular" element={<PopularRecipes/>}/>
                <Route path="/recipes/search/:query" element={<SearchedRecipes/>}/>
                <Route path="/recipe/:id" element={<CurrentRecipe/>}/>
                <Route path="*" element={<Navigate to="/" replace />}/>
            </Routes>
        </div>
    );
}

export default withAuthRedirect(App);
