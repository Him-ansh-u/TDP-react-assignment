import { useTheme } from "@mui/material/styles";
import { useState, createContext, useEffect } from "react";
import { Box, CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import UserInfo from "./UserInfo";
import TimerApp from "./TimeApp";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import Axios from "axios";

export const AppContext = createContext();

function App() {
  const theme = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [open, setOpen] = useState(false);
  const [data, setData] = useState();
  const [searchText, setSearchText] = useState();
  useEffect(() => {
    getData();
  }, []);

  const getData = (text) => {
    Axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      if (!text) {
        setData(res.data);
      } else {
        setData(
          res.data.filter(
            (item) => item.name && item.name.toLowerCase().includes(text)
          )
        );
      }
    });
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Router>
        <CssBaseline />
        <AppContext.Provider
          value={{
            open,
            setOpen,
            isDarkMode,
            setIsDarkMode,
            data,
            setData,
            searchText,
            setSearchText,
            getData,
          }}>
          <Topbar />
          <Sidebar />
          <Box
            component='main'
            sx={{ flexGrow: 1, p: 0, mt: 9, opacity: open ? 0.5 : 1 }}>
            <Routes>
              <Route path='/' element={<UserInfo />} />
              <Route path='/time' element={<TimerApp />} />
            </Routes>
          </Box>
        </AppContext.Provider>
      </Router>
    </Box>
  );
}

export default App;
