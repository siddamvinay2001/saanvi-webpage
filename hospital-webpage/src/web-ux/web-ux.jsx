import Homepage from "./pages/home-page/home-page";
import FacilitiesPage from "./pages/facilities-page/facilities-page";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Webux (){
    return (
        <div>
         <BrowserRouter>
            <Routes>
                <Route  path="*" element ={<Homepage/>} />
                <Route exact path="/facilities" element ={<FacilitiesPage/>} />
            </Routes>
         </BrowserRouter>
        </div>
    )
}

