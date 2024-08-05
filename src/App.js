import React from "react";
import Notebook from "./pages/Notebook.js";
import LandingScreen from "./pages/LandingScreen.js";
import Navbar from './components/Navbar.js'
import {
  ChakraBaseProvider,
  extendBaseTheme,
  theme as chakraTheme,
} from "@chakra-ui/react";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";

const { Button } = chakraTheme.components;

const theme = extendBaseTheme({
  components: {
    Button,
  },
});

const App = () => {
  return (
    <ChakraBaseProvider theme={theme}>
      <Router>
        <Navbar/>
        <Routes>
        <Route path="/" element={<LandingScreen />} />
        <Route path="/notebook" element={<Notebook />} />
        </Routes>
      </Router>
    </ChakraBaseProvider>
  );
};

export default App;
