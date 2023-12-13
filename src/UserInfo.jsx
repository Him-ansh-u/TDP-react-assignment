import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  CircularProgress,
  Table,
  TableBody,
  TableRow,
  TableCell,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
import DataBlock from "./components/DataBlock";
import { useEffect, useContext } from "react";
import Axios from "axios";

import { MdExpandMore } from "react-icons/md";
import { AppContext } from "./App";
const UserInfo = () => {
  const { data, setData } = useContext(AppContext);

  const sortData = (e) => {
    const value = e.target.value;

    let shouldSort;
    if (value === "sort") {
      setData(sortArrayByName(data));
    }
  };

  const sortArrayByName = (dataArray) => {
    return dataArray.slice().sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();

      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  };

  return (
    <Box width='100%'>
      <Box justifySelf='end' sx={{ width: "100%" }}>
        <FormControl sx={{ width: "150px" }}>
          <InputLabel sx={{ paddinga: 0 }}>Sort</InputLabel>
          <Select
            defaultValue='unsort'
            onChange={sortData}
            size='small'
            label='Sort By Name'>
            <MenuItem value='unsort'>Unsorted</MenuItem>
            <MenuItem value='sort'>Alphabetically</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box mt='10px'>
        {!data ? (
          <CircularProgress />
        ) : (
          data.map((item, key) => {
            return <DataBlock key={key} item={item} />;
          })
        )}
      </Box>
    </Box>
  );
};

export default UserInfo;
