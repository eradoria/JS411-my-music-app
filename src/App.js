import React, { useEffect, useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import light from "@mui/material/styles/createPalette";
import Header from "./components/header";
import Input from "./components/input";
import CustomCard from "./components/card";
import Volume from "./components/Volume";
import Switch from "@mui/material/Switch";
import Slider from "@mui/material/Slider";
import FormControl from "@mui/material/FormControl";
import SelectQuality from "./components/soundQuality";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
  const [isVolume, setVolume] = useState(true);
  const [isQuality, setQuality] = useState("");

  const handleChange = (event) => {
    setQuality(event.target.value);
  };

  const handleSliderChange = (event, newValue) => {
    setVolume(newValue);
  };

  // useEffeect(() => {
  //        console.log(isToggled)
  //   }, [isToggled])

  return (
    <main className="main">
      <Header title="My Music App" />
      <div className={`App`}>
        {isLoggedIn === false ? (
          <form class="form">
            <Input label="Username" />
            <Input type="password" label="Password" />
            <Button
              className="button"
              variant="contained"
              onClick={() => setIsLoggedIn(true)}
            >
              Login
            </Button>
          </form>
        ) : (
          <div className="dashboard-container">
            <h2>Welcome User!</h2>
            <div className="music-controls">
              <CustomCard
                state={isToggled}
                setState={setIsToggled}
                title="online Mode"
                body="application is connected to the internet"
                component={Switch}
              />

              <CustomCard
                state={isVolume}
                setState={setVolume}
                title="Master Volume"
                body="Overrides all other sound settings in the application"
                component={Volume}
                onChange={handleSliderChange}
              />

              <br></br>
              <br></br>
              <br></br>

              <CustomCard
                state={isQuality}
                setState={setQuality}
                title="Sound Quality"
                body="manually control the music quality in event of poor conenciton"
                component={SelectQuality}
                onchange={handleChange}
              />
            </div>

            <h4>Systen Notificaiton</h4>
            {isToggled === false && (
              <span>
                Your application is offline. You won't be able to share or
                stream music to other devices.
              </span>
            )}
            {isVolume === "" && (
              <span>
                Listening to music at a high volume could cause long-term
                hearing loss.
              </span>
            )}
            {isQuality === "10" && (
              <span>
                Music quality is degraded. Increase quality if your connection
                allows it.
              </span>
            )}
          </div>
        )}
      </div>
    </main>
  );
}

export default App;
