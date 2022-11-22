import './App.scss';
import NavBar from "./components/NavBar/NavBar";
import MainPage from "./pages/MainPage/MainPage";
import {Route, Routes} from "react-router-dom";
import RecipePage from "./pages/RecipePage/RecipePage";

function App() {
    return (
        <div className="App">
            <NavBar/>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/recipe/:id" element={<RecipePage/>}/>
            </Routes>
        </div>
    );
}

export default App;
