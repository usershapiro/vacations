import {  Box, Card, CardActionArea, CardContent, CardMedia, IconButton, Rating, Typography } from "@mui/material";
import "./CardInfo.css";
import { NavLink, useNavigate, useParams } from "react-router-dom";

import VacationsModel from "../../../Models/VacationModel";
import { useEffect, useState } from "react";
import vacationsService from "../../../Services/VactionsService";
import React from "react";
import { FavoriteBorder } from "@mui/icons-material";

function CardInfo(): JSX.Element {

    const params = useParams();
    const [vacation, setVacation] = useState<VacationsModel>();
    const navigate = useNavigate();
    const [value, setValue] = React.useState<number | null>(2);

  
  
    useEffect(() => {
        const vacationCode = + params.vacationCode; // prodId must be same name as declared in the routing! 
        vacationsService.getVacationByCode(vacationCode)
            .then((vacation) => {setVacation(vacation)
             console.log("vacation info "+ vacation )

            })
            .catch(err => alert(err));
    }, []);
 
 

    return (
        <div className="CardInfo">

         {vacation && 
         <>
       <CardMedia
        component="img"
        height="350"
        image={require(`../../../Assests/vacations-images/${vacation.imageFile}`)}
        alt={vacation.destination}
        className="img"
        
      />  
		<Card sx={{ maxWidth: 800
       
  }}
    className="card"
    
    >
      
          <CardContent
          className="info"
          > 

         <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }} className="follow">
      <IconButton
    
       >
        <FavoriteBorder  />
      </IconButton>
      </Box>
            <h1>{vacation.destination}</h1>
          <Typography gutterBottom variant="h5" className="description" component="div">
          {vacation.description}
          </Typography>
          
        </CardContent>

        <CardContent
          className="info"
          >
          
          <Typography gutterBottom variant="h5" component="div" className="date">
             {vacation.startDate}➖{vacation.endDate}
             
          </Typography>
          
          <Typography gutterBottom variant="h5" component="div" className="price">
           price: {vacation.price}$
          </Typography>
        
          <Typography variant="body2" color="text.secondary">
          <div className="price"></div>
           <Typography component="legend">Rating</Typography>
      <Rating name="read-only" value={value} readOnly />
          </Typography>
        </CardContent>
      
    </Card>	
         </>
         }

   
        </div>
    );
}

export default CardInfo;



