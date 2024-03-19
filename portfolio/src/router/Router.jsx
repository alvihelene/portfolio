import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mountains from "../components/background/Mountains";
import Navbar from "../nav/Navbar";

export default function Router() {
    return (
        <BrowserRouter> 
            <Navbar />
            <Mountains />
            
                <Routes>
                    <Route>

                    </Route>
                </Routes>
        </BrowserRouter>
    );
}