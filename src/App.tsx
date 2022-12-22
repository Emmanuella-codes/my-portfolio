import * as React from "react";
import { ChakraProvider, Box, theme, Flex } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import RouteCmp from "./routes";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import PageLayout from "./layout";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import theme from "./ColorModeSwitcher";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Flex
      flexDir={{ base: "column", md: "row" }}
      justifyContent={{ md: "space-between" }}
      margin="0 auto"
      w="full"
    >
      {/* navigation on small screen */}
      <Box
        display={{ base: "flex", md: "none" }}
        justifyContent="flex-end"
        mb="22px"
      >
        <Navbar />
        <ColorModeSwitcher pr="35px" />
      </Box>
      <Box display="flex">
        <PageLayout />
      </Box>
      <Box display="flex" flexDir="column">
        {/* navigation on medium screen */}
        <Box
          display={{ base: "none", md: "flex" }}
          justifyContent="flex-end"
          mb="22px"
        >
          <Navbar />
          <ColorModeSwitcher pr="65px" />
        </Box>
        {/* web & mobile design layout */}
        <Flex>
          <Router>
            <RouteCmp />
          </Router>
        </Flex>
        <Box
          display="flex"
          position={{ md: "fixed" }}
          bottom="0"
          right="18%"
          justifyContent="center"
          m="30px auto 20px"
        >
          <Footer />
        </Box>
      </Box>
    </Flex>
  </ChakraProvider>
);
