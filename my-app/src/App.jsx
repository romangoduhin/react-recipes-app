import './App.scss';
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/HomePage/HomePage";
import {Route, Routes, useLocation} from "react-router-dom";
import RecipePage from "./pages/RecipePage/RecipePage";
import SearchedRecipesPage from "./pages/SearchedRecipesPage/SearchedRecipesPage";
import {useEffect, useState} from "react";
import SecondNavBar from "./components/SecondNavBar/SecondNavBar";
import PopularRecipesPage from "./pages/PopularRecipesPage/PopularRecipesPage";


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
                <Route path="/" element={<HomePage/>}/>
                <Route path="/recipes/popular" element={<PopularRecipesPage/>}/>
                <Route path="/recipes/search/:recipeName" element={<SearchedRecipesPage/>}/>
                <Route path="/recipe/:id" element={<RecipePage/>}/>
            </Routes>
        </div>
    );
}

export default App;
