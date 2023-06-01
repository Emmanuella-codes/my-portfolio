import { Flex } from "@chakra-ui/react";
import ArticlesCmp from "../components/ArticlesCmp";
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
        <ArticlesCmp />
      </Flex>
    </>
  );
};

export default index;
