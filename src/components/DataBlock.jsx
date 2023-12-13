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
import { MdExpandMore } from "react-icons/md";
const DataBlock = (props) => {
  return (
    <Accordion sx={{ backgroundColor: "#f0f0f0", marginTop: "5px" }}>
      <AccordionSummary
        expandIcon={<MdExpandMore />}
        aria-controls='panel1a-content'
        id='panel1a-header'>
        <Typography>{props.item.name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Table sx={{ minWidth: 650 }} size='small' aria-label='a dense table'>
          <TableBody>
            <TableRow>
              <TableCell align='right'>Username</TableCell>
              <TableCell align='right'>{props.item.username}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='right'>Email</TableCell>
              <TableCell align='right'>{props.item.email}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='right'>Address</TableCell>
              <TableCell align='right'>
                {props.item.address.suite +
                  " " +
                  props.item.address.street +
                  " " +
                  props.item.address.city +
                  " " +
                  props.item.address.zipcode}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='right'>Phone</TableCell>
              <TableCell align='right'>{props.item.phone}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='right'>Website</TableCell>
              <TableCell align='right'>{props.item.website}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </AccordionDetails>
    </Accordion>
  );
};
export default DataBlock;
