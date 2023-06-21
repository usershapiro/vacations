import {  Card, CardActionArea, CardMedia } from "@mui/material";
import "./VacationCard.css";

import VacationsModel from "../../../Models/VacationModel";

import { NavLink, useNavigate } from "react-router-dom";


interface VacationCardProps{
  vacation: VacationsModel;
}

function VacationCard(props: VacationCardProps): JSX.Element {
    return (
    
    <div className="VacationCard">
    
<NavLink to={"/vacations/cardInfo/" + props.vacation.vacationCode} >  

    <Card sx={{ maxWidth: 350 }}>
  <CardActionArea>
    <div style={{ position: 'relative' }}>
      <CardMedia
        component="img"
        height="350"
        image={require(`../../../Assests/vacations-images/${props.vacation.imageFile}`)}
        alt={props.vacation.destination}
        className="img"
      /> <span style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'rgba(0, 0, 0, 0.5)', color: '#fff', fontSize: '24px', padding: '10px' }}>{props.vacation.destination}</span>
      
    </div>
  </CardActionArea>
</Card>
    </NavLink>  
</div>

    );
    
}

export default VacationCard;
