import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CircularProgress from "@mui/material/CircularProgress";
import { Box, display } from "@mui/system";
import { useEffect, useState, useRef } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `${value}°C`;
}

const Body = () => {
  const audioUrl = new URL("../sound.mp3", import.meta.url);
  const soundRef = useRef(new Audio(audioUrl));

  const [isActive, setIsActive] = useState(false);
  const [timerMinutes, setTimerMinutes] = useState(1);
  const [secondsCount, setSecondsCount] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    console.log("use effect called");
    if (isActive) {
      intervalRef.current = setInterval(() => {
        setSecondsCount((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isActive]);

  useEffect(() => {
    const totalSeconds = timerMinutes * 60;
    const newProgress =
      totalSeconds > 0 ? (secondsCount / totalSeconds) * 100 : 0;
    setProgress(newProgress);
    if (totalSeconds === secondsCount && secondsCount !== 0) {
      clearInterval(intervalRef.current);
      soundRef.current.play();
      setProgress(0);
    }
  }, [secondsCount, timerMinutes]);

  const handleClick = () => {
    soundRef.current.pause();
    soundRef.current.currentTime = 0;
    if (isActive) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  };

  const handleReset = () => {
    soundRef.current.pause();
    soundRef.current.currentTime = 0;
    setIsActive(false);
    setSecondsCount(0);
  };

  const handleSlider = (event, newValue) => {
    setTimerMinutes(newValue);
  };

  return (
    <Container
      sx={{
        px: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          bgcolor: "#8c1dce",
          color: "white",
        }}
      >
        <Box sx={{ px: 2 }}>
          <h1>TIMEXIR</h1>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "items-center",
            padding: "8px",
          }}
        >
          <Box sx={{ px: 4 }}>
            {" "}
            <h3>About Us</h3>{" "}
          </Box>
          <Box sx={{ px: 4 }}>
            <h3>Account</h3>
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Slider
          onChange={handleSlider}
          aria-label="Controlled slider"
          defaultValue={25}
          value={timerMinutes}
          getAriaValueText={valuetext}
          step={1}
          marks
          min={0}
          max={45}
          valueLabelDisplay="auto"
          sx={{
            width: "50%",
            my: 4,
          }}
        />
      </Box>
      <Box
        sx={{
          position: "relative",
          display: "inline-flex",
          // margin: "128px",
          padding: "16px",
          mx: 12,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Background Track */}
        <CircularProgress
          variant="determinate"
          value={100}
          size={800}
          thickness={3}
          sx={{ color: "#e0e0e0" }}
        />
        {/* Actual Progress */}
        <CircularProgress
          variant="determinate"
          value={progress} // Current progress
          size={800}
          thickness={3}
          sx={{ position: "absolute" }}
        />
        <Box
          sx={{
            position: "absolute",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Button onClick={handleClick} sx={{ bgcolor: "cyan", margin: "4px" }}>
            {isActive ? "Stop" : "Start"}
          </Button>
          <Button onClick={handleReset} sx={{ bgcolor: "cyan", margin: "4px" }}>
            Reset
          </Button>
          <Box
            sx={{
              color: "purple",
              mx: 4,
              px: 2,

              minWidth: "120px",
              textAlign: "center",
            }}
          >
            <h3>{timerMinutes} mins</h3>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Body;
