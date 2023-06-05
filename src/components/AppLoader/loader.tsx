import { Box, Flex } from "@chakra-ui/react";
import "../styles/loader.css";

const Loader = () => {
  return (
    <Flex p={"20px 0"} className="loader">
      <Box className="justify-content-center jimu-primary-loading"></Box>
    </Flex>
  );
};

export default Loader;
