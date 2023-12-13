import { useState, useEffect } from "react";
import {
  Typography,
  Box,
  IconButton,
  TextField,
  Button,
  Snackbar,
} from "@mui/material";
import { RiRestartLine } from "react-icons/ri";
import { FaPlay } from "react-icons/fa";
import { AiOutlinePause } from "react-icons/ai";
import { HoverIconButton } from "./components/Components";

const TimerApp = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isSnackVisible, setIsSnackVisible] = useState(false);
  useEffect(() => {
    let interval;

    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else if (isActive && seconds === 0) {
      setIsActive(false);
      setIsSnackVisible(true);
    }

    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const setTimer = (e) => {
    e.preventDefault();
    const inputSeconds =
      parseInt(e.target.min.value) * 60 + parseInt(e.target.sec.value);
    if (!isActive) {
      setSeconds(inputSeconds);
      setIsActive(true);
    }
  };

  const handleStartStop = () => {
    setIsActive((prevIsActive) => !prevIsActive);
  };

  const handleReset = () => {
    setIsActive(false);
    setSeconds(0);
  };

  return (
    <Box>
      <Box>
        <Box padding='20px' display='flex' justifyContent='center'>
          <Typography fontSize='4rem'>
            {Math.floor(seconds / 60)}:
            {(seconds % 60).toString().padStart(2, "0")}
          </Typography>
        </Box>
      </Box>
      <Box>
        <form onSubmit={setTimer}>
          <Box>
            <TextField
              label='MM'
              variant='outlined'
              type='number'
              size='small'
              name='min'
              inputProps={{
                min: 0,
                max: 60,
                step: 1,
              }}
            />
            <Typography fontSize='1.5rem' variant='span'>
              :
            </Typography>
            <TextField
              label='SS '
              variant='outlined'
              type='number'
              size='small'
              name='sec'
              inputProps={{
                min: 0,
                max: 60,
                step: 1,
              }}
            />
          </Box>

          <HoverIconButton
            sx={{ marginTop: "20px" }}
            variant='outlined'
            type='submit'>
            {!isActive && <FaPlay />}
          </HoverIconButton>
        </form>
      </Box>
      <Box
        position='absolute'
        mt={isActive ? "-17px" : "-40px"}
        ml={isActive ? "0" : "40px"}>
        {isActive && (
          <HoverIconButton onClick={handleStartStop}>
            {isActive && <AiOutlinePause />}
          </HoverIconButton>
        )}
        <HoverIconButton onClick={handleReset}>
          <RiRestartLine />
        </HoverIconButton>
      </Box>
      {
        <Snackbar
          open={isSnackVisible}
          autoHideDuration={5000}
          onClose={() => setIsSnackVisible(false)}
          message='Timer Completed'
        />
      }
    </Box>
  );
};

export default TimerApp;
