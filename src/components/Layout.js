import React from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { customTheme } from "../theme";
import Navbar from "./NavBar";
import Footer from "./Footer";

const App = (props) => {
  return (
    <ChakraProvider theme={customTheme}>
      <Box minH="100vh" bg="paper" color="ink" display="flex" flexDirection="column">
        <Navbar />
        <Box as="main" flex="1" w="full">
          {props.children}
        </Box>
        <Footer />
      </Box>
    </ChakraProvider>
  );
};

export default App;
