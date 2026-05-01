"use client";

import Slider from "@mui/material/Slider";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

export default function Page() {
  const [timerMinutes, setTimerMinutes] = useState(1);
  const [taskInput, setTaskInput] = useState("");
  const [taskList, setTaskList] = useState(["task1", "task2", "task3"]);

  const handleSlider = (_event: Event, newValue: number) => {
    setTimerMinutes(newValue);
  };

  return (
    <div>
      <div className="flex ">
        <div className="bg-gray-200 w-3/4">
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
        <div className="flex bg-pink-300">
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
            }}
            value={taskInput}
            onChange={(event) => setTaskInput(event.target.value)}
          />
          <IconButton
            aria-label="add"
            color="primary"
            onClick={() => {
              setTaskList([...taskList, taskInput]);
            }}
          >
            <AddIcon sx={{}} />
          </IconButton>
        </div>
      </div>
    </div>
  );
}
