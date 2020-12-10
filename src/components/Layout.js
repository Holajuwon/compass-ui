import React from "react";
import { ChakraProvider, Stack, DarkMode } from "@chakra-ui/react";
import { customTheme } from "../theme";
import Navbar from "./NavBar";
import Footer from "./Footer";

const App = (props) => {
  return (
    <ChakraProvider theme={customTheme}>
      <DarkMode />

      <Stack>
        <Stack minHeight="120%">
          <Navbar />
          <Stack align="center">{props.children}</Stack>
        </Stack>
        <Footer />
      </Stack>
    </ChakraProvider>
  );
};

export default App;
