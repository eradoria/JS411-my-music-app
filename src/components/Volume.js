import React, { useState, useEffect, Component } from "react";
import Box from "@mui/material/Box";
import { Slider } from "@mui/material";



export default function Volume(props) {
  const { state, setState } = props;
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Small steps"
        defaultValue={10}
        // getAriaValueText={valuetext}
        step={10}
        marks={true}
        min={0}
        max={100}
        valueLabelDisplay="auto"
      />
    </Box>
  );
}