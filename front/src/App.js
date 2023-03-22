
import {Routes, Route} from "react-router-dom"
import Layout from "./components/Layout";
import Create from "./page/Create";
import Detail from "./page/Detail";
import Edit from "./page/Edit";
import Home from "./page/Home";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { purple } from "@material-ui/core/colors";



const theme = createTheme({
  palette: {
    primary: {
      main: "#1C1C1C",

    },
    secondary: red
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 200,
  }
});



function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/detail/:id" element={<Detail />} />

      </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
