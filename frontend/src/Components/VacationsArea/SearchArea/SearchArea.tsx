import { Box, Button, Checkbox, IconButton, Stack, TextField } from "@mui/material";
import "./SearchArea.css";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import VacationsModel from "../../../Models/VacationModel";



function SearchArea(): JSX.Element {
   
   

    return (
        
        <div className="SearchArea">
      <Stack direction="column" spacing={2}>
      <Button size="small" color="secondary">Followed Vacations</Button>
      <Button size="small" color="secondary">Current Vacations</Button>
      <Button size="small" color="secondary">Future Vacations</Button>
   </Stack>
      
        </div>
    );
}

export default SearchArea;
