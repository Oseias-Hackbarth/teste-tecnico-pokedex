import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./Home/Home"
import { DetailsPokemon } from "./Details/Details"

export const AppRoutes = () => (
     <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/pokemon/:id' element={<DetailsPokemon />} />
        </Routes>
    </BrowserRouter>
)
