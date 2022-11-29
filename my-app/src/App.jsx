import './App.scss';
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import {Route, Routes, useLocation} from "react-router-dom";
import CurrentRecipe from "./pages/CurrentRecipe/CurrentRecipe";
import SearchedRecipes from "./pages/SearchedRecipes/SearchedRecipes";
import {useEffect, useState} from "react";
import SecondNavBar from "./components/SecondNavBar/SecondNavBar";
import PopularRecipes from "./pages/PopularRecipes/PopularRecipes";


function App() {
    const {pathname} = useLocation();

    const [isSwitched, setIsSwitched] = useState(false);

    useEffect(() => {
        if (pathname.includes('/recipes')) {
            setIsSwitched(true)
        } else {
            setIsSwitched(false)
        }
    }, [pathname]);

    return (
        <div className="App">
            {isSwitched ? <SecondNavBar/> : <NavBar/>}
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/recipes/popular" element={<PopularRecipes/>}/>
                <Route path="/recipes/search/:recipeName" element={<SearchedRecipes/>}/>
                <Route path="/recipe/:id" element={<CurrentRecipe/>}/>
            </Routes>
        </div>
    );
}

export default App;
