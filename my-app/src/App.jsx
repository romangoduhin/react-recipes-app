import './App.scss';
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/HomePage/HomePage";
import {Route, Routes} from "react-router-dom";
import RecipePage from "./pages/RecipePage/RecipePage";
import RecipesPage from "./pages/RecipesPage/RecipesPage";


function App() {
    return (
        <div className="App">
            <NavBar/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/recipes" element={<RecipesPage/>}/>
                <Route path="/recipe/:id" element={<RecipePage/>}/>
            </Routes>
        </div>
    );
}

export default App;
