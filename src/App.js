import React, { useEffect, useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import Header from "./components/header";
import Input from "./components/input";
import CustomCard from "./components/card";
import Volume from "./components/Volume";
import MusicQuality from "./components/soundQuality";
import Switchcontrol from "./components/Switch"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isToggled, setIsToggled] = useState(true);
  const [isVolume, setVolume] = useState("");

  const [isQuality, setQuality] = useState(20);

  // const handleVolumeChange = (event) => {
  //   let { value } = event.target;
  //   setVolume({ value });
  // };

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
                isToggled={isToggled}
                setIsToggled={setIsToggled}
                title="online Mode"
                body="application is connected to the internet"
                component={Switchcontrol}
              />

              <CustomCard
                state={isVolume}
                setState={setVolume}
                title="Master Volume"
                body="Overrides all other sound settings in the application"
                component={Volume}
              />

              <CustomCard
                isQuality={isQuality}
                setQuality={setQuality}
                title="Sound Quality"
                body="manually control the music quality in event of poor conenciton"
                component={MusicQuality}
              />
            </div>

            <h4>Systen Notificaiton</h4>
            {isToggled === false && (
              <span>
                Your application is offline. You won't be able to share or
                stream music to other devices.
              </span>
            )}
            {isVolume === "10" && (
              <span>
                Listening to music at a high volume could cause long-term
                hearing loss.
              </span>
            )}
            {isQuality === 10 && (
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
