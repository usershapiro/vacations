import { useNavigate } from "react-router-dom";
import "./Logout.css";
import { useEffect } from "react";
import authService from "../../../Services/AuthService";

function Logout(): JSX.Element {
    const navigate = useNavigate();

    useEffect(()=>{
        authService.logout();
        alert("bye bye")

        navigate("/home")
    })
    return (
       null
    );
}

export default Logout;
