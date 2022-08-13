import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectQuality(props) {
  const {
    title,
    body,
    state,
    setState,
    component: Component,
    handlechange: handleChange,
  } = props;

  //   const [quality, setQuality] = React.useState("");

  //   const handleChange = (event) => {
  //     setQuality(event.target.value);
  //   };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Quality</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={state}
          onChange={handleChange}
          autoWidth
          label="Quality"
        >
          <MenuItem value={10}>Low</MenuItem>
          <MenuItem value={20}>Normal</MenuItem>
          <MenuItem value={30}>High</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
