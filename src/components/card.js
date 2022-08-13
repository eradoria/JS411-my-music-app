import React, { useState, useEffect, Component } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";



export default function CustomCard(props) {
  const { title, body, state, setState, component: Component } = props;

  // useEffeect(() => {
  //     console.log(isToggled)
  // }, [isToggled])

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {props.title}
        </Typography>
        <div className="card-container"></div>
        <Typography variant="body2">{props.body}</Typography>
      </CardContent>
      <CardActions>
        {/* <Switch  defaultChecked onChange={() => props.setIsToggled(!props.isToggled)}/> */}
        <Component onChange={() => setState(!state)} />
      </CardActions>
    </Card>
  );
}
