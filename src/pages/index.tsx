import { Flex } from "@chakra-ui/react";
import Articles from "../components/Articles";
import AboutMe from "../components/AboutMe";

const index = () => {
  return (
    <>
      <Flex
        flexDir="column"
        alignItems="center"
        maxW={{ md: "50vw" }}
        m={{ md: "0 auto" }}
        mt={{ base: "30px" }}
      >
        <AboutMe />
        <Articles />
      </Flex>
    </>
  );
};

export default index;
