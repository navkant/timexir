"use client";

import Button from "@mui/material/Button";
import Slider from "@mui/material/Slider";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import CircularProgress from "@mui/material/CircularProgress";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import AddIcon from "@mui/icons-material/Add";
import { useState, useRef, useEffect } from "react";
import { useSound } from "react-sounds";

export default function Page() {
  const [isActive, setIsActive] = useState(false);
  const [timerMinutes, setTimerMinutes] = useState(1);
  const [secondsCount, setSecondsCount] = useState(0);
  const [progress, setProgress] = useState(0);
  const [taskInput, setTaskInput] = useState("");
  const [taskList, setTaskList] = useState(["task1", "task2", "task3"]);
  const [currentTask, setCurrentTask] = useState("");
  const intervalRef = useRef(null);
  const { play, pause, stop } = useSound("notification/success");

  useEffect(() => {
    if (isActive) {
      // @ts-ignore
      intervalRef.current = setInterval(() => {
        setSecondsCount((prev) => prev + 1);
      }, 1000);
    } else {
      // @ts-ignore
      clearInterval(intervalRef.current);
    }
    // @ts-ignore
    return () => clearInterval(intervalRef.current);
  }, [isActive]);

  useEffect(() => {
    const totalSeconds = timerMinutes * 60;
    const newProgress =
      totalSeconds > 0 ? (secondsCount / totalSeconds) * 100 : 0;
    setProgress(newProgress);
    if (totalSeconds === secondsCount && secondsCount !== 0) {
      // @ts-ignore
      clearInterval(intervalRef.current);
      play();
      setProgress(0);
      setSecondsCount(0);
      setIsActive(false);
    }
  }, [secondsCount, timerMinutes]);

  const handleSlider = (_event: Event, newValue: number) => {
    setTimerMinutes(newValue);
  };

  const handleStart = () => {
    // @ts-ignore
    if (isActive) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  };

  const handleReset = () => {
    // @ts-ignore
    setIsActive(false);
    setSecondsCount(0);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="">
        <div className="flex">
          <div className=" w-3/4 flex items-center justify-center h-full py-1 mx-4">
            <Slider
              onChange={handleSlider}
              aria-label="Controlled slider"
              defaultValue={25}
              value={timerMinutes}
              step={1}
              marks
              min={0}
              max={45}
              valueLabelDisplay="auto"
              sx={{}}
            />
          </div>
          <div className="flex ">
            <TextField
              id="filled-basic"
              label="Task"
              variant="filled"
              // size="small"
              sx={{
                width: "90%",
                "& .MuiInputBase-root": {
                  height: 40, // Sets the total height of the input area
                },
                borderRadius: 8,
              }}
              value={taskInput}
              onChange={(event) => setTaskInput(event.target.value)}
            />
            <IconButton
              aria-label="add"
              color="primary"
              onClick={() => {
                console.log("clicked");
                setTaskList([...taskList, taskInput]);
                setTaskInput("");
              }}
            >
              <AddIcon sx={{}} />
            </IconButton>
          </div>
        </div>
        <div className="relative m-2 p-2 mt-16 inline-flex justify-center items-center">
          <div className="flex items-center justify-center">
            {/* Background Track */}
            <CircularProgress
              variant="determinate"
              value={100}
              size={690}
              thickness={2}
              sx={{ color: "#e0e0e0" }}
            />
            {/* Actual Progress */}
            <CircularProgress
              variant="determinate"
              value={progress} // Current progress
              size={690}
              thickness={2}
              sx={{ position: "absolute" }}
            />
          </div>
          <div className="absolute flex-col flex  w-1/5 text-blue-600 ">
            <Select
              sx={{ bgcolor: "#E0F2FE", borderColor: "#2563eb" }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={currentTask}
              label="TASK"
              onChange={(event) => setCurrentTask(event.target.value)}
            >
              {taskList.map((element) => {
                return <MenuItem value={element}>{element}</MenuItem>;
              })}
            </Select>
            <Button
              onClick={handleStart}
              sx={{
                border: 1,
                margin: "4px",
                color: "#2563eb",
                bgcolor: "#E0F2FE",
              }}
              disabled={!currentTask}
            >
              {isActive ? "Stop" : "Start"}
            </Button>
            <Button
              onClick={handleReset}
              sx={{
                margin: "4px",
                color: "#2563eb",
                border: 1,
                bgcolor: "#E0F2FE",
              }}
            >
              Reset
            </Button>
            <div className="mx-2 px-6">
              <h3>{timerMinutes} mins</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
