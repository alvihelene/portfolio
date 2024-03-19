import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mountains from "../components/background/Mountains";
import Navbar from "../nav/Navbar";
import Hej from '../components/background/Hej';

export default function Router() {
    return (
        <BrowserRouter> 
            <Navbar />
            <Hej />
            <Mountains />
                <Routes>
                    <Route>

                    </Route>
                </Routes>
        </BrowserRouter>
    );
}