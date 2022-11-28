import './App.scss';
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/HomePage/HomePage";
import {Route, Routes, useLocation} from "react-router-dom";
import RecipePage from "./pages/RecipePage/RecipePage";
import RecipesPage from "./pages/RecipesPage/RecipesPage";
import {useEffect, useState} from "react";
import SecondNavBar from "./components/SecondNavBar/SecondNavBar";


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
                <Route path="/recipes" element={<RecipesPage/>}/>
                <Route path="/recipes/:recipeName" element={<RecipesPage/>}/>
                <Route path="/recipe/:id" element={<RecipePage/>}/>
            </Routes>
        </div>
    );
}

export default App;
