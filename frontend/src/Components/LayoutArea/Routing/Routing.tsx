import { Navigate, Route, Routes } from "react-router-dom";
import "./Routing.css";
import Home from "../../HomeArea/Home/Home";
import AuthMenu from "../../AuthArea/AuthMenu/AuthMenu";
import VacationList from "../../VacationsArea/VacationList/VacationList";
import Login from "../../AuthArea/Login/Login";
import CardInfo from "../../VacationsArea/CardInfo/CardInfo";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
			   <Routes>
               <Route path="/home" element={<Home />} />
               <Route path="/login" element={<Login/>} />
               <Route path="/auth" element={<AuthMenu />} />
               <Route path="/vacations" element={<VacationList />} />
               <Route path="/" element={<Navigate to="/home" />} />
               {/* <Route path="/cardInfo" element={<CardInfo/>} /> */}
               <Route path="/vacations/cardInfo/:vacationCode" element={<CardInfo/>} />
             
               </Routes>
            
        </div>
    );
}

export default Routing;
