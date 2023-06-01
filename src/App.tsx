import * as React from "react";
import { ChakraProvider, Box, theme, Text, Flex } from "@chakra-ui/react";
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
        <ColorModeSwitcher pr="35px" mt="2" />
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
          <ColorModeSwitcher pr="65px" mt={1} />
        </Box>
        {/* web & mobile design layout */}
        <Flex>
          <Router>
            <RouteCmp />
          </Router>
        </Flex>
        <Box m="auto">
          <Box mb={{ base: "0", md: "3" }}>
            <Footer />
          </Box>

          <Box mt="5" mb="3" display={{ base: "block", md: "none" }}>
            <Text>Built with ❤️ by Emmanuella ✨</Text>
          </Box>
        </Box>
      </Box>
    </Flex>
  </ChakraProvider>
);
