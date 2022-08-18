import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";



export default function CustomCard(props) {
  const { title, body, component: Component, isQuality, setQuality, isToggled, setIsToggled, isVolume, setVolume } = props;

  // useEffeect(() => {
  //     console.log(isToggled)
  // }, [isToggled])

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <div className="card-container"></div>
        <Typography variant="body2">{body}</Typography>
      </CardContent>
      <CardActions>
        {/* <Switch  defaultChecked onChange={() => props.setIsToggled(!props.isToggled)}/> */}
        {/* <Component onChange={() => setState(!state)} /> */}
        <Component isQuality = {isQuality} setQuality = {setQuality} isToggled = {isToggled} setIsToggled = {setIsToggled} isVolume = {isVolume} setVolume = {setVolume} />
      </CardActions>
    </Card>
  );
}
